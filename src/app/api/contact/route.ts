import { NextResponse } from "next/server";

const contactEmail = "tfstephens2005@gmail.com";
const formSubmitEndpoint = `https://formsubmit.co/ajax/${contactEmail}`;

type ContactRequest = {
  name?: string;
  email?: string;
  message?: string;
  website?: string;
};

type ProviderMessage = {
  message?: string;
  error?: string;
  success?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getProviderMessage(body: string, parsedBody: ProviderMessage | null) {
  return parsedBody?.message ?? parsedBody?.error ?? parsedBody?.success ?? body.trim();
}

export async function POST(request: Request) {
  let payload: ContactRequest;

  try {
    payload = (await request.json()) as ContactRequest;
  } catch {
    return NextResponse.json({ error: "Invalid contact request." }, { status: 400 });
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const message = payload.message?.trim() ?? "";
  const website = payload.website?.trim() ?? "";

  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Please fill in your name, email, and message." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  try {
    const formData = {
      name,
      email,
      _replyto: email,
      message,
      _subject: `Portfolio enquiry from ${name}`,
      _template: "table",
      _captcha: "false",
      source: "Tega Stephens portfolio website",
    };

    const response = await fetch(formSubmitEndpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const responseBody = await response.text();
    const result = (() => {
      try {
        return JSON.parse(responseBody) as ProviderMessage;
      } catch {
        return null;
      }
    })();
    const providerMessage = getProviderMessage(responseBody, result);

    if (!response.ok) {
      if (process.env.NODE_ENV !== "production") {
        console.error("FormSubmit rejected the contact request", {
          status: response.status,
          statusText: response.statusText,
          providerMessage,
        });
      }

      return NextResponse.json(
        {
          error: providerMessage
            ? `FormSubmit rejected the message: ${providerMessage}`
            : "FormSubmit rejected the message. Check the destination inbox for the activation email, then try again.",
          providerStatus: response.status,
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown provider error";

    if (process.env.NODE_ENV !== "production") {
      console.error("FormSubmit contact request failed", { message });
    }

    return NextResponse.json(
      {
        error: `The message service could not be reached: ${message}. Please try again or email ${contactEmail} directly.`,
      },
      { status: 502 },
    );
  }
}

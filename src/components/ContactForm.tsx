"use client";

import { ChangeEvent, FormEvent, useState } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const initialFormData: FormData = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setSubmitError("");

    try {
      const response = await fetch("https://formsubmit.co/tfstephens2005@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage("Message sent successfully. I will get back to you soon.");
        setFormData(initialFormData);
        window.setTimeout(() => setSubmitMessage(""), 5000);
      } else {
        setSubmitError("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError("Error sending message. Please try emailing me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="kinetic-card glass-panel-strong rounded-lg p-5 sm:p-7">
      <div className="mb-7 flex flex-col gap-3 border-b border-(--line) pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-xs text-(--muted-fg)">DIRECT BRIEF</p>
          <h3 className="mt-2 text-2xl font-semibold text-(--page-fg)">Send the idea</h3>
        </div>
        <p className="max-w-xs text-sm leading-6 text-(--muted-fg)">
          Tell me what you are building, where it is stuck, or what needs to feel sharper.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="group block">
            <span className="mb-2 block text-sm font-medium text-(--page-fg)">Name</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-(--line) bg-white/70 px-4 py-3 text-(--page-fg) outline-none transition placeholder:text-(--muted-fg) focus:border-[#0f8f83] focus:ring-4 focus:ring-[#0f8f83]/15 dark:bg-white/4 dark:focus:border-[#3fd4c5]"
              placeholder="Your name"
            />
          </label>

          <label className="group block">
            <span className="mb-2 block text-sm font-medium text-(--page-fg)">Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-(--line) bg-white/70 px-4 py-3 text-(--page-fg) outline-none transition placeholder:text-(--muted-fg) focus:border-[#0f8f83] focus:ring-4 focus:ring-[#0f8f83]/15 dark:bg-white/4 dark:focus:border-[#3fd4c5]"
              placeholder="you@example.com"
            />
          </label>
        </div>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-(--page-fg)">Message</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full resize-none rounded-lg border border-(--line) bg-white/70 px-4 py-3 text-(--page-fg) outline-none transition placeholder:text-(--muted-fg) focus:border-[#0f8f83] focus:ring-4 focus:ring-[#0f8f83]/15 dark:bg-white/4 dark:focus:border-[#3fd4c5]"
            placeholder="What are we making premium?"
          />
        </label>

        {submitMessage && (
          <div className="rounded-lg border border-[#0f8f83]/30 bg-[#0f8f83]/10 p-3 text-sm text-[#09675f] dark:text-[#7ee7dd]">
            {submitMessage}
          </div>
        )}

        {submitError && (
          <div className="rounded-lg border border-[#b6345f]/30 bg-[#b6345f]/10 p-3 text-sm text-[#8b2144] dark:text-[#ff9fbb]">
            {submitError}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="kinetic-card inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#15110d] px-5 py-4 text-sm font-semibold text-[#f6efe4] transition hover:-translate-y-0.5 hover:bg-[#0f8f83] disabled:cursor-not-allowed disabled:opacity-55 dark:bg-[#f6efe4] dark:text-[#15110d] dark:hover:bg-[#3fd4c5]"
        >
          {isSubmitting ? "Sending..." : "Send message"}
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M5 12h14" strokeLinecap="round" />
            <path d="m13 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </form>
    </div>
  );
}

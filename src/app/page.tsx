import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import SideDrawer from "@/components/SideDrawer";
import ThemeToggle from "@/components/ThemeToggle";

const whatsappHref =
  "https://wa.me/2349123442788?text=Hello%20I%20am%20interested%20in%20your%20services";

const navLinks = [
  { href: "#about", label: "About", kicker: "Origin" },
  { href: "#skills", label: "Stack", kicker: "Tools" },
  { href: "#services", label: "Services", kicker: "Offer" },
  { href: "#contact-form", label: "Contact", kicker: "Brief" },
];

const metrics = [
  { value: "3+", label: "Years building" },
  { value: "Full", label: "Stack delivery" },
  { value: "Lagos", label: "Nigeria" },
];

const skillGroups = [
  {
    title: "Languages",
    tone: "text-[#e1a15f]",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    title: "Frameworks",
    tone: "text-[#3fd4c5]",
    skills: ["React", "Next.js", "Tailwind CSS", "React Native"],
  },
  {
    title: "Tools",
    tone: "text-[#e1698f]",
    skills: ["Figma", "Git / GitHub", "npm", "Vercel"],
  },
  {
    title: "Databases",
    tone: "text-[#77d18c]",
    skills: ["MongoDB", "PostgreSQL"],
  },
];

const services = [
  {
    title: "Web Development",
    description:
      "Responsive websites with React and Next.js, focused on performance, clarity, and a polished user journey.",
  },
  {
    title: "Custom Solutions",
    description:
      "Tailor-made web apps and integrations that solve business needs and make workflows feel lighter.",
  },
  {
    title: "UI/UX Design",
    description:
      "Intuitive interfaces and premium product flows shaped in Figma and carried through to the final build.",
  },
];

const socials = [
  { label: "Email", href: "mailto:tfstephens2005@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/tega-stephens-03170a291" },
  { label: "GitHub", href: "https://github.com/Stephens-Tega" },
];

const footerMeta = ["Lagos, Nigeria", "Full-stack developer", "Next.js 16"];

function ArrowIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 12h14" strokeLinecap="round" />
      <path d="m13 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="m8 9-4 3 4 3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m16 9 4 3-4 3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m14 5-4 14" strokeLinecap="round" />
    </svg>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto min-w-0 w-full max-w-[520px] reveal-up reveal-up-delay-2 2xl:mx-0">
      <div className="hero-grid soft-pulse glass-panel-strong relative min-h-[480px] min-w-0 overflow-hidden rounded-lg p-4 sm:min-h-[520px] sm:p-5">
        <div className="scan-line pointer-events-none absolute left-0 top-0 h-24 w-full bg-linear-to-b from-[#3fd4c5]/0 via-[#3fd4c5]/14 to-[#3fd4c5]/0" />
        <div className="flex items-center justify-between border-b border-(--line) pb-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#e1698f]" />
            <span className="h-3 w-3 rounded-full bg-[#e1a15f]" />
            <span className="h-3 w-3 rounded-full bg-[#3fd4c5]" />
          </div>
          <span className="font-mono text-xs text-(--muted-fg)">portfolio.kernel</span>
        </div>

          <div className="mt-5 grid gap-4">
          <div className="kinetic-card interface-card rounded-lg border border-(--line) bg-[#070706]/80 p-4 text-[#f6efe4] shadow-2xl dark:bg-[#070706]/80">
            <div className="flex items-center justify-between">
              <p className="font-mono text-xs text-[#a9fff5]">LIVE SYSTEM</p>
              <span className="rounded-full border border-[#3fd4c5]/35 px-3 py-1 text-xs text-[#a9fff5]">Available</span>
            </div>
            <div className="mt-5 grid grid-cols-[1fr_auto] gap-4">
              <div>
                <p className="text-3xl font-semibold">Premium web experiences</p>
                <p className="mt-3 text-sm leading-6 text-[#c6bcb0]">
                  Interfaces that feel fast, intentional, and built for real users.
                </p>
              </div>
              <div className="flex h-20 w-20 items-center justify-center rounded-lg border border-[#3fd4c5]/25 bg-[#3fd4c5]/10">
                <CodeIcon />
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="kinetic-card interface-card rounded-lg border border-(--line) bg-white/78 p-4 dark:bg-white/6">
              <p className="font-mono text-xs text-(--muted-fg)">STACK</p>
              <div className="mt-4 space-y-3">
                {["React", "Next.js", "TypeScript"].map((item) => (
                  <div key={item} className="flex items-center justify-between gap-3">
                    <span className="text-sm text-(--page-fg)">{item}</span>
                    <span className="h-2 w-24 rounded-full bg-[#3fd4c5]/20">
                      <span className="block h-2 rounded-full bg-[#3fd4c5]" style={{ width: item === "React" ? "92%" : item === "Next.js" ? "88%" : "82%" }} />
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="kinetic-card interface-card rounded-lg border border-(--line) bg-white/78 p-4 dark:bg-white/6">
              <p className="font-mono text-xs text-(--muted-fg)">FOCUS</p>
              <div className="mt-4 space-y-2 text-sm text-(--page-fg)">
                <p>Performance first</p>
                <p>Clean product flow</p>
                <p>Scalable frontends</p>
              </div>
            </div>
          </div>

          <div className="min-w-0 overflow-hidden rounded-lg border border-(--line) bg-[#15110d] py-3 text-[#f6efe4]">
            <div className="ticker-track flex w-max gap-8 whitespace-nowrap font-mono text-xs">
              {Array.from({ length: 2 }).map((_, index) => (
                <div key={index} className="flex gap-8">
                  <span>React Native</span>
                  <span>MongoDB</span>
                  <span>PostgreSQL</span>
                  <span>Figma</span>
                  <span>Vercel</span>
                  <span>Tailwind CSS</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center reveal-up">
      <p className="font-mono text-xs text-(--accent)">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold text-(--page-fg) sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-(--muted-fg)">{children}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="premium-shell min-h-screen text-(--page-fg)">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-(--line) bg-[#f5f0e8]/80 backdrop-blur-xl dark:bg-[#080806]/78">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="group inline-flex min-w-0 items-center gap-3" aria-label="Tega Stephens home">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-(--line) bg-[#15110d] text-[#f6efe4] transition group-hover:-translate-y-0.5 dark:bg-[#f6efe4] dark:text-[#15110d]">
              TS
            </span>
            <span className="leading-tight">
              <span className="block truncate text-sm font-semibold text-(--page-fg)">Tega Stephens</span>
              <span className="block truncate font-mono text-xs text-(--muted-fg)">full-stack developer</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm text-(--muted-fg) transition hover:bg-black/4 hover:text-(--page-fg) dark:hover:bg-white/6"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-lg bg-[#15110d] px-4 py-3 text-sm font-semibold text-[#f6efe4] transition hover:-translate-y-0.5 hover:bg-[#0f8f83] md:inline-flex dark:bg-[#f6efe4] dark:text-[#15110d] dark:hover:bg-[#3fd4c5]"
            >
              Start a project
              <ArrowIcon />
            </a>
            <SideDrawer links={navLinks} contactHref={whatsappHref} />
          </div>
        </div>
      </header>

      <section className="hero-aurora relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-24 lg:pt-36">
        <div className="mx-auto grid max-w-7xl min-w-0 items-center gap-12 2xl:grid-cols-[1.08fr_0.92fr]">
          <div className="hero-copy-safe w-full min-w-0">
            <div className="reveal-up flex w-full max-w-full items-center gap-3 rounded-full border border-(--line) bg-white/60 px-4 py-2 text-sm text-(--muted-fg) dark:bg-white/4 sm:inline-flex sm:w-auto">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#3fd4c5]" />
              <span className="min-w-0 leading-6">Lagos based. Building for the web and mobile.</span>
            </div>
            <h1 className="reveal-up reveal-up-delay-1 mt-8 text-4xl font-semibold leading-[1.04] text-(--page-fg) sm:text-6xl lg:text-6xl 2xl:text-7xl">
              Tega Stephens builds digital products with <span className="premium-gradient-text">premium feel.</span>
            </h1>
            <p className="reveal-up reveal-up-delay-2 mt-7 text-base leading-8 text-(--muted-fg) sm:max-w-2xl sm:text-xl">
              Full-stack developer crafting innovative web and mobile solutions with React, Next.js, and modern tools.
              I turn ideas into scalable, user-focused experiences.
            </p>
            <div className="reveal-up reveal-up-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="kinetic-card inline-flex items-center justify-center gap-2 rounded-lg bg-[#f6efe4] px-5 py-4 text-sm font-semibold text-[#15110d] shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-white dark:bg-[#f6efe4]"
              >
                Get in touch
                <ArrowIcon />
              </a>
              <Link
                href="#about"
                className="kinetic-card inline-flex items-center justify-center gap-2 rounded-lg border border-(--line) bg-white/50 px-5 py-4 text-sm font-semibold text-(--page-fg) transition hover:-translate-y-0.5 hover:border-[#0f8f83]/60 dark:bg-white/4 dark:hover:border-[#3fd4c5]/70"
              >
                Explore the work
                <ArrowIcon />
              </Link>
            </div>

            <div className="reveal-up reveal-up-delay-3 mt-12 grid gap-3 sm:grid-cols-3">
                {metrics.map((metric) => (
                <div key={metric.label} className="kinetic-card glass-panel rounded-lg p-4">
                  <p className="text-2xl font-semibold text-(--page-fg)">{metric.value}</p>
                  <p className="mt-1 text-sm text-(--muted-fg)">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <HeroVisual />
        </div>
      </section>

      <section id="about" className="section-rule px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="reveal-up">
            <p className="font-mono text-xs text-(--accent)">ABOUT</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">A builder who cares about the feeling of the product.</h2>
          </div>
          <div className="kinetic-card glass-panel rounded-lg p-5 sm:p-7">
            <div className="grid gap-6 text-base leading-8 text-(--muted-fg) md:grid-cols-2">
              <p>
                As a passionate full-stack developer with 3+ years of experience, I specialize in building dynamic,
                performant applications that solve real-world problems. From intuitive UIs to robust backends, I thrive
                on creating seamless experiences that users love.
              </p>
              <p>
                My journey started with vanilla web tech and evolved into React ecosystems, where I have shipped mobile
                apps with React Native and full sites with Next.js. I care about clean code, scalability, and staying
                sharp with TypeScript and flexible data tools.
              </p>
            </div>
            <div className="mt-7 rounded-lg border border-(--line) bg-black/3 p-5 dark:bg-white/4">
              <p className="text-lg font-medium text-(--page-fg)">
                When not coding, you will find me exploring new tech stacks or contributing to open source. Always
                learning, always building.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="TECH STACK" title="The tools behind the finish.">
          Technologies I use to build performant, accessible, and maintainable web apps.
        </SectionHeader>

        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <div key={group.title} className="kinetic-card premium-hover glass-panel rounded-lg p-5 reveal-up" style={{ animationDelay: `${index * 90}ms` }}>
              <div className="mb-7 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-(--page-fg)">{group.title}</h3>
                <span className={`font-mono text-sm ${group.tone}`}>0{index + 1}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-(--line) bg-white/55 px-3 py-2 text-sm text-(--page-fg) dark:bg-white/4"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="SERVICES" title="Premium execution without the noise.">
          Clean interfaces, useful systems, and design-aware engineering for founders, teams, and operators.
        </SectionHeader>

        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.title} className="kinetic-card premium-hover glass-panel rounded-lg p-6 reveal-up" style={{ animationDelay: `${index * 120}ms` }}>
              <p className="font-mono text-xs text-(--accent)">0{index + 1}</p>
              <h3 className="mt-8 text-2xl font-semibold text-(--page-fg)">{service.title}</h3>
              <p className="mt-4 leading-7 text-(--muted-fg)">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact-form" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="reveal-up">
            <p className="font-mono text-xs text-(--accent)">CONTACT</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Have a project in mind?</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-(--muted-fg)">
              Let us collaborate. Fill out the form or reach me directly through WhatsApp, email, LinkedIn, or GitHub.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kinetic-card inline-flex items-center gap-2 rounded-lg border border-(--line) bg-white/55 px-4 py-3 text-sm font-semibold text-(--page-fg) transition hover:-translate-y-0.5 hover:border-[#0f8f83]/60 dark:bg-white/4 dark:hover:border-[#3fd4c5]/70"
                >
                  {social.label}
                  <ArrowIcon />
                </a>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="footer-radiance relative overflow-hidden border-t border-(--line) px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="kinetic-card glass-panel-strong rounded-lg p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-3 rounded-full border border-[#3fd4c5]/30 bg-[#3fd4c5]/10 px-4 py-2 text-sm text-(--page-fg)">
                  <span className="h-2 w-2 rounded-full bg-[#3fd4c5]" />
                  Available for collaborations
                </div>
                <h2 className="mt-7 text-3xl font-semibold leading-tight text-(--page-fg) sm:text-4xl">
                  Let us build something amazing.
                </h2>
                <p className="mt-4 text-base leading-7 text-(--muted-fg)">
                  Open to freelance projects, product ideas, and serious teams that care about polished execution.
                </p>
              </div>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#f6efe4] px-5 py-4 text-sm font-semibold text-[#15110d] shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-white dark:bg-[#f6efe4]"
              >
                Start a project
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 border-t border-(--line) pt-6 text-sm text-(--muted-fg) md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              {footerMeta.map((item) => (
                <span key={item} className="rounded-full border border-(--line) bg-white/45 px-3 py-1.5 dark:bg-white/4">
                  {item}
                </span>
              ))}
            </div>
            <p>&copy; 2026 Tega Stephens. Built with care.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

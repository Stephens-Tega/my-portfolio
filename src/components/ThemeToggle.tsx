"use client";

function setTheme(theme: "light" | "dark") {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
  window.localStorage.setItem("theme", theme);
}

export default function ThemeToggle() {
  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => {
        const isDark = document.documentElement.classList.contains("dark");
        setTheme(isDark ? "light" : "dark");
      }}
      className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-(--line) bg-white/70 text-[#15110d] shadow-sm transition hover:-translate-y-0.5 hover:border-[#0f8f83]/60 hover:bg-white dark:bg-[#161411]/80 dark:text-[#f6efe4] dark:hover:border-[#3fd4c5]/70"
    >
      <span className="relative h-5 w-5">
        <svg
          className="absolute inset-0 h-5 w-5 opacity-100 transition duration-300 group-hover:rotate-12 dark:opacity-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path d="M12 4V2" strokeLinecap="round" />
          <path d="M12 22v-2" strokeLinecap="round" />
          <path d="m4.93 4.93-1.42-1.42" strokeLinecap="round" />
          <path d="m20.49 20.49-1.42-1.42" strokeLinecap="round" />
          <path d="M4 12H2" strokeLinecap="round" />
          <path d="M22 12h-2" strokeLinecap="round" />
          <path d="m4.93 19.07-1.42 1.42" strokeLinecap="round" />
          <path d="m20.49 3.51-1.42 1.42" strokeLinecap="round" />
          <circle cx="12" cy="12" r="4" />
        </svg>
        <svg
          className="absolute inset-0 h-5 w-5 opacity-0 transition duration-300 group-hover:-rotate-12 dark:opacity-100"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path
            d="M21 14.2A8.3 8.3 0 0 1 9.8 3a8.4 8.4 0 1 0 11.2 11.2Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
}

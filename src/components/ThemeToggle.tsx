"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light'|'dark'|null>(null);

  useEffect(() => {
    // Determine initial theme on client only to avoid SSR/client mismatch
    try {
      const saved = localStorage.getItem('theme') as 'light'|'dark'|null;
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initial = saved || (prefersDark ? 'dark' : 'light');
      setTheme(initial);
      const root = document.documentElement;
      if (initial === 'dark') root.classList.add('dark'); else root.classList.remove('dark');
    } catch (e) {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (!theme) return;
    try { localStorage.setItem('theme', theme); } catch (e) {}
  }, [theme]);

  // Render a consistent icon during SSR and initial hydration (treat null as light)
  const isDark = theme === 'dark';

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))}
      className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
    >
      {isDark ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36 6.36l-1.42-1.42M7.05 6.05L5.64 4.64m12.02 0l-1.41 1.41M7.05 17.95l-1.41 1.41M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )}
    </button>
  );
}

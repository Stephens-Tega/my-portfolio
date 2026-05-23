import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tega Stephens - Full-Stack Developer',
  description: 'Building modern web and mobile apps with React, Next.js, and more. Passionate about scalable solutions and clean code.',
};

const themeScript = `
(() => {
  try {
    const savedTheme = window.localStorage.getItem('theme');
    const theme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'dark';
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
  } catch {
    document.documentElement.classList.add('dark');
    document.documentElement.dataset.theme = 'dark';
    document.documentElement.style.colorScheme = 'dark';
  }
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

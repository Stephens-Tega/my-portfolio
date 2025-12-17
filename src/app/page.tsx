"use client";

import Link from 'next/link'; 
import { useState } from 'react'; 
import ThemeToggle from '../components/ThemeToggle';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Navbar */}
      <nav className="bg-white dark:bg-gray-800 shadow-lg fixed top-0 left-0 right-0 z-50 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
              <span className="hidden md:inline-flex items-center bg-gradient-to-r from-indigo-50 to-white border border-gray-200 px-2 py-1 rounded font-mono text-sm text-indigo-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                    <path d="M6.5 7.5L3 10l3.5 2.5V7.5zM13.5 7.5v5L17 10l-3.5-2.5zM9 6h2v8H9V6z" />
                  </svg>
                  <span className="ml-2 text-xs">dev</span>
                </span>
                &nbsp;
                Tega Stephens
              </Link>
            </div>

            <div className="flex-1" />

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="#about" aria-label="About" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7a4 4 0 118 0v1a4 4 0 11-8 0V7z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-2a4 4 0 014-4h10a4 4 0 014 4v2" />
                </svg>
              </Link>

              <Link href="#skills" aria-label="Tech Stack" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12l9-5-9-5-9 5 9 5z" opacity="0.5" />
                </svg>
              </Link>

              <a
                href="https://wa.me/2349123442788?text=Hello%20I%20am%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition inline-flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.52 3.48A11.88 11.88 0 0012 0C5.37 0 .02 5.35.02 12c0 2.11.55 4.18 1.6 6.01L0 24l6.19-1.6A11.94 11.94 0 0012 24c6.63 0 11.98-5.35 11.98-12 0-3.2-1.25-6.2-3.46-8.52zM12 21.5c-1.7 0-3.36-.44-4.81-1.27l-.34-.2-3.69.95.99-3.6-.22-.37A9.46 9.46 0 012.5 12c0-5.24 4.26-9.5 9.5-9.5S21.5 6.76 21.5 12 17.24 21.5 12 21.5z"/>
                  <path d="M17.56 14.4c-.28-.14-1.66-.82-1.92-.92-.26-.1-.45-.14-.64.14s-.73.92-.9 1.11c-.16.2-.33.22-.61.08-.28-.14-1.18-.43-2.25-1.39-.83-.74-1.39-1.66-1.55-1.94-.16-.27-.02-.42.12-.56.12-.12.28-.32.42-.48.14-.16.18-.27.28-.46.1-.18.04-.34-.02-.48-.06-.14-.64-1.54-.88-2.1-.23-.55-.47-.48-.64-.49-.16-.01-.35-.01-.53-.01s-.48.07-.73.34c-.25.27-.95.93-.95 2.27s.97 2.63 1.1 2.81c.14.18 1.9 2.98 4.6 4.17 1.66.72 2.36.85 3.2.72.5-.07 1.66-.68 1.9-1.34.24-.66.24-1.23.17-1.34-.07-.11-.26-.18-.54-.32z"/>
                </svg>
                Contact
              </a>
              <ThemeToggle />
            </div>

            

            {/* Mobile Hamburger Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 dark:text-gray-200 focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Slides Down */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700`}>
          <div className="px-2 pt-2 pb-4 space-y-1">
            <Link
              href="#about"
              onClick={() => setIsOpen(false)}
              aria-label="About"
              className="block px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-indigo-900 rounded-lg text-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7a4 4 0 118 0v1a4 4 0 11-8 0V7z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-2a4 4 0 014-4h10a4 4 0 014 4v2" />
              </svg>
            </Link>
            <Link
              href="#skills"
              onClick={() => setIsOpen(false)}
              aria-label="Tech Stack"
              className="block px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-indigo-900 rounded-lg text-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12l9-5-9-5-9 5 9 5z" opacity="0.5" />
              </svg>
            </Link>
            <a
              href="https://wa.me/2349123442788?text=Hello%20I%20am%20interested%20in%20your%20services"
              onClick={() => setIsOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 bg-indigo-600 text-white rounded-full mx-8 hover:bg-indigo-700 text-center font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.52 3.48A11.88 11.88 0 0012 0C5.37 0 .02 5.35.02 12c0 2.11.55 4.18 1.6 6.01L0 24l6.19-1.6A11.94 11.94 0 0012 24c6.63 0 11.98-5.35 11.98-12 0-3.2-1.25-6.2-3.46-8.52zM12 21.5c-1.7 0-3.36-.44-4.81-1.27l-.34-.2-3.69.95.99-3.6-.22-.37A9.46 9.46 0 012.5 12c0-5.24 4.26-9.5 9.5-9.5S21.5 6.76 21.5 12 17.24 21.5 12 21.5z"/>
                <path d="M17.56 14.4c-.28-.14-1.66-.82-1.92-.92-.26-.1-.45-.14-.64.14s-.73.92-.9 1.11c-.16.2-.33.22-.61.08-.28-.14-1.18-.43-2.25-1.39-.83-.74-1.39-1.66-1.55-1.94-.16-.27-.02-.42.12-.56.12-.12.28-.32.42-.48.14-.16.18-.27.28-.46.1-.18.04-.34-.02-.48-.06-.14-.64-1.54-.88-2.1-.23-.55-.47-.48-.64-.49-.16-.01-.35-.01-.53-.01s-.48.07-.73.34c-.25.27-.95.93-.95 2.27s.97 2.63 1.1 2.81c.14.18 1.9 2.98 4.6 4.17 1.66.72 2.36.85 3.2.72.5-.07 1.66-.68 1.9-1.34.24-.66.24-1.23.17-1.34-.07-.11-.26-.18-.54-.32z"/>
              </svg>
              Contact
            </a>
              <div className="px-4 py-2 flex justify-center">
                <ThemeToggle />
              </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-20 pb-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-yellow-300">Tega Stephens</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Full-Stack Developer crafting innovative web and mobile solutions with React, Next.js, and modern tools. Turning ideas into scalable, user-focused experiences.
          </p>
          <div className="space-x-4">
            <Link href="#about" className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
              Learn More
            </Link>
            <Link
              href="https://wa.me/2349123442788?text=Hello%20I%20am%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border-2 border-white text-white px-4 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.52 3.48A11.88 11.88 0 0012 0C5.37 0 .02 5.35.02 12c0 2.11.55 4.18 1.6 6.01L0 24l6.19-1.6A11.94 11.94 0 0012 24c6.63 0 11.98-5.35 11.98-12 0-3.2-1.25-6.2-3.46-8.52zM12 21.5c-1.7 0-3.36-.44-4.81-1.27l-.34-.2-3.69.95.99-3.6-.22-.37A9.46 9.46 0 012.5 12c0-5.24 4.26-9.5 9.5-9.5S21.5 6.76 21.5 12 17.24 21.5 12 21.5z"/>
                <path d="M17.56 14.4c-.28-.14-1.66-.82-1.92-.92-.26-.1-.45-.14-.64.14s-.73.92-.9 1.11c-.16.2-.33.22-.61.08-.28-.14-1.18-.43-2.25-1.39-.83-.74-1.39-1.66-1.55-1.94-.16-.27-.02-.42.12-.56.12-.12.28-.32.42-.48.14-.16.18-.27.28-.46.1-.18.04-.34-.02-.48-.06-.14-.64-1.54-.88-2.1-.23-.55-.47-.48-.64-.49-.16-.01-.35-.01-.53-.01s-.48.07-.73.34c-.25.27-.95.93-.95 2.27s.97 2.63 1.1 2.81c.14.18 1.9 2.98 4.6 4.17 1.66.72 2.36.85 3.2.72.5-.07 1.66-.68 1.9-1.34.24-.66.24-1.23.17-1.34-.07-.11-.26-.18-.54-.32z"/>
              </svg>
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors"> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center"> 
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
                As a passionate full-stack developer with 3+ years of experience, I specialize in building dynamic, performant applications that solve real-world problems. From intuitive UIs to robust backends, I thrive on creating seamless experiences that users love.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
                My journey started with vanilla web tech and evolved into React ecosystems, where I've shipped mobile apps with React Native and full sites with Next.js. I'm all about clean code, scalability, and staying ahead of trends like TypeScript for type safety and MongoDB for flexible data handling.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-200">
                When not coding, you'll find me exploring new tech stacks or contributing to open-source—always learning, always building.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-48 h-48 mx-auto mb-4 flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">Lagos, Nigeria</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Tech Stack</h2>

          <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">Technologies I use to build performant, accessible and maintainable web apps.</p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Languages */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Languages</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-3">
                  <svg className="w-10 h-10" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path fill="#E34F26" d="M71 460L30 0h452l-41 460-185 52" />
                    <path fill="#EF652A" d="M256 472l150-42 35-394H256" />
                    <path fill="#EBEBEB" d="M256 208h-59l4 45h55v-45zM256 112h-121l2 23h119v-23z" />
                    <path fill="#fff" d="M256 344l-92-25 6-67h57v-41H160l8-92h88v-42H95l-5 57h59l-4 45H95l-5 57h166v-45z" opacity="0.9" />
                  </svg>
                  <div className="text-gray-900 dark:text-white">HTML</div>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-10 h-10" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path fill="#1572B6" d="M71 460L30 0h452l-41 460-185 52" />
                    <path fill="#33A9DC" d="M256 472l150-42 35-394H256" />
                    <path fill="#fff" d="M162 172h188l-8 90-92 25-92-25 6-90z" />
                  </svg>
                  <div className="text-gray-900 dark:text-white">CSS</div>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-10 h-10" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <rect width="512" height="512" rx="60" fill="#F7DF1E" />
                    <path d="M210 350v-120h50v120h-50zm120 0v-120h50v120h-50z" fill="#000" />
                    <text x="50%" y="72%" textAnchor="middle" fontSize="160" fill="#000" fontWeight="700">JS</text>
                  </svg>
                  <div className="text-gray-900 dark:text-white">JavaScript</div>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <rect width="24" height="24" rx="6" fill="#3178C6" />
                    <text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="700">TS</text>
                  </svg>
                  <div className="text-gray-900 dark:text-white">TypeScript</div>
                </div>
              </div>
            </div>

            {/* Frameworks / Libraries */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Frameworks & Libraries</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-3">
                  <svg className="w-10 h-10" viewBox="0 0 841.9 595.3" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <g fill="#61DAFB">
                      <path d="M420.9 296.5c0 33.7-27.3 61-61 61s-61-27.3-61-61 27.3-61 61-61 61 27.3 61 61z" />
                    </g>
                    <g fill="none" stroke="#61DAFB" strokeWidth="34" strokeLinecap="round" strokeLinejoin="round">
                      <ellipse cx="420.9" cy="296.5" rx="211.6" ry="80.8" />
                      <ellipse cx="420.9" cy="296.5" rx="211.6" ry="80.8" transform="rotate(60 420.9 296.5)" />
                      <ellipse cx="420.9" cy="296.5" rx="211.6" ry="80.8" transform="rotate(120 420.9 296.5)" />
                    </g>
                  </svg>
                  <div className="text-gray-900 dark:text-white">React</div>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <rect width="24" height="24" rx="6" fill="#000" />
                    <text x="12" y="16" textAnchor="middle" fontSize="9" fill="#fff" fontWeight="700">Next</text>
                  </svg>
                  <div className="text-gray-900 dark:text-white">Next.js</div>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-10 h-10" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path fill="#38BDF8" d="M8 24c5-8 29-14 32-6-3 8-27 14-32 6z" />
                    <path fill="#0EA5A4" d="M8 30c6-6 26-10 32-6-6 6-26 10-32 6z" opacity="0.95" />
                  </svg>
                  <div className="text-gray-900 dark:text-white">Tailwind CSS</div>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-10 h-10" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <g fill="#61DAFB">
                      <path d="M128 112a16 16 0 1016 16 16 16 0 00-16-16z" />
                    </g>
                    <g fill="none" stroke="#61DAFB" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
                      <ellipse cx="128" cy="128" rx="80" ry="35" />
                      <ellipse cx="128" cy="128" rx="80" ry="35" transform="rotate(60 128 128)" />
                      <ellipse cx="128" cy="128" rx="80" ry="35" transform="rotate(120 128 128)" />
                    </g>
                  </svg>
                  <div className="text-gray-900 dark:text-white">React Native</div>
                </div>
              </div>
            </div>

            {/* Tools */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Tools</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-3">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <g>
                      <path d="M12 3.5a2.5 2.5 0 110 5H9.5V3.5H12z" fill="#FF7262" />
                      <path d="M9.5 3.5A2.5 2.5 0 119.5 8v-4.5z" fill="#FFA657" opacity="0.95" />
                      <path d="M9.5 8a2.5 2.5 0 110 5H6V8h3.5z" fill="#1ABCFE" />
                      <path d="M12 8a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" fill="#A259FF" />
                    </g>
                  </svg>
                  <div className="text-gray-900 dark:text-white">Figma</div>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-10 h-10 text-gray-900 dark:text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path fill="currentColor" d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.07 11.07 0 012.9-.39c.98 0 1.96.13 2.88.39 2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.77.12 3.06.74.81 1.19 1.83 1.19 3.09 0 4.43-2.71 5.4-5.29 5.69.42.36.8 1.08.8 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.68.8.56C20.21 21.38 23.5 17.08 23.5 12 23.5 5.73 18.27.5 12 .5z" />
                  </svg>
                  <div className="text-gray-900 dark:text-white">Git / GitHub</div>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-10 h-10" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <rect width="128" height="128" rx="20" fill="#CB3837" />
                    <text x="64" y="86" textAnchor="middle" fontSize="64" fill="#fff" fontWeight="700">npm</text>
                  </svg>
                  <div className="text-gray-900 dark:text-white">npm</div>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-10 h-10 text-gray-900 dark:text-white" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M256 64L32 448h448L256 64z" fill="currentColor" />
                  </svg>
                  <div className="text-gray-900 dark:text-white">Vercel</div>
                </div>
              </div>
            </div>

            {/* Databases */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Databases</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-3">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M12 2s-4 2-6 5c0 0 2 1 2 3 0 0-1 2-1 4 0 4 5 6 5 6s5-2 5-6c0-2-1-4-1-4 0-2 2-3 2-3-2-3-6-5-6-5z" fill="#47A248" />
                  </svg>
                  <div className="text-gray-900 dark:text-white">MongoDB</div>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-10 h-10" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <g fill="#336791">
                      <path d="M64 4C40 4 24 16 18 32c-3 8 0 16 6 22 4 4 7 7 7 12 0 6-6 12-6 20 0 10 10 18 26 18s26-8 26-18c0-8-6-14-6-20 0-5 3-8 7-12 6-6 9-14 6-22-6-16-22-28-46-28z"/>
                      <path d="M34 70c2 6 8 12 18 12s16-6 18-12c-4 2-10 4-18 4s-14-2-18-4z" fill="#2B6D8E"/>
                    </g>
                  </svg>
                  <div className="text-gray-900 dark:text-white">PostgreSQL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">My Services</h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Web Development</h3>
              <p className="text-gray-600 dark:text-gray-300">Building responsive websites with modern frameworks like React and Next.js, focusing on performance and UX.</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Custom Solutions</h3>
              <p className="text-gray-600 dark:text-gray-300">Tailor-made web apps and integrations to solve business needs and improve workflows.</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">UI/UX Design</h3>
              <p className="text-gray-600 dark:text-gray-300">Designing intuitive interfaces and polished user journeys using Figma and design-first development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Let's Build Something Amazing</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">Open to collaborations, freelance, or just chatting tech.</p>
          <div className="space-x-4 mb-8 flex justify-center items-center gap-6">
                <a
                  href="mailto:tfstephens2005@gmail.com"
                  aria-label="Email"
                  className="text-blue-300 hover:text-white dark:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 8a2 2 0 01-2 2H5a2 2 0 01-2-2V8" />
                  </svg>
                </a>

                <a
                  href="https://linkedin.com/in/tega-stephens-03170a291"
                  aria-label="LinkedIn"
                  className="text-blue-300 hover:text-white dark:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.8-1.75-1.782 0-.982.784-1.781 1.75-1.781s1.75.799 1.75 1.781c0 .982-.784 1.782-1.75 1.782zm13.5 10.268h-3v-4.75c0-1.133-.406-1.906-1.422-1.906-.776 0-1.238.523-1.44 1.028-.074.18-.092.43-.092.68v4.948h-3s.039-8.02 0-9h3v1.275c.397-.612 1.106-1.483 2.69-1.483 1.964 0 3.441 1.283 3.441 4.038v5.17z"/>
                  </svg>
                </a>

                <a
                  href="https://github.com/Stephens-Tega"
                  aria-label="GitHub"
                  className="text-blue-300 hover:text-white dark:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.07 11.07 0 012.9-.39c.98 0 1.96.13 2.88.39 2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.77.12 3.06.74.81 1.19 1.83 1.19 3.09 0 4.43-2.71 5.4-5.29 5.69.42.36.8 1.08.8 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.68.8.56C20.21 21.38 23.5 17.08 23.5 12 23.5 5.73 18.27.5 12 .5z"/>
                  </svg>
                </a>
            </div>
          <p className="text-gray-600 dark:text-gray-400">&copy; 2025 Tega Stephens. Built with Next.js 15.</p>
        </div>
      </footer>
    </main>
  );
}
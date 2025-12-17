"use client";

import Link from 'next/link'; 
import { useState } from 'react'; 

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-gray-900 flex items-center">
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
            <div className="hidden md:flex items-center space-x-6">
              <Link href="#about" aria-label="About" className="text-gray-700 hover:text-indigo-600 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7a4 4 0 118 0v1a4 4 0 11-8 0V7z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-2a4 4 0 014-4h10a4 4 0 014 4v2" />
                </svg>
              </Link>

              <Link href="#skills" aria-label="Tech Stack" className="text-gray-700 hover:text-indigo-600 transition">
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
            </div>

            

            {/* Mobile Hamburger Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 focus:outline-none"
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
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white border-t`}>
          <div className="px-2 pt-2 pb-4 space-y-1">
            <Link
              href="#about"
              onClick={() => setIsOpen(false)}
              aria-label="About"
              className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 rounded-lg text-center"
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
              className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 rounded-lg text-center"
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
            <Link href="#about" className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100">
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
      <section id="about" className="py-20 bg-white"> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center"> 
            <div>
              <p className="text-lg text-gray-700 mb-6">
                As a passionate full-stack developer with 3+ years of experience, I specialize in building dynamic, performant applications that solve real-world problems. From intuitive UIs to robust backends, I thrive on creating seamless experiences that users love.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                My journey started with vanilla web tech and evolved into React ecosystems, where I've shipped mobile apps with React Native and full sites with Next.js. I'm all about clean code, scalability, and staying ahead of trends like TypeScript for type safety and MongoDB for flexible data handling.
              </p>
              <p className="text-lg text-gray-700">
                When not coding, you'll find me exploring new tech stacks or contributing to open-source—always learning, always building.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-48 h-48 mx-auto mb-4 flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
              <p className="text-gray-600">Lagos, Nigeria</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Tech Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '⚛️', name: 'React', desc: 'Building dynamic UIs with hooks and components.' },
              { icon: '🚀', name: 'Next.js', desc: 'Server-side rendering and full-stack apps.' },
              { icon: '📱', name: 'React Native', desc: 'Cross-platform mobile development.' },
              { icon: '💾', name: 'MongoDB', desc: 'NoSQL document database for flexible schemas.' },
              { icon: '🐘', name: 'PostgreSQL', desc: 'Reliable relational database for transactional data.' },
              { icon: '🔤', name: 'TypeScript', desc: 'Type-safe JavaScript for robust code.' },
            ].map((skill) => (
              <div key={skill.name} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-gray-600">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">My Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-gray-600">Building responsive websites with modern frameworks like React and Next.js, focusing on performance and UX.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
              <p className="text-gray-600">Tailor-made web apps and integrations to solve business needs and improve workflows.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-gray-600">Designing intuitive interfaces and polished user journeys using Figma and design-first development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing</h3>
          <p className="mb-6">Open to collaborations, freelance, or just chatting tech.</p>
          <div className="space-x-4 mb-8 flex justify-center items-center gap-6">
                <a
                  href="mailto:tfstephens2005@gmail.com"
                  aria-label="Email"
                  className="text-blue-400 hover:text-white"
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
                  className="text-blue-400 hover:text-white"
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
                  className="text-blue-400 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.07 11.07 0 012.9-.39c.98 0 1.96.13 2.88.39 2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.77.12 3.06.74.81 1.19 1.83 1.19 3.09 0 4.43-2.71 5.4-5.29 5.69.42.36.8 1.08.8 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.68.8.56C20.21 21.38 23.5 17.08 23.5 12 23.5 5.73 18.27.5 12 .5z"/>
                  </svg>
                </a>
            </div>
          <p>&copy; 2025 Tega Stephens. Built with Next.js 15.</p>
        </div>
      </footer>
    </main>
  );
}
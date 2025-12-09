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
          <div className="flex justify-between h-16">
            {/* Logo / Name */}
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                Tega Stephens
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-gray-700 hover:text-indigo-600 transition">
                About
              </Link>
              <Link href="#skills" className="text-gray-700 hover:text-indigo-600 transition">
                Skills
              </Link>
              <Link
                href="#contact"
                className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition"
              >
                Contact
              </Link>
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
              className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 rounded-lg text-center"
            >
              About
            </Link>
            <Link
              href="#skills"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-gray-700 hover:bg-indigo-50 rounded-lg text-center"
            >
              Skills
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 bg-indigo-600 text-white rounded-full mx-8 hover:bg-indigo-700 text-center font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-20 pb-20 bg-linear-to-r from-blue-600 to-indigo-700 text-white">  {/* Fixed: bg-gradient-to-r */}
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
            <Link href="#contact" className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600">
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

      {/* Skills */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '⚛️', name: 'React', desc: 'Building dynamic UIs with hooks and components.' },
              { icon: '🚀', name: 'Next.js', desc: 'Server-side rendering and full-stack apps.' },
              { icon: '📱', name: 'React Native', desc: 'Cross-platform mobile development.' },
              { icon: '💾', name: 'MongoDB', desc: 'NoSQL databases for scalable data.' },
              { icon: '🔤', name: 'TypeScript', desc: 'Type-safe JavaScript for robust code.' },
              { icon: '🎨', name: 'HTML/CSS', desc: 'Semantic markup and responsive design.' },
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

      {/* Footer */}
      <footer id="contact" className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing</h3>
          <p className="mb-6">Open to collaborations, freelance, or just chatting tech.</p>
          <div className="space-x-4 mb-8">
                <a 
                  href="mailto:tfstephens2005@gmail.com" 
                  className="text-blue-400 hover:underline"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Email
                </a>
                <a 
                  href="https://linkedin.com/in/tega-stephens-03170a291" 
                  className="text-blue-400 hover:underline"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/Stephens-Tega" 
                  className="text-blue-400 hover:underline"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
            </div>
          <p>&copy; 2025 Tega Stephens. Built with Next.js 15.</p>
        </div>
      </footer>
    </main>
  );
}
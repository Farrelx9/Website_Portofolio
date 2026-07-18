import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import profilePhoto from "../assets/profile_photo.jpg";
import binarCarRental from "../assets/binar_car_rental.png";
import iclixProject from "../assets/iclix_project.png";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = React.useState(null);

  const projects = [
   {
      id: 1,
      title: "Binar Car Rental",
      description:
        "A static UI prototyping project focused on Tailwind CSS slicing and React.js component structure, built for Binar Academy challenges.",
      longDescription:
        "Binar Car Rental is a frontend practice project focused on static UI prototyping and pixel-perfect slicing. Built for the Binar Academy challenge, it demonstrates the ability to translate design mockups into clean, responsive web pages using React.js and Tailwind CSS. The project highlights foundational skills in component-based architecture, semantic HTML, and modern CSS styling without complex state management or backend integration.",
      image: binarCarRental,
      liveUrl: "https://challenges-1.vercel.app/",
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "JavaScript (ES6)",
        "HTML5/CSS3",
      ],
      features: [
        "Pixel-perfect UI Slicing from Design Mockups",
        "Fully Responsive Layout (Mobile & Desktop)",
        "Component-based Architecture using React.js",
        "Clean and Modern Styling with Tailwind CSS",
      ],
    },
    {
      id: 2,
      title: "ICLIX",
      description:
        "A movie streaming web app powered by TMDB API. Built to learn REST API fetching, query params, and OAuth-based authentication.",
      longDescription:
        "ICLIX is a movie browsing and streaming web application built as a hands-on learning project focused on real-world API integration. It fetches live movie data from The Movie Database (TMDB) API using query parameters for search and filtering. The project also implements OAuth-based login flow and demonstrates key concepts like async data fetching, dynamic routing, and responsive UI design with a dark Netflix-inspired theme.",
      image: iclixProject,
      liveUrl: "https://iclix.vercel.app/",
      technologies: [
        "React",
        "Vite",
        "TMDB API",
        "REST API",
        "OAuth",
        "Query Params",
        "JavaScript (ES6)",
      ],
      features: [
        "Live Movie Data from TMDB API",
        "Search & Filter with Query Parameters",
        "OAuth-based User Authentication",
        "Movie Recommendations & Trailers",
        "Responsive Dark-themed UI",
        "Dynamic Movie Detail Pages",
      ]
    },
    {
      id: 3,
      title: "Project Name 3",
      description:
        "A brief description of the project and the technologies used to build it.",
      longDescription:
        "This project is a placeholder for a third interactive application. It is designed to illustrate complex client-side workflows and custom animations.",
      image: null,
      liveUrl: "#",
      technologies: ["React", "Framer Motion", "Vite"],
      features: ["Custom feature 1", "Custom feature 2"]
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans overflow-y-scroll scroll-smooth">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold text-blue-400">Profile Portfolio</h1>
        <ul className="flex space-x-6">
          <li className="hover:text-blue-400 cursor-pointer transition">
            Home
          </li>
          <li className="hover:text-blue-400 cursor-pointer transition">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-blue-400 cursor-pointer transition">
            <a
              href={`https://wa.me/6282135920275?text=${encodeURIComponent("Hi, I'm interested in your portfolio—let's connect.")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="relative w-full bg-linear-to-b from-gray-800 to-gray-900 overflow-hidden">
        {/* Background ambient light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Hi, I'm Farrel Farhan
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-xl leading-relaxed mx-auto md:mx-0">
              I'm a passionate developer creating beautiful and functional web
              experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:-translate-y-1 cursor-pointer inline-block text-center"
              >
                View My Work
              </a>
              <a
                href={`https://wa.me/6282135920275?text=${encodeURIComponent("Hi, I'm interested in your portfolio—let's connect.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-transparent border border-gray-600 hover:border-blue-400 text-white rounded-full font-semibold transition-all duration-300 hover:text-blue-400 hover:-translate-y-1 cursor-pointer inline-block text-center"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Photo Frame */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative group">
              {/* Glowing gradient background behind the frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>

              {/* Photo Frame */}
              <div className="relative w-64 aspect-[3/4] md:w-80 bg-gray-900 rounded-3xl p-1.5 overflow-hidden flex items-center justify-center">
                <img
                  src={profilePhoto}
                  alt="Farrel Farhan"
                  className="w-full h-full object-cover object-top rounded-2xl transform transition duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-8 max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">
          Featured Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const hasWebsite = project.liveUrl !== "#";

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:transform hover:-translate-y-2 transition duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {project.image ? (
                    <div className="h-48 overflow-hidden relative bg-gradient-to-br from-blue-600/10 to-purple-600/10 flex items-center justify-center p-6">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="max-h-full max-w-full object-contain transform transition duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="h-48 bg-gray-700 flex items-center justify-center text-gray-500 font-semibold">
                      Image Placeholder
                    </div>
                  )}
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2 text-gray-100 group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0 flex justify-between items-center">
                  <span className="text-blue-400 group-hover:text-blue-300 font-medium text-sm flex items-center gap-1">
                    Detail Info &rarr;
                  </span>
                  {hasWebsite && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-gray-400 hover:text-white transition-colors text-xs font-semibold px-3 py-1.5 bg-gray-700/50 hover:bg-gray-700 rounded-full border border-gray-600/30"
                    >
                      Visit Website
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-12 text-gray-500 border-t border-gray-800 mt-auto bg-gray-900/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright & Email */}
          <div className="flex flex-col items-center md:items-start order-2 md:order-1 gap-2">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Farrel Farhan. All rights
              reserved.
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=farrelfarhan902@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              farrelfarhan902@gmail.com
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6 order-1 md:order-2">
            <a
              href="https://github.com/Farrelx9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/farrel-farhan-489b70263/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            <a
              href="https://instagram.com/farrelfarhan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0 3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=farrelfarhan902@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-400 transition-colors duration-300"
              aria-label="Email"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>

            <a
              href="https://vercel.com/farrels-projects-f58c1125"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Vercel"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 22.525H0L12 1.475L24 22.525Z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            ></motion.div>

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative bg-gray-900 border border-gray-800 rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden z-10 flex flex-col max-h-[85vh] md:max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-450 hover:text-white border border-gray-700 transition duration-300 backdrop-blur-xs cursor-pointer"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image Banner */}
              {selectedProject.image ? (
                <div className="h-56 sm:h-64 bg-gradient-to-br from-blue-600/15 to-purple-600/15 flex items-center justify-center p-8 relative border-b border-gray-850">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="max-h-full max-w-full object-contain drop-shadow-2xl"
                  />
                </div>
              ) : (
                <div className="h-40 bg-gray-800 flex items-center justify-center text-gray-500 font-semibold border-b border-gray-750">
                  Image Placeholder
                </div>
              )}

              {/* Content Container (Scrollable) */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                    {selectedProject.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {selectedProject.technologies?.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wider">
                    About Project
                  </h4>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {selectedProject.longDescription || selectedProject.description}
                  </p>
                </div>

                {selectedProject.features && selectedProject.features.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wider">
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-400">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <svg
                            className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Action Buttons Footer */}
              <div className="p-6 border-t border-gray-800 bg-gray-900/50 backdrop-blur-xs flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl bg-transparent hover:bg-gray-800 text-gray-400 hover:text-white transition duration-300 font-semibold text-sm cursor-pointer"
                >
                  Close
                </button>
                {selectedProject.liveUrl && selectedProject.liveUrl !== "#" && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-all duration-300 font-semibold text-sm shadow-lg hover:shadow-blue-500/20 flex items-center gap-2 cursor-pointer active:scale-95"
                  >
                    Visit Website
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

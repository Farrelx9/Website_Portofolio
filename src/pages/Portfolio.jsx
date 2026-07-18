import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import profilePhoto from "../assets/profile_photo.jpg";
import binarCarRental from "../assets/binar_car_rental.png";
import iclixProject from "../assets/iclix_project.png";
import klinikDrGirnaPatient from "../assets/klinik_dr_girna_patient.png";
import klinikDrGirnaAdmin from "../assets/klinik_dr_girna_admin.png";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = React.useState(null);
  const [activeImageIndex, setActiveImageIndex] = React.useState(0);

  const projects = [
    {
      id: 1,
      num: "01",
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
      num: "02",
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
      ],
    },
    {
      id: 3,
      num: "03",
      title: "Klinik drg. Irna Kurnia",
      description:
        "A dental clinic management system with 3 main business processes: appointment booking (janji temu), online chat consultation (jadwal chat), and digital medical records (rekam medis) in admin.",
      longDescription:
        "Klinik drg. Irna Kurnia is a clinic management application featuring three core business processes: appointment scheduling, online chat consultation, and digital medical record keeping. The patient-facing side handles service information and online bookings, while the secure admin panel enables administrative staff to manage patient data, coordinate dental consultation schedules, track payment summaries, and maintain up-to-date patient medical histories.",
      images: [klinikDrGirnaPatient, klinikDrGirnaAdmin],
      imageLabels: ["Patient Side", "Admin Dashboard"],
      liveUrl: "https://klinikdrgirna.my.id",
      technologies: [
        "React",
        "Tailwind CSS",
        "React Router",
        "jsPDF",
        "Chart.js",
        "REST API",
      ],
      features: [
        "Janji Temu (Online Appointment Scheduling)",
        "Konsultasi Chat (Doctor-Patient Chat Scheduling)",
        "Rekam Medis (Secure Digital Medical Records)",
        "Dashboard Analytics (Interactive Transaction & Growth Charts)",
        "Administrasi & Jadwal Dokter (Doctor Duty Rota & Billing)",
        "PDF Report Generation (Invoice & Medical Record Export)",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#050608] text-gray-250 font-sans relative antialiased selection:bg-[#16C47F]/20 selection:text-white bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:32px_32px]">
      {/* Decorative fine-line grid overlay */}
      <div className="absolute inset-0 max-w-7xl mx-auto border-x border-white/[0.02] pointer-events-none z-0"></div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 sticky top-0 z-40 bg-[#050608]/80 backdrop-blur-lg border-b border-white/[0.04]">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#16C47F]"></span>
          <h1 className="text-lg font-bold tracking-widest text-white uppercase">
            Farrel Farhan
          </h1>
        </div>
        <ul className="flex space-x-8 text-sm font-medium tracking-wider">
          <li className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300 flex items-center gap-1.5">
            <span className="text-[10px] text-[#16C47F] font-bold">01/</span> Home
          </li>
          <li className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300 flex items-center gap-1.5">
            <a href="#projects" className="flex items-center gap-1.5">
              <span className="text-[10px] text-[#FFD65A] font-bold">02/</span> Projects
            </a>
          </li>
          <li className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300 flex items-center gap-1.5">
            <a
              href={`https://wa.me/6282135920275?text=${encodeURIComponent("Hi, I'm interested in your portfolio—let's connect.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5"
            >
              <span className="text-[10px] text-[#FF9D23] font-bold">03/</span> Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="relative w-full overflow-hidden py-28 md:py-36 z-10">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-16">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.02] border border-white/[0.06] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16C47F] animate-pulse"></span>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Available for hire</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-light mb-6 tracking-tight text-white leading-none">
              Junior Full-Stack Developer <br />
              <span className="font-extrabold bg-gradient-to-r from-[#16C47F] via-[#FFD65A] to-[#FF9D23] bg-clip-text text-transparent">
                building for scale.
              </span>
            </h2>
            
            <p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed mx-auto md:mx-0 font-light">
              Hi, I'm Farrel Farhan, a Junior Full-Stack Developer passionate about building clean, scalable, and user-focused web applications. With strong fundamentals in JavaScript, React, and modern web technologies, I specialize in turning design concepts into responsive, high-performance interfaces — always learning, iterating, and committed to delivering high-quality work.
            </p>

            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-7 py-3 bg-white text-black hover:bg-gray-200 rounded-lg font-bold tracking-wide transition-all duration-300 shadow-xl shadow-white/5 hover:-translate-y-0.5 cursor-pointer text-sm"
              >
                Selected Works
              </a>
              <a
                href={`https://wa.me/6282135920275?text=${encodeURIComponent("Hi, I'm interested in your portfolio—let's connect.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 bg-transparent border border-white/[0.1] hover:border-[#FFD65A] text-gray-300 hover:text-white rounded-lg font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 cursor-pointer text-sm"
              >
                Say Hello
              </a>
              <a
                href="/cv-farrel-farhan.pdf"
                download="CV_Farrel_Farhan.pdf"
                className="group px-7 py-3 bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] hover:border-[#FF9D23] text-gray-300 hover:text-white rounded-lg font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 cursor-pointer text-sm inline-flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4 text-[#FF9D23]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
                </svg>
                Download CV
              </a>
            </div>
          </div>

          {/* Right Photo Frame */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative group">
              {/* Sleek architectural wireframe frame behind photo */}
              <div className="absolute inset-4 border border-[#16C47F]/40 translate-x-4 translate-y-4 rounded-2xl group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
              <div className="absolute inset-4 border border-[#FF9D23]/30 -translate-x-4 -translate-y-4 rounded-2xl group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"></div>
              
              {/* Photo Frame */}
              <div className="relative w-64 aspect-[3/4] md:w-80 bg-[#0D0F14] border border-white/[0.08] rounded-2xl p-2 overflow-hidden flex items-center justify-center shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Farrel Farhan"
                  className="w-full h-full object-cover object-top rounded-xl filter  group-hover:grayscale-0 transition-all duration-700 ease-out scale-102 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="py-28 px-8 max-w-7xl mx-auto border-t border-white/[0.04] relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-4">
          <div>
            <span className="text-xs text-[#16C47F] font-bold tracking-widest uppercase block mb-2">[ 02 / SELECTED WORK ]</span>
            <h3 className="text-3xl md:text-4xl font-light text-white tracking-tight">
           A curated portfolio of <span className="font-extrabold">production-ready web applications</span>
            </h3>
          </div>
          <div className="h-px bg-white/[0.05] flex-1 mx-8 hidden md:block"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const hasWebsite = project.liveUrl !== "#";

            return (
              <div
                key={project.id}
                onClick={() => {
                  setSelectedProject(project);
                  setActiveImageIndex(0);
                }}
                className="bg-[#0D0F14]/40 border border-white/[0.06] hover:border-white/[0.15] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-white/[0.02] hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {project.images || project.image ? (
                    <div className="h-52 overflow-hidden relative bg-[#090A0E] border-b border-white/[0.04]">
                      {/* Browser header detail */}
                      <div className="absolute top-0 left-0 right-0 h-8 bg-[#0D0F14]/95 backdrop-blur-md flex items-center px-4 gap-2 z-10 border-b border-white/[0.03]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F93827]/70"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFD65A]/70"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#16C47F]/70"></span>
                        <span className="ml-2 flex-1 bg-white/[0.03] rounded-sm h-4 text-[9px] text-gray-500 tracking-wider flex items-center px-3 truncate">
                          {project.liveUrl !== "#" ? project.liveUrl.replace("https://", "") : project.title}
                        </span>
                      </div>
                      <img
                        src={project.images ? project.images[0] : project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transform transition-all duration-700 ease-out group-hover:scale-102"
                        style={{ paddingTop: "32px" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F14]/80 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                    </div>
                  ) : (
                    <div className="h-52 bg-gray-800 flex items-center justify-center text-gray-500 font-semibold">
                      Image Placeholder
                    </div>
                  )}
                  <div className="p-7">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] text-gray-500 font-mono tracking-widest font-bold">PROJ / {project.num}</span>
                      <div className="flex gap-1.5">
                        {project.technologies.slice(0, 2).map((tech) => (
                          <span key={tech} className="text-[9px] text-[#FF9D23] bg-[#FF9D23]/5 px-2 py-0.5 rounded-md border border-[#FF9D23]/10 font-bold uppercase tracking-wider">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h4 className="text-xl font-bold mb-2.5 text-white group-hover:text-[#FFD65A] transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>
                </div>
                <div className="p-7 pt-0 flex justify-between items-center border-t border-white/[0.03] mt-auto">
                  <span className="text-[#16C47F] group-hover:text-white font-bold text-xs tracking-wider flex items-center gap-1.5 transition-colors">
                    EXPLORE PROJECT <span>&rarr;</span>
                  </span>
                  {hasWebsite && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-gray-400 hover:text-white transition-colors text-xs font-semibold px-3 py-1 bg-white/[0.03] hover:bg-white/[0.08] rounded-md border border-white/[0.06]"
                    >
                      Visit Site
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 text-gray-500 border-t border-white/[0.04] mt-auto bg-[#050608] relative z-10">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Copyright & Email */}
          <div className="flex flex-col items-center md:items-start order-2 md:order-1 gap-2.5">
            <p className="text-xs tracking-wide">
              &copy; {new Date().getFullYear()} Farrel Farhan. 
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=farrelfarhan902@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 hover:text-[#FFD65A] transition-colors duration-300 flex items-center gap-2"
            >
              <svg className="w-3.5 h-3.5 text-[#FF9D23]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              farrelfarhan902@gmail.com
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-7 order-1 md:order-2">
            <a
              href="https://github.com/Farrelx9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/farrel-farhan-489b70263/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            <a
              href="https://instagram.com/farrelfarhan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0 3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=farrelfarhan902@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
              className="fixed inset-0 bg-[#050608]/95 backdrop-blur-md"
            ></motion.div>

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.98, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.98, opacity: 0, y: 12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative bg-[#0D0F14] border border-white/[0.08] rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden z-10 flex flex-col max-h-[85vh] md:max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-25 p-1.5 rounded-full bg-white/[0.02] hover:bg-white/[0.08] text-gray-400 hover:text-white border border-white/[0.06] transition duration-300 backdrop-blur-md cursor-pointer"
                aria-label="Close modal"
              >
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image Banner */}
              {selectedProject.images && selectedProject.images.length > 0 ? (
                <div className="relative flex flex-col border-b border-white/[0.04]">
                  {/* Browser chrome */}
                  <div className="bg-[#0D0F14] flex items-center px-4 py-2.5 gap-2 border-b border-white/[0.03] shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F93827]/70"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD65A]/70"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16C47F]/70"></span>
                    <span className="ml-3 flex-1 bg-white/[0.03] rounded text-[10px] text-gray-500 h-5 flex items-center px-3 truncate max-w-xs">
                      {selectedProject.liveUrl !== "#" ? selectedProject.liveUrl.replace("https://", "") : selectedProject.title}
                    </span>
                  </div>
                  {/* Screenshot — full-bleed, cropped to top */}
                  <div className="h-64 sm:h-72 overflow-hidden relative">
                    <motion.img
                      key={activeImageIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.25 }}
                      src={selectedProject.images[activeImageIndex]}
                      alt={`${selectedProject.title} – ${selectedProject.imageLabels?.[activeImageIndex] ?? `view ${activeImageIndex + 1}`}`}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0D0F14] to-transparent pointer-events-none" />
                  </div>
                  {/* Tab switcher */}
                  {selectedProject.images.length > 1 && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-[#050608]/90 backdrop-blur-md p-1 rounded-full border border-white/[0.06] shadow-xl z-20">
                      {selectedProject.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveImageIndex(idx)}
                          className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                            activeImageIndex === idx
                              ? "bg-white text-black shadow-lg"
                              : "text-gray-400 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {selectedProject.imageLabels?.[idx] || `View ${idx + 1}`}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : selectedProject.image ? (
                <div className="relative flex flex-col border-b border-white/[0.04]">
                  {/* Browser chrome */}
                  <div className="bg-[#0D0F14] flex items-center px-4 py-2.5 gap-2 border-b border-white/[0.03] shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F93827]/70"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD65A]/70"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16C47F]/70"></span>
                    <span className="ml-3 flex-1 bg-white/[0.03] rounded text-[10px] text-gray-500 h-5 flex items-center px-3 truncate max-w-xs">
                      {selectedProject.liveUrl !== "#" ? selectedProject.liveUrl.replace("https://", "") : selectedProject.title}
                    </span>
                  </div>
                  {/* Screenshot — full-bleed, cropped to top */}
                  <div className="h-64 sm:h-72 overflow-hidden relative">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0D0F14] to-transparent pointer-events-none" />
                  </div>
                </div>
              ) : (
                <div className="h-40 bg-gray-800 flex items-center justify-center text-gray-500 font-semibold border-b border-white/[0.04]">
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
                        className="px-3 py-1 text-xs font-semibold bg-white/[0.04] text-white border border-white/[0.06] rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    About Project
                  </h4>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light">
                    {selectedProject.longDescription || selectedProject.description}
                  </p>
                </div>

                {selectedProject.features && selectedProject.features.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-400">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 font-light">
                          <svg
                            className="w-4 h-4 text-[#16C47F] shrink-0 mt-0.5"
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
              <div className="p-6 border-t border-white/[0.04] bg-[#0D0F14]/90 backdrop-blur-sm flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 rounded-lg bg-transparent hover:bg-white/[0.04] text-gray-400 hover:text-white transition duration-300 font-semibold text-xs tracking-wider uppercase cursor-pointer"
                >
                  Close
                </button>
                {selectedProject.liveUrl && selectedProject.liveUrl !== "#" && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-lg bg-white hover:bg-gray-200 text-black transition-all duration-300 font-bold text-xs tracking-wider uppercase flex items-center gap-2 cursor-pointer active:scale-95"
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

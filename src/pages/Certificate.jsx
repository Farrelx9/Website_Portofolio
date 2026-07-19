import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import certificateBinar from "../assets/Studi Independen_Cycle6_Cert_Farrel Farhan-1.png";
import certificateReact from "../assets/Studi Independen_Cycle6_Cert_Farrel Farhan-1.png";

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = React.useState(null);

  const certificates = [
    {
      id: 1,
      num: "01",
      title: "Full-Stack Web Development Boot Camp",
      issuer: "Binar Academy",
      date: "2025",
      image: certificateBinar,
      pdfUrl: "#",
      description:
        "Sertifikat kelulusan program intensif Full-Stack Web Development yang memvalidasi keterampilan praktis dalam membangun aplikasi web modern yang responsif dan berskala dari frontend hingga backend.",
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Tailwind CSS",
        "JavaScript",
      ],
    },
    {
      id: 2,
      num: "02",
      title: "React.js Developer Certification",
      issuer: "Coding Academy",
      date: "2025",
      image: certificateReact,
      pdfUrl: "#",
      description:
        "Sertifikasi keahlian khusus pengembangan frontend menggunakan library React.js, meliputi manajemen state (Context/Redux), hooks, dynamic routing, rest API fetching, dan optimalisasi performa.",
      skills: [
        "React Hooks",
        "State Management",
        "REST API",
        "Vite",
        "ES6+ JavaScript",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#050608] text-gray-250 font-sans relative antialiased selection:bg-[#16C47F]/20 selection:text-white bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:32px_32px]">
      {/* Decorative fine-line grid overlay */}
      <div className="absolute inset-0 max-w-7xl mx-auto border-x border-white/[0.02] pointer-events-none z-0"></div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 sticky top-0 z-40 bg-[#050608]/80 backdrop-blur-lg border-b border-white/[0.04]">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#16C47F]"></span>
          <h1 className="text-lg font-bold tracking-widest text-white uppercase">
            Farrel Farhan
          </h1>
        </Link>
        <ul className="flex space-x-8 text-sm font-medium tracking-wider">
          <li className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300 flex items-center gap-1.5">
            <Link to="/" className="flex items-center gap-1.5">
              <span className="text-[10px] text-[#16C47F] font-bold">01/</span>{" "}
              Home
            </Link>
          </li>
          <li className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300 flex items-center gap-1.5">
            <Link to="/#projects" className="flex items-center gap-1.5">
              <span className="text-[10px] text-[#FFD65A] font-bold">02/</span>{" "}
              Projects
            </Link>
          </li>
          <li className="text-white cursor-pointer transition-colors duration-300 flex items-center gap-1.5">
            <span className="text-[10px] text-[#FF9D23] font-bold">03/</span>{" "}
            Certificates
          </li>
        </ul>
      </nav>

      {/* Header */}
      <header className="py-20 md:py-28 px-8 max-w-7xl mx-auto relative z-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors duration-300 mb-10 group"
        >
          <svg
            className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Back to Home
        </Link>

        <span className="text-xs text-[#FF9D23] font-bold tracking-widest uppercase block mb-2">
          [ 03 / CREDENTIALS ]
        </span>
        <h2 className="text-4xl md:text-6xl font-light text-white tracking-tight max-w-3xl">
          Certifications that back up{" "}
          <span className="font-extrabold">the work.</span>
        </h2>
        <p className="text-gray-400 mt-6 max-w-xl leading-relaxed font-light">
          Formal training and assessments completed alongside the projects in my
          portfolio — covering full-stack fundamentals through to React-specific
          frontend engineering.
        </p>
      </header>

      {/* Certificates Grid */}
      <section className="px-8 max-w-7xl mx-auto pb-28 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCertificate(cert)}
              className="bg-[#0D0F14]/40 border border-white/[0.06] hover:border-white/[0.15] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-white/[0.02] hover:-translate-y-1.5 transition-all duration-500 flex flex-col group cursor-pointer"
            >
              <div className="h-56 overflow-hidden relative bg-[#090A0E] border-b border-white/[0.04]">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-top transform transition-all duration-700 ease-out group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F14]/80 via-transparent to-transparent opacity-60 pointer-events-none"></div>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] text-gray-500 font-mono tracking-widest font-bold">
                    CERT / {cert.num}
                  </span>
                  <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">
                    {cert.date}
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-1.5 text-white group-hover:text-[#FFD65A] transition-colors duration-300">
                  {cert.title}
                </h4>
                <p className="text-[#16C47F] text-xs font-bold uppercase tracking-wider mb-4">
                  {cert.issuer}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed font-light mb-5">
                  {cert.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto pt-5 border-t border-white/[0.03]">
                  {cert.skills.slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      className="text-[9px] text-[#FF9D23] bg-[#FF9D23]/5 px-2 py-0.5 rounded-md border border-[#FF9D23]/10 font-bold uppercase tracking-wider"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 text-gray-500 border-t border-white/[0.04] mt-auto bg-[#050608] relative z-10">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-xs tracking-wide order-2 md:order-1">
            &copy; {new Date().getFullYear()} Farrel Farhan.
          </p>
          <Link
            to="/"
            className="text-xs text-gray-400 hover:text-[#FFD65A] transition-colors duration-300 order-1 md:order-2"
          >
            &larr; Back to Home
          </Link>
        </div>
      </footer>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedCertificate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCertificate(null)}
              className="fixed inset-0 bg-[#050608]/95 backdrop-blur-md"
            ></motion.div>

            <motion.div
              initial={{ scale: 0.98, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.98, opacity: 0, y: 12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative bg-[#0D0F14] border border-white/[0.08] rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden z-10 flex flex-col max-h-[85vh] md:max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute top-4 right-4 z-25 p-1.5 rounded-full bg-white/[0.02] hover:bg-white/[0.08] text-gray-400 hover:text-white border border-white/[0.06] transition duration-300 backdrop-blur-md cursor-pointer"
                aria-label="Close modal"
              >
                <svg
                  className="w-4.5 h-4.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="h-64 sm:h-72 overflow-hidden relative border-b border-white/[0.04]">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0D0F14] to-transparent pointer-events-none" />
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-1.5">
                    {selectedCertificate.title}
                  </h3>
                  <p className="text-[#16C47F] text-xs font-bold uppercase tracking-widest">
                    {selectedCertificate.issuer} &middot;{" "}
                    {selectedCertificate.date}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {selectedCertificate.skills?.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-semibold bg-white/[0.04] text-white border border-white/[0.06] rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    About This Certificate
                  </h4>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light">
                    {selectedCertificate.description}
                  </p>
                </div>
              </div>

              <div className="p-6 border-t border-white/[0.04] bg-[#0D0F14]/90 backdrop-blur-sm flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="px-5 py-2 rounded-lg bg-transparent hover:bg-white/[0.04] text-gray-400 hover:text-white transition duration-300 font-semibold text-xs tracking-wider uppercase cursor-pointer"
                >
                  Close
                </button>
                {selectedCertificate.pdfUrl &&
                  selectedCertificate.pdfUrl !== "#" && (
                    <a
                      href={selectedCertificate.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-lg bg-white hover:bg-gray-200 text-black transition-all duration-300 font-bold text-xs tracking-wider uppercase flex items-center gap-2 cursor-pointer active:scale-95"
                    >
                      View Certificate
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
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

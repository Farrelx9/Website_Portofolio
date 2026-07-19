import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import certificateBinar from "../assets/Studi Independen_Cycle6_Cert_Farrel Farhan-1.png";
import certificateLsp from "../assets/Sertif LSP-1.png";
import certificateEpt from "../assets/EPT-1.png";

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = React.useState(null);
  const [lightboxOpen, setLightboxOpen] = React.useState(false);

  const certificates = [
    {
      id: 1,
      num: "01",
      title: "Front End Javascript Wave 6",
      issuer: "Binar Academy",
      date: "2024",
      image: certificateBinar,
      pdfUrl: "#",
      description:
        "Certificate of completion for the Front End Javascript program under the Studi Independen Bersertifikat (Kampus Merdeka) initiative at Binar Academy, validating hands-on skills in building responsive, interactive user interfaces and working with modern Javascript ecosystems.",
      skills: [
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "HTML & CSS",
        "Responsive Design",
      ],
    },
    {
      id: 2,
      num: "02",
      title: "Junior Web Programmer",
      issuer: "LSP UPN \"Veteran\" Jawa Timur (BNSP)",
      date: "2025",
      image: certificateLsp,
      pdfUrl: "#",
      description:
        "National competency certification as a Junior Web Programmer issued by LSP UPN \"Veteran\" Jawa Timur under the authority of the National Professional Certification Board (BNSP), certifying professional proficiency in programming, database implementation, and software development standards.",
      skills: [
        "Web Programming",
        "Database (SQL)",
        "Structured Programming",
        "Software Standards",
        "Debugging",
      ],
    },
    {
      id: 3,
      num: "03",
      title: "English Proficiency Test (EPT)",
      issuer: "Language Center UPN \"Veteran\" Jawa Timur",
      date: "2025",
      image: certificateEpt,
      pdfUrl: "#",
      description:
        "English Proficiency Test (EPT) certificate issued by the Language Center (UPA Bahasa) of UPN \"Veteran\" Jawa Timur, certifying English proficiency with a score of 450 (Listening: 47, Structure: 44, Reading: 44).",
      skills: [
        "English Proficiency",
        "Listening Comprehension",
        "Written Expression",
        "Reading Comprehension",
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
          <li className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300 flex items-center gap-1.5">
            <Link to="/experience" className="flex items-center gap-1.5">
              <span className="text-[10px] text-[#16C47F] font-bold">04/</span>{" "}
              Experience
            </Link>
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
          portfolio — covering frontend development through to national web programming standards.
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
              <div className="h-56 overflow-hidden relative bg-white flex items-center justify-center p-4 border-b border-white/[0.04]">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain transform transition-all duration-700 ease-out group-hover:scale-105"
                />
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

      {/* Detail Modal */}
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

              {/* Certificate image — shown in full (object-contain), click to zoom */}
              <div
                onClick={() => setLightboxOpen(true)}
                className="relative h-72 sm:h-80 overflow-hidden bg-white flex items-center justify-center p-4 border-b border-white/[0.04] cursor-zoom-in group/zoom"
              >
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-black/0 group-hover/zoom:bg-black/10 transition-colors duration-300 flex items-end justify-end p-3">
                  <span className="opacity-0 group-hover/zoom:opacity-100 transition-opacity duration-300 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-black bg-white/90 px-3 py-1.5 rounded-md shadow-lg">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16zM11 8v6M8 11h6"
                      />
                    </svg>
                    View Full Size
                  </span>
                </div>
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
                <button
                  onClick={() => setLightboxOpen(true)}
                  className="px-5 py-2.5 rounded-lg bg-white hover:bg-gray-200 text-black transition-all duration-300 font-bold text-xs tracking-wider uppercase flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  View Full Size
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
                      d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9m11.25-5.25v4.5m0-4.5h-4.5m4.5 0L15 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15m11.25 5.25v-4.5m0 4.5h-4.5m4.5 0L15 15"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Full-size Lightbox */}
      <AnimatePresence>
        {lightboxOpen && selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
            className="fixed inset-0 z-[60] bg-[#050608]/98 backdrop-blur-lg flex items-center justify-center p-4 sm:p-10 cursor-zoom-out"
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-5 right-5 z-10 p-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/[0.1] transition duration-300 cursor-pointer"
              aria-label="Close full size view"
            >
              <svg
                className="w-5 h-5"
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
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl bg-white"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

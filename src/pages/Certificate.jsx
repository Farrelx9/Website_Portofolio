import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import certificateBinar from "../assets/Studi Independen_Cycle6_Cert_Farrel Farhan-1.png";
import certificateLsp from "../assets/Sertif LSP-1.png";
import certificateEpt from "../assets/EPT-1.png";
import certificateAws from "../assets/sertifikat aws.png";
import nilaiAws from "../assets/nilai aws.png";
import certificateCdp from "../assets/cdp_cert_farrel_farhan.png";

import binarReport1 from "../assets/Final Report Scale 1-100 FEJS Farrel Farhan-1.png";
import binarReport2 from "../assets/Final Report Scale 1-100 FEJS Farrel Farhan-2.png";
import binarReport3 from "../assets/Final Report Scale 1-100 FEJS Farrel Farhan-3.png";
import binarReport4 from "../assets/Final Report Scale 1-100 FEJS Farrel Farhan-4.png";
import binarReport5 from "../assets/Final Report Scale 1-100 FEJS Farrel Farhan-5.png";
import binarReport6 from "../assets/Final Report Scale 1-100 FEJS Farrel Farhan-6.png";

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = React.useState(null);
  const [activeTab, setActiveTab] = React.useState("certificate"); // 'certificate' | 'transcript' | 'report'
  const [reportPage, setReportPage] = React.useState(0);
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const certificates = [
    {
      id: 1,
      num: "01",
      title: "AWS Cloud Solution Architect",
      issuer: "TIMCorp-Academy & Kampus Merdeka (AWS Partner)",
      date: "2023",
      image: certificateAws,
      scoreImage: nilaiAws,
      score: "86 / 100",
      pdfUrl: "#",
      description:
        "Certificate of completion and academic transcript for the AWS Cloud Solution Architect program under Magang dan Studi Independen Bersertifikat (MSIB Cycle 5) at TIMCorp-Academy (AWS Training Partner). Achieved a Weighted Score of 86 across 20 credits, specializing in AWS Cloud Foundations, Solution Architecture, and LMS deployment.",
      skills: [
        "AWS Cloud",
        "Cloud Architecture",
        "Solution Architect",
        "Cloud Practitioner",
        "LMS Deployment",
      ],
      scoresList: [
        { subject: "Capstone Project", score: 100, credits: 4 },
        { subject: "Solution Architect - 1", score: 90, credits: 4 },
        { subject: "Foundations", score: 90, credits: 2 },
        { subject: "Soft Skills", score: 90, credits: 2 },
        { subject: "Cloud Practitioner Essentials", score: 80, credits: 4 },
        { subject: "Solution Architect - 2", score: 70, credits: 4 },
      ],
      weightedScore: "86",
      totalCredits: "20",
    },
    {
      id: 2,
      num: "02",
      title: "Front End Javascript Wave 6",
      issuer: "Binar Academy & Kampus Merdeka",
      date: "2024",
      image: certificateBinar,
      reportImages: [
        binarReport1,
        binarReport2,
        binarReport3,
        binarReport4,
        binarReport5,
        binarReport6,
      ],
      score: "92.93 / 100",
      weightedScore: "92.93",
      softSkillScore: "89.33",
      pdfUrl: "#",
      description:
        "Certificate of completion and 6-page comprehensive Final Report for the Front End Javascript program under Kampus Merdeka (Studi Independen Cycle 6) at Binar Academy. Achieved an Average Technical Score of 92.93/100 across 10 chapters and a Soft Skill Score of 89.33/100.",
      skills: [
        "React.js",
        "JavaScript",
        "Redux State Management",
        "Tailwind CSS",
        "REST API & Auth",
        "Vercel Deployment & CI/CD",
      ],
      scoresList: [
        {
          subject: "Chapter 1: Dasar Front-end (HTML & CSS)",
          score: 91,
          credits: 1,
        },
        {
          subject: "Chapter 2: Dasar Pemrograman Javascript",
          score: 99,
          credits: 1,
        },
        {
          subject: "Chapter 3: Web Dinamis ReactJS (Part 1)",
          score: 95.4,
          credits: 1,
        },
        {
          subject: "Chapter 4: Web Dinamis ReactJS (Part 2)",
          score: 92,
          credits: 1,
        },
        {
          subject: "Chapter 5: System Authentication Backend",
          score: 86,
          credits: 1,
        },
        { subject: "Chapter 6: Redux State Management", score: 95, credits: 1 },
        { subject: "Chapter 7: Deployment & CI/CD", score: 100, credits: 1 },
        {
          subject: "Chapter 8-10: Final Project Slicing & API",
          score: 85,
          credits: 3,
        },
      ],
    },
    {
      id: 3,
      num: "03",
      title: "Junior Web Programmer",
      issuer: 'LSP UPN "Veteran" Jawa Timur (BNSP)',
      date: "2025",
      image: certificateLsp,
      pdfUrl: "#",
      description:
        'National competency certification as a Junior Web Programmer issued by LSP UPN "Veteran" Jawa Timur under the authority of the National Professional Certification Board (BNSP), certifying professional proficiency in programming, database implementation, and software development standards.',
      skills: [
        "Web Programming",
        "Database (SQL)",
        "Structured Programming",
        "Software Standards",
        "Debugging",
      ],
    },
    {
      id: 4,
      num: "04",
      title: "CDP Workshop: Zero to Hero in Singapore Digital Realm",
      issuer: "Binar Academy",
      date: "2024",
      image: certificateCdp,
      pdfUrl: "#",
      description:
        'Certificate of completion for the Career Development Program (CDP) Workshop titled "From Zero to Hero in Singapore Digital Realm" hosted by Binar Academy, validating career strategies, tech industry trends, and global digital ecosystem readiness.',
      skills: [
        "Career Development",
        "Tech Industry Insights",
        "Global Career Strategy",
        "Professional Growth",
      ],
    },
    {
      id: 5,
      num: "05",
      title: "English Proficiency Test (EPT)",
      issuer: 'Language Center UPN "Veteran" Jawa Timur',
      date: "2025",
      score: "450",
      image: certificateEpt,
      pdfUrl: "#",
      description:
        'English Proficiency Test (EPT) certificate issued by the Language Center (UPA Bahasa) of UPN "Veteran" Jawa Timur, certifying English proficiency with a score of 450 (Listening: 47, Structure: 44, Reading: 44).',
      skills: [
        "English Proficiency",
        "Listening Comprehension",
        "Written Expression",
        "Reading Comprehension",
      ],
    },
  ];

  const getCurrentImageSource = (cert) => {
    if (!cert) return null;
    if (activeTab === "transcript" && cert.scoreImage) {
      return cert.scoreImage;
    }
    if (
      activeTab === "report" &&
      cert.reportImages &&
      cert.reportImages.length > 0
    ) {
      return cert.reportImages[reportPage] || cert.reportImages[0];
    }
    return cert.image;
  };

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
        <ul className="hidden md:flex space-x-8 text-sm font-medium tracking-wider">
          <li className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300 flex items-center gap-1.5">
            <Link to="/" className="flex items-center gap-1.5">
              <span className="text-[10px] text-[#16C47F] font-bold">01/</span>{" "}
              Home
            </Link>
          </li>
          <li className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300 flex items-center gap-1.5">
            <a href="/#projects" className="flex items-center gap-1.5">
              <span className="text-[10px] text-[#FFD65A] font-bold">02/</span>{" "}
              Projects
            </a>
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

        {/* Mobile hamburger toggle */}
        <button
          onClick={() => setMobileMenuOpen((v) => !v)}
          className="md:hidden p-2 -mr-2 text-gray-300 hover:text-white cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16C47F] rounded-md"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile nav panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden sticky top-[73px] z-30 bg-[#050608]/95 backdrop-blur-lg border-b border-white/[0.06] overflow-hidden"
          >
            <ul className="flex flex-col px-8 py-4 gap-4 text-sm font-medium tracking-wider">
              <li>
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-400 hover:text-white flex items-center gap-1.5"
                >
                  <span className="text-[10px] text-[#16C47F] font-bold">
                    01/
                  </span>{" "}
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="/#projects"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-400 hover:text-white flex items-center gap-1.5"
                >
                  <span className="text-[10px] text-[#FFD65A] font-bold">
                    02/
                  </span>{" "}
                  Projects
                </a>
              </li>
              <li>
                <span className="text-white flex items-center gap-1.5">
                  <span className="text-[10px] text-[#FF9D23] font-bold">
                    03/
                  </span>{" "}
                  Certificates
                </span>
              </li>
              <li>
                <Link
                  to="/experience"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-400 hover:text-white flex items-center gap-1.5"
                >
                  <span className="text-[10px] text-[#16C47F] font-bold">
                    04/
                  </span>{" "}
                  Experience
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

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
          Certifications & workshops that back up{" "}
          <span className="font-extrabold">the work.</span>
        </h2>
        <p className="text-gray-400 mt-6 max-w-xl leading-relaxed font-light">
          Formal training programs, cloud architecture credentials, workshops,
          and professional assessments completed alongside the projects in my
          portfolio.
        </p>
      </header>

      {/* Certificates Grid */}
      <section className="px-8 max-w-7xl mx-auto pb-28 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => {
                setSelectedCertificate(cert);
                setActiveTab("certificate");
                setReportPage(0);
              }}
              className="bg-[#0D0F14]/40 border border-white/[0.06] hover:border-white/[0.15] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-white/[0.02] hover:-translate-y-1.5 transition-all duration-500 flex flex-col group cursor-pointer"
            >
              <div className="h-56 overflow-hidden relative bg-white flex items-center justify-center p-4 border-b border-white/[0.04]">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain transform transition-all duration-700 ease-out group-hover:scale-105"
                />
                {cert.reportImages && (
                  <span className="absolute bottom-3 right-3 bg-black/85 backdrop-blur-md text-[#16C47F] border border-[#16C47F]/30 text-[10px] font-bold px-2.5 py-1 rounded-md shadow-lg flex items-center gap-1.5">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Includes 6-Page Final Report
                  </span>
                )}
                {cert.scoreImage && (
                  <span className="absolute bottom-3 right-3 bg-black/85 backdrop-blur-md text-[#FFD65A] border border-[#FFD65A]/30 text-[10px] font-bold px-2.5 py-1 rounded-md shadow-lg flex items-center gap-1.5">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Includes Transcript
                  </span>
                )}
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] text-gray-500 font-mono tracking-widest font-bold">
                    CERT / {cert.num}
                  </span>
                  <div className="flex items-center gap-2">
                    {cert.score && (
                      <span className="text-[10px] text-[#FFD65A] bg-[#FFD65A]/10 px-2 py-0.5 rounded-md border border-[#FFD65A]/20 font-bold tracking-wider font-mono">
                        Score: {cert.score}
                      </span>
                    )}
                    <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">
                      {cert.date}
                    </span>
                  </div>
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
                  {cert.skills.slice(0, 5).map((skill) => (
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
      <footer id="footer" className="py-14 text-gray-500 border-t border-white/[0.08] mt-auto bg-[#050608] relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Glowing Top Gradient Line */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF9D23]/40 to-transparent mb-10" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
              <span className="text-sm font-semibold text-white tracking-wide">
                Farrel Farhan
              </span>
              <p className="text-xs text-gray-500">
                &copy; {new Date().getFullYear()} All rights reserved.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/"
                className="px-4 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-[#FF9D23]/40 text-xs text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2 font-medium"
              >
                &larr; Back to Home
              </Link>
            </div>
          </div>
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
                className="absolute top-4 right-4 z-25 p-1.5 rounded-full bg-black/60 hover:bg-black/80 text-gray-300 hover:text-white border border-white/[0.1] transition duration-300 backdrop-blur-md cursor-pointer"
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

              {/* Certificate image container */}
              <div className="relative h-72 sm:h-80 overflow-hidden bg-white flex items-center justify-center p-4 border-b border-white/[0.04]">
                {/* Tab Switcher if scoreImage exists */}
                {selectedCertificate.scoreImage && (
                  <div className="absolute top-4 left-4 z-20 flex gap-1.5 bg-[#050608]/85 backdrop-blur-md p-1 rounded-lg border border-white/[0.1]">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveTab("certificate");
                      }}
                      className={`px-3 py-1 rounded-md text-xs font-bold transition-all duration-300 cursor-pointer ${
                        activeTab === "certificate"
                          ? "bg-[#16C47F] text-black shadow-md"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      Certificate
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveTab("transcript");
                      }}
                      className={`px-3 py-1 rounded-md text-xs font-bold transition-all duration-300 cursor-pointer ${
                        activeTab === "transcript"
                          ? "bg-[#FFD65A] text-black shadow-md"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      Transcript / Nilai
                    </button>
                  </div>
                )}

                {/* Tab Switcher if reportImages exists */}
                {selectedCertificate.reportImages && (
                  <div className="absolute top-4 left-4 z-20 flex gap-1.5 bg-[#050608]/85 backdrop-blur-md p-1 rounded-lg border border-white/[0.1]">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveTab("certificate");
                      }}
                      className={`px-3 py-1 rounded-md text-xs font-bold transition-all duration-300 cursor-pointer ${
                        activeTab === "certificate"
                          ? "bg-[#16C47F] text-black shadow-md"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      Certificate
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveTab("report");
                      }}
                      className={`px-3 py-1 rounded-md text-xs font-bold transition-all duration-300 cursor-pointer ${
                        activeTab === "report"
                          ? "bg-[#16C47F] text-black shadow-md"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      Final Report (6 Pages)
                    </button>
                  </div>
                )}

                {/* Page Navigation Controls when viewing Report */}
                {activeTab === "report" && selectedCertificate.reportImages && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-[#050608]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/[0.12] shadow-xl">
                    <button
                      disabled={reportPage === 0}
                      onClick={(e) => {
                        e.stopPropagation();
                        setReportPage((prev) => Math.max(0, prev - 1));
                      }}
                      className="text-xs text-gray-300 hover:text-white disabled:opacity-30 disabled:hover:text-gray-300 px-1 font-bold cursor-pointer"
                    >
                      &larr; Prev
                    </button>
                    <span className="text-[10px] font-mono text-gray-300 font-bold px-1">
                      Page {reportPage + 1} /{" "}
                      {selectedCertificate.reportImages.length}
                    </span>
                    <button
                      disabled={
                        reportPage ===
                        selectedCertificate.reportImages.length - 1
                      }
                      onClick={(e) => {
                        e.stopPropagation();
                        setReportPage((prev) =>
                          Math.min(
                            selectedCertificate.reportImages.length - 1,
                            prev + 1,
                          ),
                        );
                      }}
                      className="text-xs text-gray-300 hover:text-white disabled:opacity-30 disabled:hover:text-gray-300 px-1 font-bold cursor-pointer"
                    >
                      Next &rarr;
                    </button>
                  </div>
                )}

                <div
                  onClick={() => setLightboxOpen(true)}
                  className="w-full h-full flex items-center justify-center cursor-zoom-in group/zoom relative"
                >
                  <img
                    src={getCurrentImageSource(selectedCertificate)}
                    alt={selectedCertificate.title}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/zoom:bg-black/10 transition-colors duration-300 flex items-end justify-end p-3 pointer-events-none">
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
                      View Full Size (
                      {activeTab === "report"
                        ? `Page ${reportPage + 1}`
                        : activeTab === "transcript"
                          ? "Transcript"
                          : "Certificate"}
                      )
                    </span>
                  </div>
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
                    About This Credential
                  </h4>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light">
                    {selectedCertificate.description}
                  </p>
                </div>

                {/* Report Page Quick Jump if reportImages exists */}
                {selectedCertificate.reportImages && (
                  <div className="space-y-2 pt-2 border-t border-white/[0.04]">
                    <div className="flex items-center justify-between">
                      <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                        Final Report Pages (Click to View)
                      </h4>
                      {selectedCertificate.softSkillScore && (
                        <span className="text-xs font-bold text-[#16C47F] font-mono">
                          Tech Avg: {selectedCertificate.weightedScore} | Soft
                          Skill: {selectedCertificate.softSkillScore}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedCertificate.reportImages.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setActiveTab("report");
                            setReportPage(idx);
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all duration-300 cursor-pointer ${
                            activeTab === "report" && reportPage === idx
                              ? "bg-[#16C47F] text-black shadow-md scale-105"
                              : "bg-white/[0.03] text-gray-300 hover:bg-white/[0.08] hover:text-white border border-white/[0.06]"
                          }`}
                        >
                          Page {idx + 1}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Score breakdown if available */}
                {selectedCertificate.scoresList && (
                  <div className="space-y-3 pt-4 border-t border-white/[0.04]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                        Academic Transcript & Course Grades
                      </h4>
                      <span className="text-xs font-bold text-[#FFD65A] font-mono">
                        {selectedCertificate.weightedScore &&
                          `Weighted Score: ${selectedCertificate.weightedScore} / 100`}
                        {selectedCertificate.totalCredits &&
                          ` (${selectedCertificate.totalCredits} Credits)`}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedCertificate.scoresList.map((item, idx) => (
                        <div
                          key={idx}
                          className="bg-white/[0.02] border border-white/[0.05] p-2.5 rounded-lg flex items-center justify-between text-xs"
                        >
                          <span className="text-gray-300 font-medium">
                            {item.subject}
                          </span>
                          <div className="flex items-center gap-2">
                            {item.credits && (
                              <span className="text-gray-500 text-[10px] font-mono">
                                {item.credits} SKS
                              </span>
                            )}
                            <span className="font-bold text-[#16C47F] bg-[#16C47F]/10 px-2 py-0.5 rounded border border-[#16C47F]/20 font-mono">
                              {item.score}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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

            {/* Lightbox toggle tabs if scoreImage exists */}
            {selectedCertificate.scoreImage && (
              <div
                onClick={(e) => e.stopPropagation()}
                className="absolute top-5 left-5 z-10 flex gap-1.5 bg-[#050608]/90 backdrop-blur-md p-1.5 rounded-lg border border-white/[0.15]"
              >
                <button
                  onClick={() => setActiveTab("certificate")}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all duration-300 cursor-pointer ${
                    activeTab === "certificate"
                      ? "bg-[#16C47F] text-black shadow-md"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  View Certificate
                </button>
                <button
                  onClick={() => setActiveTab("transcript")}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all duration-300 cursor-pointer ${
                    activeTab === "transcript"
                      ? "bg-[#FFD65A] text-black shadow-md"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  View Transcript (Nilai)
                </button>
              </div>
            )}

            {/* Lightbox toggle tabs if reportImages exists */}
            {selectedCertificate.reportImages && (
              <div
                onClick={(e) => e.stopPropagation()}
                className="absolute top-5 left-5 z-10 flex flex-col sm:flex-row gap-2 bg-[#050608]/90 backdrop-blur-md p-2 rounded-lg border border-white/[0.15]"
              >
                <div className="flex gap-1.5">
                  <button
                    onClick={() => setActiveTab("certificate")}
                    className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all duration-300 cursor-pointer ${
                      activeTab === "certificate"
                        ? "bg-[#16C47F] text-black shadow-md"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    View Certificate
                  </button>
                  <button
                    onClick={() => setActiveTab("report")}
                    className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all duration-300 cursor-pointer ${
                      activeTab === "report"
                        ? "bg-[#16C47F] text-black shadow-md"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    View Final Report
                  </button>
                </div>
                {activeTab === "report" && (
                  <div className="flex items-center gap-1 border-t sm:border-t-0 sm:border-l border-white/[0.1] pt-1 sm:pt-0 sm:pl-2">
                    {selectedCertificate.reportImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setReportPage(idx)}
                        className={`w-6 h-6 rounded flex items-center justify-center text-[10px] font-mono font-bold transition-all duration-300 cursor-pointer ${
                          reportPage === idx
                            ? "bg-[#16C47F] text-black"
                            : "bg-white/[0.05] text-gray-300 hover:text-white"
                        }`}
                      >
                        {idx + 1}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            <motion.img
              key={`${activeTab}-${reportPage}`}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              src={getCurrentImageSource(selectedCertificate)}
              alt={selectedCertificate.title}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl bg-white"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

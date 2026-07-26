import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Experience() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const experiences = [
    {
      id: 1,
      role: "Event Organizer & Coordinator",
      company: "247 Communication",
      period: "2025 - Present",
      type: "Event Organizer",
      accent: "#16C47F", // Vibrant green
      description:
        "Orchestrating large-scale corporate events, brand activations, and public campaigns. Managing complete lifecycle execution from budgeting to technical on-site management.",
      skills: [
        "Project Management",
        "Budgeting & Logistics",
        "Vendor Coordination",
        "Stage Direction",
        "Crisis Management",
        "Team Leadership",
      ],
      points: [
        "Led end-to-end event execution for corporate clients, coordinating budgets, schedules, and technical vendor contracts.",
        "Supervised on-site crews of up to 30+ people, directing stage operations, sound, lighting, and rundown timelines.",
        "Established clear communication channels between corporate stakeholders and production crews, ensuring client alignment.",
        "Adapted dynamically to on-ground technical challenges, maintaining smooth execution and client satisfaction under tight timelines.",
      ],
    },
    {
      id: 2,
      role: "Wedding Organizer & Planner",
      company: "Visesa",
      period: "2023 - Present",
      type: "Wedding Organizer",
      accent: "#FFD65A", // Vibrant yellow
      description:
        "Coordinating high-stakes wedding ceremonies and receptions. Managing precise execution checklists, scheduling, and multi-vendor integrations under emotional and time pressure.",
      skills: [
        "Client Relations",
        "Operations Management",
        "Rundown Execution",
        "Vendor Integration",
        "Detail Orientation",
        "High-Pressure Execution",
      ],
      points: [
        "Coordinated wedding agendas with minute-by-minute rundown accuracy, aligning vendors, catering, and venue staff.",
        "Managed client consultations to design custom scheduling and solve potential operational bottlenecks prior to the wedding day.",
        "Supervised creative vendors (styling, decoration, sound/lighting) to ensure a flawless translation of the couple's vision.",
        "Resolved real-time logistics challenges and schedule shifts, safeguarding the event experience for the clients and guests.",
      ],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
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
          <li className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300 flex items-center gap-1.5">
            <Link to="/certificates" className="flex items-center gap-1.5">
              <span className="text-[10px] text-[#FF9D23] font-bold">03/</span>{" "}
              Certificates
            </Link>
          </li>
          <li className="text-white cursor-pointer transition-colors duration-300 flex items-center gap-1.5">
            <span className="text-[10px] text-[#16C47F] font-bold">04/</span>{" "}
            Experience
          </li>
          <li className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300 flex items-center gap-1.5">
            <a
              href={`https://wa.me/6282135920275?text=${encodeURIComponent(
                "Hi, I'm interested in your portfolio—let's connect.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5"
            >
              <span className="text-[10px] text-gray-400 font-bold">05/</span>{" "}
              Contact
            </a>
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
                <Link
                  to="/certificates"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-400 hover:text-white flex items-center gap-1.5"
                >
                  <span className="text-[10px] text-[#FF9D23] font-bold">
                    03/
                  </span>{" "}
                  Certificates
                </Link>
              </li>
              <li>
                <span className="text-white flex items-center gap-1.5">
                  <span className="text-[10px] text-[#16C47F] font-bold">
                    04/
                  </span>{" "}
                  Experience
                </span>
              </li>
              <li>
                <a
                  href={`https://wa.me/6282135920275?text=${encodeURIComponent(
                    "Hi, I'm interested in your portfolio—let's connect.",
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-400 hover:text-white flex items-center gap-1.5"
                >
                  <span className="text-[10px] text-gray-400 font-bold">
                    05/
                  </span>{" "}
                  Contact
                </a>
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

        <span className="text-xs text-[#16C47F] font-bold tracking-widest uppercase block mb-2">
          [ 04 / EXPERIENCE ]
        </span>
        <h2 className="text-4xl md:text-6xl font-light text-white tracking-tight max-w-3xl">
          Execution, organization, and{" "}
          <span className="font-extrabold">coordination.</span>
        </h2>
        <p className="text-gray-400 mt-6 max-w-xl leading-relaxed font-light">
          A record of my professional work in event planning and coordination.
          Managing high-stakes operations, stakeholder communications, and tight
          timelines builds a strong foundation in problem-solving and
          management—skills that directly translate to building reliable
          software systems.
        </p>
      </header>

      {/* Timeline Section */}
      <section className="px-8 max-w-5xl mx-auto pb-28 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative border-l border-white/[0.06] ml-4 md:ml-32 pl-8 md:pl-16 space-y-16"
        >
          {/* Vertical line indicator */}
          <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-[#16C47F] via-[#FFD65A] to-transparent"></div>

          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative group"
            >
              {/* Timeline marker */}
              <div
                className="absolute -left-[37px] md:-left-[71px] top-1.5 w-4 h-4 rounded-full bg-[#050608] border-2 transition-all duration-300 group-hover:scale-125 flex items-center justify-center"
                style={{ borderColor: exp.accent }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: exp.accent }}
                ></div>
              </div>

              {/* Date tag floating on large screens */}
              <div className="hidden md:block absolute -left-48 top-1 w-32 text-right">
                <span className="text-xs font-bold font-mono tracking-wider text-gray-500 uppercase">
                  {exp.period}
                </span>
              </div>

              {/* Card body */}
              <div className="bg-[#0D0F14]/40 border border-white/[0.06] hover:border-white/[0.12] rounded-2xl p-6 sm:p-8 hover:shadow-2xl hover:shadow-white/[0.01] transition-all duration-500">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <div>
                    {/* Mobile date tag */}
                    <span className="inline-block md:hidden text-[10px] font-bold font-mono tracking-wider text-gray-500 uppercase mb-1">
                      {exp.period}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-white transition-colors">
                      {exp.role}
                    </h3>
                    <p
                      className="text-sm font-semibold tracking-wide uppercase mt-0.5"
                      style={{ color: exp.accent }}
                    >
                      {exp.company} &middot; {exp.type}
                    </p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed font-light mb-6">
                  {exp.description}
                </p>

                {/* Key Responsibilities list */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    Key Contributions & Responsibilities
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {exp.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 font-light"
                      >
                        <svg
                          className="w-4 h-4 shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                          style={{ color: exp.accent }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills tags footer */}
                <div className="pt-5 border-t border-white/[0.03]">
                  <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">
                    Transferable Expertise
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[9px] px-2.5 py-1 rounded-md font-bold uppercase tracking-wider transition-colors duration-300"
                        style={{
                          backgroundColor: `${exp.accent}0a`,
                          borderColor: `${exp.accent}20`,
                          borderWidth: "1px",
                          color: exp.accent,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Education Section */}
      <section className="px-8 max-w-5xl mx-auto pb-28 relative z-10 border-t border-white/[0.04] pt-20">
        <span className="text-xs text-[#FF9D23] font-bold tracking-widest uppercase block mb-2">
          [ 05 / EDUCATION ]
        </span>
        <h3 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-10">
          Academic <span className="font-extrabold">background.</span>
        </h3>

        <div className="bg-[#0D0F14]/40 border border-white/[0.06] hover:border-white/[0.12] rounded-2xl p-6 sm:p-8 hover:shadow-2xl hover:shadow-white/[0.01] transition-all duration-500 flex flex-col md:flex-row md:items-start justify-between gap-6 relative overflow-hidden group">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF9D23]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#FF9D23]/10 transition-colors duration-500"></div>

          <div className="space-y-4">
            <div>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-1.5">
                Bachelor of Information Systems
              </h4>
              <p className="text-[#FF9D23] text-sm font-bold uppercase tracking-wider">
                UPN "Veteran" Jawa Timur
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Fakultas Ilmu Komputer &middot; Program Studi Sistem Informasi
              </p>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed font-light max-w-2xl">
              Studied the intersection of business strategy, software
              development, and database systems. Gained strong foundations in
              designing structured databases, analyzing system architectures,
              and implementing engineering methodologies.
            </p>

            <div className="space-y-2.5 pt-2">
              <h5 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                Core Academic Focus
              </h5>
              <div className="flex flex-wrap gap-2">
                {[
                  "System Analysis & Design",
                  "Database Management Systems",
                  "Web Development",
                  "Software Engineering",
                  "Enterprise Architecture",
                  "Project Management",
                ].map((item) => (
                  <span
                    key={item}
                    className="text-[10px] text-gray-300 bg-white/[0.03] border border-white/[0.06] px-3 py-1 rounded-md"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="shrink-0 md:text-right flex flex-row md:flex-col justify-between items-center md:items-end gap-2 border-t md:border-t-0 border-white/[0.03] pt-4 md:pt-0 mt-2 md:mt-0">
            <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider bg-white/[0.02] border border-white/[0.06] px-3 py-1.5 rounded-lg">
              Surabaya, Indonesia
            </span>
            <span className="text-xs font-mono font-bold text-[#FF9D23] uppercase tracking-widest mt-1">
              Graduated 2026
            </span>
          </div>
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
    </div>
  );
}

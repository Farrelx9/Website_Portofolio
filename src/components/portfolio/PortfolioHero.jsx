import React from "react";
import { motion } from "framer-motion";
import profilePhoto from "../../assets/profile_photo.jpg";

export default function PortfolioHero({ isMobile }) {
  return (
    <header className="relative w-full overflow-hidden py-28 md:py-36 z-10">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.02] border border-white/[0.06] mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#16C47F] animate-pulse"></span>
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
              Available for hire
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-5xl md:text-7xl font-light mb-6 tracking-tight text-white leading-none"
          >
            Fresh Graduate Full-Stack Developer <br />
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="font-extrabold bg-gradient-to-r from-[#16C47F] via-[#FFD65A] to-[#FF9D23] bg-clip-text text-transparent"
              style={{ backgroundSize: "200% auto" }}
            >
              {isMobile ? "building for scale." : "Building for Scale."}
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed mx-auto md:mx-0 font-light"
          >
            Hi, I'm Farrel Farhan, a Fresh Graduate Full-Stack Developer
            passionate about building clean, scalable, and user-focused web
            applications. With strong fundamentals in JavaScript, React, and
            modern web technologies, I specialize in turning design concepts
            into responsive, high-performance interfaces — always learning,
            iterating, and committed to delivering high-quality work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <motion.a
              whileHover={{ y: -2 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              href="#projects"
              className="px-7 py-3 bg-white text-black hover:bg-gray-200 rounded-lg font-bold tracking-wide transition-colors duration-300 shadow-xl shadow-white/5 cursor-pointer text-sm"
            >
              Selected Works
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              href={`https://wa.me/6282135920275?text=${encodeURIComponent(
                "Hi, I'm interested in your portfolio—let's connect.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 bg-transparent border border-white/[0.1] hover:border-[#FFD65A] text-gray-300 hover:text-white rounded-lg font-semibold tracking-wide transition-colors duration-300 cursor-pointer text-sm"
            >
              Say Hello
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              href="/CV_FarrelFarhan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-7 py-3 bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] hover:border-[#FF9D23] text-gray-300 hover:text-white rounded-lg font-semibold tracking-wide transition-colors duration-300 cursor-pointer text-sm inline-flex items-center gap-2"
            >
              <svg
                className="w-4 h-4 text-[#FF9D23] transition-transform duration-300 group-hover:translate-y-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"
                />
              </svg>
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Photo Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 flex justify-center items-center"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="relative group"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute inset-4 border border-[#16C47F]/40 translate-x-4 translate-y-4 rounded-2xl group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
              <div className="absolute inset-4 border border-[#FF9D23]/30 -translate-x-4 -translate-y-4 rounded-2xl group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"></div>

              <div className="relative w-64 aspect-[3/4] md:w-80 bg-[#0D0F14] border border-white/[0.08] rounded-2xl p-2 overflow-hidden flex items-center justify-center shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Farrel Farhan"
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover object-top rounded-xl filter group-hover:grayscale-0 transition-all duration-700 ease-out scale-[1.02] group-hover:scale-105"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.6 },
          y: { delay: 1, duration: 1.8, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors duration-300 cursor-pointer"
      >
        <span className="text-[9px] font-bold uppercase tracking-widest">
          Scroll
        </span>
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
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.a>
    </header>
  );
}

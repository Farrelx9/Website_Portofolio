import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CredentialsCTASection({
  staggerContainer,
  staggerItem,
}) {
  return (
    <section className="px-8 max-w-7xl mx-auto pb-28 relative z-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Certificates Card */}
        <motion.div
          variants={staggerItem}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="border border-white/[0.06] rounded-2xl bg-[#0D0F14]/40 px-8 py-10 flex flex-col justify-between items-start gap-6 hover:border-[#FF9D23]/30 transition-colors duration-300"
        >
          <div>
            <span className="text-xs text-[#FF9D23] font-bold tracking-widest uppercase block mb-2">
              [ 03 / CREDENTIALS ]
            </span>
            <h3 className="text-2xl font-light text-white tracking-tight">
              Backed by{" "}
              <span className="font-extrabold">formal certifications</span>
            </h3>
            <p className="text-gray-400 mt-3 font-light text-sm leading-relaxed">
              A closer look at the frontend and web programming programs I've
              completed.
            </p>
          </div>
          <Link
            to="/certificates"
            className="px-6 py-2.5 bg-white text-black hover:bg-gray-200 rounded-lg font-bold tracking-wide transition-all duration-300 shadow-xl shadow-white/5 hover:-translate-y-0.5 cursor-pointer text-xs inline-flex items-center gap-2"
          >
            View Certificates
            <svg
              className="w-3.5 h-3.5 text-[#FF9D23]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          variants={staggerItem}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="border border-white/[0.06] rounded-2xl bg-[#0D0F14]/40 px-8 py-10 flex flex-col justify-between items-start gap-6 hover:border-[#16C47F]/30 transition-colors duration-300"
        >
          <div>
            <span className="text-xs text-[#16C47F] font-bold tracking-widest uppercase block mb-2">
              [ 04 / EXPERIENCE ]
            </span>
            <h3 className="text-2xl font-light text-white tracking-tight">
              Orchestration &{" "}
              <span className="font-extrabold">leadership roles</span>
            </h3>
            <p className="text-gray-400 mt-3 font-light text-sm leading-relaxed">
              Explore my professional background coordinating large-scale
              events and weddings.
            </p>
          </div>
          <Link
            to="/experience"
            className="px-6 py-2.5 bg-white text-black hover:bg-gray-200 rounded-lg font-bold tracking-wide transition-all duration-300 hover:-translate-y-0.5 cursor-pointer text-xs inline-flex items-center gap-2"
          >
            View Experience
            <svg
              className="w-3.5 h-3.5 text-[#16C47F]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

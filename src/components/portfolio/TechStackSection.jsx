import React from "react";
import { motion } from "framer-motion";

export default function TechStackSection({
  Reveal,
  staggerContainer,
  staggerItem,
  skillCategories,
}) {
  return (
    <section
      id="skills"
      className="py-20 px-8 max-w-7xl mx-auto border-t border-white/[0.04] relative z-10"
    >
      <div className="flex flex-col md:flex-row gap-12">
        {/* Section Heading */}
        <Reveal className="md:w-1/3">
          <span className="text-xs text-[#FFD65A] font-bold tracking-widest uppercase block mb-2">
            [ SKILLS & TOOLS ]
          </span>
          <h3 className="text-3xl md:text-4xl font-light text-white tracking-tight">
            My technical <span className="font-extrabold">arsenal.</span>
          </h3>
          <p className="text-gray-400 mt-4 text-sm leading-relaxed font-light max-w-md">
            A curated selection of languages, frameworks, databases, and
            developer tools that I use to build web applications.
          </p>
        </Reveal>

        {/* Categories Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {/* Frontend Category */}
          <motion.div
            variants={staggerItem}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="bg-[#0D0F14]/40 border border-white/[0.06] rounded-2xl p-6 flex flex-col justify-between group/card hover:border-[#16C47F]/30 transition-colors duration-300"
          >
            <div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-4">
                01 / Frontend
              </span>
              <h4 className="text-lg font-bold text-white mb-6 group-hover/card:text-[#16C47F] transition-colors duration-300">
                Client & Interface
              </h4>
              <div className="flex flex-wrap gap-2">
                {skillCategories.frontend.map((tech) => (
                  <motion.span
                    whileHover={{ y: -2 }}
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 text-[10px] text-gray-300 bg-white/[0.02] border border-white/[0.06] px-2.5 py-1 rounded-md cursor-default"
                  >
                    <tech.icon
                      className="w-3 h-3 shrink-0"
                      style={{ color: tech.color }}
                    />
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Backend Category */}
          <motion.div
            variants={staggerItem}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="bg-[#0D0F14]/40 border border-white/[0.06] rounded-2xl p-6 flex flex-col justify-between group/card hover:border-[#FFD65A]/30 transition-colors duration-300"
          >
            <div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-4">
                02 / Backend
              </span>
              <h4 className="text-lg font-bold text-white mb-6 group-hover/card:text-[#FFD65A] transition-colors duration-300">
                Logic & Services
              </h4>
              <div className="flex flex-wrap gap-2">
                {skillCategories.backend.map((tech) => (
                  <motion.span
                    whileHover={{ y: -2 }}
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 text-[10px] text-gray-300 bg-white/[0.02] border border-white/[0.06] px-2.5 py-1 rounded-md cursor-default"
                  >
                    <tech.icon
                      className="w-3 h-3 shrink-0"
                      style={{ color: tech.color }}
                    />
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Databases & Tools Category */}
          <motion.div
            variants={staggerItem}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="bg-[#0D0F14]/40 border border-white/[0.06] rounded-2xl p-6 flex flex-col justify-between group/card hover:border-[#FF9D23]/30 transition-colors duration-300"
          >
            <div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-4">
                03 / Infrastructure
              </span>
              <h4 className="text-lg font-bold text-white mb-6 group-hover/card:text-[#FF9D23] transition-colors duration-300">
                Storage & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {skillCategories.infra.map((tech) => (
                  <motion.span
                    whileHover={{ y: -2 }}
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 text-[10px] text-gray-300 bg-white/[0.02] border border-white/[0.06] px-2.5 py-1 rounded-md cursor-default"
                  >
                    <tech.icon
                      className="w-3 h-3 shrink-0"
                      style={{ color: tech.color }}
                    />
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectCarouselSection({
  Reveal,
  slideVariants,
  cardContentVariants,
  cardItemVariants,
  projects,
  currentIndex,
  direction,
  isPaused,
  setIsPaused,
  paginate,
  setCurrentIndex,
  setDirection,
  setSelectedProject,
  setActiveImageIndex,
}) {
  return (
    <section
      id="projects"
      className="py-28 px-8 max-w-7xl mx-auto border-t border-white/[0.04] relative z-10"
    >
      <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 w-full">
          <div>
            <span className="text-xs text-[#16C47F] font-bold tracking-widest uppercase block mb-2">
              [ 02 / SELECTED WORK ]
            </span>
            <h3 className="text-3xl md:text-4xl font-light text-white tracking-tight">
              A curated portfolio of{" "}
              <span className="font-extrabold">
                production-ready web applications
              </span>
            </h3>
          </div>
          <div className="h-px bg-white/[0.05] flex-1 mx-8 hidden md:block"></div>
        </div>
      </Reveal>

      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slide track */}
        <div className="relative overflow-hidden rounded-2xl">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            {(() => {
              const project = projects[currentIndex];
              const hasWebsite = project.liveUrl && project.liveUrl !== "#";
              const hasGithub = !hasWebsite && project.githubUrl;
              const currentImage = project.images
                ? project.images[0]
                : project.image;

              return (
                <motion.div
                  key={project.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  style={{ touchAction: "pan-y" }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={(e, info) => {
                    if (info.offset.x < -60) paginate(1);
                    else if (info.offset.x > 60) paginate(-1);
                  }}
                  onClick={() => {
                    setSelectedProject(project);
                    setActiveImageIndex(0);
                  }}
                  className="bg-[#0D0F14]/60 md:backdrop-blur-sm accelerate-gpu border border-white/[0.08] hover:border-white/[0.15] rounded-2xl overflow-hidden shadow-2xl shadow-black/20 flex flex-col md:flex-row cursor-pointer group"
                >
                  {/* --- SISI GAMBAR --- */}
                  <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto md:h-auto relative overflow-hidden bg-[#090A0E] border-b md:border-b-0 md:border-r border-white/[0.06] shrink-0">
                    {/* Browser Chrome */}
                    <div className="absolute top-0 left-0 right-0 h-7 md:h-8 bg-[#0D0F14]/90 md:backdrop-blur-md flex items-center px-3 md:px-4 gap-2 z-10 border-b border-white/[0.03]">
                      <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#F93827]/80"></span>
                      <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#FFD65A]/80"></span>
                      <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#16C47F]/80"></span>
                      <span className="ml-2 flex-1 bg-white/[0.03] rounded-sm h-4 md:h-5 text-[8px] md:text-[9px] text-gray-500 tracking-wider flex items-center px-2 md:px-3 truncate">
                        {hasWebsite
                          ? project.liveUrl.replace("https://", "")
                          : project.title}
                      </span>
                    </div>

                    {/* Gambar */}
                    <img
                      src={currentImage}
                      alt={project.title}
                      draggable={false}
                      loading="lazy"
                      decoding="async"
                      className={`w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-105 ${
                        project.imageFit === "contain"
                          ? "object-contain p-6 bg-[#0D0F14]"
                          : "object-cover object-top"
                      }`}
                      style={{ paddingTop: "28px" }}
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F14] via-transparent to-transparent opacity-60 md:opacity-40 pointer-events-none"></div>

                    {/* Hint hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <span className="bg-black/60 md:backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-full border border-white/10">
                        Click to explore
                      </span>
                    </div>
                  </div>

                  {/* --- SISI TEKS --- */}
                  <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
                    <motion.div
                      variants={cardContentVariants}
                      initial="hidden"
                      animate="show"
                    >
                      <motion.div
                        variants={cardItemVariants}
                        className="flex items-center justify-between mb-4"
                      >
                        <span className="text-[10px] text-gray-500 font-mono tracking-widest font-bold">
                          PROJ / {project.num}
                        </span>
                        <div className="flex gap-1.5 flex-wrap justify-end">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="text-[9px] md:text-[10px] text-[#FF9D23] bg-[#FF9D23]/5 px-2 py-1 rounded-md border border-[#FF9D23]/10 font-bold uppercase tracking-wider"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>

                      <motion.h4
                        variants={cardItemVariants}
                        className="text-2xl sm:text-3xl font-bold mb-3 text-white group-hover:text-[#FFD65A] transition-colors duration-300 leading-tight"
                      >
                        {project.title}
                      </motion.h4>

                      <motion.p
                        variants={cardItemVariants}
                        className="text-gray-400 text-sm md:text-base leading-relaxed font-light line-clamp-4 md:line-clamp-none"
                      >
                        {project.description}
                      </motion.p>
                    </motion.div>

                    <motion.div
                      variants={cardItemVariants}
                      className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-t border-white/[0.06] pt-6 mt-6 md:mt-8 gap-4"
                    >
                      <span className="text-[#16C47F] group-hover:text-white font-bold text-xs tracking-wider flex items-center gap-1.5 transition-colors">
                        EXPLORE PROJECT{" "}
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                          &rarr;
                        </span>
                      </span>

                      {hasWebsite && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-gray-300 hover:text-white transition-colors text-xs font-semibold px-4 py-2 bg-white/[0.03] hover:bg-white/[0.08] rounded-lg border border-white/[0.08] hover:border-[#16C47F]/30 flex items-center gap-2"
                        >
                          <span>Visit Site</span>
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
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      )}
                      {hasGithub && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-gray-300 hover:text-white transition-colors text-xs font-semibold px-4 py-2 bg-white/[0.03] hover:bg-white/[0.08] rounded-lg border border-white/[0.08] hover:border-[#16C47F]/30 flex items-center gap-2"
                        >
                          <span>View Code</span>
                          <svg
                            className="w-3 h-3"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                            />
                          </svg>
                        </a>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })()}
          </AnimatePresence>
        </div>

        {/* Prev / Next arrows */}
        <button
          onClick={() => paginate(-1)}
          aria-label="Previous project"
          className="absolute left-2 md:-left-5 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-[#0D0F14]/90 border border-white/[0.08] text-gray-400 hover:text-white hover:border-[#16C47F]/40 hover:bg-[#16C47F]/10 backdrop-blur-md transition-all duration-300 cursor-pointer shadow-lg"
        >
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={() => paginate(1)}
          aria-label="Next project"
          className="absolute right-2 md:-right-5 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-[#0D0F14]/90 border border-white/[0.08] text-gray-400 hover:text-white hover:border-[#16C47F]/40 hover:bg-[#16C47F]/10 backdrop-blur-md transition-all duration-300 cursor-pointer shadow-lg"
        >
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              aria-label={`Go to project ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex
                  ? "w-8 bg-[#16C47F]"
                  : "w-1.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

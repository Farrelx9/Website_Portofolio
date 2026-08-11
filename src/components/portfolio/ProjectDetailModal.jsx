import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectDetailModal({
  selectedProject,
  setSelectedProject,
  activeImageIndex,
  setActiveImageIndex,
  setZoomedImage,
  setZoomIndex,
  closeButtonRef,
}) {
  return (
    <AnimatePresence>
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden pointer-events-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-[#050608]/95 md:backdrop-blur-md"
          ></motion.div>

          {/* Modal Body */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-[#0D0F14] border border-white/[0.08] rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden z-10 flex flex-col max-h-[85vh] md:max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              ref={closeButtonRef}
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 p-1.5 rounded-full bg-black/60 hover:bg-black/80 text-gray-400 hover:text-white border border-white/[0.08] transition-colors duration-300 md:backdrop-blur-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16C47F]"
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

            {/* Image Banner */}
            {selectedProject.images && selectedProject.images.length > 0 ? (
              <div className="relative flex flex-col border-b border-white/[0.04]">
                {/* Browser chrome */}
                <div className="bg-[#0D0F14] flex items-center px-4 py-2.5 gap-2 border-b border-white/[0.03] shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F93827]/70"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFD65A]/70"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16C47F]/70"></span>
                  <span className="ml-3 flex-1 bg-white/[0.03] rounded text-[10px] text-gray-500 h-5 flex items-center px-3 truncate max-w-xs">
                    {selectedProject.liveUrl &&
                    selectedProject.liveUrl !== "#"
                      ? selectedProject.liveUrl.replace("https://", "")
                      : selectedProject.title}
                  </span>
                </div>
                {/* Screenshot — full-bleed, cropped to top */}
                <div
                  className="h-56 sm:h-72 md:h-80 overflow-hidden relative bg-[#050608] cursor-zoom-in group/zoom"
                  onClick={() => {
                    setZoomedImage({
                      src: selectedProject.images[activeImageIndex],
                      alt:
                        selectedProject.imageLabels?.[activeImageIndex] ??
                        selectedProject.title,
                      images: selectedProject.images,
                      labels: selectedProject.imageLabels,
                    });
                    setZoomIndex(activeImageIndex);
                  }}
                >
                  <motion.img
                    key={activeImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    src={selectedProject.images[activeImageIndex]}
                    alt={`${selectedProject.title} – ${
                      selectedProject.imageLabels?.[activeImageIndex] ??
                      `view ${activeImageIndex + 1}`
                    }`}
                    className="w-full h-full object-contain object-top p-3 sm:p-4 group-hover/zoom:scale-[1.02] transition-transform duration-300 accelerate-gpu"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0D0F14] to-transparent pointer-events-none" />
                  {/* Zoom hint */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover/zoom:opacity-100 transition-opacity duration-200 bg-black/60 md:backdrop-blur-md rounded-full p-1.5 border border-white/10">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                      />
                    </svg>
                  </div>
                </div>
                {/* Tab switcher */}
                {selectedProject.images.length > 1 && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-[#050608]/90 md:backdrop-blur-md p-1 rounded-full border border-white/[0.06] shadow-xl z-20">
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
                        {selectedProject.imageLabels?.[idx] ||
                          `View ${idx + 1}`}
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
                    {selectedProject.liveUrl &&
                    selectedProject.liveUrl !== "#"
                      ? selectedProject.liveUrl.replace("https://", "")
                      : selectedProject.title}
                  </span>
                </div>
                {/* Screenshot — full-bleed, cropped to top */}
                <div
                  className="h-56 sm:h-72 md:h-80 overflow-hidden relative bg-[#050608] cursor-zoom-in group/zoom"
                  onClick={() => {
                    setZoomedImage({
                      src: selectedProject.image,
                      alt: selectedProject.title,
                      images: null,
                      labels: null,
                    });
                    setZoomIndex(0);
                  }}
                >
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-contain object-top p-3 sm:p-4 group-hover/zoom:scale-[1.02] transition-transform duration-300 accelerate-gpu"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0D0F14] to-transparent pointer-events-none" />
                  {/* Zoom hint */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover/zoom:opacity-100 transition-opacity duration-200 bg-black/60 md:backdrop-blur-md rounded-full p-1.5 border border-white/10">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-40 bg-gray-800 flex items-center justify-center text-gray-500 font-semibold border-b border-white/[0.04]">
                Image Placeholder
              </div>
            )}

            {/* Content Container (Scrollable) */}
            <div
              style={{
                touchAction: "pan-y",
                WebkitOverflowScrolling: "touch",
              }}
              className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1"
            >
              <div>
                <h3
                  id="project-modal-title"
                  className="text-2xl sm:text-3xl font-extrabold text-white mb-2"
                >
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
                  {selectedProject.longDescription ||
                    selectedProject.description}
                </p>
              </div>

              {selectedProject.features &&
                selectedProject.features.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-400">
                      {selectedProject.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 font-light"
                        >
                          <svg
                            className="w-4 h-4 text-[#16C47F] shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>

            {/* Action Buttons Footer */}
            <div className="p-6 border-t border-white/[0.04] bg-[#0D0F14]/95 md:backdrop-blur-sm flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 rounded-lg bg-transparent hover:bg-white/[0.04] text-gray-400 hover:text-white transition duration-300 font-semibold text-xs tracking-wider uppercase cursor-pointer"
              >
                Close
              </button>

              {selectedProject.liveUrl && selectedProject.liveUrl !== "#" && (
                <motion.a
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-white hover:bg-gray-200 text-black transition-colors duration-300 font-bold text-xs tracking-wider uppercase flex items-center gap-2 cursor-pointer"
                >
                  Visit Website
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
                </motion.a>
              )}

              {(!selectedProject.liveUrl ||
                selectedProject.liveUrl === "#") &&
                selectedProject.githubUrl && (
                  <motion.a
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-lg bg-white hover:bg-gray-200 text-black transition-colors duration-300 font-bold text-xs tracking-wider uppercase flex items-center gap-2 cursor-pointer"
                  >
                    View on GitHub
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                      />
                    </svg>
                  </motion.a>
                )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

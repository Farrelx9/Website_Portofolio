import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageLightboxModal({
  zoomedImage,
  setZoomedImage,
  zoomIndex,
  setZoomIndex,
  zoomNavigate,
}) {
  return (
    <AnimatePresence>
      {zoomedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 md:backdrop-blur-xl"
          onClick={() => setZoomedImage(null)}
        >
          {/* Image */}
          <motion.div
            key={zoomIndex}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-[95vw] max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={
                zoomedImage.images
                  ? zoomedImage.images[zoomIndex]
                  : zoomedImage.src
              }
              alt={
                zoomedImage.labels
                  ? (zoomedImage.labels[zoomIndex] ?? zoomedImage.alt)
                  : zoomedImage.alt
              }
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl shadow-2xl select-none"
              draggable={false}
            />
            {/* Label */}
            {zoomedImage.labels && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md text-white text-xs font-semibold px-4 py-1.5 rounded-full border border-white/10">
                {zoomedImage.labels[zoomIndex] ?? `View ${zoomIndex + 1}`}
              </div>
            )}
          </motion.div>

          {/* Prev button */}
          {zoomedImage.images && zoomedImage.images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                zoomNavigate(-1);
              }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all duration-200 cursor-pointer backdrop-blur-md"
              aria-label="Previous image"
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {/* Next button */}
          {zoomedImage.images && zoomedImage.images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                zoomNavigate(1);
              }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all duration-200 cursor-pointer backdrop-blur-md"
              aria-label="Next image"
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}

          {/* Dot indicators */}
          {zoomedImage.images && zoomedImage.images.length > 1 && (
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 pb-8">
              {zoomedImage.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setZoomIndex(idx);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === zoomIndex
                      ? "w-6 bg-white"
                      : "w-1.5 bg-white/30 hover:bg-white/60"
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          )}

          {/* Close button */}
          <button
            onClick={() => setZoomedImage(null)}
            className="absolute top-4 right-4 z-30 p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all duration-200 cursor-pointer backdrop-blur-md"
            aria-label="Close zoom"
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

          {/* Counter */}
          {zoomedImage.images && zoomedImage.images.length > 1 && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md text-white/60 text-xs font-mono px-3 py-1 rounded-full border border-white/10">
              {zoomIndex + 1} / {zoomedImage.images.length}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

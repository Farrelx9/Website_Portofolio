import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * LoadingScreen Component
 *
 * @param {number} duration - Simulated loading duration in milliseconds (default: 3000ms).
 * @param {boolean} show - Explicit visibility control. If false, forces the loader to complete and exit.
 * @param {function} onComplete - Callback executed when the loading is done and the exit animation starts.
 */
export default function LoadingScreen({
  duration = 3000,
  show = true,
  onComplete,
}) {
  const [progress, setProgress] = useState(0);
  const [shouldRender, setShouldRender] = useState(show);

  useEffect(() => {
    // If external show control becomes false, fast-forward progress to 100% and hide
    if (!show) {
      setProgress(100);
      const timeout = setTimeout(() => {
        setShouldRender(false);
        if (onComplete) onComplete();
      }, 600); // Match exit animation duration
      return () => clearTimeout(timeout);
    }

    setShouldRender(true);
    setProgress(0);

    const intervalTime = 30; // Milliseconds per update step
    const totalSteps = duration / intervalTime;
    const increment = 100 / totalSteps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          // Wait briefly at 100% for user feedback before triggering exit
          setTimeout(() => {
            setShouldRender(false);
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [duration, show, onComplete]);

  return (
    <AnimatePresence>
      {shouldRender && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 0.95,
            y: -30,
            transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gray-950 text-white select-none"
        >
          {/* Ambient Glows */}
          <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-purple-500/10 blur-[100px] pointer-events-none"></div>

          {/* Spinner and Logo */}
          <div className="relative flex items-center justify-center w-36 h-36 mb-8">
            {/* Spinning Outer Ring 1 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-t-blue-500 border-r-purple-500 border-b-transparent border-l-transparent filter drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
            />
            {/* Spinning Outer Ring 2 (reverse & slightly faster) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
              className="absolute inset-2 rounded-full border border-b-indigo-400 border-l-pink-400 border-t-transparent border-r-transparent opacity-80"
            />
            {/* Pulsing Inner Circle */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
                  "0 20px 35px -5px rgba(139, 92, 246, 0.6)",
                  "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
                ],
              }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center"
            >
              <span className="text-2xl font-extrabold text-white tracking-widest font-sans">
                FF
              </span>
            </motion.div>
          </div>

          {/* Loading status */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h2 className="text-xl font-bold tracking-[0.2em] uppercase bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-1">
              Farrel Farhan
            </h2>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-6">
              Loading Portfolio...
            </p>
          </motion.div>

          {/* Progress Section */}
          <div className="flex flex-col items-center gap-2">
            {/* Progress Bar */}
            <div className="w-56 h-1 bg-gray-900 rounded-full overflow-hidden border border-gray-800/50">
              <div
                className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-all duration-300 ease-out rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Percentage Display */}
            <span className="text-sm font-mono text-gray-400 font-medium">
              {Math.min(100, Math.max(0, Math.round(progress)))}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../ThemeContext";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.88 }}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300 text-gray-400 hover:text-white focus:outline-none"
    >
      {/* Subtle active ring */}
      <span className="absolute inset-0 rounded-full bg-white/[0.05] opacity-0 hover:opacity-100 transition-opacity duration-200" />

      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          /* Sun — shown in dark mode (click = go light) */
          <motion.svg
            key="sun"
            initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.25 }}
            className="relative w-4 h-4 text-[#FFD65A]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" strokeLinecap="round" />
            <line x1="12" y1="21" x2="12" y2="23" strokeLinecap="round" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" strokeLinecap="round" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" strokeLinecap="round" />
            <line x1="1" y1="12" x2="3" y2="12" strokeLinecap="round" />
            <line x1="21" y1="12" x2="23" y2="12" strokeLinecap="round" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" strokeLinecap="round" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" strokeLinecap="round" />
          </motion.svg>
        ) : (
          /* Moon — shown in light mode (click = go dark) */
          <motion.svg
            key="moon"
            initial={{ rotate: 90, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.25 }}
            className="relative w-4 h-4 text-indigo-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
            />
          </motion.svg>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

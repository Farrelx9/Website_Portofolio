import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // English nav items
  const navItems = [
    { id: "home",         label: "Home",         href: "#top",          isRoute: false },
    { id: "skills",       label: "Skills",       href: "#skills",       isRoute: false },
    { id: "projects",     label: "Projects",     href: "#projects",     isRoute: false },
    { id: "certificates", label: "Certificates", href: "/certificates", isRoute: true  },
    { id: "experience",   label: "Experience",   href: "/experience",   isRoute: true  },
    { id: "contact",      label: "Contact",      href: "#footer",       isRoute: false },
  ];

  // Active section tracking based on scroll / route
  useEffect(() => {
    if (location.pathname === "/certificates") { setActiveSection("certificates"); return; }
    if (location.pathname === "/experience")   { setActiveSection("experience");   return; }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (location.pathname !== "/") return;

      const sections = [
        { id: "home",     elementId: "top"      },
        { id: "skills",   elementId: "skills"   },
        { id: "projects", elementId: "projects" },
        { id: "contact",  elementId: "footer"   },
      ];

      const scrollPosition = window.scrollY + 220;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].elementId);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleNavClick = (e, item) => {
    setMobileMenuOpen(false);
    if (item.isRoute) return;
    e.preventDefault();

    const scrollTo = (id) => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollTo(item.href.replace("#", "")), 150);
    } else {
      scrollTo(item.href.replace("#", ""));
    }
  };

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      {/* ── Floating Pill Capsule ── */}
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`pointer-events-auto flex items-center gap-1 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full backdrop-blur-xl border shadow-[0_10px_35px_rgba(0,0,0,0.7)] transition-all duration-300 ${
          scrolled
            ? "bg-[#090a0f]/95 border-white/[0.14]"
            : "bg-[#0d0e15]/85 border-white/10"
        }`}
      >
        {/* Brand — mobile only */}
        <Link
          to="/"
          className="flex items-center gap-2 pl-1 pr-2 sm:hidden text-white font-bold text-xs uppercase tracking-widest"
        >
          <span className="w-2 h-2 rounded-full bg-[#16C47F] animate-pulse shrink-0" />
          <span>Farrel</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden sm:flex items-center gap-0.5 md:gap-1 text-[11px] md:text-xs font-semibold uppercase tracking-wider text-gray-400">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const linkClass = `relative block px-3 py-1.5 transition-colors duration-300 ${
              isActive ? "text-white font-bold" : "hover:text-white"
            }`;
            const indicator = isActive && (
              <motion.div
                layoutId="activeNavPill"
                className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#16C47F] rounded-full shadow-[0_0_8px_#16C47F]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            );

            return (
              <li key={item.id} className="relative">
                {item.isRoute ? (
                  <Link to={item.href} className={linkClass}>
                    {item.label}{indicator}
                  </Link>
                ) : (
                  <a href={item.href} onClick={(e) => handleNavClick(e, item)} className={linkClass}>
                    {item.label}{indicator}
                  </a>
                )}
              </li>
            );
          })}
        </ul>

        {/* Divider + ThemeToggle — desktop */}
        <div className="hidden sm:flex items-center gap-1 ml-1 pl-2 border-l border-white/[0.08]">
          <ThemeToggle />
        </div>

        {/* Mobile right side: theme toggle + hamburger */}
        <div className="sm:hidden flex items-center gap-1 ml-auto">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="p-1.5 text-gray-300 hover:text-white rounded-full focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile Dropdown Drawer ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto absolute top-[3.5rem] left-4 right-4 sm:hidden bg-[#0d0e17]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-3 shadow-2xl"
          >
            <ul className="flex flex-col gap-1 text-sm font-semibold uppercase tracking-wider">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                const cls = `flex items-center gap-2 py-2.5 px-4 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-white/[0.08] text-white border border-white/[0.1]"
                    : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                }`;
                return (
                  <li key={item.id}>
                    {item.isRoute ? (
                      <Link to={item.href} onClick={() => setMobileMenuOpen(false)} className={cls}>
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#16C47F] shrink-0" />}
                        {item.label}
                      </Link>
                    ) : (
                      <a href={item.href} onClick={(e) => handleNavClick(e, item)} className={cls}>
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#16C47F] shrink-0" />}
                        {item.label}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

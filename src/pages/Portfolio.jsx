import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import profilePhoto from "../assets/profile_photo.jpg";
import binarCarRental from "../assets/binar_car_rental.png";
import iclixProject from "../assets/iclix_project.png";
import klinikDrGirnaPatient from "../assets/klinik_dr_girna_patient.png";
import klinikDrGirnaAdmin from "../assets/klinik_dr_girna_admin.png";
import ngeflyProject from "../assets/ngefly_project.png";
import ngeflyFlowchart from "../assets/ngefly_flowchart.png";
import ngeflySearch from "../assets/ngefly_search.png";
import ngeflyFlightList from "../assets/ngefly_flight_list.png";
import ngeflyPassengerData from "../assets/ngefly_passenger_data.png";
import ngeflyPayment from "../assets/ngefly_payment.png";
import ngeflySuccess from "../assets/ngefly_success.png";
import halowinHome from "../assets/halowinHome.png";
import halowinAdminProduk from "../assets/halowinAdminProduk.png";
import halowinPembayaran from "../assets/halowinPembayaran.png";
import halowinAdminKategori from "../assets/halowinAdminKategori.png";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiPrisma,
  SiPostgresql,
  SiMysql,
  SiGit,
} from "react-icons/si";
import { Globe, Cloud } from "lucide-react";

/* ---------- Reusable motion helpers ---------- */

// Wrap any section content so it fades/rises into view once, as the user scrolls to it.
const Reveal = ({
  children,
  delay = 0,
  y = 28,
  className = "",
  once = true,
  amount = 0.2,
}) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once, amount }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

// Stagger a list of children (used for skill chips / project grid)
const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};
// Animasi baru agar teks di dalam kartu muncul berurutan (staggered)
const cardContentVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// Update slideVariants agar ada efek scale sedikit saat geser (lebih halus)
const slideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.97,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (dir) => ({
    x: dir > 0 ? -80 : 80,
    opacity: 0,
    scale: 0.97,
    transition: { duration: 0.35, ease: [0.4, 0, 1, 1] },
  }),
};
const staggerItem = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = React.useState(null);
  const [activeImageIndex, setActiveImageIndex] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(
    () => typeof window !== "undefined" && window.innerWidth < 768,
  );
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(1);
  const [isPaused, setIsPaused] = React.useState(false);

  const projects = [
    {
      id: 1,
      num: "01",
      title: "Klinik drg. Irna Kurnia",
      description:
        "A dental clinic management system with 3 main business processes: appointment booking (janji temu), online chat consultation (jadwal chat), and digital medical records (rekam medis) in admin.",
      longDescription:
        "Klinik drg. Irna Kurnia is a clinic management application featuring three core business processes: appointment scheduling, online chat consultation, and digital medical record keeping. The patient-facing side handles service information and online bookings, while the secure admin panel enables administrative staff to manage patient data, coordinate dental consultation schedules, track payment summaries, and maintain up-to-date patient medical histories.",
      images: [klinikDrGirnaPatient, klinikDrGirnaAdmin],
      imageFit: "contain",
      imageLabels: ["Patient Side", "Admin Dashboard"],
      liveUrl: "https://klinikdrgirna.my.id",
      technologies: [
        "React",
        "Tailwind CSS",
        "React Router",
        "jsPDF",
        "Chart.js",
        "REST API",
      ],
      features: [
        "Janji Temu (Online Appointment Scheduling)",
        "Konsultasi Chat (Doctor-Patient Chat Scheduling)",
        "Rekam Medis (Secure Digital Medical Records)",
        "Dashboard Analytics (Interactive Transaction & Growth Charts)",
        "Administrasi & Jadwal Dokter (Doctor Duty Rota & Billing)",
        "PDF Report Generation (Invoice & Medical Record Export)",
      ],
    },
    {
      id: 2,
      num: "02",
      title: "Binar Car Rental",
      description:
        "A static UI prototyping project focused on Tailwind CSS slicing and React.js component structure, built for Binar Academy challenges.",
      longDescription:
        "Binar Car Rental is a frontend practice project focused on static UI prototyping and pixel-perfect slicing. Built for the Binar Academy challenge, it demonstrates the ability to translate design mockups into clean, responsive web pages using React.js and Tailwind CSS. The project highlights foundational skills in component-based architecture, semantic HTML, and modern CSS styling without complex state management or backend integration.",
      image: binarCarRental,
      imageFit: "contain",
      liveUrl: "https://challenges-1.vercel.app/",
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "JavaScript (ES6)",
        "HTML5/CSS3",
      ],
      features: [
        "Pixel-perfect UI Slicing from Design Mockups",
        "Fully Responsive Layout (Mobile & Desktop)",
        "Component-based Architecture using React.js",
        "Clean and Modern Styling with Tailwind CSS",
      ],
    },
    {
      id: 3,
      num: "03",
      title: "ICLIX",
      description:
        "A movie streaming web app powered by TMDB API. Built to learn REST API fetching, query params, and OAuth-based authentication.",
      longDescription:
        "ICLIX is a movie browsing and streaming web application built as a hands-on learning project focused on real-world API integration. It fetches live movie data from The Movie Database (TMDB) API using query parameters for search and filtering. The project also implements OAuth-based login flow and demonstrates key concepts like async data fetching, dynamic routing, and responsive UI design with a dark Netflix-inspired theme.",
      image: iclixProject,
      imageFit: "contain",
      liveUrl: "https://iclix.vercel.app/",
      technologies: [
        "React",
        "Vite",
        "TMDB API",
        "REST API",
        "OAuth",
        "Query Params",
        "JavaScript (ES6)",
      ],
      features: [
        "Live Movie Data from TMDB API",
        "Search & Filter with Query Parameters",
        "OAuth-based User Authentication",
        "Movie Recommendations & Trailers",
        "Responsive Dark-themed UI",
        "Dynamic Movie Detail Pages",
      ],
    },
    {
      id: 4,
      num: "04",
      title: "Ngefly",
      description:
        "A flight schedule search and ticket booking web app. Showcases full UI business process flow (flight search, schedule filter, passenger info, QRIS payment, & booking success).",
      longDescription:
        "Ngefly is a responsive flight ticket search and schedule booking web application. Since the live backend server is currently offline, the project modal displays the full end-to-end business process flow across 7 UI screens: from flight schedule search, flight list selection & details, passenger information entry, QRIS payment gateway, to final booking confirmation & PDF ticket issuance.",
      images: [
        ngeflyProject,
        ngeflySearch,
        ngeflyFlightList,
        ngeflyPassengerData,
        ngeflyPayment,
        ngeflySuccess,
        ngeflyFlowchart,
      ],
      imageFit: "contain",
      imageLabels: [
        "1. Homepage Search",
        "2. Schedule Filter",
        "3. Flight List & Detail",
        "4. Passenger Form",
        "5. QRIS Payment",
        "6. Booking Success",
        "7. Business Process Flow",
      ],
      liveUrl: "https://ngeflyy.vercel.app/",
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "REST API",
        "JavaScript (ES6)",
        "HTML5/CSS3",
      ],
      features: [
        "Interactive Flight Schedule Search (Origin & Destination)",
        "Custom Date Selection (Departure & Return Dates)",
        "Flight Schedule Selection & Expandable Details",
        "Passenger Information Entry with 15-Min Timer",
        "QRIS Payment Gateway Integration",
        "Transaction Confirmation & PDF Ticket Export Flow",
      ],
    },
    {
      id: 5,
      num: "05",
      title: "HaloWin",
      description:
        "An e-commerce web app for health & medical equipment, built with vanilla PHP and MySQL. Features product catalog, cart, checkout, and a full admin panel for managing products and categories.",
      longDescription:
        "HaloWin is a full-stack e-commerce application for health and medical equipment (masks, wheelchairs, walkers, supplements, medicine) built with native PHP and MySQL. It includes a customer-facing storefront with product search, category filtering, cart, and checkout, plus a secure admin panel for managing products, categories, and viewing transactions. The project also integrates PHPMailer for email notifications and generates PDF transaction receipts.",
      images: [
        halowinHome,
        halowinAdminProduk,
        halowinAdminKategori,
        halowinPembayaran,
      ],
      imageFit: "cover",
      imageLabels: [
        "Storefront",
        "Admin - Product Data",
        "Admin - Category Data",
        "Payment / Checkout",
      ],
      githubUrl: "https://github.com/Farrelx9/UJIKOM-SERTIFIKASI",
      technologies: [
        "PHP (Native)",
        "MySQL",
        "PHPMailer",
        "jsPDF / PDF Export",
        "Bootstrap",
        "REST-style Routing",
      ],
      features: [
        "Product Catalog with Category Filter & Search",
        "Cart & Checkout Flow (Keranjang & Pembayaran)",
        "Admin Panel — Manage Products & Categories (CRUD)",
        "Transaction History & PDF Receipt Export",
        "User Registration & Login (Session-based Auth)",
        "Email Notifications via PHPMailer",
      ],
    },
  ];

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      const next = prev + newDirection;
      if (next < 0) return projects.length - 1;
      if (next >= projects.length) return 0;
      return next;
    });
  };

  // Auto-slide, pauses on hover
  React.useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => paginate(1), 4500);
    return () => clearInterval(timer);
  }, [isPaused, currentIndex]);

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
  };

  // Keep isMobile in sync with actual viewport changes (resize, rotation)
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeButtonRef = React.useRef(null);
  const lastFocusedRef = React.useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [zoomedImage, setZoomedImage] = React.useState(null); // { src, alt, images, index }
  const [zoomIndex, setZoomIndex] = React.useState(0);

  // Navigate zoom lightbox
  const zoomNavigate = React.useCallback(
    (dir) => {
      if (!zoomedImage?.images) return;
      setZoomIndex((prev) => {
        const next = prev + dir;
        if (next < 0) return zoomedImage.images.length - 1;
        if (next >= zoomedImage.images.length) return 0;
        return next;
      });
    },
    [zoomedImage],
  );

  // Close zoom on Escape
  React.useEffect(() => {
    if (!zoomedImage) return;
    const handleKey = (e) => {
      if (e.key === "Escape") setZoomedImage(null);
      if (e.key === "ArrowRight") zoomNavigate(1);
      if (e.key === "ArrowLeft") zoomNavigate(-1);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [zoomedImage, zoomNavigate]);

  // Modal: close on Escape, lock background scroll, manage focus
  React.useEffect(() => {
    if (!selectedProject) return;

    lastFocusedRef.current = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      lastFocusedRef.current?.focus?.();
    };
  }, [selectedProject]);

  const skillCategories = {
    frontend: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML5 & CSS3", icon: SiHtml5, color: "#E34F26" },
      { name: "Framer Motion", icon: SiFramer, color: "#B983FF" },
    ],
    backend: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "Prisma ORM", icon: SiPrisma, color: "#FFFFFF" },
    ],
    infra: [
      { name: "AWS Cloud", icon: Cloud, color: "#FF9900" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Git & GitHub", icon: SiGit, color: "#F05032" },
      { name: "RESTful APIs", icon: Globe, color: "#16C47F" },
    ],
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-[#050608] text-gray-250 font-sans relative antialiased selection:bg-[#16C47F]/20 selection:text-white bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:32px_32px] overflow-x-hidden"
    >
      {/* Decorative fine-line grid overlay */}
      <div className="absolute inset-0 max-w-7xl mx-auto border-x border-white/[0.02] pointer-events-none z-0"></div>

      {/* Ambient glow — barely-there, moves too slowly to consciously notice */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed -top-40 -left-40 w-[32rem] h-[32rem] rounded-full bg-[#16C47F]/[0.04] blur-[140px] z-0"
        animate={{ x: [0, 20, 0], y: [0, 14, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-1/3 -right-40 w-[28rem] h-[28rem] rounded-full bg-[#FF9D23]/[0.03] blur-[140px] z-0"
        animate={{ x: [0, -16, 0], y: [0, -20, 0] }}
        transition={{ duration: 36, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Capsule Navbar */}
      <Navbar />

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

      {/* Tech Stack Section */}
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

      {/* Projects Section — Carousel */}
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
            <AnimatePresence
              initial={false}
              custom={direction}
              mode="popLayout"
            >
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
                    layout
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(e, info) => {
                      if (info.offset.x < -80) paginate(1);
                      else if (info.offset.x > 80) paginate(-1);
                    }}
                    onClick={() => {
                      setSelectedProject(project);
                      setActiveImageIndex(0);
                    }}
                    className="bg-[#0D0F14]/60 backdrop-blur-sm border border-white/[0.08] hover:border-white/[0.15] rounded-2xl overflow-hidden shadow-2xl shadow-black/20 flex flex-col md:flex-row cursor-pointer group"
                  >
                    {/* --- SISI GAMBAR (DIPERBAIKI RESPONSIFNYA) --- */}
                    {/* aspect-[4/3] di mobile agar tidak gepeng, md:h-auto di desktop agar proporsional */}
                    <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto md:h-auto relative overflow-hidden bg-[#090A0E] border-b md:border-b-0 md:border-r border-white/[0.06] shrink-0">
                      {/* Browser Chrome (Dikecilkan sedikit di mobile agar rapi) */}
                      <div className="absolute top-0 left-0 right-0 h-7 md:h-8 bg-[#0D0F14]/90 backdrop-blur-md flex items-center px-3 md:px-4 gap-2 z-10 border-b border-white/[0.03]">
                        <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#F93827]/80"></span>
                        <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#FFD65A]/80"></span>
                        <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#16C47F]/80"></span>
                        <span className="ml-2 flex-1 bg-white/[0.03] rounded-sm h-4 md:h-5 text-[8px] md:text-[9px] text-gray-500 tracking-wider flex items-center px-2 md:px-3 truncate">
                          {hasWebsite
                            ? project.liveUrl.replace("https://", "")
                            : project.title}
                        </span>
                      </div>

                      {/* Gambar dengan object-cover optimal */}
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
                      {/* Gradient overlay agar transisi ke teks lebih halus */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F14] via-transparent to-transparent opacity-60 md:opacity-40 pointer-events-none"></div>

                      {/* Hint "Klik untuk detail" saat hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <span className="bg-black/60 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-full border border-white/10">
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
                            onClick={(e) =>
                              e.stopPropagation()
                            } /* PENTING: Mencegah modal terbuka saat klik link ini */
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

      {/* Credentials & Experience CTA Section */}
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
                className="w-3.5 h-3.5 text-[#FF9D23] "
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

      {/* Footer */}
      <footer
        id="footer"
        className="py-14 text-gray-500 border-t border-white/[0.08] mt-auto bg-[#050608] relative z-10"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Glowing Top Gradient Line */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF9D23]/40 to-transparent mb-10" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left Info & Copyright */}
            <div className="flex flex-col items-center md:items-start gap-1.5 text-center md:text-left">
              <span className="text-sm font-semibold text-white tracking-wide flex items-center gap-2">
                Farrel Farhan
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF9D23] animate-pulse" />
              </span>
              <p className="text-xs text-gray-400">
                Full Stack Web Developer &bull; Let's build something together
              </p>
              <p className="text-[11px] text-gray-500 tracking-wide mt-0.5">
                &copy; {new Date().getFullYear()} Farrel Farhan. All rights
                reserved.
              </p>
            </div>

            {/* Right Highlighted Social Links Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {/* GitHub */}
              <motion.a
                whileHover={{ y: -3, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="https://github.com/Farrelx9"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-4 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-gray-300/40 text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2.5 text-xs font-medium shadow-sm hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]"
                aria-label="GitHub"
              >
                <svg
                  className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                  />
                </svg>
                <span>GitHub</span>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                whileHover={{ y: -3, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="https://www.linkedin.com/in/farrel-farhan-489b70263/"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-4 py-2 rounded-xl bg-white/[0.03] hover:bg-[#0A66C2]/15 border border-white/[0.08] hover:border-[#0A66C2]/50 text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2.5 text-xs font-medium shadow-sm hover:shadow-[0_0_15px_rgba(10,102,194,0.3)]"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-4 h-4 text-gray-400 group-hover:text-[#0A66C2] transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
              </motion.a>

              {/* Instagram */}
              <motion.a
                whileHover={{ y: -3, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="https://instagram.com/farrelfarhan"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-4 py-2 rounded-xl bg-white/[0.03] hover:bg-[#E4405F]/15 border border-white/[0.08] hover:border-[#E4405F]/50 text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2.5 text-xs font-medium shadow-sm hover:shadow-[0_0_15px_rgba(228,64,95,0.3)]"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4 text-gray-400 group-hover:text-[#E4405F] transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0 3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Instagram</span>
              </motion.a>

              {/* Email */}
              <motion.a
                whileHover={{ y: -3, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="https://mail.google.com/mail/?view=cm&fs=1&to=farrelfarhan902@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-4 py-2 rounded-xl bg-white/[0.03] hover:bg-[#FF9D23]/15 border border-white/[0.08] hover:border-[#FF9D23]/50 text-gray-300 hover:text-[#FFD65A] transition-all duration-300 flex items-center gap-2.5 text-xs font-medium shadow-sm hover:shadow-[0_0_15px_rgba(255,157,35,0.3)]"
                aria-label="Email"
              >
                <svg
                  className="w-4 h-4 text-gray-400 group-hover:text-[#FF9D23] transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>Email</span>
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                whileHover={{ y: -3, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="https://wa.me/6282135920275"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-4 py-2 rounded-xl bg-white/[0.03] hover:bg-[#25D366]/15 border border-white/[0.08] hover:border-[#25D366]/50 text-gray-300 hover:text-[#25D366] transition-all duration-300 flex items-center gap-2.5 text-xs font-medium shadow-sm hover:shadow-[0_0_15px_rgba(37,211,102,0.3)]"
                aria-label="WhatsApp"
              >
                <svg
                  className="w-4 h-4 text-gray-400 group-hover:text-[#25D366] transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.301-1.127z" />
                </svg>
                <span>WhatsApp</span>
              </motion.a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-[#050608]/95 backdrop-blur-md"
            ></motion.div>

            {/* Modal Body */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              initial={{ scale: 0.95, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-[#0D0F14] border border-white/[0.08] rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden z-10 flex flex-col max-h-[85vh] md:max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                ref={closeButtonRef}
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-1.5 rounded-full bg-white/[0.02] hover:bg-white/[0.08] text-gray-400 hover:text-white border border-white/[0.06] transition-colors duration-300 backdrop-blur-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16C47F]"
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
                  {/* Screenshot — tampil penuh tanpa terpotong */}
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
                      initial={{ opacity: 0, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      src={selectedProject.images[activeImageIndex]}
                      alt={`${selectedProject.title} – ${
                        selectedProject.imageLabels?.[activeImageIndex] ??
                        `view ${activeImageIndex + 1}`
                      }`}
                      className="w-full h-full object-contain object-top p-3 sm:p-4 group-hover/zoom:scale-[1.02] transition-transform duration-300"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0D0F14] to-transparent pointer-events-none" />
                    {/* Zoom hint */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover/zoom:opacity-100 transition-opacity duration-200 bg-black/60 backdrop-blur-md rounded-full p-1.5 border border-white/10">
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
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-[#050608]/90 backdrop-blur-md p-1 rounded-full border border-white/[0.06] shadow-xl z-20">
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
                      initial={{ opacity: 0, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-contain object-top p-3 sm:p-4 group-hover/zoom:scale-[1.02] transition-transform duration-300"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0D0F14] to-transparent pointer-events-none" />
                    {/* Zoom hint */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover/zoom:opacity-100 transition-opacity duration-200 bg-black/60 backdrop-blur-md rounded-full p-1.5 border border-white/10">
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
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.35 }}
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
              </motion.div>

              {/* Action Buttons Footer */}
              <div className="p-6 border-t border-white/[0.04] bg-[#0D0F14]/90 backdrop-blur-sm flex items-center justify-end gap-3">
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

      {/* ============ LIGHTBOX ZOOM OVERLAY ============ */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-xl"
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
    </div>
  );
}

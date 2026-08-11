import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import PortfolioHero from "../components/portfolio/PortfolioHero";

// Lazy-loaded sections and modals for performance & memory efficiency on iOS Safari
const TechStackSection = lazy(
  () => import("../components/portfolio/TechStackSection"),
);
const ProjectCarouselSection = lazy(
  () => import("../components/portfolio/ProjectCarouselSection"),
);
const CredentialsCTASection = lazy(
  () => import("../components/portfolio/CredentialsCTASection"),
);
const ProjectDetailModal = lazy(
  () => import("../components/portfolio/ProjectDetailModal"),
);
const ImageLightboxModal = lazy(
  () => import("../components/portfolio/ImageLightboxModal"),
);

// Assets
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
    className={`accelerate-gpu ${className}`}
  >
    {children}
  </motion.div>
);

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

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

const slideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: "0%",
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 32 },
      opacity: { duration: 0.25 },
    },
  },
  exit: (dir) => ({
    x: dir > 0 ? "-100%" : "100%",
    opacity: 0,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 32 },
      opacity: { duration: 0.25 },
    },
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

  // Keep isMobile in sync with actual viewport changes
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeButtonRef = React.useRef(null);
  const lastFocusedRef = React.useRef(null);
  const [zoomedImage, setZoomedImage] = React.useState(null);
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

      {/* Ambient glow */}
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

      {/* Hero Section */}
      <PortfolioHero isMobile={isMobile} />

      <Suspense fallback={<div className="py-12 text-center text-gray-600 text-xs">Loading section...</div>}>
        {/* Tech Stack Section */}
        <TechStackSection
          Reveal={Reveal}
          staggerContainer={staggerContainer}
          staggerItem={staggerItem}
          skillCategories={skillCategories}
        />

        {/* Project Carousel Section */}
        <ProjectCarouselSection
          Reveal={Reveal}
          slideVariants={slideVariants}
          cardContentVariants={cardContentVariants}
          cardItemVariants={cardItemVariants}
          projects={projects}
          currentIndex={currentIndex}
          direction={direction}
          isPaused={isPaused}
          setIsPaused={setIsPaused}
          paginate={paginate}
          setCurrentIndex={setCurrentIndex}
          setDirection={setDirection}
          setSelectedProject={setSelectedProject}
          setActiveImageIndex={setActiveImageIndex}
        />

        {/* Credentials & Experience CTA Section */}
        <CredentialsCTASection
          staggerContainer={staggerContainer}
          staggerItem={staggerItem}
        />

        {/* Project Detail Modal */}
        <ProjectDetailModal
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
          activeImageIndex={activeImageIndex}
          setActiveImageIndex={setActiveImageIndex}
          setZoomedImage={setZoomedImage}
          setZoomIndex={setZoomIndex}
          closeButtonRef={closeButtonRef}
        />

        {/* Image Lightbox Zoom Overlay */}
        <ImageLightboxModal
          zoomedImage={zoomedImage}
          setZoomedImage={setZoomedImage}
          zoomIndex={zoomIndex}
          setZoomIndex={setZoomIndex}
          zoomNavigate={zoomNavigate}
        />
      </Suspense>

      {/* Footer */}
      <footer
        id="footer"
        className="py-14 text-gray-500 border-t border-white/[0.08] mt-auto bg-[#050608] relative z-10"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF9D23]/40 to-transparent mb-10" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
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

            <div className="flex flex-wrap items-center justify-center gap-2.5">
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
    </div>
  );
}

// src/components/NavBar.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const links = [
    { name: "Home", id: "home" },
    { name: "Projects", id: "projets" },
    { name: "Skills", id: "skills" },
    { name: "Education", id: "formation" },
    { name: "Languages", id: "langues" },
    { name: "Experience", id: "experiences-professionnelles" },
    { name: "Certifications", id: "certifications" },
    { name: "Contact", id: "contact" },
  ];

  // Detect scroll for navbar style
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Change active link when scrolling through sections
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
            setActiveLink(link.name);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-xl border-b-2 border-[#E2DCFF] dark:bg-gray-800/95 dark:border-gray-700 dark:shadow-gray-950/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          className="flex items-center gap-3 group"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[#A594F9] blur-xl opacity-30 rounded-full scale-110 group-hover:opacity-40 transition-opacity dark:bg-purple-600"></div>
            <motion.img
              src="/Photos/Me.jpg"
              alt="Logo"
              className="relative w-12 h-12 rounded-full border-2 border-[#A594F9] object-cover shadow-lg z-10 dark:border-purple-600"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-[#5D5A88] to-[#A594F9] bg-clip-text text-transparent dark:from-gray-100 dark:to-purple-400">
            Raja HANNACHI
          </span>
        </motion.a>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-1 text-lg relative">
          {links.map((link) => (
            <motion.div
              key={link.id}
              className="relative"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href={`#${link.id}`}
                className={`px-4 py-2 rounded-xl transition-all duration-300 relative z-10 ${
                  activeLink === link.name
                    ? "text-[#5D5A88] font-semibold dark:text-gray-100"
                    : "text-[#6B6A8B] hover:text-[#5D5A88] dark:text-gray-300 dark:hover:text-gray-100"
                }`}
                onClick={() => setActiveLink(link.name)}
              >
                {link.name}
              </a>

              {activeLink === link.name && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-[#E2DCFF] to-[#D4C9FF] rounded-xl border border-[#A594F9]/30 shadow-sm dark:from-gray-700 dark:to-gray-800 dark:border-purple-600/30 dark:shadow-gray-950/30"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.div>
          ))}
        </nav>

        {/* Hamburger menu */}
        <motion.button
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-[#E2DCFF] border-2 border-[#D4C9FF] hover:bg-[#D4C9FF] transition-all dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600"
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.9 }}
          aria-label="menu"
        >
          <svg
            className="w-6 h-6 text-[#5D5A88] dark:text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              animate={{
                d: open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16",
              }}
              transition={{ duration: 0.3 }}
            />
          </svg>
        </motion.button>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              style={{ top: "72px" }}
            />
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-md border-b-2 border-[#E2DCFF] shadow-xl dark:bg-gray-800/98 dark:border-gray-700 dark:shadow-gray-950/50"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-6 py-6 flex flex-col gap-2">
                {links.map((link, index) => (
                  <motion.div
                    key={link.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={`#${link.id}`}
                      onClick={() => {
                        setOpen(false);
                        setActiveLink(link.name);
                      }}
                      className={`block px-4 py-3 rounded-xl transition-all duration-300 ${
                        activeLink === link.name
                          ? "bg-gradient-to-r from-[#E2DCFF] to-[#D4C9FF] text-[#5D5A88] font-semibold border-2 border-[#A594F9]/30 dark:from-gray-700 dark:to-gray-800 dark:text-gray-100 dark:border-purple-600/30"
                          : "text-[#6B6A8B] hover:bg-[#F8F7FF] hover:text-[#5D5A88] dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-100"
                      }`}
                    >
                      {link.name}
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  User, 
  FolderOpen, 
  Code, 
  Clock, 
  Trophy, 
  Heart, 
  Mail,
  GraduationCap,
  Menu,
  X,
  Sun,
  Moon
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  console.log("Current theme in Sidebar:", theme);

  const navItems = [
    { id: "home", icon: Home, label: "Home", section: "home" },
    { id: "about", icon: User, label: "About", section: "about" },
    { id: "projects", icon: FolderOpen, label: "Projects", section: "projects" },
    { id: "skills", icon: Code, label: "Skills", section: "skills" },
    { id: "experience", icon: Clock, label: "Experience", section: "experience" },
    { id: "education", icon: GraduationCap, label: "Education", section: "education" },
    { id: "achievements", icon: Trophy, label: "Achievements", section: "achievements" },
    { id: "favorites", icon: Heart, label: "Hobbies & Values", section: "hobbies-values" },
    { id: "contact", icon: Mail, label: "Contact", section: "contact" },
  ];

  const handleNavigation = (sectionId) => {
    setActiveItem(sectionId);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.section);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveItem(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden md:flex fixed left-0 top-0 h-full w-16 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-r-2 border-[#E2DCFF] dark:border-gray-700 z-50 flex-col items-center py-6"
      >
        <div className="space-y-4">
          {navItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <motion.button
                onClick={() => handleNavigation(item.section)}
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 border-2 ${
                  activeItem === item.section
                    ? "bg-[#A594F9] dark:bg-purple-600 text-white border-[#A594F9] dark:border-purple-600 shadow-lg shadow-[#A594F9]/30 dark:shadow-purple-600/30"
                    : "bg-transparent text-[#8884A6] dark:text-gray-400 border-[#E2DCFF] dark:border-gray-700 hover:text-[#5D5A88] dark:hover:text-gray-200 hover:bg-[#F8F7FF] dark:hover:bg-gray-800 hover:border-[#D4C9FF] dark:hover:border-gray-600"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="w-5 h-5" />
              </motion.button>
              
              <div className="absolute left-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
                <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm text-[#5D5A88] dark:text-gray-200 text-xs px-3 py-2 rounded-lg border-2 border-[#E2DCFF] dark:border-gray-700 shadow-lg whitespace-nowrap">
                  {item.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Dark Mode Toggle - Desktop */}
        <motion.button
          onClick={toggleTheme}
          className="mt-auto w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 border-2 bg-transparent text-[#8884A6] border-[#E2DCFF] hover:text-[#5D5A88] hover:bg-[#F8F7FF] hover:border-[#D4C9FF] dark:text-gray-300 dark:border-gray-700 dark:hover:text-gray-100 dark:hover:bg-gray-800 dark:hover:border-gray-600"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle dark mode"
        >
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </motion.button>
      </motion.div>

      {/* Mobile Header with Hamburger */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="md:hidden fixed top-0 left-0 right-0 h-14 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b-2 border-[#E2DCFF] dark:border-gray-700 z-50 flex items-center justify-between px-4"
      >
        <h1 className="text-[#5D5A88] dark:text-gray-200 font-bold text-lg bg-gradient-to-r from-[#5D5A88] to-[#A594F9] dark:from-gray-200 dark:to-purple-400 bg-clip-text text-transparent">
          Raja HANNACHI
        </h1>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-10 h-10 rounded-xl flex items-center justify-center text-[#5D5A88] dark:text-gray-300 hover:bg-[#F8F7FF] dark:hover:bg-gray-800 border-2 border-[#E2DCFF] dark:border-gray-700 transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 bg-black/40 z-40 top-14"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="md:hidden fixed right-0 top-14 bottom-0 w-64 bg-white/98 dark:bg-gray-900/98 backdrop-blur-sm border-l-2 border-[#E2DCFF] dark:border-gray-700 z-50 overflow-y-auto"
            >
              <nav className="p-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleNavigation(item.section)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 border-2 ${
                      activeItem === item.section
                        ? "bg-gradient-to-r from-[#A594F9] to-[#C8B6FF] dark:from-purple-600 dark:to-purple-700 text-white border-[#A594F9] dark:border-purple-600 shadow-lg"
                        : "text-[#6B6A8B] dark:text-gray-300 border-[#E2DCFF] dark:border-gray-700 hover:text-[#5D5A88] dark:hover:text-gray-100 hover:bg-[#F8F7FF] dark:hover:bg-gray-800 hover:border-[#D4C9FF] dark:hover:border-gray-600"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </motion.button>
                ))}
              </nav>
              
              {/* Dark Mode Toggle - Mobile */}
              <motion.button
                onClick={toggleTheme}
                className="w-full flex items-center justify-center space-x-3 px-4 py-3 mt-4 rounded-xl transition-all duration-300 border-2 bg-transparent text-[#6B6A8B] dark:text-gray-300 border-[#E2DCFF] dark:border-gray-700 hover:text-[#5D5A88] dark:hover:text-gray-100 hover:bg-[#F8F7FF] dark:hover:bg-gray-800 hover:border-[#D4C9FF] dark:hover:border-gray-600"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                <span className="font-medium">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
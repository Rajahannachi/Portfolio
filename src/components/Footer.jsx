import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Heart,
  ExternalLink,
  MapPin,
} from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Rajahannachi",
      color: "#5D5A88",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/raja-hannachi-01b668254/",
      color: "#A594F9",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:rajahannachi21@gmail.com",
      color: "#74C69D",
    },
    {
      icon: Phone,
      label: "Phone",
      href: "tel:+21655551630",
      color: "#FFAFCC",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
    { name: "Hobbies & Values", href: "#hobbies-values" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <AnimatedBackground className="border-t-2 border-[#D4C9FF] dark:border-gray-700" particleCount={15} showGrid={false}>
      <footer className="relative backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Column 1: About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-[#D291BC] mb-3 flex items-center gap-2 dark:text-pink-400">
              Raja HANNACHI
            </h3>
            <p className="text-[#5D5A88] leading-relaxed mb-3 text-sm text-cute dark:text-gray-300">
              Computer engineering student passionate about innovation and new technologies.
            </p>
            <div className="flex items-center gap-2 text-[#5D5A88] text-sm dark:text-gray-300">
              <MapPin className="w-4 h-4 text-[#A594F9] icon-cute dark:text-purple-400" />
              <span className="text-[#5D5A88] text-cute dark:text-gray-300">Tunis, Tunisia</span>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-[#D291BC] mb-3 dark:text-pink-400">
              Navigation
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-[#5D5A88] hover:text-[#A594F9] transition-colors inline-flex items-center gap-2 group text-sm text-cute dark:text-gray-300 dark:hover:text-purple-400"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#A594F9] transition-all duration-300 dark:bg-purple-500"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-[#D291BC] mb-3 dark:text-pink-400">
              Let's Stay in Touch
            </h3>
            <p className="text-[#5D5A88] mb-4 text-sm text-cute dark:text-gray-300">
              Feel free to contact me for any collaboration or opportunity.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.3 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  whileTap={{ scale: 0.9 }}
                  className="group relative"
                  aria-label={social.label}
                >
                  <div className="p-2.5 rounded-lg bg-white/20 border-2 border-[#E2DCFF] hover:border-[#A594F9] transition-all shadow-sm hover:shadow-[#A594F9]/20 backdrop-blur-sm icon-cute dark:bg-gray-700/20 dark:border-gray-700 dark:hover:border-purple-500 dark:shadow-gray-950/20">
                    <social.icon className="w-4 h-4 text-[#5D5A88] group-hover:text-[#A594F9] transition-colors dark:text-gray-300 dark:group-hover:text-purple-400" />
                  </div>
                  {/* Tooltip */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="bg-white/90 backdrop-blur-sm text-[#3A386D] text-xs px-2 py-1 rounded-lg border-2 border-[#D4C9FF] whitespace-nowrap shadow-sm dark:bg-gray-800/90 dark:text-gray-100 dark:border-gray-700 dark:shadow-gray-950/20">
                      {social.label}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-[#C8B6FF]/40 to-transparent mb-6 dark:via-purple-700/40"
        ></motion.div>

        {/* Footer bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-3 text-[#5D5A88] text-xs dark:text-gray-300"
        >
          <p className="flex items-center gap-2 text-cute">
            © {currentYear} Raja HANNACHI. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-cute">
            Developed with <Heart className="w-3 h-3 text-[#E0BBE4] animate-pulse icon-cute dark:text-pink-500" /> React
          </p>
        </motion.div>
        </div>
      </footer>
    </AnimatedBackground>
  );
}
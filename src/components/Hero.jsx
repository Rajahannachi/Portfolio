import React, { useState } from "react";
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  Download, 
  Sparkles,
  ChevronDown,
  X
} from "lucide-react";
import about from "../data/about";
import AnimatedBackground from "./AnimatedBackground";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [showCVPopup, setShowCVPopup] = useState(false);

  const handleContactClick = () => {
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${about.email}`,
      "_blank"
    );
  };

  const handleCVOpen = (language) => {
 const cvUrls = {
    french: about.resume.french,
    english: about.resume.english
  };
    const newWindow = window.open(cvUrls[language], "_blank");
    if (newWindow) {
      newWindow.focus();
    }
    setShowCVPopup(false);
  };

  return (
    <AnimatedBackground className="min-h-screen" particleCount={25}>
      <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 pt-16 pb-8 sm:py-12">
        <div className="w-full max-w-6xl mx-auto">
          
          {/* Layout Grid Centré */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
            
            {/* Colonne Gauche - Contenu */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
              
              {/* Badge Décoratif */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 via-pink-50 to-blue-100 px-4 py-2 rounded-full border border-purple-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700 dark:border-gray-700"
              >
                <Sparkles className="w-4 h-4 text-purple-400 dark:text-purple-300" />
                <span className="text-sm font-medium text-purple-700 dark:text-gray-300">Available for work</span>
              </motion.div>

              {/* Nom avec forme géométrique */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-4 top-0 w-2 h-full bg-gradient-to-b from-purple-300 via-pink-300 to-blue-300 rounded-full dark:from-purple-600 dark:via-pink-600 dark:to-blue-600"></div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#3A386D] leading-tight dark:text-gray-100">
                  Raja
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                    Hannachi
                  </span>
                </h1>
              </motion.div>

              {/* Titre et âge avec formes */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="relative pl-8"
              >
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-purple-200 to-pink-200 rotate-45 dark:from-purple-800 dark:to-pink-800"></div>
                <p className="text-xl sm:text-2xl text-gray-700 font-semibold dark:text-gray-200">
                  {about.title}
                </p>
                <p className="text-lg text-purple-500 font-medium mt-1 dark:text-purple-400">
                  {about.age}
                </p>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 leading-relaxed max-w-xl dark:text-gray-300"
              >
                {about.description}
              </motion.p>

              {/* Contact avec nouvelles formes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
              >
                <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-lg border border-blue-100 dark:bg-gray-800 dark:border-gray-700">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-200 to-cyan-300 rounded-xl flex items-center justify-center dark:from-blue-800 dark:to-cyan-700">
                    <Phone className="w-5 h-5 text-blue-600 dark:text-blue-300" />
                  </div>
                  <span className="text-gray-700 font-medium dark:text-gray-200">{about.phone}</span>
                </div>
                
                <button 
                  onClick={handleContactClick}
                  className="group relative overflow-hidden bg-gradient-to-r from-[#A594F9] to-[#C8B6FF] hover:from-[#957DAD] hover:to-[#BB8B9D] text-white px-8 py-3 rounded-2xl font-bold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 dark:from-purple-600 dark:to-purple-700 dark:hover:from-purple-700 dark:hover:to-purple-800 dark:shadow-purple-950/30"
                >
                  <Mail className="w-5 h-5" />
                  Contact Me
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-300 dark:bg-gray-700"></div>
                </button>

                {/* CV Download avec popup */}
                <div className="relative">
                  <button 
                    onClick={() => setShowCVPopup(true)}
                    className="group relative overflow-hidden bg-gradient-to-r from-[#E0BBE4] to-[#D291BC] hover:from-[#BB8B9D] hover:to-[#957DAD] text-white px-8 py-3 rounded-2xl font-bold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-2xl hover:scale-105 dark:from-pink-600 dark:to-pink-700 dark:hover:from-pink-700 dark:hover:to-pink-800 dark:shadow-pink-950/30"
                  >
                    <Download className="w-5 h-5" />
                    Download CV
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-300 dark:bg-gray-700"></div>
                  </button>
                </div>

                {/* Socials */}
                <a 
                  href={about.social.github} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 bg-gradient-to-br from-[#E2DCFF] to-[#F0EDFF] hover:from-[#D4C9FF] hover:to-[#E2DCFF] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl transform hover:-rotate-3 dark:from-gray-700 dark:to-gray-800 dark:hover:from-gray-600 dark:hover:to-gray-700 dark:shadow-gray-950/30"
                  aria-label="Open GitHub profile"
                >
                  <Github className="w-5 h-5 text-[#5D5A88] relative z-10 group-hover:text-[#A594F9] dark:text-gray-300 dark:group-hover:text-purple-400" />
                  <div className="absolute inset-0 bg-[#A594F9] opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300 dark:bg-purple-600"></div>
                </a>
                
                <a 
                  href={about.social.linkedin} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 bg-gradient-to-br from-[#E2DCFF] to-[#F0EDFF] hover:from-[#D4C9FF] hover:to-[#E2DCFF] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl transform hover:rotate-3 dark:from-gray-700 dark:to-gray-800 dark:hover:from-gray-600 dark:hover:to-gray-700 dark:shadow-gray-950/30"
                  aria-label="Open LinkedIn profile"
                >
                  <Linkedin className="w-5 h-5 text-[#5D5A88] relative z-10 group-hover:text-[#C8B6FF] dark:text-gray-300 dark:group-hover:text-pink-400" />
                  <div className="absolute inset-0 bg-[#C8B6FF] opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300 dark:bg-pink-600"></div>
                </a>
              </motion.div>
            </div>

            {/* Colonne Droite - Photo avec nouvelles formes */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex justify-center order-1 lg:order-2"
            >
              <div className="relative">
                
                {/* Formes géométriques en arrière-plan */}
                <div className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl rotate-12 opacity-50 blur-xl dark:from-purple-800/50 dark:to-pink-800/50"></div>
                <div className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-40 blur-2xl dark:from-blue-800/40 dark:to-cyan-800/40"></div>
                
                {/* Container principal avec forme découpée */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                  
                  {/* Bordure animée avec forme géométrique */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-300 via-pink-300 to-blue-300 rounded-[3rem] animate-pulse dark:from-purple-600 dark:via-pink-600 dark:to-blue-600"></div>
                  
                  {/* Image container avec clip-path */}
                  <div className="absolute inset-3 bg-white rounded-[2.5rem] p-3 shadow-2xl dark:bg-gray-800">
                    <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                      <img
                        src="/Photos/Me.png"
                        alt={about.name}
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-200/20 to-transparent dark:from-purple-800/20"></div>
                    </div>
                  </div>

                  {/* Éléments décoratifs flottants */}
                  <div className="absolute -top-3 sm:-top-6 left-1/4 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-xl rotate-45 shadow-lg animate-bounce dark:from-yellow-700 dark:to-orange-700"></div>
                  <div className="absolute -bottom-2 sm:-bottom-4 right-1/4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl rotate-12 shadow-lg dark:from-pink-700 dark:to-purple-700" style={{animation: 'bounce 3s infinite'}}></div>
                  
                  {/* Indicateurs de statut */}
                  <div className="absolute -right-2 sm:-right-4 top-1/3 flex flex-col gap-2 sm:gap-3">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full shadow-lg animate-pulse dark:from-green-700 dark:to-emerald-700"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-br from-blue-200 to-cyan-300 rounded-full shadow-lg animate-pulse dark:from-blue-700 dark:to-cyan-700" style={{animationDelay: '0.5s'}}></div>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full shadow-lg animate-pulse dark:from-purple-700 dark:to-pink-700" style={{animationDelay: '1s'}}></div>
                  </div>
                </div>

                {/* Badge flottant */}
                <div className="absolute -bottom-3 sm:-bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-300 to-pink-300 text-gray-800 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-bold text-xs sm:text-sm shadow-2xl whitespace-nowrap dark:from-purple-600 dark:to-pink-600 dark:text-gray-100">
                  ✨ Open to opportunities
                </div>
              </div>
            </motion.div>
          </div>

          {/* Éléments décoratifs supplémentaires */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-2xl rotate-45 opacity-30 blur-xl dark:from-blue-800/30 dark:to-cyan-800/30"></div>
          <div className="absolute bottom-32 right-20 w-24 h-24 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-30 blur-2xl dark:from-pink-800/30 dark:to-purple-800/30"></div>
        </div>
      </div>

      {/* Popup pour le téléchargement du CV */}
      <AnimatePresence>
        {showCVPopup && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCVPopup(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              {/* Popup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border-2 border-[#D4C9FF] dark:border-gray-700 p-6 max-w-sm w-full mx-auto"
              >
                {/* En-tête du popup */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-[#3A386D] dark:text-gray-100 flex items-center gap-2">
                    <Download className="w-5 h-5 text-[#A594F9]" />
                    Download CV
                  </h3>
                  <button
                    onClick={() => setShowCVPopup(false)}
                    className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <X className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                  </button>
                </div>

                {/* Options de téléchargement */}
                <div className="space-y-3">
                  <button
                    onClick={() => handleCVOpen('english')}
                    className="w-full px-6 py-4 text-left bg-gradient-to-r from-[#F0EDFF] to-[#E2DCFF] hover:from-[#E2DCFF] hover:to-[#D4C9FF] text-[#5D5A88] dark:text-gray-300 rounded-2xl transition-all duration-200 flex items-center gap-3 font-medium border border-[#E2DCFF] dark:border-gray-700 dark:from-gray-700 dark:to-gray-800 dark:hover:from-gray-600 dark:hover:to-gray-700 hover:scale-105 hover:shadow-lg"
                  >
                    <div className="w-3 h-3 bg-[#A594F9] rounded-full dark:bg-purple-500"></div>
                    English CV
                  </button>
                  <button
                    onClick={() => handleCVOpen('french')}
                    className="w-full px-6 py-4 text-left bg-gradient-to-r from-[#FCE4EC] to-[#F8BBD0] hover:from-[#F8BBD0] hover:to-[#F48FB1] text-[#5D5A88] dark:text-gray-300 rounded-2xl transition-all duration-200 flex items-center gap-3 font-medium border border-[#F8BBD0] dark:border-gray-700 dark:from-gray-700 dark:to-gray-800 dark:hover:from-gray-600 dark:hover:to-gray-700 hover:scale-105 hover:shadow-lg"
                  >
                    <div className="w-3 h-3 bg-[#E0BBE4] rounded-full dark:bg-pink-500"></div>
                    French CV
                  </button>
                </div>

                {/* Note */}
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
                  Choose your preferred language
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </AnimatedBackground>
  );
}
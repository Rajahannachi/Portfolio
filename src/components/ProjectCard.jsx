import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Code2, Sparkles, X, ChevronLeft, ChevronRight, Linkedin, Code } from "lucide-react";

function ImageModal({ images, isOpen, onClose, initialIndex = 0 }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  
  const imageArray = Array.isArray(images) ? images : [images];

  React.useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex || 0);
    }
  }, [isOpen, initialIndex]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % imageArray.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + imageArray.length) % imageArray.length);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border-2 border-purple-200 dark:bg-gray-800/95 dark:border-gray-700 dark:shadow-gray-950/50"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b-2 border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50 dark:border-gray-700 dark:from-gray-800 dark:to-gray-900">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Project Gallery</h3>
              <button
                onClick={onClose}
                className="p-2 hover:bg-purple-100 rounded-xl transition-colors dark:hover:bg-gray-700"
              >
                <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
            </div>

            {/* Image Container */}
            <div className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center min-h-[400px] max-h-[70vh] dark:from-gray-900 dark:via-gray-800 dark:to-gray-950">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={imageArray[currentIndex]}
                  alt={`Project image ${currentIndex + 1}`}
                  initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotateY: -90 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-full max-h-[70vh] object-contain rounded-xl"
                />
              </AnimatePresence>

              {/* Navigation Arrows */}
              {imageArray.length > 1 && (
                <>
                  <motion.button
                    whileHover={{ scale: 1.1, x: -5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevImage}
                    className="absolute left-4 p-3 bg-white/90 hover:bg-white rounded-2xl border-2 border-purple-200 transition-colors shadow-lg dark:bg-gray-700/90 dark:hover:bg-gray-600 dark:border-gray-600 dark:text-gray-300"
                  >
                    <ChevronLeft className="w-6 h-6 text-purple-500 dark:text-purple-400" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextImage}
                    className="absolute right-4 p-3 bg-white/90 hover:bg-white rounded-2xl border-2 border-purple-200 transition-colors shadow-lg dark:bg-gray-700/90 dark:hover:bg-gray-600 dark:border-gray-600 dark:text-gray-300"
                  >
                    <ChevronRight className="w-6 h-6 text-purple-500 dark:text-purple-400" />
                  </motion.button>
                </>
              )}
            </div>

            {/* Image Counter & Thumbnails */}
            {imageArray.length > 1 && (
              <div className="p-4 border-t-2 border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50 dark:border-gray-700 dark:from-gray-800 dark:to-gray-900">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="text-sm text-gray-700 font-medium dark:text-gray-300">
                    {currentIndex + 1} / {imageArray.length}
                  </span>
                </div>
                <div className="flex gap-2 overflow-x-auto justify-center pb-2">
                  {imageArray.map((img, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setCurrentIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                        index === currentIndex
                          ? "border-purple-400 opacity-100 shadow-lg dark:border-purple-600"
                          : "border-purple-200 opacity-50 hover:opacity-75 dark:border-gray-700 dark:hover:opacity-100"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function ProjectCard({ project = {} }) {
  const {
    title = "Project Title",
    description = "Project description goes here...",
    tache = [],
    tech = [],
    repo = "",
    post = "",
    linkdin = "",
    frontend = ""
  } = project;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const imageArray = Array.isArray(post) ? post : (post ? [post] : []);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isStripPaused, setIsStripPaused] = useState(false);
  const thumbWidth = 160; // px approximation (w-40 ~ 160px)
  const scrollDistance = Math.max(0, (imageArray.length - 1) * thumbWidth);

  const hasImages = imageArray.length > 0;

  const handleThumbClick = (idx) => {
    setCurrentImageIndex(idx);
    setIsModalOpen(true);
  };

  function TechBadge({ t }) {
    const name = typeof t === 'string' ? t : t?.name || 'Tech';
    
    return (
      <span className="flex items-center gap-1.5 sm:gap-2 bg-gradient-to-br from-purple-100 to-pink-100 border-2 border-purple-200 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold text-purple-700 shadow-sm hover:shadow-md hover:border-purple-300 transition-all duration-200 dark:from-gray-700 dark:to-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:border-purple-500 dark:hover:shadow-gray-950/20">
        <span className="whitespace-nowrap text-xs sm:text-sm">{name}</span>
      </span>
    );
  }

  const handlePostClick = (e) => {
    if (post) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative group bg-white/90 backdrop-blur-sm border-2 border-purple-200 rounded-[2rem] p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl hover:border-purple-300 transition-all duration-300 overflow-hidden mb-4 sm:mb-6 md:mb-8 dark:bg-gray-800/90 dark:border-gray-700 dark:hover:border-purple-500 dark:shadow-gray-950/50"
      >
        {/* Formes géométriques décoratives */}
        <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl rotate-12 opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-300 dark:from-purple-800/30 dark:to-pink-800/30"></div>
        <div className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300 dark:from-blue-800/20 dark:to-cyan-800/20"></div>
        

        <div className="relative z-10">
          {/* Header avec forme géométrique */}
          <div className="flex items-start justify-between mb-3 sm:mb-4 gap-2">
            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse flex-shrink-0 dark:bg-purple-500"></div>
              <div className="w-1 h-1 bg-pink-400 rounded-full animate-pulse flex-shrink-0 dark:bg-pink-500" style={{animationDelay: '0.5s'}}></div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-pink-400">
                {title}
              </h3>
            </div>
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 dark:text-pink-300" />
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6 dark:text-gray-300">
            {description}
          </p>

          {/* Tasks Section avec nouveau design */}
          {tache && tache.length > 0 && (
            <div className="mb-4 sm:mb-6 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-3 sm:p-4 md:p-5 relative overflow-hidden dark:from-gray-800 dark:to-gray-900 dark:border-gray-700">
              {/* Forme décorative */}
              <div className="absolute top-2 right-2 w-12 h-12 bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl rotate-12 opacity-30 dark:from-purple-800/30 dark:to-pink-800/30"></div>
              
              <h4 className="relative text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3 flex items-center gap-2 dark:text-gray-100">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-300 to-pink-300 rounded-xl flex items-center justify-center flex-shrink-0 dark:from-purple-600 dark:to-pink-600">
                  <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <span>Tâches principales</span>
              </h4>
              <ul className="relative space-y-1.5 sm:space-y-2">
                {tache.map((task, index) => (
                  <li
                    key={index}
                    className="text-xs sm:text-sm md:text-base text-gray-700 flex items-start gap-2 sm:gap-3 dark:text-gray-300"
                  >
                    <span className="text-blue-400 mt-0.5 sm:mt-1 flex-shrink-0 font-bold dark:text-blue-300">▸</span>
                    <span className="flex-1">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies avec nouveau style */}
          <div className="mb-4 sm:mb-6">
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <div className="w-6 h-1 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full dark:from-purple-600 dark:to-pink-600"></div>
              <h4 className="text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-wider dark:text-gray-300">
                Used Technologies 
              </h4>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {tech && tech.length > 0 ? (
                tech.map((t, i) => <TechBadge t={t} key={i} />)
              ) : (
                <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">NO TECHNOLOGIES LISTED</span>
              )}
            </div>
          </div>

          {/* Horizontal strip of thumbnails with auto-scroll */}
          {hasImages && (
            <div className="mb-4 sm:mb-6">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-3 sm:p-4 border-2 border-purple-200 overflow-hidden dark:from-gray-800 dark:to-gray-900 dark:border-gray-700">
                <div className="relative">
                  <div className="overflow-hidden">
                    <motion.div
                      className="flex gap-3 sm:gap-4"
                      animate={{ x: isStripPaused ? 0 : [0, -scrollDistance] }}
                      transition={{ x: { repeat: Infinity, repeatType: "reverse", duration: Math.max(6, imageArray.length * 2), ease: "linear" } }}
                      onHoverStart={() => setIsStripPaused(true)}
                      onHoverEnd={() => setIsStripPaused(false)}
                    >
                      {imageArray.map((img, idx) => (
                        <button
                          key={`${img}-${idx}`}
                          onClick={() => handleThumbClick(idx)}
                          className="flex-shrink-0 w-40 h-24 sm:w-48 sm:h-28 rounded-xl overflow-hidden border-2 border-purple-200 hover:border-purple-300 shadow-sm hover:shadow-md transition-all dark:border-gray-700 dark:hover:border-purple-500"
                        >
                          <img src={img} alt={`${title} ${idx + 1}`} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Links avec nouveau design */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 pt-3 sm:pt-4 border-t-2 border-purple-200 dark:border-gray-700">
            {repo && (
              <motion.a
                href={repo}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-4 py-2.5 sm:py-2 bg-white hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 border-2 border-purple-200 hover:border-purple-300 rounded-2xl text-gray-800 text-sm sm:text-base font-bold transition-all duration-300 w-full sm:w-auto shadow-md hover:shadow-lg dark:bg-gray-800 dark:hover:from-gray-700 dark:hover:to-gray-800 dark:border-gray-700 dark:hover:border-purple-500 dark:text-gray-100 dark:shadow-gray-950/30"
              >
                <Github className="w-4 h-4 dark:text-gray-100" />
                <span>Code source</span>
              </motion.a>
            )}
            
            {frontend && (
              <motion.a
                href={frontend}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-4 py-2.5 sm:py-2 bg-white hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 border-2 border-purple-200 hover:border-purple-300 rounded-2xl text-gray-800 text-sm sm:text-base font-bold transition-all duration-300 w-full sm:w-auto shadow-md hover:shadow-lg dark:bg-gray-800 dark:hover:from-gray-700 dark:hover:to-gray-800 dark:border-gray-700 dark:hover:border-purple-500 dark:text-gray-100 dark:shadow-gray-950/30"
              >
                <Github className="w-4 h-4 dark:text-gray-100" />
                <span>Code source 2</span>
              </motion.a>
            )}
            
            {linkdin && (
              <motion.a
                href={linkdin}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-4 py-2.5 sm:py-2 bg-white hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 border-2 border-purple-200 hover:border-purple-300 rounded-2xl text-gray-800 text-sm sm:text-base font-bold transition-all duration-300 w-full sm:w-auto shadow-md hover:shadow-lg dark:bg-gray-800 dark:hover:from-gray-700 dark:hover:to-gray-800 dark:border-gray-700 dark:hover:border-purple-500 dark:text-gray-100 dark:shadow-gray-950/30"
              >
                <Linkedin className="w-4 h-4 dark:text-gray-100" />
                <span>Voir le post</span>
              </motion.a>
            )}
          </div>
        </div>

        {/* Éléments décoratifs en bas */}
        <div className="absolute bottom-4 right-4 flex gap-2 opacity-40">
          <div className="w-3 h-3 bg-gradient-to-br from-purple-300 to-pink-300 rounded-md rotate-45 dark:from-purple-600 dark:to-pink-600"></div>
          <div className="w-2 h-2 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full dark:from-blue-600 dark:to-cyan-600"></div>
        </div>
      </motion.article>

      {/* Click-to-zoom Modal */}
      <ImageModal
        images={imageArray}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialIndex={currentImageIndex}
      />
    </>
  );
}
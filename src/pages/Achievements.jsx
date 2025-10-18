import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Trophy, 
  Calendar, 
  MapPin, 
  Users, 
  Award,
  ChevronLeft,
  ChevronRight,
  Star,
  Target,
  Zap,
  Sparkles,
  X,
} from "lucide-react";
import achievements from "../data/achievements";
import PageWrapper from "../components/PageWrapper";

export default function Achievements() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isStripPaused, setIsStripPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const thumbWidth = 160; // px approximation for w-40

  const nextAchievement = () => {
    setCurrentIndex((prev) => (prev + 1) % achievements.length);
    setSelectedImageIndex(0);
  };

  const prevAchievement = () => {
    setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
    setSelectedImageIndex(0);
  };

  const goToAchievement = (index) => {
    setCurrentIndex(index);
    setSelectedImageIndex(0);
  };

  // Manual image navigation
  const nextImage = () => {
    setSelectedImageIndex((prev) => 
      prev === achievements[currentIndex].images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => 
      prev === 0 ? achievements[currentIndex].images.length - 1 : prev - 1
    );
  };

  // Automatic image slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImageIndex((prev) => 
        prev === achievements[currentIndex].images.length - 1 ? 0 : prev + 1
      );
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex, achievements]);

  const openImageModal = (idx) => {
    setModalImageIndex(idx);
    setIsModalOpen(true);
  };

  const nextModalImage = () => {
    const total = achievements[currentIndex].images.length;
    setModalImageIndex((prev) => (prev + 1) % total);
  };

  const prevModalImage = () => {
    const total = achievements[currentIndex].images.length;
    setModalImageIndex((prev) => (prev - 1 + total) % total);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <PageWrapper className="py-12 sm:py-16 md:py-20 min-h-screen" particleCount={18}>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#3A386D] dark:text-gray-100">
              <span className="text-gradient-cute">Achievements</span>
            </h1>
          </div>
          <div className="mx-auto w-32 sm:w-48 h-0.5 sm:h-1 bg-gradient-to-r from-[#A594F9] via-[#C8B6FF] to-[#FFD6FF] rounded-full mb-3 sm:mb-4 dark:from-purple-600 dark:via-purple-700 dark:to-purple-800"></div>
          <p className="text-[#5D5A88] text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4 text-cute dark:text-gray-300">
            My distinctions and awards for excellence and innovation
          </p>
        </motion.div>

        {/* Navigation Container */}
        <div className="max-w-6xl mx-auto relative">
          
          {/* Counter */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3 bg-gradient-to-r from-[#A594F9]/20 to-[#C8B6FF]/20 px-6 py-3 rounded-full border-2 border-[#A594F9]/30 shadow-lg backdrop-blur-sm dark:from-purple-900/20 dark:to-pink-900/20 dark:border-purple-900/30">
              <div className="w-2 h-2 bg-[#A594F9] rounded-full animate-pulse dark:bg-purple-500"></div>
              <span className="text-[#5D5A88] font-bold text-sm sm:text-base dark:text-gray-300">
                {currentIndex + 1} / {achievements.length}
              </span>
              <div className="w-2 h-2 bg-[#C8B6FF] rounded-full animate-pulse dark:bg-pink-500" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            onClick={prevAchievement}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-0 sm:-left-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-white/90 to-[#F0EDFF] hover:from-[#F0EDFF] hover:to-[#E2DCFF] border-2 border-[#A594F9]/30 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm dark:from-gray-800/90 dark:to-gray-900/90 dark:border-purple-900/30 dark:hover:from-gray-900 dark:hover:to-gray-800"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#5D5A88] dark:text-gray-300" />
          </motion.button>

          <motion.button
            onClick={nextAchievement}
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-0 sm:-right-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-white/90 to-[#F0EDFF] hover:from-[#F0EDFF] hover:to-[#E2DCFF] border-2 border-[#A594F9]/30 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm dark:from-gray-800/90 dark:to-gray-900/90 dark:border-purple-900/30 dark:hover:from-gray-900 dark:hover:to-gray-800"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#5D5A88] dark:text-gray-300" />
          </motion.button>

          {/* Achievement Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* Achievement Number */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#A594F9] to-[#C8B6FF] rounded-2xl shadow-lg dark:from-purple-600 dark:to-purple-700 dark:shadow-purple-950/30">
                  <span className="text-white font-black text-lg sm:text-xl">{currentIndex + 1}</span>
                </div>
                <div className="flex-1 h-0.5 sm:h-1 bg-gradient-to-r from-[#A594F9] via-[#C8B6FF] to-transparent rounded-full dark:from-purple-600 dark:via-purple-700"></div>
              </div>

              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-white/90 to-[#F8F7FF] backdrop-blur-xl rounded-3xl border-2 border-[#E2DCFF] shadow-2xl overflow-hidden dark:from-gray-800/90 dark:to-gray-900/90 dark:border-gray-700 dark:shadow-gray-950/50 min-h-[500px]">
                
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 sm:h-2 bg-gradient-to-r from-[#A594F9] via-[#C8B6FF] to-[#FFD6FF] dark:from-purple-600 dark:via-purple-700 dark:to-purple-800"></div>

                {/* Decorative shapes */}
                <div className="absolute top-4 right-4 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-[#A594F9]/20 to-[#C8B6FF]/20 rounded-3xl rotate-12 opacity-30 blur-2xl dark:from-purple-900/30 dark:to-pink-900/30"></div>
                <div className="absolute bottom-8 left-8 w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-br from-[#FFD6FF]/20 to-[#E2DCFF]/20 rounded-full opacity-20 blur-2xl dark:from-pink-900/30 dark:to-purple-900/30"></div>

                <div className="relative z-10 p-6 sm:p-8">
                  
                  {/* Header Section */}
                  <div className="mb-6 sm:mb-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3A386D] mb-3 dark:text-gray-100">
                      {achievements[currentIndex].title}
                    </h2>
                    <div className="flex items-center gap-3 mb-4">
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#A594F9] dark:text-purple-400" />
                      <p className="text-[#5D5A88] font-bold text-base sm:text-lg dark:text-gray-300">
                        {achievements[currentIndex].prize}
                      </p>
                      <span className="text-[#8884A6] dark:text-gray-400">•</span>
                      <p className="text-[#5D5A88] font-bold text-base sm:text-lg dark:text-gray-300">
                        {achievements[currentIndex].year}
                      </p>
                    </div>
                    <p className="text-[#5D5A88] text-sm sm:text-base leading-relaxed dark:text-gray-300">
                      {achievements[currentIndex].description}
                    </p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <div className="bg-gradient-to-br from-pink-50/80 to-rose-100/60 dark:from-pink-900/30 dark:to-rose-800/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-pink-200/60 dark:border-pink-700/50 hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-pink-200/30 dark:hover:shadow-pink-900/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-pink-500 dark:text-pink-400" />
                        <span className="text-[#5D5A88] text-xs sm:text-sm font-semibold dark:text-gray-300">Duration</span>
                      </div>
                      <p className="text-[#3A386D] font-bold text-sm sm:text-base dark:text-gray-100">{achievements[currentIndex].duration}</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50/80 to-cyan-100/60 dark:from-blue-900/30 dark:to-cyan-800/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-blue-200/60 dark:border-blue-700/50 hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-blue-200/30 dark:hover:shadow-blue-900/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 dark:text-blue-400" />
                        <span className="text-[#5D5A88] text-xs sm:text-sm font-semibold dark:text-gray-300">Team</span>
                      </div>
                      <p className="text-[#3A386D] font-bold text-sm sm:text-base dark:text-gray-100">{achievements[currentIndex].teamSize}</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50/80 to-emerald-100/60 dark:from-green-900/30 dark:to-emerald-800/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-green-200/60 dark:border-green-700/50 hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-green-200/30 dark:hover:shadow-green-900/20">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 dark:text-green-400" />
                        <span className="text-[#5D5A88] text-xs sm:text-sm font-semibold dark:text-gray-300">Location</span>
                      </div>
                      <p className="text-[#3A386D] font-bold text-sm sm:text-sm dark:text-gray-100">{achievements[currentIndex].location}</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50/80 to-violet-100/60 dark:from-purple-900/30 dark:to-violet-800/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-purple-200/60 dark:border-purple-700/50 hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-purple-200/30 dark:hover:shadow-purple-900/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500 dark:text-purple-400" />
                        <span className="text-[#5D5A88] text-xs sm:text-sm font-semibold dark:text-gray-300">Category</span>
                      </div>
                      <p className="text-[#3A386D] font-bold text-sm sm:text-base dark:text-gray-100">{achievements[currentIndex].category}</p>
                    </div>
                  </div>

                  {/* Two Column Layout */}
                  <div className="grid md:grid-cols-1 gap-4 sm:gap-6">
                    
                    {/* Tasks */}
                    <div className="bg-gradient-to-br from-white/50 to-[#F0EDFF]/50 rounded-xl sm:rounded-2xl p-4 sm:p-5 border-2 border-[#E2DCFF] dark:from-gray-700/50 dark:to-gray-800/50 dark:border-gray-600">
                      <h4 className="text-lg sm:text-xl font-bold text-[#3A386D] mb-3 sm:mb-4 flex items-center gap-2 dark:text-gray-100">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-[#A594F9] to-[#C8B6FF] rounded-lg sm:rounded-xl flex items-center justify-center dark:from-purple-600 dark:to-purple-700">
                          <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        Tasks Completed
                      </h4>
                      <ul className="space-y-2 sm:space-y-3">
                        {achievements[currentIndex].tasks.map((task, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 sm:gap-3"
                          >
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#A594F9] rounded-full mt-1.5 sm:mt-2 flex-shrink-0 dark:bg-purple-500"></div>
                            <p className="text-[#5D5A88] text-xs sm:text-sm leading-relaxed dark:text-gray-300">{task}</p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies & Impact */}
                    <div className="space-y-4 sm:space-y-6">
                      
                      {/* Technologies */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-4 h-0.5 sm:w-6 sm:h-1 bg-gradient-to-r from-[#A594F9] to-[#C8B6FF] rounded-full dark:from-purple-600 dark:to-purple-700"></div>
                          <h4 className="text-xs sm:text-sm font-bold text-[#5D5A88] uppercase tracking-wider dark:text-gray-300">
                            Technologies
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {achievements[currentIndex].technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-2 sm:px-3 py-1 bg-gradient-to-br from-[#E2DCFF] to-[#F0EDFF] text-[#5D5A88] text-xs sm:text-sm font-medium rounded-full border-2 border-[#D4C9FF] shadow-sm hover:scale-105 transition-transform duration-200 dark:from-gray-700 dark:to-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:from-gray-600 dark:hover:to-gray-700 dark:hover:text-gray-100"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Horizontal strip gallery at bottom */}
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="mt-6 sm:mt-8 overflow-hidden mx-auto"
                    >
                      <div className="bg-gradient-to-br from-[#F8F7FF] to-[#F0EDFF] rounded-2xl p-4 sm:p-6 border-2 border-[#E2DCFF] dark:from-gray-800 dark:to-gray-900 dark:border-gray-700">
                        <div className="overflow-hidden">
                          <motion.div
                            className="flex gap-3 sm:gap-4"
                            animate={{ x: isStripPaused ? 0 : [0, -Math.max(0, (achievements[currentIndex].images.length - 1) * thumbWidth)] }}
                            transition={{ x: { repeat: Infinity, repeatType: 'reverse', duration: Math.max(6, achievements[currentIndex].images.length * 2), ease: 'linear' } }}
                            onHoverStart={() => setIsStripPaused(true)}
                            onHoverEnd={() => setIsStripPaused(false)}
                          >
                            {achievements[currentIndex].images.map((img, idx) => (
                              <button
                                key={`${img}-${idx}`}
                                onClick={() => openImageModal(idx)}
                                className="flex-shrink-0 w-40 h-24 sm:w-48 sm:h-28 rounded-xl overflow-hidden border-2 border-[#E2DCFF] hover:border-[#A594F9] shadow-sm hover:shadow-md transition-all dark:border-gray-700 dark:hover:border-purple-500"
                              >
                                <img src={img} alt={`Achievement ${idx + 1}`} className="w-full h-full object-cover" />
                              </button>
                            ))}
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Click-to-zoom Modal */}
          <AnimatePresence>
            {isModalOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={(e) => { if (e.target === e.currentTarget) setIsModalOpen(false); }}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 40 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 40 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  className="relative bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border-2 border-[#E2DCFF] dark:bg-gray-800/95 dark:border-gray-700 dark:shadow-gray-950/50"
                >
                  <div className="flex items-center justify-between p-4 border-b-2 border-[#E2DCFF] bg-gradient-to-r from-[#F8F7FF] to-[#F0EDFF] dark:border-gray-700 dark:from-gray-800 dark:to-gray-900">
                    <h3 className="text-xl font-bold text-[#3A386D] dark:text-gray-100">Achievement Gallery</h3>
                    <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-[#F0EDFF] rounded-xl transition-colors dark:hover:bg-gray-700">
                      <X className="w-5 h-5 text-[#5D5A88] dark:text-gray-300" />
                    </button>
                  </div>
                  <div className="relative bg-gradient-to-br from-[#F8F7FF] via-[#F0EDFF] to-white flex items-center justify-center min-h-[360px] max-h-[70vh] dark:from-gray-900 dark:via-gray-800 dark:to-gray-950">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={modalImageIndex}
                        src={achievements[currentIndex].images[modalImageIndex]}
                        alt={`Achievement image ${modalImageIndex + 1}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.35 }}
                        className="max-w-full max-h-[70vh] object-contain rounded-xl"
                      />
                    </AnimatePresence>
                    {achievements[currentIndex].images.length > 1 && (
                      <>
                        <button onClick={prevModalImage} className="absolute left-4 p-3 bg-white/90 hover:bg-white rounded-2xl border-2 border-[#E2DCFF] transition-colors shadow-lg dark:bg-gray-700/90 dark:hover:bg-gray-600 dark:border-gray-600 dark:text-gray-300">
                          <ChevronLeft className="w-6 h-6 text-[#5D5A88] dark:text-gray-300" />
                        </button>
                        <button onClick={nextModalImage} className="absolute right-4 p-3 bg-white/90 hover:bg-white rounded-2xl border-2 border-[#E2DCFF] transition-colors shadow-lg dark:bg-gray-700/90 dark:hover:bg-gray-600 dark:border-gray-600 dark:text-gray-300">
                          <ChevronRight className="w-6 h-6 text-[#5D5A88] dark:text-gray-300" />
                        </button>
                      </>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Dots Indicators */}
          <div className="flex justify-center items-center gap-2 sm:gap-3 mt-6 sm:mt-8">
            {achievements.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToAchievement(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`transition-all duration-300 border-2 ${
                  index === currentIndex
                    ? "w-8 sm:w-12 h-2 sm:h-3 bg-gradient-to-r from-[#A594F9] to-[#C8B6FF] border-[#A594F9] rounded-full dark:from-purple-600 dark:to-purple-700 dark:border-purple-600"
                    : "w-2 h-2 bg-[#E2DCFF] border-[#D4C9FF] rounded-full hover:bg-[#D4C9FF] dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
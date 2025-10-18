import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import PageWrapper from "../components/PageWrapper";

export default function ProjectsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index) => {
    setCurrentIndex(index);
  };

  return (
    <PageWrapper className="min-h-screen py-12 sm:py-20" particleCount={20}>
      <div className="py-6 sm:py-12 container mx-auto px-4 sm:px-6">
        {/* Header avec formes géométriques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 relative"
        >
          {/* Formes décoratives autour du titre */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl rotate-12 opacity-30 blur-xl dark:from-purple-800/30 dark:to-pink-800/30"></div>
          <div className="absolute top-8 right-1/4 w-16 h-16 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-2xl -rotate-12 opacity-30 blur-xl dark:from-blue-800/30 dark:to-cyan-800/30"></div>
          
          <div className="relative inline-block">
            <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#3A386D] dark:text-gray-100">
                Featured <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
              </h1>
            </div>
            
            {/* Barre décorative */}
            <div className="mx-auto w-48 h-1 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 rounded-full mb-4 dark:from-purple-600 dark:via-pink-600 dark:to-blue-600"></div>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto px-4 dark:text-gray-300"
          >
            Showcase of my projects
          </motion.p>
        </motion.div>

        {/* Project Navigation Container */}
        <div className="max-w-5xl mx-auto relative">
          {/* Project Counter - Top Center */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <div className="flex items-center gap-3 bg-gradient-to-r from-purple-100 to-pink-100 px-4 sm:px-6 py-3 rounded-full border-2 border-purple-200 shadow-lg dark:from-gray-700 dark:to-gray-800 dark:border-gray-700">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse dark:bg-purple-500"></div>
              <span className="text-gray-800 font-bold text-sm sm:text-base dark:text-gray-200">
                {currentIndex + 1} / {projects.length}
              </span>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse dark:bg-pink-500" style={{animationDelay: '0.5s'}}></div>
            </div>
          </motion.div>

          {/* Navigation Arrows - Sides */}
          <motion.button
            onClick={prevProject}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-0 sm:-left-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-white to-purple-50 hover:from-purple-100 hover:to-pink-100 border-2 border-purple-200 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl dark:from-gray-800 dark:to-gray-900 dark:border-gray-700 dark:hover:from-gray-700 dark:hover:to-gray-800"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-purple-600 dark:text-purple-400" />
          </motion.button>

          <motion.button
            onClick={nextProject}
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-0 sm:-right-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-white to-purple-50 hover:from-purple-100 hover:to-pink-100 border-2 border-purple-200 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl dark:from-gray-800 dark:to-gray-900 dark:border-gray-700 dark:hover:from-gray-700 dark:hover:to-gray-800"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-purple-600 dark:text-purple-400" />
          </motion.button>

          {/* Project Card with Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.95 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.5
              }}
            >
              {/* Numéro du projet */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-4"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-300 to-pink-300 rounded-2xl shadow-lg dark:from-purple-600 dark:to-pink-600 dark:shadow-purple-950/30">
                  <span className="text-white font-black text-xl">{currentIndex + 1}</span>
                </div>
                <div className="flex-1 h-1 bg-gradient-to-r from-purple-300 via-pink-300 to-transparent rounded-full dark:from-purple-600 dark:via-pink-600"></div>
              </motion.div>
              
              <ProjectCard project={projects[currentIndex]} />
            </motion.div>
          </AnimatePresence>

          {/* Project Indicators - Dots */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center items-center gap-3 mt-8"
          >
            {projects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToProject(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`transition-all duration-300 border-2 ${
                  index === currentIndex
                    ? "w-12 h-3 bg-gradient-to-r from-purple-400 to-pink-400 border-purple-400 rounded-full dark:from-purple-600 dark:to-pink-600 dark:border-purple-600"
                    : "w-3 h-3 bg-purple-100 border-purple-200 rounded-full hover:bg-purple-200 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600"
                }`}
              />
            ))}
          </motion.div>


        </div>
      </div>
    </PageWrapper>
  );
}
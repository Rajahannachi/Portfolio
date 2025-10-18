import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import experiences from "../data/experiences";
import ExperiencesCard from "../components/ExperiencesCard";
import PageWrapper from "../components/PageWrapper";

export default function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextExperience = () => {
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
  };

  const prevExperience = () => {
    setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  const goToExperience = (index) => {
    setCurrentIndex(index);
  };

  return (
    <PageWrapper className="py-20 min-h-screen" particleCount={15}>
      <div className="container mx-auto px-4 py-16">
        {/* Header avec formes géométriques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 relative"
        >
          {/* Formes décoratives */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 w-24 h-24 bg-gradient-to-br from-[#E0BBE4] to-[#BB8B9D] rounded-3xl rotate-12 opacity-30 blur-xl dark:from-purple-900/30 dark:to-pink-900/30"></div>
          <div className="absolute top-8 right-1/4 w-16 h-16 bg-gradient-to-br from-[#957DAD] to-[#D291BC] rounded-2xl -rotate-12 opacity-30 blur-xl dark:from-blue-900/30 dark:to-cyan-900/30"></div>
          
          <div className="relative inline-block">
            <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#3A386D] dark:text-gray-100">
                My <span className="bg-gradient-to-r from-[#D291BC] via-[#E0BBE4] to-[#957DAD] bg-clip-text text-transparent">Experience</span>
              </h1>
            </div>
            
            {/* Barre décorative */}
            <div className="mx-auto w-48 h-1 bg-gradient-to-r from-[#D291BC] via-[#E0BBE4] to-[#957DAD] rounded-full mb-4 dark:from-pink-600 dark:via-purple-700 dark:to-blue-600"></div>
          </div>
          
          <p className="text-[#5D5A88] text-base sm:text-lg leading-relaxed max-w-3xl mx-auto px-4 dark:text-gray-300">
            My professional journey and key contributions
          </p>
        </motion.div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mx-auto items-stretch">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex"
            >
              <ExperiencesCard experience={experience} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
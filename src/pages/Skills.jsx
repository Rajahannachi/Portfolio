import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { skills } from "../data/skills";
import AnimatedBackground from "../components/AnimatedBackground";

export default function Skills() {
  const duplicatedSkills = [...skills, ...skills, ...skills];
  const [isPaused, setIsPaused] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = ["All", "Frameworks & Libraries", "Programming Languages", "Databases", "Tools & Methodologies", "Design & 3D Development", "AI/ML Libraries", "Networks"];
  const filteredSkills = selectedCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <AnimatedBackground className="py-20 min-h-screen" particleCount={20}>
      <div className="container mx-auto px-4 py-16">
        {/* Header avec formes géométriques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          {/* Formes décoratives */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 w-24 h-24 bg-gradient-to-br from-[#E0BBE4] to-[#BB8B9D] rounded-3xl rotate-12 opacity-30 blur-xl dark:from-purple-900/30 dark:to-pink-900/30"></div>
          <div className="absolute top-8 right-1/4 w-16 h-16 bg-gradient-to-br from-[#957DAD] to-[#D291BC] rounded-2xl -rotate-12 opacity-30 blur-xl dark:from-blue-900/30 dark:to-cyan-900/30"></div>
          
          <div className="relative inline-block">
            <div className="flex items-center justify-center gap-3 mb-4">
              <h1 className="text-5xl md:text-6xl font-black text-[#3A386D] dark:text-gray-100">
                My <span className="bg-gradient-to-r from-[#D291BC] via-[#E0BBE4] to-[#957DAD] bg-clip-text text-transparent">Skills</span>
              </h1>
            </div>
            
            {/* Barre décorative */}
            <div className="mx-auto w-48 h-1 bg-gradient-to-r from-[#D291BC] via-[#E0BBE4] to-[#957DAD] rounded-full mb-4 dark:from-pink-600 dark:via-purple-700 dark:to-blue-600"></div>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="text-[#3A386D] text-lg max-w-2xl mx-auto dark:text-gray-300"
          >
            Technologies and tools I master
          </motion.p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 border-2 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-[#D291BC] to-[#E0BBE4] text-white shadow-lg border-[#D291BC] dark:from-pink-600 dark:to-purple-600 dark:border-pink-600 dark:shadow-pink-950/30"
                  : "bg-white/80 text-[#6B6A8B] hover:bg-gradient-to-r hover:from-[#F0EDFF] hover:to-[#E2DCFF] border-[#E2DCFF] hover:border-[#D4C9FF] dark:bg-gray-800/80 dark:text-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-800 dark:border-gray-700 dark:hover:border-purple-500"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {filteredSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Mini Carousel Container avec nouveau design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full overflow-hidden py-6 bg-white/90 backdrop-blur-xl rounded-[2rem] border-2 border-purple-200 shadow-xl dark:bg-gray-800/90 dark:border-gray-700 dark:shadow-gray-950/50"
        >
          {/* Forme décorative */}
          <div className="absolute top-2 right-2 w-16 h-16 bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl rotate-12 opacity-30 blur-lg dark:from-purple-800/30 dark:to-pink-800/30"></div>
          
          {/* Left Gradient Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none dark:from-gray-900"></div>
          
          {/* Right Gradient Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none dark:from-gray-900"></div>

          {/* Scrolling Track */}
          <motion.div
            className="flex gap-4"
            animate={{
              x: isPaused ? undefined : [0, -((skills.length * 100) / 2)]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            onHoverStart={() => setIsPaused(true)}
            onHoverEnd={() => setIsPaused(false)}
          >
            {duplicatedSkills.map((skill, index) => (
              <MiniSkillLogo key={`${skill.name}-${index}`} skill={skill} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </AnimatedBackground>
  );
}

function SkillCard({ skill, index }) {
  const [hasImage, setHasImage] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group relative"
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="relative bg-gradient-to-br from-white/30 to-[#F8F7FF]/30 backdrop-blur-xl rounded-3xl p-4 sm:p-5 md:p-6 border-2 border-[#E2DCFF] hover:border-[#A594F9] transition-all duration-300 cursor-pointer h-full flex flex-col shadow-lg hover:shadow-xl hover:shadow-[#A594F9]/20 overflow-hidden dark:from-gray-800/30 dark:to-gray-900/30 dark:border-gray-700 dark:hover:border-purple-500 dark:shadow-gray-950/20">
        {/* Decorative shapes */}
        <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-[#A594F9]/20 to-[#C8B6FF]/20 rounded-3xl rotate-12 opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl dark:from-purple-900/20 dark:to-pink-900/20"></div>
        <div className="absolute bottom-8 left-8 w-12 h-12 bg-gradient-to-br from-[#FFD6FF]/20 to-[#E2DCFF]/20 rounded-full -rotate-12 opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl dark:from-pink-900/20 dark:to-purple-900/20"></div>
        
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          {/* Category Badge */}
          <div className="mb-3 md:mb-4">
            <span 
              className="px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs sm:text-sm font-semibold text-white shadow-md border border-white/30"
              style={{ backgroundColor: skill.color }}
            >
              {skill.category}
            </span>
          </div>

          {/* Logo */}
          <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-gradient-to-br from-[#E2DCFF]/50 to-[#F0EDFF]/50 rounded-2xl p-3 md:p-4 group-hover:from-[#D4C9FF]/50 group-hover:to-[#E2DCFF]/50 transition-colors mb-3 md:mb-4 border-2 border-[#D4C9FF] shadow-lg dark:from-gray-700/50 dark:to-gray-800/50 dark:group-hover:from-gray-600/50 dark:group-hover:to-gray-700/50 dark:border-gray-600 dark:shadow-gray-950/30">
            {hasImage ? (
              <img
                src={`/Photos/Logos/${skill.logo}.svg`}
                alt={skill.name}
                className="w-full h-full object-contain"
                style={{ 
                  filter: 'brightness(0.8)',
                  opacity: 0.9
                }}
                onError={() => setHasImage(false)}
              />
            ) : (
              <div 
                className="w-full h-full rounded-xl flex items-center justify-center text-white font-bold text-xl border-2 border-white/30 shadow-md"
                style={{ backgroundColor: skill.color }}
              >
                {skill.name.charAt(0)}
              </div>
            )}
          </div>

          {/* Title */}
          <h3 className="text-[#3A386D] text-lg md:text-xl font-bold group-hover:text-[#A594F9] transition-colors duration-300 mb-2 dark:text-gray-100 dark:group-hover:text-purple-400">
            {skill.name}
          </h3>

          {/* Description */}
          <p className="text-[#5D5A88] text-xs sm:text-sm leading-relaxed max-w-[200px] mx-auto dark:text-gray-300">
            {skill.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function MiniSkillLogo({ skill }) {
  const [hasImage, setHasImage] = useState(true);

  return (
    <motion.div
      className="flex-shrink-0 w-20 h-20 relative group"
      whileHover={{ 
        scale: 1.1,
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-white/30 to-[#F8F7FF]/30 backdrop-blur-sm border-2 border-[#E2DCFF] group-hover:border-[#A594F9] transition-all duration-300 flex flex-col items-center justify-center gap-1 overflow-hidden shadow-md group-hover:shadow-xl dark:from-gray-800/30 dark:to-gray-900/30 dark:border-gray-700 dark:group-hover:border-purple-500 dark:shadow-gray-950/30">
        {/* Glow background on hover */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm rounded-2xl"
          style={{ backgroundColor: skill.color }}
        />
        
        {/* Top accent */}
        <div className="absolute top-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-[#A594F9] via-[#C8B6FF] to-[#FFD6FF] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:from-purple-600 dark:via-purple-700 dark:to-purple-800"></div>
        
        {/* Logo */}
        <div className="relative z-10 w-8 h-8 flex items-center justify-center bg-gradient-to-br from-[#E2DCFF]/30 to-[#F0EDFF]/30 rounded-lg p-1 group-hover:from-[#D4C9FF]/30 group-hover:to-[#E2DCFF]/30 transition-colors border border-[#D4C9FF] shadow-sm dark:from-gray-700/30 dark:to-gray-800/30 dark:group-hover:from-gray-600/30 dark:group-hover:to-gray-700/30 dark:border-gray-600 dark:shadow-gray-950/30">
          {hasImage ? (
            <img
              src={`/Photos/Logos/${skill.logo}.svg`}
              alt={skill.name}
              className="w-full h-full object-contain"
              style={{ 
                filter: 'brightness(0.8)',
                opacity: 0.9
              }}
              onError={() => setHasImage(false)}
            />
          ) : (
            <div 
              className="w-full h-full rounded-md flex items-center justify-center text-white font-bold text-sm shadow-sm border border-white/30"
              style={{ backgroundColor: skill.color }}
            >
              {skill.name.charAt(0)}
            </div>
          )}
        </div>

        {/* Skill Name */}
        <span className="relative z-10 text-[#3A386D] text-xs font-semibold text-center px-1 group-hover:text-[#A594F9] transition-colors duration-300 leading-tight dark:text-gray-100 dark:group-hover:text-purple-400">
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
}
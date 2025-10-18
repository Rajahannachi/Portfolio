import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import education from "../data/education";
import PageWrapper from "../components/PageWrapper";

export default function Education() {
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
    <PageWrapper className="py-12 sm:py-16 md:py-20 min-h-screen" particleCount={12}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#3A386D] mb-3 sm:mb-4 md:mb-6 px-4 dark:text-gray-100">
            <span className="text-gradient-cute">Education</span>
          </h1>
          <p className="text-[#5D5A88] text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4 text-cute dark:text-gray-300">
            Academic journey and key skills gained
          </p>
        </motion.div>

        {/* Education Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-7xl mx-auto"
        >
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-white/80 to-[#F8F7FF] backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-[#E2DCFF] hover:border-[#A594F9] transition-all duration-300 h-full flex flex-col shadow-lg hover:shadow-xl hover:shadow-[#A594F9]/20 relative dark:from-gray-800/80 dark:to-gray-900/80 dark:border-gray-700 dark:hover:border-purple-500 dark:shadow-gray-950/20">

                {/* Header with Icon and Period */}
                <div className="flex items-start justify-between mb-3 sm:mb-4 gap-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#A594F9]/30 to-[#C8B6FF]/30 rounded-lg sm:rounded-xl flex items-center justify-center border-2 border-[#A594F9]/40 flex-shrink-0 dark:from-purple-900/30 dark:to-purple-800/30 dark:border-purple-900/40">
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-[#5D5A88] dark:text-gray-300" />
                  </div>
                  <div className="flex items-center gap-1 sm:gap-1.5 bg-[#FFD6FF]/30 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-full border-2 border-[#FFD6FF]/50 flex-shrink-0 dark:bg-pink-900/30 dark:border-pink-900/50">
                    <Calendar className="w-3 h-3 text-[#5D5A88] flex-shrink-0 dark:text-gray-300" />
                    <span className="text-[#5D5A88] font-medium text-xs whitespace-nowrap dark:text-gray-300">
                      {edu.date}
                    </span>
                  </div>
                </div>

                {/* Institution Name */}
                <h3 className="text-[#3A386D] font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-2.5 md:mb-3 leading-tight dark:text-gray-100">
                  {edu.institut}
                </h3>

                {/* Degree */}
                <p className="text-[#5D5A88] font-semibold text-sm sm:text-base mb-2 sm:mb-2.5 md:mb-3 italic dark:text-gray-300">
                  {edu.diplome}
                </p>

                {/* Location */}
                <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 text-[#5D5A88] text-xs sm:text-sm dark:text-gray-300">
                  <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 flex-shrink-0 dark:text-purple-400" />
                  <span>{edu.location || "Tunisia"}</span>
                </div>

                {/* Mention */}
                {edu.mention && (
                  <div className="mb-3 sm:mb-4">
                    <p className="text-[#5D5A88] font-medium text-xs sm:text-sm dark:text-gray-300">
                      Mention: {edu.mention}
                    </p>
                  </div>
                )}

                {/* Skills Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mt-auto pt-4 border-t border-[#E2DCFF] dark:border-gray-700"
                >
                  <h4 className="text-sm sm:text-base font-bold text-[#3A386D] mb-2 dark:text-gray-100">Key Skills</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {edu.skills?.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-gradient-to-br from-[#F0EDFF] to-[#E2DCFF] text-[#5D5A88] rounded-full text-xs font-medium border border-[#D4C9FF] hover:bg-gradient-to-br hover:from-[#E2DCFF] hover:to-[#D4C9FF] hover:text-[#3A386D] transition-all duration-200 whitespace-nowrap shadow-sm dark:from-gray-700 dark:to-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:from-gray-600 dark:hover:to-gray-700 dark:hover:text-gray-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageWrapper>
  );
}
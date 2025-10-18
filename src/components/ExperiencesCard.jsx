import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export default function ExperiencesCard({ experience, index = 0 }) {
  // Sample data for demonstration
  const sampleExperience = {
    projet: "Web Application Development",
    entreprise: "Tech Solutions Inc.",
    type: "Final Year Internship",
    lieu: "Paris, France",
    periode: "Jan 2024 - June 2024",
    missions: [
      "Development of a responsive web application with React and Node.js",
      "Implementation of a RESTful API architecture",
      "Collaboration with UX/UI team for design implementation",
      "Participation in code reviews and team meetings"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Git", "Docker"]
  };

  const exp = experience || sampleExperience;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group w-full"
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative bg-gradient-to-br from-white/90 to-[#F8F7FF] dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-xl rounded-3xl p-4 sm:p-6 md:p-8 border-2 border-[#E2DCFF] dark:border-gray-700 hover:border-[#D4C9FF] dark:hover:border-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl dark:shadow-gray-950/50 overflow-hidden h-full">
        {/* Decorative shapes */}
        <div className="absolute top-4 right-4 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-[#E2DCFF]/30 to-[#F0EDFF]/20 dark:from-purple-800/30 dark:to-blue-800/20 rounded-3xl rotate-12 opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-xl"></div>
        <div className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-br from-[#D4C9FF]/20 to-[#E2DCFF]/15 dark:from-purple-700/20 dark:to-blue-700/15 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-xl"></div>
        
        
        <div className="relative z-10">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 mb-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#D4C9FF] to-[#E2DCFF] dark:from-purple-700 dark:to-blue-700 rounded-2xl flex items-center justify-center border-2 border-[#E2DCFF] dark:border-gray-600 shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
              <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-[#5D5A88] dark:text-gray-300" />
            </div>
            <div className="flex-1 min-w-0 w-full">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-4 mb-3">
                <div className="flex-1 min-w-0">
                  <h3 className="text-[#3A386D] dark:text-gray-100 text-xl sm:text-2xl font-black mb-2 leading-tight break-words group-hover:text-[#5D5A88] dark:group-hover:text-gray-300 transition-colors duration-300">
                    {exp.projet}
                  </h3>
                  <p className="text-[#5D5A88] dark:text-gray-300 font-bold text-base sm:text-lg mb-1">
                    {exp.entreprise}
                  </p>
                  <p className="text-[#6B6A8B] dark:text-gray-400 text-sm sm:text-base mb-2">
                    {exp.type}
                  </p>
                </div>
                <div className="flex items-center gap-2 bg-gradient-to-r from-[#F0EDFF] to-[#E2DCFF] dark:from-gray-700 dark:to-gray-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border-2 border-[#D4C9FF] dark:border-gray-600 flex-shrink-0 self-start shadow-md">
                  <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#5D5A88] dark:text-gray-300" />
                  <span className="text-[#5D5A88] dark:text-gray-300 font-bold text-xs sm:text-sm">{exp.periode}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[#6B6A8B] dark:text-gray-400 text-xs sm:text-sm">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A594F9] dark:text-purple-400 flex-shrink-0" />
                <span className="break-words font-medium">{exp.lieu}</span>
              </div>
            </div>
          </div>

          {/* Missions Section avec nouveau design */}
          <div className="mb-5 sm:mb-6 bg-gradient-to-br from-[#F8F7FF] to-[#F0EDFF] dark:from-gray-800 dark:to-gray-900 border-2 border-[#E2DCFF] dark:border-gray-700 rounded-2xl p-4 sm:p-5 relative overflow-hidden">
            {/* Forme décorative */}
            <div className="absolute top-2 right-2 w-12 h-12 bg-gradient-to-br from-[#E2DCFF] to-[#D4C9FF] dark:from-purple-700 dark:to-blue-700 rounded-xl rotate-12 opacity-30"></div>
            
            <ul className="relative space-y-2.5 sm:space-y-3">
              {exp.missions && exp.missions.length > 0 ? (
                exp.missions.map((mission, missionIndex) => (
                  <motion.li 
                    key={missionIndex} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + missionIndex * 0.05 }}
                    className="flex items-start gap-2.5 sm:gap-3 group/item"
                  >
                    <div className="w-2 h-2 bg-gradient-to-br from-[#D4C9FF] to-[#E2DCFF] dark:from-purple-500 dark:to-blue-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                    <p className="text-[#5D5A88] dark:text-gray-300 text-sm sm:text-base leading-relaxed group-hover/item:text-[#3A386D] dark:group-hover/item:text-gray-100 transition-colors duration-300 break-words">
                      {mission}
                    </p>
                  </motion.li>
                ))
              ) : (
                <p className="text-[#5D5A88] dark:text-gray-300 text-sm sm:text-base leading-relaxed break-words">
                  {exp.type} at {exp.entreprise}
                </p>
              )}
            </ul>
          </div>

          {/* Technologies Section avec nouveau style */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-1 bg-gradient-to-r from-[#D4C9FF] to-[#E2DCFF] dark:from-purple-500 dark:to-blue-500 rounded-full"></div>
              <h4 className="text-xs sm:text-sm font-bold text-[#5D5A88] dark:text-gray-300 uppercase tracking-wider">
                Technologies
              </h4>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {exp.technologies && exp.technologies.length > 0 ? (
                exp.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-br from-[#F0EDFF] to-[#E2DCFF] dark:from-gray-700 dark:to-gray-800 text-[#5D5A88] dark:text-gray-300 text-xs sm:text-sm font-bold rounded-xl border-2 border-[#D4C9FF] dark:border-gray-600 hover:border-[#C8B6FF] dark:hover:border-purple-500 hover:scale-105 transition-all duration-300 cursor-default shadow-sm hover:shadow-md"
                  >
                    {tech}
                  </motion.span>
                ))
              ) : (
                <span className="text-[#6B6A8B] dark:text-gray-400 text-xs sm:text-sm">Technologies not specified</span>
              )}
            </div>
          </div>
        </div>

        {/* Éléments décoratifs en bas */}
        <div className="absolute bottom-4 right-4 flex gap-2 opacity-40">
          <div className="w-3 h-3 bg-gradient-to-br from-[#D4C9FF] to-[#E2DCFF] dark:from-purple-600 dark:to-blue-600 rounded-md rotate-45"></div>
          <div className="w-2 h-2 bg-gradient-to-br from-[#F0EDFF] to-[#D4C9FF] dark:from-purple-500 dark:to-blue-500 rounded-full"></div>
        </div>
      </div>
    </motion.div>
  );
}
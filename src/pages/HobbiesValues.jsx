import React, { useState } from "react";
import { Sparkles, Heart, Star, Award, X } from "lucide-react";
import { qualites, centresInterets } from "../data/qualites";
import PageWrapper from "../components/PageWrapper";
import { motion, AnimatePresence } from "framer-motion";

export default function HobbiesValues() {
  const values = qualites;
  const thumbWidth = 140; // approximate width for interest chips animation
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const fixedInterests = [
    'Reading - Arabic literature',
    'Sports: handball, club participation'
  ];
  const animatedInterests = centresInterets.filter((i) => !fixedInterests.includes(i));
  const scrollDistance = Math.max(0, (animatedInterests.length - 1) * thumbWidth);
  // Photos from Achievements for Centers of Interest carousel
  const interestPhotos = [
    '/Photos/Achievements/ima1.jpeg',
    '/Photos/Achievements/ima2.jpg'
  ];
  const photoThumbWidth = 160;
  const photoScrollDistance = Math.max(0, (interestPhotos.length - 1) * photoThumbWidth);
  return (
    <PageWrapper className="py-12 sm:py-16 md:py-20" particleCount={12}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#3A386D] text-center dark:text-gray-100">
            Hobbies & <span className="text-gradient-cute">Values</span>
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="text-[#5D5A88] text-sm sm:text-base md:text-lg text-center mb-6 sm:mb-8 px-4 text-cute dark:text-gray-300"
        >
          Centers of interest and personal qualities
        </motion.p>
       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {/* Centers of Interest Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-gradient-to-br from-white/80 to-[#F8F7FF] backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-[#E2DCFF] hover:border-[#A594F9] transition-all duration-300 h-full flex flex-col shadow-lg hover:shadow-xl hover:shadow-[#A594F9]/20 relative dark:from-gray-800/80 dark:to-gray-900/80 dark:border-gray-700 dark:hover:border-purple-500 dark:shadow-gray-950/20"
          >
            
            <div className="flex items-center justify-between mb-3 sm:mb-4 gap-2">
              <h2 className="text-xl sm:text-2xl font-bold text-[#3A386D] dark:text-gray-100">Centers of Interest</h2>
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-[#A594F9] flex-shrink-0 dark:text-purple-400" />
            </div>
            {/* Fixed interests (not animated) */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-3">
              {fixedInterests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1.5 bg-gradient-to-br from-[#F0EDFF] to-[#E2DCFF] text-[#5D5A88] rounded-full text-xs sm:text-sm font-medium border border-[#D4C9FF] shadow-sm dark:from-gray-700 dark:to-gray-800 dark:text-gray-300 dark:border-gray-600"
                >
                  {interest}
                </span>
              ))}
            </div>

            {/* Animated interests */}
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-2 sm:gap-3"
                animate={{ x: [0, -scrollDistance] }}
                transition={{ x: { repeat: Infinity, repeatType: "reverse", duration: Math.max(8, animatedInterests.length * 2), ease: "linear" } }}
              >
                {animatedInterests.map((interest, index) => (
                  <span
                    key={index}
                    className="flex-shrink-0 px-3 py-1.5 bg-gradient-to-br from-[#F0EDFF] to-[#E2DCFF] text-[#5D5A88] rounded-full text-xs sm:text-sm font-medium border border-[#D4C9FF] shadow-sm dark:from-gray-700 dark:to-gray-800 dark:text-gray-300 dark:border-gray-600"
                  >
                    {interest}
                  </span>
                ))}
              </motion.div>
          </div>

            {/* Photos carousel (from Achievements s1, s2) */}
            {interestPhotos.length > 0 && (
              <div className="mt-4 bg-gradient-to-br from-[#F8F7FF] to-[#F0EDFF] rounded-xl p-3 border-2 border-[#E2DCFF] overflow-hidden dark:from-gray-800 dark:to-gray-900 dark:border-gray-700">
                <div className="overflow-hidden">
                  <motion.div
                    className="flex gap-3"
                    animate={{ x: [0, -photoScrollDistance] }}
                    transition={{ x: { repeat: Infinity, repeatType: 'reverse', duration: Math.max(6, interestPhotos.length * 2), ease: 'linear' } }}
                  >
                    {interestPhotos.map((src, idx) => (
                      <div
                        key={`${src}-${idx}`}
                        className="flex-shrink-0 w-40 h-24 sm:w-48 sm:h-28 rounded-lg overflow-hidden border-2 border-[#E2DCFF] shadow-sm dark:border-gray-700"
                      >
                        <img src={src} alt={`Interest ${idx + 1}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Personal Qualities Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-gradient-to-br from-white/80 to-[#F8F7FF] backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-[#E2DCFF] hover:border-[#A594F9] transition-all duration-300 h-full flex flex-col shadow-lg hover:shadow-xl hover:shadow-[#A594F9]/20 relative dark:from-gray-800/80 dark:to-gray-900/80 dark:border-gray-700 dark:hover:border-purple-500 dark:shadow-gray-950/20"
          >
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#3A386D] dark:text-gray-100">Personal Qualities</h2>
              <Star className="w-5 h-5 sm:w-6 sm:h-6 text-[#A594F9] flex-shrink-0 dark:text-purple-400" />
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
              {values.map((v) => (
                <span 
                  key={v} 
                  className="px-2.5 py-1 bg-gradient-to-br from-[#F0EDFF] to-[#E2DCFF] text-[#5D5A88] rounded-full text-xs font-medium border border-[#D4C9FF] hover:bg-gradient-to-br hover:from-[#E2DCFF] hover:to-[#D4C9FF] hover:text-[#3A386D] transition-all duration-200 whitespace-nowrap shadow-sm dark:from-gray-700 dark:to-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:from-gray-600 dark:hover:to-gray-700 dark:hover:text-gray-100"
                >
                  {v}
                </span>
              ))}
            </div>
            <div className="text-[#5D5A88] text-xs sm:text-sm flex items-start sm:items-center gap-2 leading-relaxed mt-auto pt-4 border-t border-[#E2DCFF] dark:text-gray-300 dark:border-gray-700">
              <Heart className="w-4 h-4 text-[#E0BBE4] flex-shrink-0 mt-0.5 sm:mt-0 dark:text-pink-500" />
              <span>These qualities guide my teamwork, learning and mindset.</span>
            </div>
          </motion.div>
        </div>

        {/* Additional Blocks: Certifications and Associative Life */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto mt-4 sm:mt-6">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-gradient-to-br from-white/80 to-[#F8F7FF] backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-[#E2DCFF] hover:border-[#A594F9] transition-all duration-300 h-full flex flex-col shadow-lg hover:shadow-xl hover:shadow-[#A594F9]/20 relative dark:from-gray-800/80 dark:to-gray-900/80 dark:border-gray-700 dark:hover:border-purple-500 dark:shadow-gray-950/20"
          >
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#3A386D] dark:text-gray-100">Certifications</h2>
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#A594F9] flex-shrink-0 dark:text-purple-400" />
            </div>
            <ul className="space-y-2 text-[#5D5A88] text-sm sm:text-base dark:text-gray-300">
              <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 bg-[#A594F9] rounded-full dark:bg-purple-500"></span> Cisco – CCNA2: Switching, Routing, and Wireless Essentials</li>
              <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 bg-[#A594F9] rounded-full dark:bg-purple-500"></span> Cisco – CCNA1: Introduction to Networks</li>
            </ul>
          </motion.div>

          {/* Associative Life */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-gradient-to-br from-white/80 to-[#F8F7FF] backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-[#E2DCFF] hover:border-[#A594F9] transition-all duration-300 h-full flex flex-col shadow-lg hover:shadow-xl hover:shadow-[#A594F9]/20 relative dark:from-gray-800/80 dark:to-gray-900/80 dark:border-gray-700 dark:hover:border-purple-500 dark:shadow-gray-950/20"
          >
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#3A386D] dark:text-gray-100">Associative Life</h2>
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#A594F9] flex-shrink-0 dark:text-purple-400" />
            </div>
            
            <div className="flex flex-col gap-3">
              <p className="text-[#5D5A88] text-sm sm:text-base dark:text-gray-300">Active Member: ISAMM Robotics Club (2025)</p>
              
              {/* Certificate Photo */}
              <div className="mt-2">
                <button
                  onClick={() => setIsCertModalOpen(true)}
                  className="group relative w-full h-32 sm:h-36 rounded-xl overflow-hidden border-2 border-[#E2DCFF] hover:border-[#A594F9] transition-all duration-300 shadow-md hover:shadow-lg dark:border-gray-700 dark:hover:border-purple-500"
                >
                  <img 
                    src="/Photos/Achievements/certif.png" 
                    alt="ISAMM Robotics Club Certificate" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 dark:bg-gray-800/90 px-3 py-2 rounded-lg border border-[#E2DCFF] dark:border-gray-600">
                      <p className="text-xs font-semibold text-[#3A386D] dark:text-gray-100">View Certificate</p>
                    </div>
                  </div>
                </button>
            </div>
          </div>
          </motion.div>
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {isCertModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsCertModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border-2 border-[#E2DCFF] dark:bg-gray-800/95 dark:border-gray-700 dark:shadow-gray-950/50"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b-2 border-[#E2DCFF] bg-gradient-to-r from-[#F8F7FF] to-[#F0EDFF] dark:border-gray-700 dark:from-gray-800 dark:to-gray-900">
                <h3 className="text-xl font-bold text-[#3A386D] dark:text-gray-100 flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#A594F9] dark:text-purple-400" />
                  ISAMM Robotics Club Certificate
                </h3>
                <button 
                  onClick={() => setIsCertModalOpen(false)} 
                  className="p-2 hover:bg-[#F0EDFF] dark:hover:bg-gray-700 rounded-xl transition-colors"
                >
                  <X className="w-5 h-5 text-[#5D5A88] dark:text-gray-300" />
                </button>
              </div>
              
              {/* Certificate Image */}
              <div className="relative bg-gradient-to-br from-[#F8F7FF] via-[#F0EDFF] to-white flex items-center justify-center min-h-[400px] max-h-[70vh] dark:from-gray-900 dark:via-gray-800 dark:to-gray-950">
                <img 
                  src="/Photos/Achievements/certif.png" 
                  alt="ISAMM Robotics Club Certificate" 
                  className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                />
              </div>
              
              {/* Footer */}
              <div className="p-4 border-t-2 border-[#E2DCFF] bg-gradient-to-r from-[#F8F7FF] to-[#F0EDFF] dark:border-gray-700 dark:from-gray-800 dark:to-gray-900">
                <p className="text-center text-[#5D5A88] text-sm dark:text-gray-300">
                  Active Member: ISAMM Robotics Club (2025)
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}
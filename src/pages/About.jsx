import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Code, Brain, Target, Heart, Star } from "lucide-react";
import PageWrapper from "../components/PageWrapper";

export default function About() {

  return (
    <PageWrapper className="py-20" particleCount={15}>
      <div className="container mx-auto px-4 py-16">
        {/* Header avec formes géométriques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <div className="relative inline-block">
            {/* Éléments décoratifs géométriques */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-800/50 dark:to-pink-800/50 rounded-2xl rotate-12 opacity-40 blur-sm"></div>
            <div className="absolute -bottom-4 -right-6 w-12 h-12 bg-gradient-to-br from-blue-200 to-cyan-200 dark:from-blue-800/50 dark:to-cyan-800/50 rounded-xl -rotate-12 opacity-40 blur-sm"></div>
            
            <h1 className="text-5xl md:text-6xl font-black text-[#3A386D] dark:text-gray-100 mb-6">
              About <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Me</span>
            </h1>
            
            {/* Barre décorative sous le titre */}
            <div className="mx-auto w-32 h-1 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 dark:from-purple-600 dark:via-pink-600 dark:to-blue-600 rounded-full"></div>
          </div>
        </motion.div>

        {/* About Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-white/95 to-[#F8F7FF] dark:from-gray-800/95 dark:to-gray-900/95 backdrop-blur-xl rounded-[2.5rem] border-2 border-[#E2DCFF] dark:border-gray-700 shadow-2xl overflow-hidden">
            
            
            {/* Decorative Background Elements */}
            <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-[#E2DCFF]/20 to-[#F0EDFF]/15 dark:from-purple-800/20 dark:to-blue-800/15 rounded-3xl rotate-12 opacity-30 blur-xl"></div>
            <div className="absolute bottom-12 left-8 w-40 h-40 bg-gradient-to-br from-[#D4C9FF]/15 to-[#E2DCFF]/10 dark:from-purple-700/15 dark:to-blue-700/10 rounded-full opacity-25 blur-2xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-[#FFD6FF]/10 to-[#C8B6FF]/8 dark:from-purple-600/10 dark:to-blue-600/8 rounded-full opacity-20 blur-3xl"></div>
            
            {/* Content */}
            <div className="relative z-10 p-6 md:p-10 lg:p-12 space-y-6">
          
              {/* Introduction Block */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-[#F8F7FF]/50 to-[#F0EDFF]/30 dark:from-gray-700/50 dark:to-gray-800/30 border border-[#E2DCFF]/50 dark:border-gray-600/50"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#A594F9] to-[#C8B6FF] dark:from-purple-600 dark:to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#3A386D] dark:text-gray-100 mb-2">Introduction</h3>
                  <p className="text-[#5D5A88] dark:text-gray-300 text-base leading-relaxed">
                  🐻 Hello, I'm <span className="text-[#A594F9] dark:text-purple-400 font-semibold">Raja Hannachi</span>, 
                    a final-year <span className="text-[#A594F9] dark:text-purple-400 font-semibold">Software Engineering</span> student passionate about <span className="text-blue-400 font-semibold">Development</span> and <span className="text-pink-400 font-semibold">Artificial Intelligence</span>.
                  </p>
                </div>
              </motion.div>

              {/* Passion Block */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-[#F0EDFF]/50 to-[#E2DCFF]/30 dark:from-gray-800/50 dark:to-gray-700/30 border border-[#E2DCFF]/50 dark:border-gray-600/50"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#C8B6FF] to-[#FFD6FF] dark:from-blue-600 dark:to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#3A386D] dark:text-gray-100 mb-2">My Passion</h3>
                  <p className="text-[#5D5A88] dark:text-gray-300 text-base leading-relaxed">
                    I'm deeply interested in building <span className="text-[#A594F9] dark:text-purple-400 font-semibold">innovative, intelligent, and user-centric applications</span> that solve real-world problems through technology.
                  </p>
                </div>
              </motion.div>

              {/* Experience Block */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-[#FFD6FF]/50 to-[#F8F7FF]/30 dark:from-purple-700/50 dark:to-gray-800/30 border border-[#E2DCFF]/50 dark:border-gray-600/50"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#FFD6FF] to-[#A594F9] dark:from-purple-600 dark:to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#3A386D] dark:text-gray-100 mb-2">Experience</h3>
                  <p className="text-[#5D5A88] dark:text-gray-300 text-base leading-relaxed">
                    My experience includes working with <span className="text-[#A594F9] dark:text-purple-400 font-semibold">full-stack development</span>, 
                <span className="text-blue-400 font-semibold"> machine learning</span>, and <span className="text-pink-400 font-semibold">AI integration</span>, focusing on creating seamless digital experiences and intelligent solutions.
              </p>
                </div>
              </motion.div>

              {/* Learning Goals Block */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-[#E2DCFF]/50 to-[#D4C9FF]/30 dark:from-gray-700/50 dark:to-gray-800/30 border border-[#E2DCFF]/50 dark:border-gray-600/50"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#A594F9] to-[#FFD6FF] dark:from-purple-600 dark:to-purple-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#3A386D] dark:text-gray-100 mb-2">Learning Goals</h3>
                  <p className="text-[#5D5A88] dark:text-gray-300 text-base leading-relaxed">
                    I'm also eager to explore and expand my knowledge in <span className="text-[#A594F9] dark:text-purple-400 font-semibold">DevOps practices</span> and <span className="text-blue-400 font-semibold">Quality Assurance</span>, understanding their crucial role in delivering robust and reliable software.
              </p>
            </div>
              </motion.div>

              {/* Vision Block */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-[#C8B6FF]/50 to-[#A594F9]/30 dark:from-blue-700/50 dark:to-purple-700/30 border border-[#E2DCFF]/50 dark:border-gray-600/50"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#C8B6FF] to-[#A594F9] dark:from-blue-600 dark:to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#3A386D] dark:text-gray-100 mb-2">My Vision</h3>
                  <p className="text-[#5D5A88] dark:text-gray-300 text-base leading-relaxed">
                    My goal is to combine <span className="text-[#A594F9] dark:text-purple-400 font-semibold">technical expertise, AI innovation, and software quality</span> to build solutions that are <span className="text-blue-400 font-semibold">intelligent, efficient, and make a positive impact</span>.
                  </p>
                </div>
              </motion.div>

            </div>

            {/* Bottom Decorative Elements */}
            <div className="absolute bottom-6 right-8 flex gap-2 opacity-40">
              <div className="w-4 h-4 bg-gradient-to-br from-[#D4C9FF] to-[#E2DCFF] dark:from-purple-600 dark:to-blue-600 rounded-lg rotate-45"></div>
              <div className="w-3 h-3 bg-gradient-to-br from-[#F0EDFF] to-[#D4C9FF] dark:from-purple-500 dark:to-blue-500 rounded-md"></div>
              <div className="w-2 h-2 bg-gradient-to-br from-[#A594F9] to-[#C8B6FF] dark:from-purple-400 dark:to-blue-400 rounded-full"></div>
            </div>
            
            <div className="absolute bottom-8 left-8 flex flex-col gap-2 opacity-40">
              <div className="w-3 h-3 bg-gradient-to-br from-[#FFD6FF] to-[#A594F9] dark:from-purple-500 dark:to-blue-500 rounded-full"></div>
              <div className="w-4 h-4 bg-gradient-to-br from-[#C8B6FF] to-[#FFD6FF] dark:from-blue-500 dark:to-purple-500 rounded-lg rotate-12"></div>
            </div>
            </div>
          </motion.div>
      </div>
    </PageWrapper>
  );
}
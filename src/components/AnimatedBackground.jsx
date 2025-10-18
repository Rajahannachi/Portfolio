import React from "react";
import { motion } from "framer-motion";

export default function AnimatedBackground({ 
  children, 
  className = "",
  particleCount = 20,
  showGrid = true,
  ...props 
}) {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-[#F0EDFF] via-[#E2DCFF] to-[#D4C9FF] dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 ${className}`} {...props}>
      {/* Floating Pastel Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#FFD6FF]/40 to-[#E0BBE4]/30 dark:from-purple-900/40 dark:to-blue-900/30 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#C8B6FF]/40 to-[#A594F9]/30 dark:from-blue-800/40 dark:to-purple-800/30 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#B6C2FF]/30 to-[#9CA6FF]/25 dark:from-cyan-800/30 dark:to-indigo-800/25 rounded-full blur-3xl"
          animate={{
            x: [0, 20, -20, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.08, 1.12, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-72 h-72 bg-gradient-to-br from-[#FFEECC]/30 to-[#FFEBA7]/25 dark:from-yellow-900/30 dark:to-orange-900/25 rounded-full blur-2xl"
          animate={{
            x: [0, -25, 0],
            y: [0, 35, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-gradient-to-br from-[#D4FDD4]/35 to-[#BFF0BF]/28 dark:from-green-900/35 dark:to-emerald-900/28 rounded-full blur-2xl"
          animate={{
            x: [0, 35, 0],
            y: [0, -25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      {/* Cute Floating Particles with varied shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(particleCount)].map((_, i) => {
          const shapes = ['circle', 'star', 'heart', 'sparkle'];
          const shape = shapes[i % shapes.length];
          const colors = [
            'bg-gradient-to-br from-[#FFD6FF]/40 to-[#E0BBE4]/30 dark:from-purple-700/40 dark:to-blue-700/30',
            'bg-gradient-to-br from-[#C8B6FF]/40 to-[#A594F9]/30 dark:from-blue-600/40 dark:to-purple-600/30',
            'bg-gradient-to-br from-[#B6C2FF]/40 to-[#9CA6FF]/30 dark:from-cyan-600/40 dark:to-indigo-600/30',
            'bg-gradient-to-br from-[#FFEECC]/40 to-[#FFEBA7]/30 dark:from-yellow-700/40 dark:to-orange-700/30',
            'bg-gradient-to-br from-[#D4FDD4]/40 to-[#BFF0BF]/30 dark:from-green-700/40 dark:to-emerald-700/30',
          ];
          const randomColor = colors[i % colors.length];
          const size = 4 + Math.random() * 8;
          
          return (
            <motion.div
              key={i}
              className={`absolute ${randomColor}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                borderRadius: shape === 'circle' ? '50%' : shape === 'star' ? '30%' : '20%',
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
              }}
              animate={{
                y: [0, -30 - Math.random() * 40, 0],
                x: [0, (Math.random() - 0.5) * 30, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 6 + Math.random() * 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 8,
              }}
            />
          );
        })}
      </div>

      {/* Cute Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
                fill="url(#sparkle-gradient)"
                opacity="0.6"
              />
              <defs>
                <linearGradient id="sparkle-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E0BBE4" />
                  <stop offset="50%" stopColor="#C8B6FF" />
                  <stop offset="100%" stopColor="#A594F9" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Subtle Animated Grid Pattern */}
      {showGrid && (
        <motion.div
          className="absolute inset-0 opacity-15 dark:opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, #B6C2FF 1px, transparent 1px),
              linear-gradient(to bottom, #B6C2FF 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`heart-${i}`}
            className="absolute text-[#E0BBE4]/40 dark:text-purple-400/40"
            style={{
              left: `${15 + i * 20}%`,
              fontSize: `${16 + Math.random() * 12}px`,
            }}
            initial={{ y: '100%', opacity: 0 }}
            animate={{
              y: '-100%',
              opacity: [0, 0.6, 0],
              x: [(Math.random() - 0.5) * 50, (Math.random() - 0.5) * 50],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          >
            ♡
          </motion.div>
        ))}
      </div>

      {/* Gentle Wave Effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 opacity-20"
        style={{
          background: 'linear-gradient(180deg, transparent, #C8B6FF)',
        }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Calendar, CheckCircle, ExternalLink } from "lucide-react";

export default function CertificationModal({ cert, onClose, normalize }) {
  const [hasImage, setHasImage] = useState(true);
  const imageSrc = `/Photos/Logos/${normalize(cert.logo)}.svg`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-slate-800/90 backdrop-blur-xl rounded-3xl p-8 max-w-2xl w-full border-2 border-purple-400/30 shadow-2xl relative max-h-[90vh] overflow-y-auto card-cute"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-pink-400/20 hover:bg-pink-400 text-pink-400 hover:text-white flex items-center justify-center transition-all duration-300 z-10 border border-pink-400/30 icon-cute"
        >
          ✕
        </button>

        {/* Content */}
        <div className="flex flex-col items-center text-center">
          {/* Large format logo */}
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-white/20 to-white/10 border-4 border-purple-400/30 flex items-center justify-center mb-6 shadow-lg">
            {hasImage && (
              <img
                src={imageSrc}
                alt={cert.title}
                onError={() => setHasImage(false)}
                className="w-20 h-20 object-contain filter brightness-90"
              />
            )}
            {!hasImage && <Award className="w-20 h-20 text-purple-400 icon-cute" />}
          </div>

          <h3 className="text-3xl font-bold text-gray-100 mb-2 text-cute">{cert.title}</h3>
          <p className="text-purple-400 text-lg mb-2 text-cute">{cert.organization}</p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-gray-400 mb-6"
          >
            <Calendar className="w-5 h-5 icon-cute" />
            <span className="text-cute">
              Obtained on{" "}
              {new Date(cert.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 text-base mb-6 leading-relaxed text-cute"
          >
            {cert.description}
            <br></br>
            <br></br>
            <p className="text-gray-400 text-sm mb-1 text-cute">Duration</p>
            <p className="text-gray-100 font-semibold text-lg text-cute">{cert.hours}h</p>
          </motion.p>

          {/* Skills */}
          <div className="mb-8 w-full">
            <h4 className="text-lg font-semibold text-purple-400 mb-4 text-cute">
              Validated Skills
            </h4>
            <div className="flex flex-wrap gap-3 justify-center">
              {cert.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-purple-400/20 text-gray-100 text-sm rounded-full border border-purple-400/30 hover:bg-purple-400/30 transition-colors text-cute"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Verification badge at bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-2 text-green-400 text-sm"
          >
            <CheckCircle className="w-4 h-4 icon-cute" />
            <span className="text-cute">Verified and authentic certification</span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
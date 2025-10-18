import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Calendar, CheckCircle, ExternalLink } from "lucide-react";

export default function CertificationCard({ cert, index, onClick, normalize }) {
  const [hasImage, setHasImage] = useState(true);
  const imageSrc = `/Photos/Logos/${normalize(cert.logo)}.svg`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={onClick}
      className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border-2 border-purple-400/30 hover:border-pink-400/50 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 group card-cute"
    >
      {/* Verified Badge */}
      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full p-2 shadow-lg border border-white">
        <CheckCircle className="w-5 h-5 text-white icon-cute" />
      </div>

      {/* Logo */}
      <div className="flex justify-center mb-4">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-white/20 to-white/10 border-4 border-purple-400/30 flex items-center justify-center group-hover:border-pink-400/50 transition-all duration-300 shadow-lg group-hover:shadow-xl">
          {hasImage && (
            <img
              src={imageSrc}
              alt={cert.title}
              onError={() => setHasImage(false)}
              className="w-12 h-12 object-contain filter brightness-90"
            />
          )}
          {!hasImage && <Award className="w-12 h-12 text-purple-400 icon-cute" />}
        </div>
      </div>

      {/* Content */}
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-purple-400 transition-colors text-cute">
          {cert.title}
        </h3>
        <p className="text-gray-300 text-sm mb-3 text-cute">{cert.organization}</p>

        <div className="flex items-center justify-center gap-2 text-gray-400 text-xs mb-4">
          <Calendar className="w-4 h-4 icon-cute" />
          <span className="text-cute">
            {new Date(cert.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </span>
        </div>

        {/* Skills */}
        <div className="flex justify-center gap-1 flex-wrap">
          {cert.skills.slice(0, 3).map((skill, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-purple-400/20 text-gray-100 text-xs rounded-full border border-purple-400/30 text-cute"
            >
              {skill}
            </span>
          ))}
          {cert.skills.length > 3 && (
            <span className="px-2 py-1 bg-pink-400/20 text-gray-300 text-xs rounded-full border border-pink-400/30 text-cute">
              +{cert.skills.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Click indicator */}
      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <ExternalLink className="w-4 h-4 text-purple-400 icon-cute" />
      </div>
    </motion.div>
  );
}
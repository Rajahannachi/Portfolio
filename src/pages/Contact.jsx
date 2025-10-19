import React, { useState } from "react";
import { Linkedin, Github, Mail, Phone, CheckCircle, AlertCircle } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    // Validation simple
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({ type: "error", message: "Veuillez remplir tous les champs" });
      setIsSubmitting(false);
      return;
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: "error", message: "Use valid email" });
      setIsSubmitting(false);
      return;
    }

    // Vérifier que les variables d'environnement sont définies
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error("Missing EmailJS Configuration:", {
        SERVICE_ID: EMAILJS_SERVICE_ID,
        TEMPLATE_ID: EMAILJS_TEMPLATE_ID,
        PUBLIC_KEY: EMAILJS_PUBLIC_KEY
      });
      setStatus({ 
        type: "error", 
        message: "Error. Contact me directly at rajahannachi21@gmail.com " 
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const now = new Date();
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_name: "Raja",
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email,
        time: now.toLocaleString('fr-FR', { 
          day: '2-digit',
          month: 'long',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      console.log("Envoi du message...");

      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            ...templateParams,
            from_email: formData.email,  // Force l'email de l'expéditeur
            reply_to: formData.email,    // Force le reply-to
          },
        }),
      });

      if (response.ok || response.status === 200) {
        setStatus({ 
          type: "success", 
          message: "Message sent successfully! I will reply to you soon." 
        });
        // Reset form
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const errorText = await response.text();
        console.error("Erreur EmailJS:", errorText);
        throw new Error(`Erreur lors de l'envoi: ${errorText}`);
      }
    } catch (error) {
      console.error("Erreur:", error);
      setStatus({ 
        type: "error", 
        message: "Error sending message. Please try again or email me directly at rajahannachi@gmail.com" 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageWrapper className="py-12 sm:py-16 md:py-20 min-h-screen" particleCount={15}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
        {/* Left Side - Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3A386D] mb-4 sm:mb-6 dark:text-gray-100">
            <span className="text-gradient-cute">Contact Me</span>
          </h1>
          <p className="text-[#5D5A88] text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed text-cute dark:text-gray-300">
            I'm always open to discussing new projects, ideas or opportunities. Contact me by email, phone or follow me on social networks.
          </p>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-3 sm:space-y-4 text-[#5D5A88] dark:text-gray-300"
          >
            <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-[#A594F9] icon-cute dark:text-purple-400" /> 
              <a href="mailto:rajahannachi@gmail.com" className="break-all text-[#5D5A88] text-cute dark:text-gray-300 hover:text-[#A594F9] dark:hover:text-purple-400 transition-colors">
                rajahannachi@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-[#A594F9] icon-cute dark:text-purple-400" /> 
              <a href="tel:+21655551630" className="text-[#5D5A88] text-cute dark:text-gray-300 hover:text-[#A594F9] dark:hover:text-purple-400 transition-colors">
                +216 55551630
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8"
          >
            <a
              href="https://www.linkedin.com/in/raja-hannachi-01b668254/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-[#C8B6FF]/20 to-[#A594F9]/20 border-2 border-[#C8B6FF]/40 text-[#5D5A88] hover:from-[#C8B6FF]/30 hover:to-[#A594F9]/30 hover:border-[#C8B6FF]/60 transition-all shadow-sm hover:shadow-[#C8B6FF]/20 text-sm sm:text-base font-medium w-full sm:w-auto icon-cute dark:from-purple-900/20 dark:to-purple-800/20 dark:border-purple-900/40 dark:text-gray-300 dark:hover:from-purple-900/30 dark:hover:to-purple-800/30 dark:hover:border-purple-900/60 dark:shadow-purple-950/20"
              aria-label="Open LinkedIn profile"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-[#3A386D] dark:text-gray-100" /> LinkedIn
            </a>
            <a
              href="https://github.com/Rajahannachi"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-[#E0BBE4]/20 to-[#D291BC]/20 border-2 border-[#E0BBE4]/40 text-[#5D5A88] hover:from-[#E0BBE4]/30 hover:to-[#D291BC]/30 hover:border-[#E0BBE4]/60 transition-all shadow-sm hover:shadow-[#E0BBE4]/20 text-sm sm:text-base font-medium w-full sm:w-auto icon-cute dark:from-pink-900/20 dark:to-pink-800/20 dark:border-pink-900/40 dark:text-gray-300 dark:hover:from-pink-900/30 dark:hover:to-pink-800/30 dark:hover:border-pink-900/60 dark:shadow-pink-950/20"
              aria-label="Open GitHub profile"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5 text-[#3A386D] dark:text-gray-100" /> GitHub
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-3 sm:space-y-4"
        >
          <input 
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 sm:px-4 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-white/90 border-2 border-[#D4C9FF] text-[#3A386D] text-sm sm:text-base placeholder:text-[#6B6A8B] focus:border-[#A594F9] focus:outline-none focus:ring-2 focus:ring-[#A594F9]/20 transition-colors dark:bg-gray-800/90 dark:border-gray-700 dark:text-gray-100 dark:placeholder:text-gray-400 dark:focus:border-purple-600 dark:focus:ring-purple-900/20" 
            placeholder="Name *" 
            required
          />
          <input 
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 sm:px-4 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-white/90 border-2 border-[#D4C9FF] text-[#3A386D] text-sm sm:text-base placeholder:text-[#6B6A8B] focus:border-[#A594F9] focus:outline-none focus:ring-2 focus:ring-[#A594F9]/20 transition-colors dark:bg-gray-800/90 dark:border-gray-700 dark:text-gray-100 dark:placeholder:text-gray-400 dark:focus:border-purple-600 dark:focus:ring-purple-900/20" 
            placeholder="Email *" 
            required
          />
          <input 
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-3 sm:px-4 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-white/90 border-2 border-[#D4C9FF] text-[#3A386D] text-sm sm:text-base placeholder:text-[#6B6A8B] focus:border-[#A594F9] focus:outline-none focus:ring-2 focus:ring-[#A594F9]/20 transition-colors dark:bg-gray-800/90 dark:border-gray-700 dark:text-gray-100 dark:placeholder:text-gray-400 dark:focus:border-purple-600 dark:focus:ring-purple-900/20" 
            placeholder="Subject *" 
            required
          />
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-3 sm:px-4 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-white/90 border-2 border-[#D4C9FF] text-[#3A386D] text-sm sm:text-base placeholder:text-[#6B6A8B] focus:border-[#A594F9] focus:outline-none focus:ring-2 focus:ring-[#A594F9]/20 transition-colors resize-none dark:bg-gray-800/90 dark:border-gray-700 dark:text-gray-100 dark:placeholder:text-gray-400 dark:focus:border-purple-600 dark:focus:ring-purple-900/20" 
            placeholder="Message *" 
            required
          />

          {/* Status message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            {status.message && (
              <div className={`flex items-center gap-2 p-3 rounded-lg border-2 ${
                status.type === "success" 
                  ? "bg-[#C8E6C9]/20 border-[#BFF0BF]/40 text-[#4CAF50] dark:bg-green-900/20 dark:border-green-800/40 dark:text-green-400" 
                  : "bg-[#FFAFCC]/20 border-[#FFB6C1]/40 text-[#FF4D6D] dark:bg-red-900/20 dark:border-red-800/40 dark:text-red-400"
              }`}>
                {status.type === "success" ? (
                  <CheckCircle className="w-5 h-5 flex-shrink-0 text-[#4CAF50] dark:text-green-400" />
                ) : (
                  <AlertCircle className="w-5 h-5 flex-shrink-0 text-[#FF4D6D] dark:text-red-400" />
                )}
                <span className="text-sm text-[#3A386D] dark:text-gray-100">{status.message}</span>
              </div>
            )}
          </motion.div>

          <button 
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full py-3 sm:py-4 md:py-5 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base bg-gradient-to-r from-[#A594F9] to-[#C8B6FF] hover:from-[#957DAD] hover:to-[#BB8B9D] text-white transition-all shadow-lg hover:shadow-[#A594F9]/30 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed dark:from-purple-600 dark:to-purple-700 dark:hover:from-purple-700 dark:hover:to-purple-800 dark:shadow-purple-950/30"
          >
            {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
          </button>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
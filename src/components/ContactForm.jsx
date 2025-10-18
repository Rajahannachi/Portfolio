import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:5000";

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);

    if (!form.name || !form.email || !form.message)
      return setStatus({ type: "error", text: "Please fill in all fields." });

    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus({
          type: "success",
          text: data.message || "Message sent!",
        });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          text: data.error || "Error sending message.",
        });
      }
    } catch (err) {
      setStatus({ type: "error", text: "Network error." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 py-10 px-4">
      {/* IMAGE */}
      <div className="md:w-1/2 flex justify-center">
        <motion.img
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          src="/Photos/Contact.png"
          alt="Contact"
          className="w-80 md:w-[56%] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-4 border-[#E2DCFF]"
        />
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="md:w-1/2 w-full p-6 md:p-8 bg-white/5 backdrop-blur-xl rounded-2xl border-2 border-purple-400/30 shadow-lg card-cute">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-100 text-cute"
        >
          Contact Me
        </motion.h1>
        
        <br />
        <br />
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-300 mb-6 text-cute"
        >
          Feel free to write to me, I will reply as soon as possible.
        </motion.p>

        {/* Status message */}
        {status && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-3 rounded-lg mb-4 text-center ${
              status.type === "success" 
                ? "bg-green-400/20 text-green-300 border border-green-400/30" 
                : "bg-pink-400/20 text-pink-300 border border-pink-400/30"
            }`}
          >
            {status.text}
          </motion.div>
        )}

        <div className="space-y-4">
          <div>
            <label className="block text-lg text-gray-100 mb-2 font-medium text-cute">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border-2 border-purple-400/30 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all duration-300 bg-white/10 backdrop-blur-sm text-gray-100 placeholder-gray-400"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-lg text-gray-100 mb-2 font-medium text-cute">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border-2 border-purple-400/30 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all duration-300 bg-white/10 backdrop-blur-sm text-gray-100 placeholder-gray-400"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-lg text-gray-100 mb-2 font-medium text-cute">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full border-2 border-purple-400/30 rounded-xl px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all duration-300 bg-white/10 backdrop-blur-sm text-gray-100 placeholder-gray-400"
              placeholder="Your message..."
            ></textarea>
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-4 rounded-xl font-semibold shadow-lg transition-all duration-300 ${
              loading
                ? "bg-gray-500 cursor-not-allowed text-white"
                : "bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white"
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Sending...
              </div>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </div>
      </form>
    </div>
  );
}
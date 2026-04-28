"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B2545]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B2545] via-[#0d2d57] to-[#071a36]" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#C9962C]" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full border border-[#C9962C]/10" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full border border-[#C9962C]/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#C9962C] mb-6" style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}>
            Abuja, Nigeria · Est. 2005
          </p>
        </motion.div>

        <motion.h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-white leading-none mb-6"
          style={{ fontFamily: "var(--font-cormorant, serif)" }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          Luminary
          <br />
          <span className="text-[#C9962C] font-semibold">College</span>
        </motion.h1>

        <motion.div
          className="h-px w-24 bg-[#C9962C] mx-auto mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        />

        <motion.p
          className="text-xl md:text-2xl text-white/70 mb-12 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Illuminating Futures, Shaping Greatness
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link
            href="/admissions"
            className="px-10 py-4 bg-[#C9962C] text-white font-semibold text-sm tracking-wide uppercase hover:bg-[#b8851e] transition-colors rounded"
          >
            Apply Now
          </Link>
          <Link
            href="/about"
            className="px-10 py-4 border border-white/40 text-white font-semibold text-sm tracking-wide uppercase hover:bg-white/10 transition-colors rounded"
          >
            Explore School
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="text-[10px] tracking-widest uppercase" style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}

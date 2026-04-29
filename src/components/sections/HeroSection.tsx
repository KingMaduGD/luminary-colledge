"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=85"
          alt="Luminary College Campus"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B2545]/80 via-[#0B2545]/60 to-[#0B2545]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9962C] mb-6 border border-[#C9962C]/40 px-4 py-1.5 rounded-full"
            style={{ fontFamily: "var(--font-label), system-ui, sans-serif" }}
          >
            Abuja&apos;s Premier Secondary School
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6"
          style={{ fontFamily: "var(--font-display), Georgia, serif" }}
        >
          Luminary
          <br />
          <span className="text-[#C9962C]">College</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-xl md:text-3xl text-gray-200 italic mb-10"
          style={{ fontFamily: "var(--font-display), Georgia, serif" }}
        >
          &ldquo;Illuminating Futures, Shaping Greatness&rdquo;
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/admissions"
            className="bg-[#C9962C] text-white px-8 py-4 rounded font-semibold text-sm tracking-wide hover:bg-[#b8851f] transition-colors"
            style={{ fontFamily: "var(--font-label), system-ui, sans-serif" }}
          >
            Apply Now — 2025/2026
          </Link>
          <Link
            href="/about"
            className="border-2 border-white text-white px-8 py-4 rounded font-semibold text-sm tracking-wide hover:bg-white hover:text-[#0B2545] transition-colors"
            style={{ fontFamily: "var(--font-label), system-ui, sans-serif" }}
          >
            Explore Our School
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-white/60 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

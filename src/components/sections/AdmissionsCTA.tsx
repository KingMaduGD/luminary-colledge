"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";

export default function AdmissionsCTA() {
  return (
    <section className="py-20 bg-[#C9962C]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <GraduationCap size={48} className="text-white/80 mx-auto mb-6" />
          <p
            className="text-sm font-semibold tracking-widest uppercase text-white/70 mb-3"
            style={{ fontFamily: "var(--font-label), system-ui, sans-serif" }}
          >
            Now Accepting Applications
          </p>
          <h2
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            Admissions Open
          </h2>
          <p
            className="text-2xl text-white/80 italic mb-10"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            Academic Session 2025 / 2026
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admissions"
              className="bg-white text-[#C9962C] px-8 py-4 rounded font-bold text-sm tracking-wide hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              style={{ fontFamily: "var(--font-label), system-ui, sans-serif" }}
            >
              Start Your Application <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded font-semibold text-sm tracking-wide hover:bg-white/10 transition-colors"
              style={{ fontFamily: "var(--font-label), system-ui, sans-serif" }}
            >
              Ask a Question
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

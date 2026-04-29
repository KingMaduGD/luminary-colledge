"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

export default function PrincipalMessage() {
  return (
    <section className="py-20 bg-[#0B2545]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-16"
        >
          <Quote size={48} className="text-[#C9962C] mb-8" />
          <blockquote
            className="text-2xl md:text-4xl text-white font-light italic leading-relaxed mb-12"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            At Luminary College, we believe that true education transforms not just the mind, but the entire person. We are committed to ensuring every student leaves our gates with the confidence to compete globally and the character to lead with integrity.
          </blockquote>
          <div className="flex items-center gap-6">
            <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80"
                alt="Dr. Adaeze Okonkwo"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div>
              <p
                className="text-xl font-semibold text-white"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                Dr. Adaeze Okonkwo
              </p>
              <p
                className="text-sm text-[#C9962C] tracking-wide"
                style={{ fontFamily: "var(--font-label), system-ui, sans-serif" }}
              >
                Principal, Luminary College
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

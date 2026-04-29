"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Trophy, ChevronLeft, ChevronRight } from "lucide-react";
import { awards } from "@/data/awards";
import SectionHeader from "@/components/ui/SectionHeader";

export default function AwardsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Recognition"
          title="Awards & Honours"
          subtitle="Over 25 years of excellence, recognised by national and international bodies."
        />

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors hidden md:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} className="text-[#0B2545]" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
          >
            {awards.map((award, i) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-72 snap-start bg-gradient-to-br from-[#0B2545] to-[#1a3a6e] rounded-xl p-6 text-white"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#C9962C]/20 rounded-full flex items-center justify-center">
                    <Trophy size={18} className="text-[#C9962C]" />
                  </div>
                  <span
                    className="text-xs font-semibold tracking-widest text-[#C9962C]"
                    style={{ fontFamily: "var(--font-label), system-ui, sans-serif" }}
                  >
                    {award.year}
                  </span>
                </div>
                <h3
                  className="text-xl font-semibold mb-2 leading-snug"
                  style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                >
                  {award.name}
                </h3>
                <p
                  className="text-xs text-gray-400 mb-3"
                  style={{ fontFamily: "var(--font-label), system-ui, sans-serif" }}
                >
                  {award.issuer}
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">{award.description}</p>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors hidden md:flex"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} className="text-[#0B2545]" />
          </button>
        </div>
      </div>
    </section>
  );
}

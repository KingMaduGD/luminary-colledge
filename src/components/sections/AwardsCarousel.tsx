"use client";
import { awards } from "@/data/awards";
import { Trophy, Star, Award, Medal, Monitor, Heart, User, Leaf } from "lucide-react";
import type { ElementType } from "react";

const iconMap: Record<string, ElementType> = {
  trophy: Trophy,
  star: Star,
  award: Award,
  medal: Medal,
  monitor: Monitor,
  heart: Heart,
  user: User,
  leaf: Leaf,
};

export default function AwardsCarousel() {
  const doubled = [...awards, ...awards];

  return (
    <section className="py-16 bg-[#0B2545] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <p className="text-xs tracking-widest uppercase text-[#C9962C] mb-3" style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}>Recognition</p>
        <h2 className="text-4xl md:text-5xl font-semibold text-white" style={{ fontFamily: "var(--font-cormorant, serif)" }}>Awards & Honours</h2>
        <div className="mt-4 h-0.5 w-16 bg-[#C9962C]" />
      </div>

      <div className="relative">
        <div className="flex gap-6 animate-marquee px-8">
          {doubled.map((award, i) => {
            const Icon = iconMap[award.icon] || Award;
            return (
              <div
                key={`${award.id}-${i}`}
                className="flex-shrink-0 w-64 bg-white/5 border border-[#C9962C]/30 rounded-lg p-6 hover:border-[#C9962C] transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-[#C9962C]/20 flex items-center justify-center mb-4">
                  <Icon size={22} className="text-[#C9962C]" />
                </div>
                <div className="text-xs tracking-widest uppercase text-[#C9962C] mb-2" style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}>
                  {award.year}
                </div>
                <h3 className="text-lg font-semibold text-white leading-tight mb-2" style={{ fontFamily: "var(--font-cormorant, serif)" }}>
                  {award.title}
                </h3>
                <p className="text-xs text-white/50">{award.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

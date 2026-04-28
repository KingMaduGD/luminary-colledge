"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

export default function AboutSnapshot() {
  return (
    <section className="py-20 bg-[#F8F5EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              label="About Us"
              title="A Legacy of Excellence"
              centered={false}
            />
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Founded in 1998, Luminary College has spent over two decades building a reputation as Abuja&apos;s most distinguished secondary school — a place where academic rigour, moral integrity, and personal growth converge.
              </p>
              <p>
                Our mission is clear: to provide every student with a world-class education that equips them with the knowledge, character, and confidence to excel in university and beyond. We achieve this through outstanding teaching, modern facilities, and a culture that celebrates both effort and achievement.
              </p>
              <p>
                From our state-of-the-art STEM laboratories to our championship-winning sports teams, every dimension of Luminary College is designed to help students discover and maximise their unique potential.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-8 text-[#C9962C] font-semibold text-sm tracking-wide hover:gap-4 transition-all"
            >
              Learn More About Us <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: "Academic Excellence", icon: "🎓", desc: "98% WAEC pass rate" },
              { label: "Character Formation", icon: "⭐", desc: "Holistic development" },
              { label: "Modern Facilities", icon: "🏛️", desc: "State-of-the-art campus" },
              { label: "Award-Winning", icon: "🏆", desc: "47 national awards" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3
                  className="font-semibold text-[#0B2545] text-lg mb-1"
                  style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                >
                  {item.label}
                </h3>
                <p className="text-sm text-[#6B7280]">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

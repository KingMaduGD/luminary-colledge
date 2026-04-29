"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Testimonials"
          title="What Our Community Says"
          subtitle="Hear from our students and parents about the Luminary experience."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#F8F5EF] rounded-xl p-6"
            >
              <Quote size={24} className="text-[#C9962C] mb-4" />
              <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <p
                    className="font-semibold text-[#0B2545] text-sm"
                    style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-xs text-[#6B7280]"
                    style={{ fontFamily: "var(--font-label), system-ui, sans-serif" }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

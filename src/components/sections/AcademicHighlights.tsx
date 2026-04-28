"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FlaskConical, BookOpen, BarChart3, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const departments = [
  {
    icon: FlaskConical,
    name: "Sciences",
    color: "#0B2545",
    subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "Further Maths", "Agricultural Science"],
    highlight: "98% WAEC pass rate in 2024",
    href: "/academics#sciences",
  },
  {
    icon: BookOpen,
    name: "Arts & Humanities",
    color: "#C9962C",
    subjects: ["Literature in English", "History", "Government", "CRS / IRS", "Fine Art", "Music"],
    highlight: "National debate champions 2023",
    href: "/academics#arts",
  },
  {
    icon: BarChart3,
    name: "Commercial Studies",
    color: "#1a3a6e",
    subjects: ["Economics", "Commerce", "Accounting", "Business Studies"],
    highlight: "100% NECO pass rate 2024",
    href: "/academics#commercial",
  },
];

export default function AcademicHighlights() {
  return (
    <section className="py-20 bg-[#F8F5EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Academics"
          title="Our Departments"
          subtitle="Three focused departments delivering academic excellence across all disciplines."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {departments.map((dept, i) => {
            const Icon = dept.icon;
            return (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="h-2" style={{ backgroundColor: dept.color }} />
                <div className="p-8">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${dept.color}15` }}
                  >
                    <Icon size={24} style={{ color: dept.color }} />
                  </div>
                  <h3
                    className="text-2xl font-semibold text-[#0B2545] mb-4"
                    style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                  >
                    {dept.name}
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {dept.subjects.map((subject) => (
                      <li key={subject} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9962C]" />
                        {subject}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm font-semibold text-[#C9962C] mb-3">{dept.highlight}</p>
                    <Link
                      href={dept.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B2545] hover:text-[#C9962C] transition-colors"
                    >
                      Learn More <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

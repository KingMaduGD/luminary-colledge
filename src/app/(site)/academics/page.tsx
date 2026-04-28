import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import { FlaskConical, BookOpen, TrendingUp, Music, Dumbbell, Laptop, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Academics",
  description: "Explore academic programmes and departments at Luminary College.",
};

const departments = [
  {
    icon: FlaskConical,
    title: "Sciences",
    description: "Our Science department is equipped with state-of-the-art laboratories for Biology, Chemistry, Physics, and Further Mathematics. Students are prepared for careers in medicine, engineering, research, and technology.",
    subjects: ["Biology", "Chemistry", "Physics", "Further Mathematics", "Agricultural Science"],
  },
  {
    icon: BookOpen,
    title: "Arts & Humanities",
    description: "Fostering deep critical and creative thinking, the Arts department covers Literature, Languages, History, Government, and the Fine Arts, producing students who communicate with eloquence and think with depth.",
    subjects: ["Literature in English", "History", "Government", "Fine Art", "French", "Christian/Islamic Religious Studies"],
  },
  {
    icon: TrendingUp,
    title: "Commercial Studies",
    description: "The Commercial department bridges business theory with practical application. Students graduate with a firm grounding in economic principles and entrepreneurial thinking.",
    subjects: ["Economics", "Accounting", "Commerce", "Business Studies", "Office Practice"],
  },
  {
    icon: Music,
    title: "Performing Arts",
    description: "Cultivating creative expression through drama, music, and the spoken word. Our performing arts programme builds confidence, communication, and artistic sensitivity.",
    subjects: ["Drama", "Music", "Choral Performance", "Public Speaking & Debate"],
  },
  {
    icon: Dumbbell,
    title: "Sports & Physical Education",
    description: "Elite athletic training and physical development across twelve sport disciplines. Luminary College holds national titles in athletics, football, and swimming.",
    subjects: ["Athletics", "Football", "Basketball", "Swimming", "Table Tennis", "Volleyball", "Tennis"],
  },
  {
    icon: Laptop,
    title: "ICT & Digital Learning",
    description: "Preparing students for the digital economy through coding, robotics, digital literacy, and multimedia production — integrated across all departments.",
    subjects: ["Computer Science", "Data Processing", "Coding & Programming", "Robotics Club", "Digital Media"],
  },
];

export default function AcademicsPage() {
  return (
    <>
      <div className="bg-[#0B2545] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs tracking-widest uppercase text-[#C9962C] mb-4" style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}>Programmes</p>
          <h1 className="text-5xl md:text-7xl font-semibold text-white" style={{ fontFamily: "var(--font-cormorant, serif)" }}>Academics</h1>
          <div className="mt-4 h-0.5 w-16 bg-[#C9962C]" />
          <p className="mt-6 text-white/70 text-lg max-w-2xl">A rigorous, holistic curriculum designed to challenge, inspire, and prepare every student for life beyond the classroom.</p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <SectionHeader eyebrow="Departments" title="Academic Programmes" subtitle="Six departments of excellence, each led by expert educators." />
          </div>
          <div className="space-y-16">
            {departments.map((dept, i) => {
              const Icon = dept.icon;
              return (
                <div key={dept.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                  <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full bg-[#0B2545]/10 flex items-center justify-center">
                        <Icon size={26} className="text-[#0B2545]" />
                      </div>
                      <h2 className="text-3xl font-semibold text-[#0B2545]" style={{ fontFamily: "var(--font-cormorant, serif)" }}>{dept.title}</h2>
                    </div>
                    <p className="text-[#6B7280] leading-relaxed mb-6">{dept.description}</p>
                    <Link href="/admissions" className="inline-block px-6 py-3 bg-[#0B2545] text-white text-sm font-medium rounded hover:bg-[#0d3060] transition-colors">
                      Apply for this Programme
                    </Link>
                  </div>
                  <div className={`bg-[#F8F5EF] rounded-lg p-8 ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                    <h3 className="text-sm tracking-widest uppercase text-[#C9962C] mb-4" style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}>Subjects Offered</h3>
                    <ul className="space-y-3">
                      {dept.subjects.map((subject) => (
                        <li key={subject} className="flex items-center gap-3 text-[#1A1A2E]">
                          <CheckCircle2 size={16} className="text-[#C9962C] shrink-0" />
                          <span className="text-sm">{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

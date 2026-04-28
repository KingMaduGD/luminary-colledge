import Link from "next/link";
import { FlaskConical, BookOpen, TrendingUp, Music, Dumbbell, Laptop } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const departments = [
  {
    icon: FlaskConical,
    title: "Sciences",
    description: "World-class laboratories and research-driven curriculum preparing students for medicine, engineering, and the natural sciences.",
    color: "#C9962C",
  },
  {
    icon: BookOpen,
    title: "Arts & Humanities",
    description: "A rich programme encompassing Literature, History, Government, and Fine Arts, cultivating critical thinkers and creative minds.",
    color: "#C9962C",
  },
  {
    icon: TrendingUp,
    title: "Commercial Studies",
    description: "Equipping tomorrow's business leaders with expertise in Economics, Accounting, Commerce, and Entrepreneurship.",
    color: "#C9962C",
  },
  {
    icon: Music,
    title: "Performing Arts",
    description: "From drama and music to dance and public speaking, our arts programme nurtures confidence and creative expression.",
    color: "#C9962C",
  },
  {
    icon: Dumbbell,
    title: "Sports & Athletics",
    description: "Elite coaching in over twelve sports disciplines with state-of-the-art facilities and a legacy of national champions.",
    color: "#C9962C",
  },
  {
    icon: Laptop,
    title: "ICT & Digital Skills",
    description: "A future-ready curriculum integrating coding, robotics, and digital literacy into every aspect of student learning.",
    color: "#C9962C",
  },
];

export default function AcademicHighlights() {
  return (
    <section className="py-20 bg-[#F8F5EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <SectionHeader
            eyebrow="Programmes"
            title="Academic Departments"
            subtitle="Six departments of academic and co-curricular excellence, each led by expert educators committed to unlocking every student's potential."
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept) => {
            const Icon = dept.icon;
            return (
              <div
                key={dept.title}
                className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#C9962C]/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-full bg-[#0B2545]/10 flex items-center justify-center mb-6 group-hover:bg-[#C9962C]/10 transition-colors">
                  <Icon size={26} className="text-[#0B2545] group-hover:text-[#C9962C] transition-colors" />
                </div>
                <h3 className="text-2xl font-semibold text-[#0B2545] mb-3" style={{ fontFamily: "var(--font-cormorant, serif)" }}>
                  {dept.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-6">{dept.description}</p>
                <Link href="/academics" className="text-[#C9962C] text-sm font-medium hover:underline">
                  Learn more →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

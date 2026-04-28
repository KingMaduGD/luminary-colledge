import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "Explore the academic programmes at Luminary College — Sciences, Arts & Humanities, and Commercial Studies — designed for excellence.",
};

const departments = [
  {
    id: "sciences",
    name: "Sciences",
    color: "#0B2545",
    description:
      "Our Sciences department equips students with rigorous theoretical knowledge and practical laboratory skills. With modern facilities and passionate teachers, our science students consistently excel in WAEC, NECO, and JAMB.",
    subjects: [
      { name: "Physics", level: "SSS" },
      { name: "Chemistry", level: "SSS" },
      { name: "Biology", level: "SSS" },
      { name: "Mathematics", level: "JSS & SSS" },
      { name: "Further Mathematics", level: "SSS" },
      { name: "Agricultural Science", level: "JSS & SSS" },
      { name: "Basic Science", level: "JSS" },
      { name: "Basic Technology", level: "JSS" },
    ],
    image: "https://images.unsplash.com/photo-1532094349884-543559a8b8e1?w=600&q=80",
    stats: [{ label: "WAEC Pass Rate", value: "98%" }, { label: "Distinctions 2024", value: "72" }],
  },
  {
    id: "arts",
    name: "Arts & Humanities",
    color: "#C9962C",
    description:
      "The Arts & Humanities department nurtures critical thinkers, creative writers, and eloquent communicators. Students develop analytical and expressive skills through literature, history, government, and the arts.",
    subjects: [
      { name: "Literature in English", level: "SSS" },
      { name: "History", level: "JSS & SSS" },
      { name: "Government", level: "SSS" },
      { name: "Christian Religious Studies", level: "JSS & SSS" },
      { name: "Islamic Religious Studies", level: "JSS & SSS" },
      { name: "Fine Art", level: "JSS & SSS" },
      { name: "Music", level: "JSS & SSS" },
      { name: "Social Studies", level: "JSS" },
    ],
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80",
    stats: [{ label: "Debate Championships", value: "5" }, { label: "Essay Awards", value: "12" }],
  },
  {
    id: "commercial",
    name: "Commercial Studies",
    color: "#1a3a6e",
    description:
      "The Commercial Studies department develops financially literate and business-minded graduates ready to understand and shape Nigeria's economy. Real-world case studies and practical projects bring theory to life.",
    subjects: [
      { name: "Economics", level: "SSS" },
      { name: "Commerce", level: "SSS" },
      { name: "Financial Accounting", level: "SSS" },
      { name: "Business Studies", level: "JSS & SSS" },
      { name: "Office Practice", level: "SSS" },
      { name: "Marketing", level: "SSS" },
    ],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
    stats: [{ label: "NECO Pass Rate", value: "100%" }, { label: "Uni Placements 2024", value: "98%" }],
  },
];

const coCurricular = [
  { name: "Coding & Robotics Club", icon: "💻", desc: "Award-winning student developers building real apps and robots." },
  { name: "Debate & Public Speaking", icon: "🎤", desc: "National-level debaters developing eloquence and critical reasoning." },
  { name: "Science Quiz Team", icon: "🔬", desc: "National champions in 2024, competing across Nigeria and West Africa." },
  { name: "Football & Athletics", icon: "⚽", desc: "Championship-winning teams competing at FCT and national levels." },
  { name: "Drama & Cultural Arts", icon: "🎭", desc: "Annual cultural festival showcasing Nigeria's rich artistic heritage." },
  { name: "School Press Club", icon: "📰", desc: "Student journalists running the award-winning Luminary Gazette." },
  { name: "Environmental Club", icon: "🌿", desc: "Leading sustainability initiatives on campus and in the community." },
  { name: "Music & Choir", icon: "🎵", desc: "A thriving music programme with regular performances and competitions." },
];

const examCentres = [
  { name: "WAEC", full: "West African Examinations Council", note: "Registered centre since 2001" },
  { name: "NECO", full: "National Examinations Council", note: "Registered centre since 2005" },
  { name: "JAMB", full: "Joint Admissions and Matriculations Board", note: "CBT Centre — Computer-Based Testing" },
];

const termDates = [
  { term: "First Term", start: "September 14, 2025", end: "December 19, 2025" },
  { term: "Second Term", start: "January 12, 2026", end: "April 3, 2026" },
  { term: "Third Term", start: "April 27, 2026", end: "July 24, 2026" },
];

export default function AcademicsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-80 flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80"
            alt="Luminary College Academics"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-[#0B2545]/75" />
        </div>
        <div className="relative text-center text-white">
          <p
            className="text-sm font-semibold tracking-widest uppercase text-[#C9962C] mb-2"
            style={{ fontFamily: "var(--font-label), system-ui, sans-serif" }}
          >
            Curriculum & Programmes
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            Academics
          </h1>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-600 leading-relaxed">
            Luminary College offers a comprehensive Junior Secondary School (JSS 1–3) and Senior Secondary School (SSS 1–3) curriculum, aligned with the Nigerian National Curriculum and NERDC standards. Our three specialist departments deliver academic excellence through dedicated teachers, modern resources, and a culture of high expectations.
          </p>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-[#F8F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Departments"
            title="Our Academic Departments"
            subtitle="Three specialist departments, each focused on producing outstanding graduates."
          />
          <div className="space-y-16">
            {departments.map((dept, i) => (
              <div
                key={dept.id}
                id={dept.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div
                    className="w-1 h-12 rounded mb-6"
                    style={{ backgroundColor: dept.color }}
                  />
                  <h3
                    className="text-3xl font-semibold text-[#0B2545] mb-4"
                    style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                  >
                    {dept.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{dept.description}</p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {dept.subjects.map((s) => (
                      <div key={s.name} className="flex items-center gap-2 text-sm text-gray-700">
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: dept.color }}
                        />
                        <span>{s.name}</span>
                        <span className="text-xs text-gray-400">({s.level})</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-6">
                    {dept.stats.map((s) => (
                      <div key={s.label}>
                        <div
                          className="text-2xl font-bold"
                          style={{
                            fontFamily: "var(--font-display), Georgia, serif",
                            color: dept.color,
                          }}
                        >
                          {s.value}
                        </div>
                        <div className="text-xs text-gray-500">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`relative h-72 rounded-2xl overflow-hidden ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <Image
                    src={dept.image}
                    alt={dept.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Co-curricular */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Beyond the Classroom"
            title="Co-Curricular Activities"
            subtitle="We believe education extends far beyond the classroom. Our clubs and activities build character, creativity, and leadership."
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {coCurricular.map((activity) => (
              <div
                key={activity.name}
                className="text-center p-6 rounded-xl bg-[#F8F5EF] hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{activity.icon}</div>
                <h4
                  className="font-semibold text-[#0B2545] mb-2"
                  style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                >
                  {activity.name}
                </h4>
                <p className="text-sm text-gray-600">{activity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examination Centres */}
      <section className="py-16 bg-[#0B2545]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Examinations"
            title="Exam Registrations"
            light
            subtitle="We are an approved centre for all major national and West African examinations."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {examCentres.map((centre) => (
              <div
                key={centre.name}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center"
              >
                <div
                  className="text-3xl font-bold text-[#C9962C] mb-2"
                  style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                >
                  {centre.name}
                </div>
                <p className="text-white font-medium mb-1">{centre.full}</p>
                <p className="text-gray-400 text-sm">{centre.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-16 bg-[#F8F5EF]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="2025/2026 Session"
            title="Academic Calendar"
          />
          <div className="space-y-4">
            {termDates.map((term) => (
              <div
                key={term.term}
                className="bg-white rounded-xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <h4
                  className="font-semibold text-[#0B2545] text-xl"
                  style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                >
                  {term.term}
                </h4>
                <div className="flex gap-6 text-sm text-gray-600">
                  <div>
                    <span className="text-xs font-semibold text-[#C9962C] block">Resumes</span>
                    {term.start}
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#C9962C] block">Closes</span>
                    {term.end}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2
            className="text-3xl font-semibold text-[#0B2545] mb-4"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            Ready to Join Our Academic Community?
          </h2>
          <p className="text-gray-600 mb-8">
            Applications for the 2025/2026 session are now open for JSS1 and SSS1.
          </p>
          <Link
            href="/admissions"
            className="bg-[#C9962C] text-white px-8 py-4 rounded font-semibold text-sm tracking-wide hover:bg-[#b8851f] transition-colors inline-block"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
}

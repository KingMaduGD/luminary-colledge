import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { staff } from "@/data/staff";
import { awards } from "@/data/awards";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Luminary College's history, mission, vision, values, and the dedicated team behind Abuja's premier secondary school.",
};

const timelineEvents = [
  { year: "1998", title: "School Founded", desc: "Luminary College opens its doors in Maitama, Abuja, with 120 students and a vision to redefine secondary education in Nigeria." },
  { year: "2002", title: "First WAEC Results", desc: "Our inaugural SSS3 class achieves an 89% pass rate — setting the standard for academic excellence that defines us to this day." },
  { year: "2008", title: "Campus Expansion", desc: "A major campus expansion doubles our capacity, with new science laboratories, a library, and a multi-purpose sports complex." },
  { year: "2013", title: "10,000 Graduates", desc: "We celebrate our 10,000th graduate — a milestone symbolising the scale of our impact on families and communities across Nigeria." },
  { year: "2018", title: "25th Anniversary", desc: "Luminary College marks 25 years with a gala and the launch of the STEM Innovation Centre, co-funded by alumni and the FCT government." },
  { year: "2021", title: "Digital Learning Launch", desc: "We become the first secondary school in FCT to fully integrate a digital learning platform across all classes and subjects." },
  { year: "2024", title: "98% WAEC Pass Rate", desc: "Our Class of 2024 achieves a historic 98% WAEC pass rate — the highest in the school's history and the FCT." },
];

const values = [
  { title: "Excellence", icon: "🎯", desc: "We hold ourselves to the highest standards in everything we do — academically, morally, and professionally." },
  { title: "Integrity", icon: "⚖️", desc: "We cultivate honesty, transparency, and ethical conduct in students, staff, and all school activities." },
  { title: "Innovation", icon: "💡", desc: "We embrace new ideas, technologies, and methods that enhance learning and prepare students for the future." },
  { title: "Community", icon: "🤝", desc: "We build strong bonds between students, families, staff, and the wider community that last a lifetime." },
  { title: "Diversity", icon: "🌍", desc: "We celebrate the rich diversity of Nigeria's peoples, languages, and cultures within our school community." },
  { title: "Service", icon: "❤️", desc: "We instil in every student a spirit of service to their families, communities, and nation." },
];

const accreditations = [
  "Federal Ministry of Education — Registered Secondary School",
  "West African Examinations Council (WAEC) — Approved Examination Centre",
  "National Examinations Council (NECO) — Approved Examination Centre",
  "Joint Admissions and Matriculations Board (JAMB) — Affiliated Institution",
  "FCT Education Secretariat — Accredited School",
  "Nigerian Educational Research and Development Council (NERDC) — Curriculum Compliant",
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-80 flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80"
            alt="Luminary College"
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
            Our Story
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            About Us
          </h1>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20 bg-[#F8F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Who We Are"
            title="Mission, Vision & Values"
            subtitle="The principles that guide everything we do at Luminary College."
          />
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Our Mission",
                icon: "🎓",
                text: "To provide every student with a world-class secondary education that develops academic excellence, moral character, and the life skills needed to thrive in a rapidly changing world.",
              },
              {
                title: "Our Vision",
                icon: "🔭",
                text: "To be the most transformative secondary school in Nigeria — producing graduates who lead with knowledge, integrity, and a deep commitment to the development of their nation.",
              },
              {
                title: "Our Philosophy",
                icon: "💬",
                text: "We believe every child has limitless potential. Our role is to illuminate that potential through rigorous education, compassionate mentorship, and an environment that inspires greatness.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-8 shadow-sm text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3
                  className="text-2xl font-semibold text-[#0B2545] mb-4"
                  style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Core Values */}
          <h3
            className="text-3xl font-semibold text-[#0B2545] text-center mb-8"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            Our Core Values
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h4
                  className="font-semibold text-[#0B2545] text-lg mb-2"
                  style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                >
                  {v.title}
                </h4>
                <p className="text-sm text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Journey"
            title="School History"
            subtitle="From a bold vision in 1998 to Abuja's most award-winning secondary school."
          />
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
            <div className="space-y-10">
              {timelineEvents.map((event) => (
                <div key={event.year} className="relative flex gap-8">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#0B2545] flex items-center justify-center z-10 shadow-md">
                    <span
                      className="text-[#C9962C] font-bold text-xs"
                      style={{ fontFamily: "var(--font-label), system-ui, sans-serif" }}
                    >
                      {event.year}
                    </span>
                  </div>
                  <div className="bg-[#F8F5EF] rounded-xl p-6 flex-1">
                    <h4
                      className="font-semibold text-[#0B2545] text-xl mb-2"
                      style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                    >
                      {event.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{event.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="py-20 bg-[#F8F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Leadership"
            title="Meet Our Team"
            subtitle="Dedicated educators committed to academic excellence and student success."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {staff.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/60 to-transparent" />
                </div>
                <div className="p-5">
                  <h3
                    className="font-semibold text-[#0B2545] text-lg"
                    style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-[#C9962C] text-xs font-semibold tracking-wide mb-1"
                    style={{ fontFamily: "var(--font-label), system-ui, sans-serif" }}
                  >
                    {member.title}
                  </p>
                  <p className="text-xs text-gray-500 mb-3">{member.subject}</p>
                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-[#0B2545]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Recognition"
            title="Awards & Honours"
            light
            subtitle="A proud record of national and regional recognition for excellence."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award) => (
              <div
                key={award.id}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C9962C]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#C9962C] font-bold text-sm">{award.year}</span>
                  </div>
                  <div>
                    <h4
                      className="font-semibold text-white text-lg mb-1"
                      style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                    >
                      {award.name}
                    </h4>
                    <p
                      className="text-[#C9962C] text-xs mb-2"
                      style={{ fontFamily: "var(--font-label), system-ui, sans-serif" }}
                    >
                      {award.issuer}
                    </p>
                    <p className="text-gray-400 text-sm">{award.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Official Recognition"
            title="Accreditations & Affiliations"
          />
          <ul className="space-y-3">
            {accreditations.map((acc) => (
              <li key={acc} className="flex items-center gap-3 text-gray-700">
                <span className="w-2 h-2 rounded-full bg-[#C9962C] flex-shrink-0" />
                {acc}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F8F5EF] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2
            className="text-3xl font-semibold text-[#0B2545] mb-4"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            Join the Luminary Family
          </h2>
          <p className="text-gray-600 mb-8">
            Applications for the 2025/2026 session are now open. Be part of a school that transforms lives.
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

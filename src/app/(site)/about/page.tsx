import type { Metadata } from "next";
import Image from "next/image";
import { staff } from "@/data/staff";
import { awards } from "@/data/awards";
import SectionHeader from "@/components/ui/SectionHeader";
import { Trophy, Star, Award, Medal, Monitor, Heart, User, Leaf } from "lucide-react";
import type { ElementType } from "react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Luminary College — our history, mission, values, and dedicated staff.",
};

const iconMap: Record<string, ElementType> = {
  trophy: Trophy, star: Star, award: Award, medal: Medal,
  monitor: Monitor, heart: Heart, user: User, leaf: Leaf,
};

const values = [
  { title: "Excellence", desc: "We hold ourselves to the highest academic and personal standards in everything we do." },
  { title: "Integrity", desc: "Honesty, transparency, and moral courage are the foundations of our community." },
  { title: "Innovation", desc: "We embrace creative thinking and bold ideas that shape the future." },
  { title: "Community", desc: "Every student, staff member, and family is a valued part of our Luminary family." },
  { title: "Service", desc: "We cultivate a spirit of giving back and contributing to society's greater good." },
  { title: "Diversity", desc: "We celebrate Nigeria's rich tapestry of cultures, languages, and traditions." },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-[#0B2545] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs tracking-widest uppercase text-[#C9962C] mb-4" style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}>Our Story</p>
          <h1 className="text-5xl md:text-7xl font-semibold text-white" style={{ fontFamily: "var(--font-cormorant, serif)" }}>About Luminary College</h1>
          <div className="mt-4 h-0.5 w-16 bg-[#C9962C]" />
        </div>
      </div>

      {/* Mission & History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader eyebrow="Mission" title="Who We Are" />
              <div className="mt-8 space-y-6 text-[#6B7280] leading-relaxed">
                <p>Founded in 2005, Luminary College has grown from a small institution with a bold vision into one of Abuja&apos;s most respected secondary schools. Our campus in Maitama has been the launching pad for thousands of students who have gone on to excel in universities, professions, and industries across Nigeria and the world.</p>
                <p>We believe that education is not simply the transfer of knowledge — it is the illumination of potential. Every student who walks through our gates is greeted with the same promise: that we will see them, invest in them, and equip them with everything they need to flourish.</p>
                <p>Our curriculum blends the rigour of Nigeria&apos;s national examinations with the breadth of co-curricular development, preparing students who are not only academically exceptional but also emotionally intelligent, morally grounded, and civically responsible.</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#C9962C]/20 rounded-lg" />
              <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
                <Image src="https://picsum.photos/seed/about1/800/600" alt="Luminary College Campus" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#F8F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <SectionHeader eyebrow="Foundation" title="Our Core Values" center />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                <div className="h-0.5 w-10 bg-[#C9962C] mb-6" />
                <h3 className="text-2xl font-semibold text-[#0B2545] mb-3" style={{ fontFamily: "var(--font-cormorant, serif)" }}>{v.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <SectionHeader eyebrow="Our Team" title="Leadership & Staff" subtitle="Meet the dedicated educators and leaders who make Luminary College exceptional." />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {staff.map((member) => (
              <div key={member.id} className="group text-center">
                <div className="relative w-40 h-40 mx-auto mb-5 rounded-full overflow-hidden border-4 border-[#C9962C]/20 group-hover:border-[#C9962C] transition-colors">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-[#0B2545]" style={{ fontFamily: "var(--font-cormorant, serif)" }}>{member.name}</h3>
                <p className="text-[#C9962C] text-xs tracking-widest uppercase mt-1" style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}>{member.role}</p>
                <p className="text-[#6B7280] text-xs mt-1">{member.department}</p>
                <p className="text-[#6B7280] text-sm mt-3 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-[#0B2545]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <SectionHeader eyebrow="Recognition" title="Awards & Honours" light />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award) => {
              const Icon = iconMap[award.icon] || Award;
              return (
                <div key={award.id} className="bg-white/5 border border-[#C9962C]/30 rounded-lg p-6 hover:border-[#C9962C] transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#C9962C]/20 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-[#C9962C]" />
                  </div>
                  <div className="text-xs tracking-widest uppercase text-[#C9962C] mb-2" style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}>{award.year}</div>
                  <h3 className="text-lg font-semibold text-white leading-tight mb-2" style={{ fontFamily: "var(--font-cormorant, serif)" }}>{award.title}</h3>
                  <p className="text-xs text-white/50">{award.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

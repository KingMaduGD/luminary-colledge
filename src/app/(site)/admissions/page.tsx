import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import AdmissionsForm from "@/components/sections/AdmissionsForm";
import { CheckCircle2, FileText, Calendar, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Admissions",
  description: "Apply to Luminary College for the 2025/2026 academic session.",
};

const steps = [
  { icon: FileText, title: "Collect Application Form", desc: "Visit the school's Admissions Office or download the form from this website." },
  { icon: CheckCircle2, title: "Submit Completed Form", desc: "Return the completed form with all required documents before the deadline." },
  { icon: Calendar, title: "Sit the Entrance Examination", desc: "Candidates are invited to write the entrance examination on the scheduled date." },
  { icon: Phone, title: "Await Admission Decision", desc: "Successful candidates will be contacted by phone and letter within two weeks." },
];

const requirements = [
  "Completed Application Form",
  "Birth Certificate (original and photocopy)",
  "Last School Report (original and photocopy)",
  "Testimonial from Last School (for SS1 applicants)",
  "Two recent passport photographs",
  "Application fee of ₦5,000 (non-refundable)",
];

export default function AdmissionsPage() {
  return (
    <>
      <div className="bg-[#0B2545] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs tracking-widest uppercase text-[#C9962C] mb-4" style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}>Join Us</p>
          <h1 className="text-5xl md:text-7xl font-semibold text-white" style={{ fontFamily: "var(--font-cormorant, serif)" }}>Admissions</h1>
          <div className="mt-4 h-0.5 w-16 bg-[#C9962C]" />
          <p className="mt-6 text-white/70 text-lg max-w-2xl">Applications for the 2025/2026 academic session are open. We welcome applications for JSS1 and SS1.</p>
        </div>
      </div>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <SectionHeader eyebrow="How to Apply" title="Admissions Process" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative">
                  <div className="w-12 h-12 rounded-full bg-[#0B2545] text-white flex items-center justify-center text-lg font-semibold mb-6" style={{ fontFamily: "var(--font-cormorant, serif)" }}>
                    {i + 1}
                  </div>
                  <Icon size={20} className="text-[#C9962C] mb-3" />
                  <h3 className="text-xl font-semibold text-[#0B2545] mb-3" style={{ fontFamily: "var(--font-cormorant, serif)" }}>{step.title}</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Requirements + Form */}
      <section className="py-20 bg-[#F8F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeader eyebrow="Requirements" title="What You Will Need" />
              <ul className="mt-8 space-y-4">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#C9962C] mt-0.5 shrink-0" />
                    <span className="text-[#1A1A2E] text-sm">{req}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 p-6 bg-[#0B2545] rounded-lg">
                <p className="text-xs tracking-widest uppercase text-[#C9962C] mb-3" style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}>Important Dates</p>
                <div className="space-y-3 text-white/70 text-sm">
                  <div className="flex justify-between"><span>Application Opens</span><span className="text-white">1 January 2025</span></div>
                  <div className="flex justify-between"><span>Application Deadline</span><span className="text-white">5 February 2025</span></div>
                  <div className="flex justify-between"><span>Entrance Examination</span><span className="text-white">15 February 2025</span></div>
                  <div className="flex justify-between"><span>Results Released</span><span className="text-white">1 March 2025</span></div>
                  <div className="flex justify-between"><span>School Resumption</span><span className="text-white">14 September 2025</span></div>
                </div>
              </div>
            </div>
            <div>
              <SectionHeader eyebrow="Enquire" title="Send an Enquiry" />
              <div className="mt-8">
                <AdmissionsForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

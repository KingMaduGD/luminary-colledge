"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ChevronDown, CheckCircle } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const schema = z.object({
  parentName: z.string().min(2, "Full name is required"),
  email: z.string().email("A valid email is required"),
  phone: z.string().min(10, "A valid phone number is required"),
  studentName: z.string().min(2, "Student name is required"),
  level: z.string().min(1, "Please select a level"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const requirements = [
  { title: "JSS 1 (Junior Secondary)", items: ["Completed Primary 6", "Primary 6 school report / leaving certificate", "Birth certificate or sworn declaration of age", "Two passport photographs", "Entrance examination fee payment"] },
  { title: "SSS 1 (Senior Secondary)", items: ["Completed JSS 3", "Basic Education Certificate Examination (BECE) result", "JSS 3 final term report card", "Birth certificate", "Two passport photographs", "Entrance interview attendance"] },
];

const steps = [
  { step: "01", title: "Submit Application", desc: "Complete the online enquiry form below or visit our admissions office in person." },
  { step: "02", title: "Pay Examination Fee", desc: "Pay the non-refundable entrance examination fee of ₦15,000 at any of our designated banks." },
  { step: "03", title: "Attend Examination / Interview", desc: "JSS1 applicants sit a written entrance exam. SSS1 applicants attend a formal interview." },
  { step: "04", title: "Receive Admission Letter", desc: "Successful candidates receive an official offer letter and enrolment details within two weeks." },
  { step: "05", title: "Complete Enrolment", desc: "Accept the offer, pay the school fees, and complete the new student registration process." },
];

const faqs = [
  { q: "What is the school fee structure?", a: "School fees vary by level. JSS fees range from ₦450,000–₦520,000 per session. SSS fees range from ₦480,000–₦560,000 per session. Fees cover tuition, learning materials, and access to all school facilities. Payment can be made termly." },
  { q: "Is there a boarding facility?", a: "Luminary College currently operates as a day school. We do not have a boarding facility. However, we assist families who need transport or accommodation recommendations in the Maitama area." },
  { q: "When is the entrance examination?", a: "The entrance examination for the 2025/2026 session is scheduled for Saturday, 15th February 2025. Results will be announced on 1st March 2025." },
  { q: "Is there a scholarship programme?", a: "Yes. We offer merit scholarships to exceptional applicants who score 90% or above in the entrance examination. Scholarships cover between 25% and 100% of tuition fees. Detailed criteria are available from the admissions office." },
  { q: "What subjects are offered in SSS?", a: "We offer Sciences, Arts & Humanities, and Commercial Studies tracks. Please visit the Academics page for a full list of subjects available in each department." },
  { q: "Can my child transfer from another school?", a: "Yes, we accept transfer applications for JSS 2, JSS 3, and SSS 1. Transfer applicants must provide their last two term reports and may be required to sit a placement assessment." },
];

export default function AdmissionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((res) => setTimeout(res, 1000));
    console.log("Form submitted:", data);
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-80 flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&q=80"
            alt="Admissions"
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
            Session 2025/2026
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            Admissions
          </h1>
        </div>
      </section>

      {/* Notice Banner */}
      <div className="bg-[#C9962C] py-4 text-center">
        <p className="text-white font-semibold text-sm">
          🎓 Admissions are now open for the 2025/2026 academic session.{" "}
          <span className="underline">Entrance Exam: 15th February 2025</span>
        </p>
      </div>

      {/* Requirements */}
      <section className="py-20 bg-[#F8F5EF]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Entry Requirements"
            title="Who Can Apply?"
            subtitle="We welcome applications from academically motivated students who share our values of excellence and integrity."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {requirements.map((req) => (
              <div key={req.title} className="bg-white rounded-xl p-8 shadow-sm">
                <h3
                  className="text-2xl font-semibold text-[#0B2545] mb-6"
                  style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                >
                  {req.title}
                </h3>
                <ul className="space-y-3">
                  {req.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-[#C9962C] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="How to Apply"
            title="Application Process"
            subtitle="Five straightforward steps to becoming a Luminary student."
          />
          <div className="space-y-6">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-full bg-[#0B2545] flex items-center justify-center flex-shrink-0">
                  <span
                    className="text-[#C9962C] font-bold text-sm"
                    style={{ fontFamily: "var(--font-label), system-ui, sans-serif" }}
                  >
                    {s.step}
                  </span>
                </div>
                <div className="bg-[#F8F5EF] rounded-xl p-6 flex-1">
                  <h4
                    className="font-semibold text-[#0B2545] text-xl mb-2"
                    style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                  >
                    {s.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-20 bg-[#0B2545]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Get Started"
            title="Admissions Enquiry"
            light
            subtitle="Fill in the form below and our admissions team will contact you within 24 hours."
          />

          {submitted ? (
            <div className="bg-white/10 border border-white/20 rounded-2xl p-12 text-center">
              <CheckCircle size={64} className="text-[#C9962C] mx-auto mb-6" />
              <h3
                className="text-3xl font-semibold text-white mb-4"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                Enquiry Received!
              </h3>
              <p className="text-gray-300">
                Thank you for your interest in Luminary College. Our admissions team will contact you within 24 hours to discuss next steps.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Parent / Guardian Name *</label>
                  <input
                    {...register("parentName")}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#C9962C] transition-colors"
                    placeholder="e.g. Mrs. Blessing Okafor"
                  />
                  {errors.parentName && <p className="text-red-400 text-xs mt-1">{errors.parentName.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Email Address *</label>
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#C9962C] transition-colors"
                    placeholder="email@example.com"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Phone Number *</label>
                  <input
                    {...register("phone")}
                    type="tel"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#C9962C] transition-colors"
                    placeholder="+234 xxx xxx xxxx"
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Student&apos;s Full Name *</label>
                  <input
                    {...register("studentName")}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#C9962C] transition-colors"
                    placeholder="e.g. Amara Okafor"
                  />
                  {errors.studentName && <p className="text-red-400 text-xs mt-1">{errors.studentName.message}</p>}
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Applying For *</label>
                <select
                  {...register("level")}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#C9962C] transition-colors"
                >
                  <option value="" className="bg-[#0B2545]">Select entry level</option>
                  <option value="JSS1" className="bg-[#0B2545]">JSS 1 (Junior Secondary — Year 7)</option>
                  <option value="SSS1" className="bg-[#0B2545]">SSS 1 (Senior Secondary — Year 10)</option>
                  <option value="Transfer" className="bg-[#0B2545]">Transfer Student</option>
                </select>
                {errors.level && <p className="text-red-400 text-xs mt-1">{errors.level.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Additional Message (optional)</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#C9962C] transition-colors resize-none"
                  placeholder="Any questions or additional information..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#C9962C] text-white py-4 rounded-lg font-semibold tracking-wide hover:bg-[#b8851f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Enquiry"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F8F5EF]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Common Questions"
            title="Frequently Asked Questions"
          />
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
                >
                  <span
                    className="font-semibold text-[#0B2545]"
                    style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-[#C9962C] flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

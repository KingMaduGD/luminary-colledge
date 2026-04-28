import Link from "next/link";

export default function AdmissionsCTA() {
  return (
    <section className="py-20 bg-[#0B2545] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#C9962C]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#C9962C]/10" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-[#C9962C] mb-4" style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}>
          Admissions 2025/2026
        </p>
        <h2 className="text-5xl md:text-6xl font-semibold text-white leading-tight mb-6" style={{ fontFamily: "var(--font-cormorant, serif)" }}>
          Begin Your Luminary Journey
        </h2>
        <div className="h-px w-24 bg-[#C9962C] mx-auto mb-8" />
        <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Applications for the 2025/2026 academic session are now open. Join a community of scholars, leaders, and changemakers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/admissions"
            className="px-10 py-4 bg-[#C9962C] text-white font-semibold text-sm tracking-wide uppercase hover:bg-[#b8851e] transition-colors rounded"
          >
            Apply Now
          </Link>
          <Link
            href="/contact"
            className="px-10 py-4 border border-white/40 text-white font-semibold text-sm tracking-wide uppercase hover:bg-white/10 transition-colors rounded"
          >
            Contact Admissions
          </Link>
        </div>
      </div>
    </section>
  );
}

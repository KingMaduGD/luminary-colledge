import Image from "next/image";

export default function PrincipalMessage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#C9962C]/20 rounded-lg" />
            <div className="relative rounded-lg overflow-hidden aspect-[4/5]">
              <Image
                src="https://picsum.photos/seed/principal/600/750"
                alt="Mrs. Adaeze Okonkwo, Principal"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#0B2545] text-white px-6 py-4 rounded-lg">
              <div className="text-xs tracking-widest uppercase text-[#C9962C] mb-1" style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}>Principal</div>
              <div className="font-semibold" style={{ fontFamily: "var(--font-cormorant, serif)" }}>Mrs. Adaeze Okonkwo</div>
            </div>
          </div>

          <div>
            <p className="text-xs tracking-widest uppercase text-[#C9962C] mb-4" style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}>
              Message from the Principal
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-[#0B2545] leading-tight mb-6" style={{ fontFamily: "var(--font-cormorant, serif)" }}>
              A School That Believes in Every Child
            </h2>
            <div className="h-0.5 w-16 bg-[#C9962C] mb-8" />
            <blockquote className="relative">
              <div className="text-[#C9962C] text-8xl font-serif leading-none absolute -top-4 -left-2 opacity-30">&ldquo;</div>
              <p className="text-[#6B7280] text-lg leading-relaxed mb-6 pl-4 italic" style={{ fontFamily: "var(--font-cormorant, serif)" }}>
                At Luminary College, we believe that every child carries the light of greatness within them. Our mission is to provide the environment, the mentorship, and the rigour to help that light shine. We do not merely prepare students for examinations — we prepare them for life.
              </p>
              <p className="text-[#6B7280] text-lg leading-relaxed pl-4 italic" style={{ fontFamily: "var(--font-cormorant, serif)" }}>
                Our tradition of excellence is built on relationships: between teachers and students, between the school and families, and between knowledge and character. Welcome to Luminary — where futures are truly illuminated.
              </p>
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-200" />
              <div className="text-sm text-[#6B7280]" style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}>Mrs. Adaeze Okonkwo, Principal</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

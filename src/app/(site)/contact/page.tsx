import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactForm from "@/components/sections/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Luminary College, Abuja.",
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-[#0B2545] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs tracking-widest uppercase text-[#C9962C] mb-4" style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}>Get in Touch</p>
          <h1 className="text-5xl md:text-7xl font-semibold text-white" style={{ fontFamily: "var(--font-cormorant, serif)" }}>Contact Us</h1>
          <div className="mt-4 h-0.5 w-16 bg-[#C9962C]" />
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeader eyebrow="Reach Out" title="We'd Love to Hear From You" />
              <div className="mt-10 space-y-8">
                {[
                  { Icon: MapPin, title: "Our Address", content: "15 Gana Street, Maitama, Abuja, FCT, Nigeria" },
                  { Icon: Phone, title: "Phone", content: "+234 803 456 7890" },
                  { Icon: Mail, title: "Email", content: "info@luminarycollege.edu.ng" },
                  { Icon: Clock, title: "Office Hours", content: "Monday – Friday: 8:00am – 4:00pm" },
                ].map(({ Icon, title, content }) => (
                  <div key={title} className="flex gap-5">
                    <div className="w-12 h-12 rounded-full bg-[#0B2545]/10 flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-[#0B2545]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0B2545] mb-1" style={{ fontFamily: "var(--font-cormorant, serif)" }}>{title}</h3>
                      <p className="text-[#6B7280] text-sm">{content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 rounded-lg overflow-hidden border border-gray-200 aspect-[4/3] bg-[#F8F5EF] flex items-center justify-center">
                <div className="text-center text-[#6B7280]">
                  <MapPin size={48} className="mx-auto mb-3 text-[#C9962C]" />
                  <p className="font-semibold text-[#0B2545]" style={{ fontFamily: "var(--font-cormorant, serif)" }}>15 Gana Street, Maitama</p>
                  <p className="text-sm">Abuja, FCT, Nigeria</p>
                </div>
              </div>
            </div>

            <div>
              <SectionHeader eyebrow="Message" title="Send a Message" />
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

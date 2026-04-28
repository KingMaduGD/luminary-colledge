import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Globe, MessageCircle, Camera, PlayCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B2545] text-white">
      <div className="h-1 bg-[#C9962C]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-[#C9962C] flex items-center justify-center">
                <span className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-cormorant, serif)" }}>L</span>
              </div>
              <div>
                <div className="text-xl font-semibold" style={{ fontFamily: "var(--font-cormorant, serif)" }}>Luminary College</div>
                <div className="text-[#C9962C] text-[10px] tracking-widest uppercase" style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}>Abuja, Nigeria</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Illuminating Futures, Shaping Greatness. A premier educational institution dedicated to holistic development and academic excellence.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Globe, href: "#", label: "Facebook" },
                { Icon: MessageCircle, href: "#", label: "Twitter" },
                { Icon: Camera, href: "#", label: "Instagram" },
                { Icon: PlayCircle, href: "#", label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-[#C9962C] hover:border-[#C9962C] transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs tracking-widest uppercase text-[#C9962C] mb-5" style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}>Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/admissions", label: "Admissions" },
                { href: "/gallery", label: "Gallery" },
                { href: "/news", label: "News & Events" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 text-sm hover:text-[#C9962C] transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#C9962C] rounded-full flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs tracking-widest uppercase text-[#C9962C] mb-5" style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}>Academics</h3>
            <ul className="space-y-3">
              {["Sciences", "Arts & Humanities", "Commercial Studies", "Co-curricular Activities", "Academic Calendar", "Results & Performance"].map((label, i) => (
                <li key={i}>
                  <Link href="/academics" className="text-white/70 text-sm hover:text-[#C9962C] transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#C9962C] rounded-full flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs tracking-widest uppercase text-[#C9962C] mb-5" style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}>Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-white/70">
                <MapPin size={16} className="text-[#C9962C] mt-0.5 shrink-0" />
                <span>15 Gana Street, Maitama, Abuja, FCT, Nigeria</span>
              </li>
              <li className="flex gap-3 text-sm text-white/70">
                <Phone size={16} className="text-[#C9962C] mt-0.5 shrink-0" />
                <a href="tel:+2348034567890" className="hover:text-[#C9962C] transition-colors">+234 803 456 7890</a>
              </li>
              <li className="flex gap-3 text-sm text-white/70">
                <Mail size={16} className="text-[#C9962C] mt-0.5 shrink-0" />
                <a href="mailto:info@luminarycollege.edu.ng" className="hover:text-[#C9962C] transition-colors">info@luminarycollege.edu.ng</a>
              </li>
              <li className="flex gap-3 text-sm text-white/70">
                <Clock size={16} className="text-[#C9962C] mt-0.5 shrink-0" />
                <span>Mon–Fri: 8:00am – 4:00pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Luminary College. All rights reserved.
          </p>
          <p className="text-white/50 text-sm">
            Designed & Developed by <span className="text-[#C9962C]">King Tech Foundation</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

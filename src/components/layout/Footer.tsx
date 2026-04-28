import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B2545] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: School Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#C9962C] rounded-full flex items-center justify-center">
                <span
                  className="text-white font-bold text-sm"
                  style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                >
                  L
                </span>
              </div>
              <div>
                <span
                  className="font-bold text-white text-lg"
                  style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                >
                  LUMINARY
                </span>
                <span
                  className="text-[#C9962C] text-xs block tracking-widest uppercase -mt-1"
                  style={{ fontFamily: "var(--font-label), system-ui, sans-serif" }}
                >
                  COLLEGE
                </span>
              </div>
            </div>
            <p
              className="text-lg italic text-[#C9962C] mb-3"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              &ldquo;Illuminating Futures, Shaping Greatness&rdquo;
            </p>
            <p className="text-sm leading-relaxed">
              Luminary College is Abuja&apos;s foremost secondary school, dedicated to academic excellence, moral formation, and producing the leaders Nigeria needs.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3
              className="font-semibold tracking-widest uppercase text-white text-sm mb-6"
              style={{ fontFamily: "var(--font-label), system-ui, sans-serif" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/academics", label: "Academics" },
                { href: "/admissions", label: "Admissions" },
                { href: "/gallery", label: "Gallery" },
                { href: "/news", label: "News & Events" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[#C9962C] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3
              className="font-semibold tracking-widest uppercase text-white text-sm mb-6"
              style={{ fontFamily: "var(--font-label), system-ui, sans-serif" }}
            >
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <MapPin size={16} className="text-[#C9962C] mt-0.5 flex-shrink-0" />
                <span>15 Luminary Way, Maitama District, Abuja, FCT, Nigeria</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Phone size={16} className="text-[#C9962C] flex-shrink-0" />
                <span>+234 801 234 5678</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Mail size={16} className="text-[#C9962C] flex-shrink-0" />
                <a
                  href="mailto:info@luminarycollege.edu.ng"
                  className="hover:text-[#C9962C] transition-colors"
                >
                  info@luminarycollege.edu.ng
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4
                className="text-xs font-semibold tracking-widest uppercase text-white mb-2"
                style={{ fontFamily: "var(--font-label), system-ui, sans-serif" }}
              >
                Office Hours
              </h4>
              <p className="text-sm">Mon – Fri: 8:00 AM – 4:00 PM</p>
              <p className="text-sm">Saturday: 9:00 AM – 1:00 PM</p>
            </div>
          </div>

          {/* Column 4: Social */}
          <div>
            <h3
              className="font-semibold tracking-widest uppercase text-white text-sm mb-6"
              style={{ fontFamily: "var(--font-label), system-ui, sans-serif" }}
            >
              Follow Us
            </h3>
            <div className="flex gap-4 mb-6">
              {[
                { label: "Facebook", href: "#", letter: "f" },
                { label: "Twitter/X", href: "#", letter: "𝕏" },
                { label: "Instagram", href: "#", letter: "ig" },
                { label: "YouTube", href: "#", letter: "▶" },
              ].map(({ label, href, letter }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#C9962C] hover:text-[#C9962C] transition-colors text-xs font-bold"
                >
                  {letter}
                </a>
              ))}
            </div>
            <div className="bg-[#C9962C]/10 border border-[#C9962C]/20 rounded-lg p-4">
              <p
                className="text-[#C9962C] text-xs font-semibold tracking-wide uppercase mb-1"
                style={{ fontFamily: "var(--font-label), system-ui, sans-serif" }}
              >
                Admissions Open
              </p>
              <p className="text-sm text-white font-medium">Session 2025/2026</p>
              <Link
                href="/admissions"
                className="inline-block mt-2 text-xs font-semibold text-[#C9962C] hover:underline tracking-wide"
              >
                Apply Now →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Luminary College, Abuja. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Designed & Developed by{" "}
            <a
              href="https://kingtech.com.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9962C] hover:underline"
            >
              King Tech Foundation
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "Admissions" },
  { href: "/gallery", label: "Gallery" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const close = () => setMobileOpen(false);
    close();
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled || mobileOpen ? "bg-[#0B2545] shadow-lg" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
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
                  className="font-bold text-white text-lg tracking-wide"
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
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200",
                    pathname === link.href
                      ? "text-[#C9962C]"
                      : "text-gray-200 hover:text-[#C9962C]"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/admissions"
                className="bg-[#C9962C] text-white px-5 py-2 rounded font-semibold text-sm tracking-wide hover:bg-[#b8851f] transition-colors"
              >
                Apply Now
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0B2545] flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "text-3xl font-semibold transition-colors",
                      pathname === link.href
                        ? "text-[#C9962C]"
                        : "text-white hover:text-[#C9962C]"
                    )}
                    style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <Link
                  href="/admissions"
                  className="bg-[#C9962C] text-white px-8 py-3 rounded font-semibold text-lg tracking-wide hover:bg-[#b8851f] transition-colors"
                >
                  Apply Now
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

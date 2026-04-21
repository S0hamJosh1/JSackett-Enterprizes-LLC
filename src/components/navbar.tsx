"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { CONTACT_PHONE_HREF } from "@/lib/contact";
import { LogoMark } from "@/components/logo-mark";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#home" className="inline-flex items-center min-w-0">
            <LogoMark className="w-[72px] sm:w-[88px] shrink-0" />
            <span className="sr-only">JSackett Enterprizes LLC</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-forest/70 hover:text-forest transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href={CONTACT_PHONE_HREF}
              className="inline-flex items-center justify-center px-6 py-2.5 bg-forest text-cream text-sm font-medium rounded-full hover:bg-forest-light transition-colors"
            >
              Call JoAnn
            </a>
          </div>

          <button
            className="md:hidden p-2 text-forest"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-border/40">
          <div className="px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-forest/70 hover:text-forest transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href={CONTACT_PHONE_HREF}
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center px-6 py-2.5 bg-forest text-cream text-sm font-medium rounded-full hover:bg-forest-light transition-colors mt-2"
            >
              Call JoAnn
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

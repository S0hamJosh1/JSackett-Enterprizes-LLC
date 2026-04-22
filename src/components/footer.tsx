import { Mail, Phone } from "lucide-react";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
  GMAIL_COMPOSE_URL,
} from "@/lib/contact";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Individual Therapy",
  "Caregiver & Family Support",
  "Healthcare Navigation",
  "Life Transitions",
  "Crisis Intervention",
];

export function Footer() {
  return (
    <footer id="contact" className="bg-forest text-cream/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] gap-12 lg:gap-16 mb-16">
            <div className="space-y-10">
              <div className="space-y-4">
                <p className="max-w-xl text-base text-cream/60 leading-relaxed">
                  Licensed in New Jersey - LCSW, with practical support
                  tailored to complex life situations.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-12 lg:gap-16 max-w-2xl">
                <div>
                  <h3 className="text-sm font-semibold text-cream/50 tracking-wide uppercase mb-4">
                    Quick Links
                  </h3>
                  <ul className="space-y-3">
                    {quickLinks.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className="text-sm text-cream/60 hover:text-cream transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-cream/50 tracking-wide uppercase mb-4">
                    Services
                  </h3>
                  <ul className="space-y-3">
                    {serviceLinks.map((service) => (
                      <li key={service}>
                        <span className="text-sm text-cream/60">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-cream/10 bg-cream/5 p-6 lg:p-8 self-start">
              <p className="text-sm text-cream/60 leading-relaxed mb-6">
                Call JoAnn directly to schedule a free initial consultation or
                questions call. If you decide to move forward, individual
                sessions are $165.
              </p>

              <div className="space-y-3">
                <a
                  href={CONTACT_PHONE_HREF}
                  className="flex items-center gap-3 rounded-full border border-cream/10 bg-cream/5 px-4 py-3 text-cream/75 hover:text-cream hover:border-cream/20 transition-colors"
                >
                  <Phone size={18} />
                  <span className="text-sm sm:text-base">
                    Call {CONTACT_PHONE_DISPLAY}
                  </span>
                </a>
                <a
                  href={GMAIL_COMPOSE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-full border border-cream/10 bg-cream/5 px-4 py-3 text-cream/75 hover:text-cream hover:border-cream/20 transition-colors"
                >
                  <Mail size={18} />
                  <span className="text-sm sm:text-base">
                    Open Gmail
                  </span>
                </a>
              </div>

              <p className="mt-3 text-xs text-cream/45">
                Gmail address: {CONTACT_EMAIL}
              </p>
              <p className="mt-3 text-xs text-cream/45">
                Please avoid sharing confidential personal or medical details by
                email.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 py-6">
          <p className="text-xs text-cream/40 text-center">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

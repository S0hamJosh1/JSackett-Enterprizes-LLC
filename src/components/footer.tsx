import { Mail, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Individual Therapy",
  "Family Support",
  "Healthcare Navigation",
  "Patient Advocacy",
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
                <span className="font-heading text-3xl text-cream tracking-wide">
                  JSackett Enterprizes LLC
                </span>
                <p className="max-w-xl text-base text-cream/60 leading-relaxed">
                  Licensed in New Jersey - LCSW, with WPS patient advocacy and
                  practical support tailored to complex life situations.
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
              <div className="space-y-3">
                <a
                  href="mailto:jsackettenterprizes@gmail.com"
                  className="flex items-center gap-3 rounded-full border border-cream/10 bg-cream/5 px-4 py-3 text-cream/75 hover:text-cream hover:border-cream/20 transition-colors"
                >
                  <Mail size={18} />
                  <span className="text-sm sm:text-base">
                    jsackettenterprizes@gmail.com
                  </span>
                </a>
                <a
                  href="tel:+19082028850"
                  className="flex items-center gap-3 rounded-full border border-cream/10 bg-cream/5 px-4 py-3 text-cream/75 hover:text-cream hover:border-cream/20 transition-colors"
                >
                  <Phone size={18} />
                  <span className="text-sm sm:text-base">(908) 202-8850</span>
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-cream/10">
                <h3 className="text-sm font-semibold text-cream/50 tracking-wide uppercase mb-4">
                  Ready to Start?
                </h3>
                <p className="text-sm text-cream/60 leading-relaxed mb-6">
                  Reach out to schedule a consultation and talk through what
                  support would be most helpful.
                </p>
                <a
                  href="mailto:jsackettenterprizes@gmail.com"
                  className="inline-flex items-center justify-center w-full px-6 py-2.5 bg-cream text-forest text-sm font-medium rounded-full hover:bg-cream-dark transition-colors"
                >
                  Book a Consultation
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 py-6">
          <p className="text-xs text-cream/40 text-center">
            &copy; {new Date().getFullYear()} JSackett Enterprizes LLC. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
  GMAIL_COMPOSE_URL,
} from "@/lib/contact";

export default function BookPage() {
  return (
    <main className="min-h-screen bg-cream py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-forest/70 hover:text-forest transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="grid lg:grid-cols-[420px_minmax(0,1fr)] gap-8 lg:gap-10 items-start">
          <section className="bg-warm-white border border-border/50 rounded-[2rem] p-8 lg:p-10">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-forest" />
              <span className="text-sm font-medium text-sage tracking-wide uppercase">
                Contact JoAnn
              </span>
            </div>

            <h1 className="font-heading text-4xl lg:text-5xl text-forest leading-[1.08] mb-6">
              Call to schedule your consultation
            </h1>

            <div className="space-y-4 text-forest/65 leading-relaxed">
              <p>
                JoAnn prefers to speak directly with patients before booking.
                The initial consultation or questions call is free and gives
                you a chance to talk through what is going on before scheduling
                a meeting.
              </p>
              <p>
                If it feels like the right fit, individual sessions are $165
                each. If calling is not convenient, you can open Gmail and send
                a short note instead.
              </p>
              <p>
                Please avoid sharing confidential personal or medical details by
                email.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <a
                href={CONTACT_PHONE_HREF}
                className="flex items-center gap-3 rounded-full bg-forest px-4 py-3 text-cream hover:bg-forest-light transition-colors"
              >
                <Phone size={18} className="text-cream" />
                <span className="text-sm font-medium">
                  Call {CONTACT_PHONE_DISPLAY}
                </span>
              </a>
              <a
                href={GMAIL_COMPOSE_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-full bg-cream-dark px-4 py-3 text-forest/70 hover:text-forest transition-colors"
              >
                <Mail size={18} className="text-forest" />
                <span className="text-sm">Open Gmail</span>
              </a>
            </div>

            <p className="mt-4 text-sm text-forest/55">
              Gmail address: {CONTACT_EMAIL}
            </p>
          </section>

          <section className="bg-warm-white border border-border/50 rounded-[2rem] p-8 lg:p-10">
            <div className="rounded-[1.5rem] bg-cream-dark p-8 lg:p-10 h-full">
              <h2 className="font-heading text-3xl lg:text-4xl text-forest mb-6">
                What to expect
              </h2>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="rounded-[1.25rem] bg-warm-white border border-border/40 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-sage mb-2">
                    Initial consultation
                  </p>
                  <p className="font-heading text-3xl text-forest">Free</p>
                </div>
                <div className="rounded-[1.25rem] bg-warm-white border border-border/40 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-sage mb-2">
                    Individual sessions
                  </p>
                  <p className="font-heading text-3xl text-forest">$165</p>
                </div>
              </div>

              <div className="space-y-6 text-forest/70 leading-relaxed">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-sage mb-2">
                    1. Reach out
                  </p>
                  <p>
                    Call JoAnn directly for the fastest response, or use Gmail
                    if you want to send a quick introduction first.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-sage mb-2">
                    2. Have the free consultation call
                  </p>
                  <p>
                    She will learn more about what is going on, answer your
                    questions, and help you figure out the right next step for
                    your needs.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-sage mb-2">
                    3. Schedule the right support
                  </p>
                  <p>
                    From there, JoAnn can recommend the best fit and schedule
                    your next meeting, whether that is counseling, guidance, or
                    a more tailored plan. Video and voice sessions are
                    available, with early bird, evening, and weekend
                    appointments when possible.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

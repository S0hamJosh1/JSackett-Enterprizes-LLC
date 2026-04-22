"use client";

import { useScreenSize } from "@/hooks/use-screen-size";
import { PixelTrail } from "@/components/ui/pixel-trail";
import { GooeyFilter } from "@/components/ui/gooey-filter";
import { Star } from "lucide-react";
import { CONTACT_PHONE_HREF, GMAIL_COMPOSE_URL } from "@/lib/contact";

export function HeroSection() {
  const screenSize = useScreenSize();

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <img
        src="/hero-image.jpg"
        alt="Peaceful meadow landscape"
        className="w-full h-full object-cover absolute inset-0"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/40 to-transparent" />
      <div className="absolute inset-0 bg-cream/20" />

      <GooeyFilter id="gooey-hero" strength={5} />

      <div
        className="absolute inset-0 z-0"
        style={{ filter: "url(#gooey-hero)" }}
      >
        <PixelTrail
          pixelSize={screenSize.lessThan("md") ? 24 : 32}
          fadeDuration={0}
          delay={500}
          pixelClassName="bg-cream/90"
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
        <div className="flex items-center justify-center gap-1.5 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className="fill-forest text-forest"
            />
          ))}
          <span className="ml-2 text-sm font-medium text-forest/80">
            26+ Years of Trusted Support
          </span>
        </div>

        <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-forest leading-[1.05] mb-6">
          Support that actually makes life easier
        </h1>

        <p className="text-lg lg:text-xl text-forest/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Therapy, guidance, and practical support - all in one place. I help
          you understand what's happening, figure out what to do, and take the
          next step.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={CONTACT_PHONE_HREF}
            className="inline-flex items-center justify-center px-8 py-3.5 bg-forest text-cream font-medium rounded-full hover:bg-forest-light transition-colors text-base"
          >
            Call JoAnn
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-forest/30 text-forest font-medium rounded-full hover:bg-forest/5 transition-colors text-base"
          >
            See My Services
          </a>
        </div>
        <p className="mt-4 text-sm text-forest/65">
          Free initial consultation or questions call. Individual sessions are
          $165.
        </p>
        <p className="mt-2 text-sm text-forest/65">
          Prefer writing first?{" "}
          <a
            href={GMAIL_COMPOSE_URL}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-forest underline underline-offset-4"
          >
            Open Gmail
          </a>{" "}
          to send a short note.
        </p>
      </div>
    </section>
  );
}

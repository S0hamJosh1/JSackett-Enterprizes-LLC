import { ArrowUpRight } from "lucide-react";

export function PreviousSiteStrip() {
  return (
    <section className="bg-cream-dark border-y border-border/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 lg:py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8 text-center sm:text-left">
          <div className="space-y-1">
            <p className="text-sm font-semibold text-forest">
              Looking for JoAnn&apos;s previous practice?
            </p>
            <p className="text-sm text-forest/60 leading-relaxed">
              Visit Let&apos;s Analyze That for her prior work with teens, adults, and seniors.
            </p>
          </div>

          <a
            href="https://www.letsanalyzethat.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-cream hover:bg-forest-light transition-colors whitespace-nowrap"
          >
            Visit Let&apos;s Analyze That
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

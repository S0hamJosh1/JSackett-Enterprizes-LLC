const stats = [
  {
    label: "YEARS OF EXPERIENCE",
    value: "26+",
    description:
      "Over two decades of hands-on work helping individuals and families navigate the most challenging periods of their lives.",
  },
  {
    label: "FAMILIES SUPPORTED",
    value: "500+",
    description:
      "Trusted by hundreds of families through mental health challenges, disability, grief, and complex life transitions.",
  },
  {
    label: "AREAS OF EXPERTISE",
    value: "12+",
    description:
      "From counseling and crisis intervention to healthcare navigation, patient advocacy, and home environment support.",
  },
  {
    label: "NJ LICENSURE",
    value: "LCSW",
    description:
      "Licensed in New Jersey, with support that also includes WPS patient advocacy and practical guidance through complex situations.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-forest" />
              <span className="text-sm font-medium text-sage tracking-wide uppercase">
                Why Choose Me
              </span>
            </div>
            <h2 className="font-heading text-4xl lg:text-5xl text-forest leading-[1.1]">
              Real change happens when you feel understood and supported
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-forest/65 text-base lg:text-lg leading-relaxed">
              I take a steady, human approach. I listen carefully, look for the
              patterns behind your struggles, and use proven methods that
              deliver real progress. The goal is to bring everything together in
              one place - so instead of dealing with multiple providers and
              confusion, you have one trusted person helping you manage both the
              emotional and practical sides of what you&apos;re facing.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-warm-white rounded-2xl p-8 lg:p-10 border border-border/50"
            >
              <span className="text-xs font-semibold tracking-widest text-sage uppercase">
                {stat.label}
              </span>
              <p className="font-heading text-5xl lg:text-6xl text-forest mt-3 mb-4">
                {stat.value}
              </p>
              <p className="text-forest/55 text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

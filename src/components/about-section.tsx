import Image from "next/image";
import {
  Heart,
  Shield,
  Users,
} from "lucide-react";

const highlights = [
  {
    icon: Heart,
    title: "Compassionate Approach",
    description:
      "I listen without rushing. Every situation is unique, and I meet you exactly where you are.",
  },
  {
    icon: Shield,
    title: "Licensed & Experienced",
    description:
      "Licensed in New Jersey as an LCSW, with over 26 years helping people through complex life situations.",
  },
  {
    icon: Users,
    title: "Whole-Person Support",
    description:
      "Beyond counseling, I help with healthcare navigation, care planning, and practical life management.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-forest" />
              <span className="text-sm font-medium text-sage tracking-wide uppercase">
                About JoAnn
              </span>
            </div>

            <h2 className="font-heading text-4xl lg:text-5xl text-forest leading-[1.1] mb-8">
              One trusted person to help you manage it all
            </h2>

            <div className="space-y-5 text-forest/70 leading-relaxed text-base lg:text-lg">
              <p>
                I'm JoAnn Sackett, an LCSW licensed in New Jersey with more
                than 26 years of experience. I support individuals and families
                facing emotional distress, disabilities, caregiving demands,
                major life changes, or overwhelming home situations.
              </p>
              <p>
                Instead of only talking through problems, I help you understand
                what's going on, figure out what needs to be done, and
                actually take the next steps. This can include counseling and
                support for anxiety, depression, trauma, or grief, while also
                helping with healthcare navigation, connecting with the right
                services, and dealing with difficult living situations.
              </p>
              <p>
                My approach is calm, practical, and structured - focused on
                giving you clarity and a plan so you're not stuck trying to
                figure everything out on your own. I offer video and voice
                sessions, with early bird, evening, and weekend appointments
                available when possible.
              </p>
            </div>
          </div>

          <div className="bg-warm-white rounded-[2rem] overflow-hidden border border-border/50">
            <div className="relative aspect-square">
              <Image
                src="/joann.jpg"
                alt="Portrait of JoAnn Sackett"
                fill
                sizes="(min-width: 1024px) 32rem, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 lg:p-7">
              <p className="font-heading text-2xl text-forest mb-2">
                JoAnn Sackett
              </p>
              <p className="text-sm text-forest/60 leading-relaxed">
                Licensed in New Jersey - LCSW
              </p>
              <p className="text-sm text-forest/60 leading-relaxed">
                Practical support for complex life situations
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 mt-8 lg:mt-10">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-warm-white rounded-2xl p-6 lg:p-7 border border-border/50"
            >
              <div className="w-10 h-10 rounded-xl bg-forest/10 flex items-center justify-center mb-4">
                <item.icon size={20} className="text-forest" />
              </div>
              <h3 className="font-heading text-xl text-forest mb-2">
                {item.title}
              </h3>
              <p className="text-forest/60 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import {
  Brain,
  HeartHandshake,
  Home,
  ArrowUpRight,
  Compass,
  ShieldCheck,
  Flower2,
  HandHelping,
} from "lucide-react";

const topSpecialties = [
  "Geriatric and Seniors",
  "Chronic Pain",
  "Caregivers",
];

const areasOfFocus = [
  "Anxiety",
  "Behavioral Issues",
  "Bipolar Disorder",
  "Chronic Impulsivity",
  "Coping Skills",
  "Depression",
  "Emotional Disturbance",
  "First Responders",
  "Grief",
  "Hoarding",
  "LGBTQ+",
  "Life Transitions",
  "Mood Disorders",
  "Parkinson's",
  "Suicidal Ideation",
  "Thinking Disorders",
  "Trauma and PTSD",
  "Traumatic Brain Injury (TBI)",
  "Veterans",
];

const services = [
  {
    icon: Brain,
    title: "Individual Therapy",
    description:
      "Anxiety, depression, trauma, and grief - I help you identify patterns and develop practical strategies for lasting change.",
  },
  {
    icon: HeartHandshake,
    title: "Caregiver & Family Support",
    description:
      "Guidance for families dealing with changing dynamics, caregiving responsibilities, or relationship strain from life stressors.",
  },
  {
    icon: Home,
    title: "Home & Living Situations",
    description:
      "Help with hoarding, unsafe living conditions, or overwhelming home environments that need structured intervention.",
  },
  {
    icon: Compass,
    title: "Healthcare Navigation",
    description:
      "Connecting you with the right services, understanding your options, and managing the complexity of healthcare systems.",
  },
  {
    icon: ShieldCheck,
    title: "Disability & Life Transitions",
    description:
      "Support through recovery after accidents, loss of independence, aging, or major changes in ability and lifestyle.",
  },
  {
    icon: Flower2,
    title: "Grief & Loss",
    description:
      "Compassionate support through bereavement, helping you process loss while managing the practical realities that follow.",
  },
  {
    icon: HandHelping,
    title: "Care Coordination",
    description:
      "Helping you communicate with providers, understand your options, and stay organized around the support you or your loved one needs.",
  },
  {
    icon: ArrowUpRight,
    title: "Crisis Intervention",
    description:
      "When things feel urgent and overwhelming, I help you stabilize the situation and create an immediate path forward.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32 bg-[linear-gradient(180deg,#D8DDCC_0%,#D2D8C6_100%)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#44513A]" />
              <span className="text-sm font-medium text-[#5D664F] tracking-wide uppercase">
                Services
              </span>
            </div>
            <h2 className="font-heading text-4xl lg:text-5xl text-[#273121] leading-[1.1]">
              Support tailored to your
              <br />
              whole situation
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#FAF7F0] rounded-2xl p-6 border border-[#D6D0BF]/70 hover:border-[#9AA287]/50 transition-all group shadow-[0_10px_24px_rgba(60,53,34,0.05)]"
            >
              <div className="w-10 h-10 rounded-xl bg-[#ECE5D7] flex items-center justify-center mb-5">
                <service.icon
                  size={20}
                  className="text-[#37452F] group-hover:text-[#5D664F] transition-colors"
                />
              </div>
              <h3 className="font-semibold text-[#263121] text-base mb-2">
                {service.title}
              </h3>
              <p className="text-[#5F6255] text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-5 xl:grid-cols-[280px_minmax(0,1fr)]">
          <div className="bg-[#FAF7F0] rounded-2xl p-6 border border-[#D6D0BF]/70 shadow-[0_10px_24px_rgba(60,53,34,0.05)]">
            <p className="text-xs font-semibold tracking-widest text-[#5D664F] uppercase mb-4">
              Top Specialties
            </p>
            <ul className="space-y-3">
              {topSpecialties.map((specialty) => (
                <li key={specialty} className="text-[#263121] text-base">
                  {specialty}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#FAF7F0] rounded-2xl p-6 border border-[#D6D0BF]/70 shadow-[0_10px_24px_rgba(60,53,34,0.05)]">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between mb-6">
              <div>
                <p className="text-xs font-semibold tracking-widest text-[#5D664F] uppercase mb-2">
                  Areas of Focus
                </p>
                <p className="text-sm text-[#5F6255] leading-relaxed">
                  Support for a wide range of ages, situations, and stages of
                  life.
                </p>
              </div>
              <p className="text-sm text-[#5F6255] leading-relaxed max-w-md">
                Sessions are available by video or voice, with early bird,
                evening, and weekend appointments when possible.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
              {areasOfFocus.map((area) => (
                <div
                  key={area}
                  className="rounded-full border border-[#D6D0BF]/90 bg-[#F4EFE3] px-4 py-2.5 text-sm text-[#263121]"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

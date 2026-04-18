"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What can I expect from my first session?",
    answer:
      "In our first session, I listen to your concerns, understand your goals, and explain how we can work together. We&apos;ll talk about what&apos;s going on in your life - not just the emotional side, but the practical challenges too. You&apos;ll leave with a clear sense of the next steps and how I can help.",
  },
  {
    question: "How is this different from traditional therapy?",
    answer:
      "While I do provide counseling support for anxiety, depression, trauma, and grief, my practice goes beyond that. I also help with real-world challenges like navigating healthcare systems, patient advocacy, dealing with difficult living situations, and managing major life transitions. Think of it as one-stop support - emotional and practical, all in one place.",
  },
  {
    question: "Do you offer online sessions?",
    answer:
      "Yes, I offer secure online sessions for clients who prefer the convenience of meeting from home. Virtual sessions are just as effective for many of the services I provide, including counseling support, patient advocacy, and consultation.",
  },
  {
    question: "What types of situations do you help with?",
    answer:
      "I work with a wide range of challenges: anxiety, depression, trauma, grief, disability, caregiving stress, hoarding and unsafe home environments, family dynamics, recovery after accidents, aging transitions, and more. If you&apos;re dealing with something that feels too complicated for just counseling alone, that&apos;s exactly what I specialize in.",
  },
  {
    question: "How long does the support process usually take?",
    answer:
      "It depends entirely on your situation. Some clients need short-term crisis support, while others benefit from longer-term guidance through complex transitions. We&apos;ll discuss timelines together and adjust as your needs evolve. There&apos;s no one-size-fits-all - we go at your pace.",
  },
  {
    question: "How do I know if this is the right fit for me?",
    answer:
      "If you&apos;re feeling overwhelmed by a situation that involves more than just your emotions - where you need both support and a practical plan - this is likely a great fit. The best way to find out is to schedule a consultation. We&apos;ll talk through what you&apos;re facing and I&apos;ll honestly tell you if I&apos;m the right person to help.",
  },
];

export function FaqSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-forest" />
            <span className="text-sm font-medium text-sage tracking-wide uppercase">
              FAQ
            </span>
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl text-forest leading-[1.1]">
            Everything you need to know
            <br />
            before working with me
          </h2>
        </div>

        <Accordion>
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={index}
              className="border-b border-border/50 py-1"
            >
              <AccordionTrigger className="text-base font-semibold text-forest hover:no-underline py-5 cursor-pointer">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-forest/60 leading-relaxed pb-5">
                <p>{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

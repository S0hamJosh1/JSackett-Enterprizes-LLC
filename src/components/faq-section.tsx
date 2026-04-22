"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I get started?",
    answer:
      "Call JoAnn directly to schedule a free initial consultation or questions call. You'll have a chance to describe what is going on, ask questions, and see whether this feels like the right fit before booking a session.",
  },
  {
    question: "What can I expect from my first session?",
    answer:
      "In our first session, I listen to your concerns, understand your goals, and explain how we can work together. We'll talk about what's going on in your life - not just the emotional side, but the practical challenges too. You'll leave with a clear sense of the next steps and how I can help.",
  },
  {
    question: "How much does it cost?",
    answer:
      "The initial consultation or questions call is free. After that, individual sessions are $165 each.",
  },
  {
    question: "How is this different from traditional therapy?",
    answer:
      "While I do provide counseling support for anxiety, depression, trauma, and grief, my practice goes beyond that. I also help with real-world challenges like navigating healthcare systems, dealing with difficult living situations, and managing major life transitions. Think of it as one-stop support - emotional and practical, all in one place.",
  },
  {
    question: "Do you offer online sessions?",
    answer:
      "Yes, I offer secure video and voice sessions for clients who prefer the convenience of meeting from home. Early bird, evening, and weekend appointments are also available when possible.",
  },
  {
    question: "What types of situations do you help with?",
    answer:
      "I work with a wide range of challenges: anxiety, depression, trauma, grief, chronic pain, caregiving stress, hoarding and unsafe home environments, family dynamics, recovery after accidents, aging transitions, and more. If you're dealing with something that feels too complicated for just counseling alone, that's exactly what I specialize in.",
  },
  {
    question: "How long does the support process usually take?",
    answer:
      "It depends entirely on your situation. Some clients need short-term crisis support, while others benefit from longer-term guidance through complex transitions. We'll discuss timelines together and adjust as your needs evolve. There's no one-size-fits-all - we go at your pace.",
  },
  {
    question: "How do I know if this is the right fit for me?",
    answer:
      "If you're feeling overwhelmed by a situation that involves more than just your emotions - where you need both support and a practical plan - this is likely a great fit. The best way to find out is to call for a free consultation. We'll talk through what you're facing and I'll honestly tell you if I'm the right person to help.",
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

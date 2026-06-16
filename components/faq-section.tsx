import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { SectionHeading } from '@/components/section-heading'

const faqs = [
  {
    q: 'How fast will I receive my subscription?',
    a: 'Most orders are delivered automatically within 1–5 minutes. For a few services with manual setup, delivery may take up to a few hours, and our team keeps you updated throughout.',
  },
  {
    q: 'Are the payments secure?',
    a: 'Absolutely. All transactions are processed through trusted, encrypted payment gateways. We never store your card details on our servers.',
  },
  {
    q: 'What happens if something goes wrong?',
    a: 'Every purchase is covered by a warranty period depending on your plan. If a service stops working within that window, we replace or fix it free of charge.',
  },
  {
    q: 'Can I cancel or change my plan?',
    a: 'Yes. Plans are billed monthly and you can upgrade, downgrade, or cancel anytime from your account with no hidden fees.',
  },
  {
    q: 'Do you offer support if I need help?',
    a: 'Our support team is available 24/7 via live chat and email. Real humans, fast responses, any time zone.',
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          subtitle="Everything you need to know before joining Veltrix."
        />

        <Accordion type="single" collapsible className="mt-10 w-full">
          {faqs.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="mb-3 rounded-2xl border border-border bg-card px-5 shadow-luxury"
            >
              <AccordionTrigger className="py-5 text-left font-heading text-base font-medium text-foreground hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

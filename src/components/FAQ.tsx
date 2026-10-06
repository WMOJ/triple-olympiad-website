'use client'

import { useId, useState } from 'react'
import { CONTACT_EMAIL } from '@/lib/olympiad'

const faqData: [string, string][] = [
  [
    "What is the WOSS Triple Olympiad? When does it run?",
    "The WOSS Triple Olympiad is a three-day STEM competition featuring Mathematics (Day 1), Computer Science (Day 2), and Physics & a Practical Hackathon (Day 3). It runs from December 15 to 17, 2026 after school."
  ],
  [
    "Who can participate in the competition?",
    "The competition is open to all high school students from the HDSB."
  ],
  ["Will there be food?",
    "Yes, there will be lots of yummy pizza, snacks, and food for everyone!"],
  [
    "How does the scoring system work?",
    "Each discipline is scored independently, with points awarded based on accuracy, speed, and problem-solving approach."
  ],
  [
    "What are the prizes and recognition?",
    "We have prizes worth up to $500, items ranging from high-quality gaming equipment to gift cards, and more!"
  ],
  [
    "Is there a registration fee?",
    "Registration is completely free for all participants. We believe in making quality education and competition opportunities accessible to students regardless of their financial background."
  ]
]

export function FAQ() {
  const [expanded, setExpanded] = useState<Set<number>>(new Set([0]))
  const baseId = useId()

  const toggleItem = (index: number) => {
    setExpanded((prev) => {
      const next = new Set(prev)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  return (
    <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-8">
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-28">
          <h2 className="heading text-[clamp(2rem,4.2vw,3rem)]">Questions, answered</h2>
          <p className="mt-4 text-fg-2 max-w-[32ch]">
            Anything else? Email{' '}
            <a className="link" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      </div>

      <ul className="lg:col-span-8 border-t border-line">
        {faqData.map(([question, answer], index) => {
          const isOpen = expanded.has(index)
          const panelId = `${baseId}-panel-${index}`
          const buttonId = `${baseId}-button-${index}`
          return (
            <li key={question} className="border-b border-line">
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleItem(index)}
                  className="group flex w-full items-start justify-between gap-6 py-5 md:py-6 text-left"
                >
                  <span className="text-[1.0625rem] md:text-xl font-semibold leading-snug text-fg transition-colors group-hover:text-brand-accent">
                    {question}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center border transition-colors ${
                      isOpen
                        ? 'border-brand bg-brand text-on-brand'
                        : 'border-line-2 text-fg-2 group-hover:border-brand'
                    }`}
                  >
                    <svg className="faq-icon" width="14" height="14" viewBox="0 0 14 14">
                      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                  </span>
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="faq-panel"
                data-open={isOpen}
                inert={!isOpen}
              >
                <div>
                  <p className="pb-6 pr-14 text-fg-2 leading-relaxed prose-measure">{answer}</p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

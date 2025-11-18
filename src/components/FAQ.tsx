'use client'

import { useState } from 'react'

const faqData: [string, string][] = [
  [
    "What is the WOSS Triple Olympiad?",
    "The WOSS Triple Olympiad is a comprehensive academic competition featuring three distinct disciplines: Mathematics, Science, and Computer Programming. It's designed to challenge students across multiple STEM fields and showcase their diverse talents."
  ],
  [
    "Who can participate in the competition?",
    "The competition is open to high school students aged 14-18 from around the world. Participants can compete individually or as part of a team, with separate categories for different skill levels and age groups."
  ],
  [
    "How does the scoring system work?",
    "Each discipline is scored independently, with points awarded based on accuracy, speed, and problem-solving approach. The final ranking combines scores from all three disciplines, with bonus points for exceptional performance in multiple areas."
  ],
  [
    "What are the prizes and recognition?",
    "Winners receive scholarships, internship opportunities with our sponsor companies, and certificates of achievement. Top performers also get featured in our annual publication and gain access to exclusive mentorship programs."
  ],
  [
    "Is there a registration fee?",
    "Registration is completely free for all participants. We believe in making quality education and competition opportunities accessible to students regardless of their financial background."
  ],
  [
    "How can I prepare for the competition?",
    "We provide comprehensive study materials, practice problems, and mock competitions on our platform. Additionally, we offer webinar sessions with past winners and subject matter experts to help participants prepare effectively."
  ]
]

export function FAQ() {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set())

  const toggleItem = (index: number) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedItems(newExpanded)
  }

  return (
    <div className="mt-24 md:mt-32 max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Frequently Asked <span className="gradient-text">Questions</span>
        </h2>
        <p className="text-white/70 text-lg">
          Everything you need to know about the competition
        </p>
      </div>

      <div className="space-y-4">
        {faqData.map(([question, answer], index) => {
          const isExpanded = expandedItems.has(index)

          return (
            <div
              key={index}
              className={`glass rounded-2xl overflow-hidden transition-all duration-500 card-hover ${isExpanded ? 'glow-green' : ''
                }`}
            >
              <div
                className="rounded-2xl transition-all duration-300 relative overflow-hidden"
                style={{
                  backgroundColor: isExpanded ? 'rgba(16, 185, 129, 0.05)' : 'transparent'
                }}
              >
                {isExpanded && (
                  <div
                    className="absolute top-0 left-0 right-0 h-1/3 rounded-t-2xl pointer-events-none"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(16, 185, 129, 0.15) 0%, transparent 100%)'
                    }}
                  />
                )}

                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-all duration-300 relative z-10 group"
                >
                  <span className="text-white font-semibold text-lg pr-4 group-hover:text-emerald-100 transition-colors">
                    {question}
                  </span>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500/20 to-green-600/20 flex items-center justify-center group-hover:from-emerald-500/30 group-hover:to-green-600/30 transition-all">
                    <svg
                      className={`w-5 h-5 text-emerald-400 transition-transform duration-300 ${isExpanded ? 'rotate-45' : ''
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6 animate-fade-in-up relative z-10">
                    <p className="text-white/80 leading-relaxed text-base">
                      {answer}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
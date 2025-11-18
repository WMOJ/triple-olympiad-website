"use client";

import { useState } from "react";
import { faqData } from "@/lib/faqData";

export function FAQ() {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className="mt-24 md:mt-32 max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-white opacity-70 text-lg">
          Everything you need to know about the competition
        </p>
      </div>

      <div className="space-y-4">
        {faqData.map(([question, answer], index) => {
          const isExpanded = expandedItems.has(index);

          return (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                isExpanded ? "p-0.5" : ""
              }`}
              style={{
                background: isExpanded
                  ? "linear-gradient(to bottom, rgba(0, 130, 54, 0.25) 0%, rgba(0, 102, 41, 0.25) 30%, transparent 100%)"
                  : "transparent",
              }}
            >
              <div
                className="rounded-2xl transition-all duration-300 relative overflow-hidden"
                style={{
                  backgroundColor: isExpanded ? "#001002" : "#0f1b13",
                }}
              >
                {isExpanded && (
                  <div
                    className="absolute top-0 left-0 right-0 h-1/3 rounded-t-2xl"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(0, 130, 54, 0.25) 0%, transparent 100%)",
                    }}
                  />
                )}

                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-200 relative z-10"
                >
                  <span className="text-white font-medium text-lg pr-4">
                    {question}
                  </span>
                  <div className="shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <svg
                      className={`w-4 h-4 text-white transition-transform duration-300 ${
                        isExpanded ? "rotate-45" : ""
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
                  <div className="px-6 pb-6 animate-fade-in relative z-10">
                    <p className="text-white/80 leading-relaxed">{answer}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

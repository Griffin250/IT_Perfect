"use client";

import { useState } from "react";
import SubTitle from "@/app/components/reusable/SubTitle";
import Title from "@/app/components/reusable/Title";
import { faqs } from "@/app/helpers/stub-data/faqs";
import Link from "next/link";

export default function HomeFaq() {
  const [expanded, setExpanded] = useState<number | null>(0);
  
  // Show only 4 FAQs on home page
  const displayedFaqs = faqs.slice(0, 4);

  const toggleExpand = (id: number) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div id="faq" className="flex w-full flex-col items-center px-4 md:px-6 py-16 lg:py-24">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-12">
          <Title title="Frequently Asked Questions" />
          <SubTitle text="Quick answers to common questions about our services" />
        </div>

        <div className="w-full max-w-4xl mx-auto">
          <div className="space-y-4">
            {displayedFaqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleExpand(faq.id)}
                  className="w-full flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-left">
                    {faq.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 ml-4 transition-transform duration-300 ${
                      expanded === faq.id ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                </button>

                {expanded === faq.id && (
                  <div className="border-t border-gray-200 dark:border-gray-700 px-6 py-4 bg-gray-50 dark:bg-slate-700">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Load More Link */}
        <div className="flex justify-center mt-8">
          <Link
            href="/faq"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            View All FAQs
          </Link>
        </div>
      </div>
    </div>
  );
}

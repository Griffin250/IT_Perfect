"use client";

import { useState } from "react";
import SubTitle from "@/app/components/reusable/SubTitle";
import Title from "@/app/components/reusable/Title";
import { faqs } from "@/app/helpers/stub-data/faqs";
import Link from "next/link";

export default function Faq() {
  const [expanded, setExpanded] = useState<number | null>(0);

  const toggleExpand = (id: number) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div id="faq" className="flex w-full flex-col items-center px-4 md:px-6 py-12 mt-6">
      <Title title="Frequently Asked Questions" />
      <SubTitle text="Find answers to common questions about our services" />

      <div className="w-full max-w-4xl mt-12">
        <div className="space-y-4">
          {faqs.map((faq) => (
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

      {/* CTA Section */}
      <div className="w-full max-w-4xl mt-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-3xl p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Still have questions?
        </h2>
        <p className="text-blue-100 mb-6">
          Our team is here to help. Get in touch with us today!
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105"
        >
          Contact Us Now
        </Link>
      </div>
    </div>
  );
}

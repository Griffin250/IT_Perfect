"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { testimonials } from "@/app/helpers/stub-data/testimonials";
import Title from "@/app/components/reusable/Title";
import SubTitle from "@/app/components/reusable/SubTitle";

export default function InfiniteTestimonials() {
  const [topRow, setTopRow] = useState<typeof testimonials>([]);
  const [bottomRow, setBottomRow] = useState<typeof testimonials>([]);

  useEffect(() => {
    // Split testimonials into two rows
    const top = testimonials.filter((_, i) => i % 2 === 0);
    const bottom = testimonials.filter((_, i) => i % 2 !== 0);
    
    // Duplicate for infinite scroll effect
    setTopRow([...top, ...top, ...top]);
    setBottomRow([...bottom, ...bottom, ...bottom]);
  }, []);

  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col min-w-[380px] h-fit">
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={testimonial.image}
          width={60}
          height={60}
          alt={testimonial.from}
          className="rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
            {testimonial.from}
          </h3>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            {testimonial.company}
          </p>
        </div>
      </div>

      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed flex-1 mb-4">
        {`"${testimonial.description}"`}
      </p>

      <div className="flex items-center gap-1 pt-4 border-t border-gray-200 dark:border-gray-700">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-lg">★</span>
        ))}
      </div>
    </div>
  );

  return (
    <section className="w-full px-4 md:px-6 py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto mb-12">
        <Title title="What Our Clients Say" />
        <SubTitle text="Real feedback from teams we've partnered with" />
      </div>

      {/* Top Row - Scrolls Left */}
      <div className="relative w-full overflow-hidden mb-16 md:mb-24">
        <div className="flex gap-6 animate-scroll-left">
          {topRow.map((testimonial, index) => (
            <TestimonialCard key={`top-${index}`} testimonial={testimonial} />
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white dark:from-gray-900 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-gray-50 dark:from-gray-800 to-transparent pointer-events-none" />
      </div>

      {/* Bottom Row - Scrolls Right */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-6 animate-scroll-right">
          {bottomRow.map((testimonial, index) => (
            <TestimonialCard key={`bottom-${index}`} testimonial={testimonial} />
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white dark:from-gray-900 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-gray-50 dark:from-gray-800 to-transparent pointer-events-none" />
      </div>

      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(33.33%);
          }
        }

        .animate-scroll-left {
          animation: scrollLeft 40s linear infinite;
        }

        .animate-scroll-right {
          animation: scrollRight 40s linear infinite;
          direction: rtl;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

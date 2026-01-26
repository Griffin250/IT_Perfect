"use client";

import Title from "@/app/components/reusable/Title";
import SubTitle from "@/app/components/reusable/SubTitle";
import Image from "next/image";
import { testimonials } from "@/app/helpers/stub-data/testimonials";
import Link from "next/link";

export default function Testimonials() {
  return (
    <div className="flex w-full flex-col items-center px-4 md:px-6 py-12 mt-6">
      <Title title="Testimonials" />
      <SubTitle text="See valuable feedback from our clients" />
      
      <div className="w-full max-w-6xl mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={testimonial.image}
                  width={60}
                  height={60}
                  alt={testimonial.from}
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.from}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-200">
                    {testimonial.company}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed flex-1 mb-4">
                {`"${testimonial.description}"`}
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <Link
                  href={testimonial.link}
                  target="_blank"
                  className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
                >
                  View Profile →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { trustedCompanies } from "@/app/helpers/stub-data/companies";

export default function TrustedCompanies() {
  return (
    <section className="w-full py-16 lg:py-28 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 -z-10" />
      
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
            <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
              Our Partners
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Innovators
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {"Joining forces with industry leaders to deliver transformative digital solutions"}
          </p>
        </div>

        {/* Enhanced scrolling container with gradient masks */}
        <div className="relative group">
          {/* Left gradient fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-gray-950 to-transparent z-10 pointer-events-none" />
          {/* Right gradient fade */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-gray-950 to-transparent z-10 pointer-events-none" />

          <style>{`
            @keyframes scroll-smooth {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            
            .scroll-animation {
              animation: scroll-smooth 45s linear infinite;
            }
            
            .scroll-container:hover .scroll-animation {
              animation-play-state: paused;
            }
          `}</style>

          <div className="scroll-container overflow-hidden px-4">
            <div className="scroll-animation flex gap-10 md:gap-16">
              {/* First set */}
              {trustedCompanies.map((company, index) => (
                <div
                  key={`${company.id}-1`}
                  className="flex-shrink-0 group/card hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-xl dark:hover:shadow-lg dark:shadow-purple-500/20 transition-all duration-300 border border-gray-200 dark:border-gray-700 h-full flex flex-col items-center justify-center min-h-[200px]">
                    {/* Logo container with background */}
                    <div className="relative w-40 h-24 mb-4 flex items-center justify-center rounded-xl p-4">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        fill
                        className="object-contain transition-all duration-300 group-hover/card:scale-110 filter group-hover/card:brightness-110"
                      />
                    </div>
                    {/* Company name */}
                    <p className="text-center text-sm font-semibold text-gray-700 dark:text-gray-300">
                      {company.name}
                    </p>
                  </div>
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {trustedCompanies.map((company) => (
                <div
                  key={`${company.id}-2`}
                  className="flex-shrink-0 group/card hover:scale-105 transition-all duration-300"
                >
                  <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-xl dark:hover:shadow-lg dark:shadow-purple-500/20 transition-all duration-300 border border-gray-200 dark:border-gray-700 h-full flex flex-col items-center justify-center min-h-[200px]">
                    {/* Logo container with background */}
                    <div className="relative w-40 h-24 mb-4 flex items-center justify-center rounded-xl p-4">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        fill
                        className="object-contain transition-all duration-300 group-hover/card:scale-110 filter group-hover/card:brightness-110"
                      />
                    </div>
                    {/* Company name */}
                    <p className="text-center text-sm font-semibold text-gray-700 dark:text-gray-300">
                      {company.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats footer */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 dark:from-blue-900/20 to-purple-50 dark:to-purple-900/20 border border-blue-100 dark:border-blue-800/50">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">50+</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Companies</p>
          </div>
          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 dark:from-purple-900/20 to-pink-50 dark:to-pink-900/20 border border-purple-100 dark:border-purple-800/50">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">150+</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Projects</p>
          </div>
          <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 dark:from-green-900/20 to-emerald-50 dark:to-emerald-900/20 border border-green-100 dark:border-green-800/50">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">10+</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Years</p>
          </div>
          <div className="p-6 rounded-xl bg-gradient-to-br from-orange-50 dark:from-orange-900/20 to-red-50 dark:to-red-900/20 border border-orange-100 dark:border-orange-800/50">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">98%</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}

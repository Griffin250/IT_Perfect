"use client";

import Image from "next/image";
import { trustedCompanies } from "@/app/helpers/stub-data/companies";

export default function TrustedCompanies() {
  return (
    <section className="w-full py-16 lg:py-24 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We've had the privilege to work with innovative companies across industries
          </p>
        </div>

        {/* Infinite scrolling container */}
        <div className="relative overflow-hidden">
          <style>{`
            @keyframes scroll-left {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-100%);
              }
            }
            
            .scroll-animation {
              animation: scroll-left 30s linear infinite;
            }
            
            .scroll-container:hover .scroll-animation {
              animation-play-state: paused;
            }
          `}</style>

          <div className="scroll-container overflow-hidden">
            <div className="scroll-animation flex gap-8 md:gap-12 whitespace-nowrap">
              {/* First set of companies */}
              {trustedCompanies.map((company) => (
                <div
                  key={`${company.id}-1`}
                  className="flex-shrink-0 flex items-center justify-center h-20 px-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="relative w-32 h-16">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      fill
                      className="object-contain transition-all duration-300 hover:scale-110"
                    />
                  </div>
                </div>
              ))}
              
              {/* Duplicate set for infinite scroll effect */}
              {trustedCompanies.map((company) => (
                <div
                  key={`${company.id}-2`}
                  className="flex-shrink-0 flex items-center justify-center h-20 px-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="relative w-32 h-16">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      fill
                      className="object-contain transition-all duration-300 hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Info text */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Join 50+ companies that trust us with their digital transformation
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError("Please enter your email");
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email");
      return;
    }
    
    setIsSubmitted(true);
    setError("");
    setEmail("");
    
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="w-full py-20 lg:py-28">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        {/* Main CTA Section */}
        <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 dark:from-blue-700 dark:via-purple-700 dark:to-slate-900 rounded-3xl overflow-hidden shadow-2xl mb-16">

          <div className="relative z-10 text-center py-16 md:py-20 px-6">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to Transform Your Vision?
              </h2>
              <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-2 leading-relaxed">
                Let's collaborate to bring your ideas to life. Our expert team is ready to discuss your project and create something extraordinary together.
              </p>
            </div>

            {/* Primary CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105 text-center inline-block"
              >
                Start Your Project
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:bg-opacity-10 transition-all duration-300 text-center inline-block"
              >
                View Services
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center text-white mb-12 pb-12 border-b border-white/20">
              <div className="flex items-center gap-2 justify-center">
                <span className="text-2xl">🔒</span>
                <span className="text-sm">Secure & Confidential</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <span className="text-2xl">⏱️</span>
                <span className="text-sm">Quick Response Time</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <span className="text-2xl">✅</span>
                <span className="text-sm">100% Satisfaction</span>
              </div>
            </div>

            {/* Email Subscription Section */}
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-3">
                Stay Updated
              </h3>
              <p className="text-blue-100 text-sm mb-6">
                Subscribe to our newsletter for the latest insights, updates, and opportunities
              </p>

              <form onSubmit={handleSubscribe} className="w-full">
                <div className="flex flex-col md:flex-row gap-3 w-full mb-3">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                    placeholder="Enter your email address"
                    className="flex-1 py-3 px-5 rounded-full outline-none border-2 border-transparent focus:border-blue-300 bg-white/90 text-gray-900 placeholder:text-gray-500 transition-all duration-300"
                  />
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-full bg-white text-blue-600 font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl md:w-auto w-full whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </div>
                
                {error && (
                  <p className="text-red-200 text-sm text-center animate-pulse">
                    ⚠️ {error}
                  </p>
                )}
                
                {isSubmitted && (
                  <div className="bg-green-400/20 border border-green-300 text-green-100 px-4 py-2 rounded-full text-center text-sm animate-in fade-in">
                    ✓ Thanks for subscribing! We'll be in touch soon.
                  </div>
                )}
              </form>

              <div className="flex flex-col md:flex-row gap-6 md:gap-8 pt-6 justify-center text-white text-sm">
                <div className="flex items-center gap-2 justify-center">
                  <span className="text-xl">⚡</span>
                  <span>Fast Response</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <span className="text-xl">👥</span>
                  <span>Expert Team</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <span className="text-xl">💼</span>
                  <span>Custom Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

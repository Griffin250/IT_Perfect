"use client";

import { useState } from "react";

export default function Subscribe() {
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
    <div className="flex w-full flex-col items-center justify-center px-4 md:px-6 py-16">
      <div className="w-full max-w-3xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-3xl p-8 md:p-12 shadow-2xl">
        <div className="flex flex-col items-center gap-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Ready to Transform Your Ideas?
            </h2>
            <p className="text-blue-100 text-lg mb-2">
              Let&apos;s discuss your amazing project
            </p>
            <p className="text-blue-200 text-sm flex items-center justify-center gap-2">
              <span>🔒</span> Secure and confidential
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full md:w-full flex flex-col gap-3">
            <div className="flex flex-col md:flex-row gap-3 w-full">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                placeholder="Enter your email address"
                className="flex-1 py-4 px-6 rounded-full outline-none border-2 border-transparent focus:border-white bg-white text-gray-900 placeholder:text-gray-500 transition-all duration-300"
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-full bg-white text-blue-600 font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 md:w-auto w-full"
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
              <div className="bg-green-400 bg-opacity-20 border border-green-400 text-green-100 px-4 py-3 rounded-full text-center text-sm animate-in fade-in">
                ✓ Thanks for subscribing! We'll be in touch soon.
              </div>
            )}
          </form>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 pt-4 text-white text-sm">
            <div className="flex items-center gap-2">
              <span className="text-xl">⚡</span>
              <span>Fast Response</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">👥</span>
              <span>Expert Team</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">💼</span>
              <span>Custom Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

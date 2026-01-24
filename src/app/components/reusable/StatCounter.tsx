"use client";

import { useState, useEffect, useRef } from "react";

interface StatCounterProps {
  value: number;
  label: string;
  suffix?: string;
}

export default function StatCounter({ value, label, suffix = "" }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = value;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 16); // 60fps

    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [hasStarted, value]);

  return (
    <div ref={ref} className="flex items-center gap-3">
      <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
        {count}
        {suffix}
      </div>
      <div>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {label.split("\n")[0]}
        </div>
        <div className="font-semibold text-gray-900 dark:text-white">
          {label.split("\n")[1]}
        </div>
      </div>
    </div>
  );
}

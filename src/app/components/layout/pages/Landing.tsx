import Image from "next/image";
import Link from "next/link";
import StatCounter from "@/app/components/reusable/StatCounter";

export default function Landing() {
  return (
    <div
      id="home"
      className="w-full flex flex-col lg:flex-row justify-between items-center px-4 md:px-6 lg:px-12 py-12 lg:py-20 min-h-screen max-w-7xl mx-auto"
    >
      <div className="w-full lg:w-1/2 flex flex-col gap-8 mb-10 lg:mb-0 mt-24">
        {/* Main Heading */}
        <div>
          <h1 className="text-3xl md:text-6xl lg:text-5xl font-bold leading-tight mb-6">
            Where <span className="text-blue-600 dark:text-blue-400">Technology</span> Meets
            <span className="block">Ingenuity</span>
          </h1>
          
          {/* Company Mission */}
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed font-medium">
            Transforming visions into powerful digital realities through innovative engineering and strategic expertise.
          </p>
        </div>

        {/* What We Do */}
        <div className="space-y-4">
          <div>
            <h3 className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wide mb-2">About IT Perfect</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We are a team of passionate software engineers, designers, and strategists dedicated to building cutting-edge digital solutions. From full-stack development to DevOps infrastructure, we deliver technology that scales, performs, and drives measurable business impact.
            </p>
          </div>

          {/* What We Deliver */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">✓</div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Custom Solutions</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Tailored web & mobile applications built with modern tech stacks
              </p>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">⚡</div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Performance First</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Optimized code and infrastructure for speed and reliability
              </p>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">🔒</div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Secure & Scalable</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Enterprise-grade security with architecture that grows with you
              </p>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">🤝</div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Partnership Approach</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Transparent communication and committed to your long-term success
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-center pt-2 border-t border-gray-200 dark:border-gray-700 mt-6">
          <StatCounter value={50} label="Projects\nDelivered" suffix="+" />
          <StatCounter value={150} label="Clients\nWorldwide" suffix="+" />
          <StatCounter value={10} label="Years\nExperience" suffix="+" />
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link
            href="/contact"
            className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:scale-105 text-center"
          >
            Start Your Project
          </Link>
          <Link
            href="#services"
            className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-slate-800 transition-all duration-300 text-center"
          >
            Explore Our Services
          </Link>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <Image
          width={600}
          height={600}
          src="/landing.png"
          alt="Landing Image"
          className="w-full max-w-md lg:max-w-lg animate-float"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </div>
  );
}

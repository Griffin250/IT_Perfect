import Link from "next/link";
import { ArrowBack } from "@mui/icons-material";

export const metadata = {
  title: "Page Not Found | IT Perfect",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white dark:bg-gray-900 px-4">
      <div className="w-full max-w-2xl text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[150px] font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            {"The page you're looking for doesn't exist or has been moved. Let's get you back on track."}
          </p>
        </div>

        {/* Decorative Element */}
        <div className="mb-12 flex justify-center">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center">
            <svg
              className="w-16 h-16 md:w-24 md:h-24 text-blue-600 dark:text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <ArrowBack className="w-5 h-5" />
            Back to Home
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* Suggestions */}
        <div className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Here are some helpful links instead:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/projects", label: "Projects" },
              { href: "/about", label: "About" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

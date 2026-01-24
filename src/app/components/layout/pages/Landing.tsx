import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return (
    <div
      id="home"
      className="w-full flex flex-col lg:flex-row justify-between items-center px-4 md:px-6 lg:px-12 py-12 lg:py-20 min-h-screen max-w-7xl mx-auto"
    >
      <div className="w-full lg:w-1/2 flex flex-col gap-6 mb-10 lg:mb-0">
        <div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Where <span className="text-blue-600 dark:text-blue-400">Technology</span> Meets
            <span className="block">Ingenuity</span>
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
          We don't just code—we conquer. Your ultimate service partner for building cutting-edge digital solutions that drive real business results.
        </p>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 pt-2">
          <div className="flex items-center gap-3">
            <div className="text-4xl">✓</div>
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-300">32+</div>
              <div className="font-semibold text-gray-900 dark:text-white">Successful Projects</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-4xl">😊</div>
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-300">22+</div>
              <div className="font-semibold text-gray-900 dark:text-white">Satisfied Clients</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link
            href="/contact"
            className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:scale-105 text-center"
          >
            Book a Free Call
          </Link>
          <Link
            href="#services"
            className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-slate-800 transition-all duration-300 text-center"
          >
            Learn More
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

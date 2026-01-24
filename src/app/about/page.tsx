"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/layout/widgets/Header";
import Footer from "@/app/components/layout/widgets/Footer";

export default function About() {
  const values = [
    {
      title: "Innovation",
      description: "We embrace cutting-edge technologies to solve complex problems",
      icon: "💡",
    },
    {
      title: "Quality",
      description: "We deliver excellence in every line of code and design",
      icon: "✨",
    },
    {
      title: "Integrity",
      description: "We operate with transparency and honesty in all dealings",
      icon: "🤝",
    },
    {
      title: "Passion",
      description: "We love what we do and it shows in our work",
      icon: "❤️",
    },
  ];

  const milestones = [
    {
      year: "2015",
      title: "Founded",
      description: "IT Perfect was established with a vision to revolutionize digital solutions",
    },
    {
      year: "2017",
      title: "100+ Projects",
      description: "Achieved milestone of completing 100 successful projects",
    },
    {
      year: "2019",
      title: "Global Expansion",
      description: "Expanded operations to serve clients across multiple continents",
    },
    {
      year: "2023",
      title: "Industry Leader",
      description: "Recognized as a top IT solutions provider in the region",
    },
  ];

  return (
    <>
      <Header />
      <div className="w-full">
        {/* Hero Section */}
        <section className="w-full px-4 md:px-6 py-16 md:py-24 min-h-screen flex flex-col items-center justify-center">
          <div className="w-full max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                About <span className="text-blue-600 dark:text-blue-400">IT Perfect</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We're a team of passionate professionals dedicated to transforming businesses through innovative technology solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/landing.png"
                  width={600}
                  height={600}
                  alt="About IT Perfect"
                  className="rounded-2xl shadow-lg"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <div className="flex flex-col gap-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  Our Story
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Founded in 2015, IT Perfect began with a simple mission: to help businesses succeed through technology. What started as a small team of passionate developers has grown into a full-service digital solutions company serving clients across industries.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Today, we combine technical expertise with creative thinking to deliver solutions that not only meet but exceed expectations. Our track record speaks for itself: 500+ successful projects, 150+ happy clients, and a commitment to innovation that never stops.
                </p>
                <div className="flex gap-4 pt-4">
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="w-full px-4 md:px-6 py-16 md:py-24 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-lg">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  To empower businesses of all sizes with innovative, scalable, and user-centric digital solutions that drive growth, efficiency, and success in the modern digital landscape.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-lg">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  To be the most trusted and innovative technology partner globally, recognized for our excellence, integrity, and transformative impact on businesses and communities worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full px-4 md:px-6 py-16 md:py-24">
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                These principles guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="w-full px-4 md:px-6 py-16 md:py-24 bg-gray-50 dark:bg-slate-800">
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Key milestones in our growth story
              </p>
            </div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="flex gap-8 items-start"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {milestone.year}
                    </div>
                    {index !== milestones.length - 1 && (
                      <div className="w-1 h-20 bg-blue-300 dark:bg-blue-600 mt-4"></div>
                    )}
                  </div>
                  <div className="bg-white dark:bg-slate-700 rounded-2xl p-8 flex-1 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full px-4 md:px-6 py-16 md:py-24">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all">
                <div className="text-5xl font-bold mb-2">500+</div>
                <p className="text-lg opacity-90">Projects Delivered</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all">
                <div className="text-5xl font-bold mb-2">150+</div>
                <p className="text-lg opacity-90">Happy Clients</p>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all">
                <div className="text-5xl font-bold mb-2">50+</div>
                <p className="text-lg opacity-90">Team Members</p>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all">
                <div className="text-5xl font-bold mb-2">10+</div>
                <p className="text-lg opacity-90">Years Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full px-4 md:px-6 py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700">
          <div className="w-full max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Join Our Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's work together to create something amazing. We're excited to hear about your project.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Get Started Today
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

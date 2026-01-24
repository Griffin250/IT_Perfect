"use client";

import ContactForm from "@/app/components/reusable/ContactForm";
import Header from "@/app/components/layout/widgets/Header";
import Footer from "@/app/components/layout/widgets/Footer";
import Link from "next/link";

export default function ContactPage() {
  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      description: "Send us an email and we'll respond within 24 hours",
      details: ["contact@itperfect.fr"],
    },
    {
      icon: "📞",
      title: "Call Us",
      description: "Speak directly with our team during business hours",
      details: ["+33 7 51 23 98 63"],
    },
    {
      icon: "📍",
      title: "Visit Us",
      description: "Find us at our office location",
      details: ["Paris, France"],
      link: "https://maps.app.goo.gl/1MeUxYUzqEfsXk696?g_st=awb",
    },
  ];

  const faqItems = [
    {
      question: "How long does it take to hear back?",
      answer: "We typically respond to inquiries within 24 hours during business hours.",
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes! We offer a free 30-minute consultation call to discuss your project.",
    },
    {
      question: "What's your response time for urgent requests?",
      answer: "For urgent matters, call us directly during business hours.",
    },
    {
      question: "Can I schedule a meeting with a specific team member?",
      answer: "Absolutely! After contacting us, you can schedule with your dedicated project manager.",
    },
  ];

  return (
    <>
      <Header />
      <div className="w-full">
        {/* Hero Section */}
        <section className="w-full px-4 md:px-6 py-16 md:py-24 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900">
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Get in Touch
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {"Have a project in mind? We'd love to hear about it. Let's discuss how we can help transform your vision into reality."}
              </p>
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="w-full px-4 md:px-6 py-16 md:py-24">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left - Contact Methods */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Contact Information
                </h2>

                <div className="space-y-8 mb-12">
                  {contactMethods.map((method, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
                    >
                      <div className="text-4xl mb-3">{method.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {method.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                        {method.description}
                      </p>
                      <div className="space-y-1">
                        {method.details.map((detail, i) => (
                          <div key={i}>
                            {method.link && method.title === "Visit Us" ? (
                              <a
                                href={method.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                              >
                                {detail}
                              </a>
                            ) : (
                              <p className="text-blue-600 dark:text-blue-400 font-medium">
                                {detail}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Business Hours */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    ⏰ Business Hours
                  </h3>
                  <div className="space-y-3 text-gray-600 dark:text-gray-400">
                    <div className="flex justify-between">
                      <span className="font-semibold">Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM (EST)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Saturday</span>
                      <span>10:00 AM - 4:00 PM (EST)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Contact Form */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Send us a Message
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  {"Fill out the form below and we'll get back to you as soon as possible."}
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full px-4 md:px-6 py-16 md:py-24 bg-gray-50 dark:bg-slate-900">
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Quick answers to common questions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg"
                >
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    {item.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full px-4 md:px-6 py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700">
          <div className="w-full max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {"Don't wait! Let's discuss your ideas and create something amazing together."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Contact Us
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:bg-opacity-10 transition-all duration-300"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

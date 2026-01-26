"use client";

export default function ServicePricing() {
  const packages = [
    {
      name: "Starter",
      price: "$999",
      period: "/project",
      features: [
        "Basic website/application",
        "Up to 5 pages",
        "Mobile responsive",
        "Basic SEO",
        "1 month support",
        "Source code included",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$2,999",
      period: "/project",
      features: [
        "Custom website/application",
        "Up to 15 pages",
        "Advanced features",
        "Full SEO optimization",
        "3 months support",
        "Analytics setup",
        "Premium support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "quote",
      features: [
        "Full-scale solution",
        "Unlimited pages",
        "Advanced integrations",
        "Custom features",
        "6 months support",
        "Dedicated account manager",
        "24/7 priority support",
      ],
      popular: false,
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the plan that best fits your needs. All prices include initial consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-lg p-8 h-full transition-all ${
                pkg.popular
                  ? "bg-primary text-white shadow-2xl scale-105"
                  : "bg-white dark:bg-gray-900 shadow-lg"
              }`}
            >
              {pkg.popular && (
                <div className="bg-white text-primary px-4 py-1 rounded-full inline-block text-sm font-bold mb-4">
                  Most Popular
                </div>
              )}
              <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? "text-white" : "text-gray-800 dark:text-white"}`}>
                {pkg.name}
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{pkg.price}</span>
                <span className={`ml-2 ${pkg.popular ? "text-white/80" : "text-gray-600 dark:text-gray-200"}`}>
                  {pkg.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-2 ${
                      pkg.popular ? "text-white/90" : "text-gray-600 dark:text-gray-200"
                    }`}
                  >
                    <span className="text-xl">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className={`block text-center font-bold py-3 px-6 rounded-lg transition-all ${
                  pkg.popular
                    ? "bg-white text-primary hover:bg-gray-100"
                    : "bg-primary text-white hover:bg-purple-700 dark:hover:bg-purple-800"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

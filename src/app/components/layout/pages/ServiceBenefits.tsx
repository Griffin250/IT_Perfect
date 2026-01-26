"use client";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function ServiceBenefits() {
  const benefits = [
    "Custom solutions tailored to your business needs",
    "Scalable and future-proof architecture",
    "Complete transparency and regular updates",
    "Post-launch support and maintenance",
    "SEO optimized for better visibility",
    "Mobile-first responsive design",
    "Security best practices implemented",
    "Performance optimization included",
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Service Benefits
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Every project includes these standard benefits to ensure your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-4">
              <CheckCircleIcon className="text-primary text-2xl flex-shrink-0" />
              <p className="text-gray-700 dark:text-gray-300">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

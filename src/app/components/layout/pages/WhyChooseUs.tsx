"use client";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Expert Team",
      description: "Experienced developers and designers with 10+ years in the industry",
      icon: "👨‍💼",
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Fast Delivery",
      description: "Projects delivered on time, every time with high quality standards",
      icon: "⚡",
      color: "from-purple-400 to-purple-600",
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support to help you succeed",
      icon: "🛟",
      color: "from-green-400 to-green-600",
    },
    {
      title: "Innovative Solutions",
      description: "Latest technologies and best practices to solve your problems",
      icon: "💡",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      title: "Affordable Pricing",
      description: "Competitive rates without compromising on quality",
      icon: "💰",
      color: "from-pink-400 to-pink-600",
    },
    {
      title: "100% Satisfaction",
      description: "Guaranteed satisfaction with our money-back guarantee",
      icon: "✨",
      color: "from-orange-400 to-orange-600",
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose IT Perfect?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're committed to delivering excellence in every project. Here's what sets us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className={`bg-gradient-to-r ${feature.color} h-20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                <div className="text-5xl">{feature.icon}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

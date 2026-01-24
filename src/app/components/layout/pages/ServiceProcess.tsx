"use client";

export default function ServiceProcess() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description:
        "We understand your business goals, target audience, and requirements through detailed consultation and analysis.",
    },
    {
      number: "02",
      title: "Design & Strategy",
      description:
        "Our creative team designs custom solutions that align with your brand and user expectations.",
    },
    {
      number: "03",
      title: "Development & Testing",
      description:
        "We build your project using latest technologies and rigorous testing to ensure quality and reliability.",
    },
    {
      number: "04",
      title: "Launch & Support",
      description:
        "We deploy your project and provide continuous support to ensure smooth operation and growth.",
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Our Process
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Follow our proven methodology from concept to successful launch
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg h-full">
                <div className="text-5xl font-bold text-primary/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-200">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-1 bg-primary"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

export default function Stats() {
  const stats = [
    {
      number: "100+",
      label: "Projects Completed",
      icon: "✓",
    },
    {
      number: "50+",
      label: "Happy Clients",
      icon: "😊",
    },
    {
      number: "5+",
      label: "Team Members",
      icon: "👥",
    },
    {
      number: "10+",
      label: "Years Experience",
      icon: "⭐",
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-5xl lg:text-6xl font-bold text-blue-600 dark:text-blue-400 mb-3">
                {stat.number}
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

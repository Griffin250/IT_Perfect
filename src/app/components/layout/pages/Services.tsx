import Image from "next/image";
import { OUR_SERVICES as services } from "@/app/helpers/stub-data/services";
import Title from "@/app/components/reusable/Title";
import SubTitle from "@/app/components/reusable/SubTitle";
import Link from "next/link";

export default function Services() {
  return (
    <div
      className="w-full flex flex-col items-center px-4 md:px-6 py-12"
      id="services"
    >
      <Title title="Our Services" />
      <SubTitle text="Comprehensive solutions tailored to your business needs" />

      <div className="w-full max-w-6xl mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Link
              key={service.id}
              href={service.link ?? "#"}
              className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 w-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                <Image
                  src={service.image}
                  width={500}
                  height={300}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  0{index + 1}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-200 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
                  Learn More
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full max-w-6xl mt-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Why Choose Our Services?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-700 dark:text-gray-200 text-sm">
              Efficient processes ensure quick turnaround without compromising quality
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6">
            <div className="text-3xl mb-3">💡</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Innovation
            </h3>
            <p className="text-gray-700 dark:text-gray-200 text-sm">
              We stay ahead with cutting-edge technologies and creative solutions
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Custom Solutions
            </h3>
            <p className="text-gray-700 dark:text-gray-200 text-sm">
              Tailored approaches that fit your unique business requirements perfectly
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6">
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Dedicated Support
            </h3>
            <p className="text-gray-700 dark:text-gray-200 text-sm">
              Ongoing support and partnership throughout your project lifecycle
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full max-w-4xl mt-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-3xl p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Ready to get started?
        </h2>
        <p className="text-blue-100 mb-6">
          {"Let's discuss which service is right for your project and bring your vision to life."}
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105"
        >
          Start Your Project
        </Link>
      </div>
    </div>
  );
}

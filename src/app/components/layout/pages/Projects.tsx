import Link from "next/link";
import SubTitle from "@/app/components/reusable/SubTitle";
import Title from "@/app/components/reusable/Title";
import { projects } from "@/app/helpers/stub-data/projects";
import Image from "next/image";

export default function Projects() {
  return (
    <div
      id="projects"
      className="min-h-screen w-full flex flex-col items-center px-4 md:px-6 py-12 mt-6"
    >
      <Title title="Our Projects" />
      <SubTitle text="Showcase of our creative and innovative solutions" />

      <div className="w-full max-w-6xl mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.link ?? "#"}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 w-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                <Image
                  src={project.image}
                  width={400}
                  height={400}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-200 text-sm line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-4 flex items-center text-blue-400 font-semibold text-sm">
                  View Project <span className="ml-2">→</span>
                </div>
              </div>

              {/* Static info visible without hover */}
              <div className="bg-white dark:bg-slate-800 p-5 group-hover:hidden">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-200 text-sm line-clamp-2">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full max-w-4xl mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
          Interested in working with us?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Let's discuss how we can bring your vision to life with cutting-edge solutions.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg"
        >
          Start Your Project
        </Link>
      </div>

      {/* Stats Section */}
      <div className="w-full max-w-6xl mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 text-center shadow-lg">
          <div className="text-4xl font-bold text-blue-600 mb-2">
            {projects.length}+
          </div>
          <p className="text-gray-600 dark:text-gray-200">Successful Projects</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 text-center shadow-lg">
          <div className="text-4xl font-bold text-purple-600 mb-2">
            50+
          </div>
          <p className="text-gray-600 dark:text-gray-200">Happy Clients</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 text-center shadow-lg">
          <div className="text-4xl font-bold text-green-600 mb-2">
            100%
          </div>
          <p className="text-gray-600 dark:text-gray-200">Satisfaction Rate</p>
        </div>
      </div>
    </div>
  );
}

import SubTitle from "@/app/components/reusable/SubTitle";
import Title from "@/app/components/reusable/Title";
import Image from "next/image";
import { blogs } from "@/app/helpers/stub-data/blogs";

export default function Blogs() {
  return (
    <div
      id="blog"
      className="min-h-screen w-full flex flex-col items-center px-4 md:px-6 py-12 mt-6"
    >
      <Title title="Blogs" />
      <SubTitle text="Check our valuable insights and industry knowledge" />
      
      <div className="w-full max-w-6xl mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            >
              <div className="relative h-48 w-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                <Image
                  src={blog.image}
                  width={400}
                  height={300}
                  alt={blog.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {blog.minutes}
                </div>
              </div>
              
              <div className="p-5">
                <p className="text-gray-700 dark:text-gray-300 text-sm font-medium mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {blog.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-xs">
                    <span>📅</span>
                    <span>{blog.month}</span>
                  </div>
                  <button className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 flex items-center gap-1 transition-all">
                    Read More
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

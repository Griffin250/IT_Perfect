import Employee from "@/app/components/reusable/Employee";
import SubTitle from "@/app/components/reusable/SubTitle";
import Title from "@/app/components/reusable/Title";
import { employees } from "@/app/helpers/stub-data/employees";

export default function Team() {
  // Group employees by role
  const ceoMembers = employees.filter(e => e.position.includes("CEO"));
  const seniorMembers = employees.filter(e => e.position.includes("Senior") || e.position.includes("Sr"));
  const engineerMembers = employees.filter(e => !e.position.includes("CEO") && !e.position.includes("Senior") && !e.position.includes("Sr"));

  return (
    <div
      id="team"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
    >
      {/* Header Section */}
      <div className="text-center mb-12 sm:mb-16">
        <Title title="Our Team" />
        <SubTitle text="Meet the talented people behind our success" />
        <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          {"We're a diverse team of experienced professionals passionate about delivering excellence and driving innovation."}
        </p>
      </div>

      {/* Leadership Section */}
      {ceoMembers.length > 0 && (
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-gradient-to-b from-red-500 to-red-600 rounded-full" />
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Leadership</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {ceoMembers.map((employee) => (
              <Employee key={employee.id} employee={employee} />
            ))}
          </div>
        </div>
      )}

      {/* Senior Engineers Section */}
      {seniorMembers.length > 0 && (
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full" />
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Senior Engineers</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {seniorMembers.map((employee) => (
              <Employee key={employee.id} employee={employee} />
            ))}
          </div>
        </div>
      )}

      {/* Engineers Section */}
      {engineerMembers.length > 0 && (
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-green-600 rounded-full" />
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Engineers</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {engineerMembers.map((employee) => (
              <Employee key={employee.id} employee={employee} />
            ))}
          </div>
        </div>
      )}

      {/* Team Values Section */}
      <div className="mt-20 pt-16 border-t border-slate-200 dark:border-slate-700">
        <h3 className="text-2xl sm:text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
          Our Core Values
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "🎯", title: "Excellence", description: "We strive for the highest quality in everything we do" },
            { icon: "🤝", title: "Collaboration", description: "Together we achieve more than any individual" },
            { icon: "💡", title: "Innovation", description: "We embrace new ideas and continuous improvement" },
            { icon: "🌟", title: "Integrity", description: "We build trust through honesty and accountability" }
          ].map((value, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-slate-50 dark:bg-slate-800 hover:shadow-lg dark:hover:shadow-2xl transition-shadow duration-300">
              <div className="text-4xl mb-3">{value.icon}</div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{value.title}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Stats Section */}
      <div className="mt-16 py-12 px-6 sm:px-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-600/20 dark:to-purple-600/20 rounded-xl border border-blue-200 dark:border-blue-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">{employees.length}</div>
            <p className="text-slate-600 dark:text-slate-400">Team Members</p>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">50+</div>
            <p className="text-slate-600 dark:text-slate-400">Projects Delivered</p>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">100%</div>
            <p className="text-slate-600 dark:text-slate-400">Commitment to Quality</p>
          </div>
        </div>
      </div>
    </div>
  );
}

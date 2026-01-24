"use client";

import Image from "next/image";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

import { Employee } from "@/app/helpers/types";

interface EmployeeCardProps {
  employee: Employee;
}

export default function EmployeeCard({ employee }: EmployeeCardProps) {
  // Determine role badge color based on position
  const getRoleBadgeColor = (position: string) => {
    if (position.includes("CEO")) return "bg-red-500/20 text-red-700 dark:text-red-400";
    if (position.includes("Senior") || position.includes("Sr")) return "bg-blue-500/20 text-blue-700 dark:text-blue-400";
    return "bg-green-500/20 text-green-700 dark:text-green-400";
  };

  const isValidLinkedIn = employee.linkedIn && employee.linkedIn !== "#" && employee.linkedIn.trim() !== "";
  const isValidGitHub = employee.github && employee.github !== "#" && employee.github.trim() !== "";
  const isValidWebsite = employee.website && employee.website !== "#" && employee.website.trim() !== "";

  return (
    <div
      className="group flex flex-col w-full rounded-xl overflow-hidden shadow-md dark:shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 h-full bg-white dark:bg-slate-800"
      key={employee.id}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 h-64 sm:h-72">
        <Image
          src={employee.image}
          width={500}
          height={500}
          alt={employee.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Container */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        {/* Text Content */}
        <div className="flex flex-col gap-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">
              {employee.name}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              {employee.position}
            </p>
          </div>

          {/* Role Badge */}
          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getRoleBadgeColor(employee.position)}`}>
              {employee.position.includes("CEO") ? "Leadership" : employee.position.includes("Senior") ? "Senior" : "Team"}
            </span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
          {isValidLinkedIn && (
            <Link
              href={employee.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors duration-300"
              title="LinkedIn Profile"
            >
              <LinkedInIcon className="w-5 h-5" />
            </Link>
          )}
          {isValidGitHub && (
            <Link
              href={employee.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-300 hover:bg-slate-900 hover:text-white dark:hover:bg-slate-800 transition-colors duration-300"
              title="GitHub Profile"
            >
              <GitHubIcon className="w-5 h-5" />
            </Link>
          )}
          {isValidWebsite && (
            <Link
              href={employee.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 transition-colors duration-300"
              title="Personal Website"
            >
              <LanguageIcon className="w-5 h-5" />
            </Link>
          )}
          {!isValidLinkedIn && !isValidGitHub && !isValidWebsite && (
            <div className="text-xs text-slate-400 dark:text-slate-500 italic">
              Coming soon
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

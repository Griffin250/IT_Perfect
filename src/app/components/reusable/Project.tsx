import Image from "next/image";
import Link from "next/link";

import { Project } from "@/app/helpers/types";

interface ProjectCardProps {
  project: Project;
  classNames?: string;
  imageClassNames?: string;
}

export default function ProjectCard({
  project,
  classNames,
  imageClassNames,
}: ProjectCardProps) {
  return (
    <Link
      href={project.link ?? "#"}
      className={`w-full lg:w-1/2  rounded-[1.25rem] ${classNames}`}
    >
      <Image
        src={project.image}
        width={500}
        height={500}
        alt={project.name}
        className={`rounded-[1.25rem] w-full h-auto ${imageClassNames}`}
        style={{ width: '100%', height: 'auto' }}
      />
    </Link>
  );
}

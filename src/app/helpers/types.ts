type Service = {
  name: string;
  description?: string;
  image: string;
  link?: string;
  id: number;
};

type Employee = {
  id: number;
  name: string;
  position: string;
  image: string;
  linkedIn?: string;
  github?: string;
  website?: string;
};

type Project = {
  id: number;
  image: string;
  name: string;
  description?: string;
  link?: string;
};

type Testimonial = {
  id: number;
  from: string;
  company: string;
  description: string;
  image: string;
  link: string;
};

export type { Service, Employee, Project, Testimonial };

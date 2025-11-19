export interface PortfolioData {
  firstName: string;
  surname: string;
  role: string;
  headline: string;
  headlineGradient: string;
  generalDescription: string;
  location: string;
  birthday: string;
  social: SocialLinks;
  about: string[];
  skills: string[];
  experience: Experience[];
  projects: Project[];
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

export interface Experience {
  company: string;
  role: string;
  description: string;
  startDate: string; // YYYY-MM
  endDate: string; // YYYY-MM
  location: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  url: string;
  image: string;
}

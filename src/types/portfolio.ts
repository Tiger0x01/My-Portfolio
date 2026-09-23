export type Language = 'ar' | 'en';
export type Theme = 'dark' | 'light';

export interface BilingualText {
  en: string;
  ar: string;
}

export interface CaseStudyData {
  overview: BilingualText;
  problem: BilingualText;
  solution: BilingualText;
  architecture: BilingualText;
  features: {
    en: string[];
    ar: string[];
  };
  challenges: BilingualText;
  results: BilingualText;
}

export interface Project {
  id: string;
  slug: string;
  title: BilingualText;
  shortDescription: BilingualText;
  fullDescription: BilingualText;
  category: 'ai' | 'ml' | 'web' | 'mobile' | 'research';
  featured: boolean;
  order: number;
  published: boolean;
  image: string;
  gallery: string[];
  technologies: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  caseStudy: CaseStudyData;
}

export interface ExperienceItem {
  id: string;
  role: BilingualText;
  company: BilingualText;
  period: BilingualText;
  location: BilingualText;
  description: BilingualText;
  achievements: {
    en: string[];
    ar: string[];
  };
  technologies: string[];
}

export interface SkillItem {
  name: string;
  level: string;
  focus: BilingualText;
}

export interface SkillCategory {
  id: string;
  title: BilingualText;
  description: BilingualText;
  skills: SkillItem[];
}

export interface PublicationItem {
  id: string;
  type: 'book' | 'article' | 'podcast' | 'press';
  title: BilingualText;
  source: BilingualText;
  date: BilingualText;
  tag: BilingualText;
  link: string;
  actionText: BilingualText;
  highlight?: boolean;
}

export interface ApproachPillar {
  id: string;
  number: string;
  title: BilingualText;
  description: BilingualText;
  highlights: {
    en: string[];
    ar: string[];
  };
}

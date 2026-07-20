export interface ProjectImage {
  isThumbnail: boolean;
  original: string;
  thumbnail: string;
}

export interface Project {
  title: string;
  description: string;
  summary: string;
  startDate: string;
  endDate: string;
  images: ProjectImage[];
  techStack: string[];
  classification: string;
  role?: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  status?: string;
  featured?: boolean;
  order?: number;
}

export interface ProjectViewModel extends Project {
  slug: string;
  period: string;
  thumbnailSrc: string;
  imageSources: string[];
}

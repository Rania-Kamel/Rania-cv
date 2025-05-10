
export type ProjectImage = {
    src: string;
    alt: string;
  };
  
  export type Project = {
    title: string;
    description: string;
    technologies: string[];
    images: ProjectImage[];
    githubLink?: string;
    liveLink?: string;
    category: string;
  };

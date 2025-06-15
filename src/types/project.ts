export interface Project {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  category: string;
  projectUrl: string;
  technologies?: string[];
  fullDescription?: string;
  features?: string[];
  screenshots?: string[];
}

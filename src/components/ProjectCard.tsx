import React from 'react';
import type { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      className="project-card" 
      onClick={() => onClick(project)}
    >
      <img src={project.imageUrl} alt={project.name} className="project-image" />
      <div className="project-content">
        <h3 className="project-name">{project.name}</h3>
        <p className="project-category">{project.category}</p>
        <p className="project-description">{project.description}</p>
      </div>
    </div>
  );
};

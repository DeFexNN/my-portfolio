import React from 'react';

export interface Project { id: number; title: string; description: string; }

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => (
  <div>
    {projects.length === 0 ? (
      <p>Поки що ніяких проектів.</p>
    ) : (
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default Projects;

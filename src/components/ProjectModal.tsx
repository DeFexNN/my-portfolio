import React from 'react';
import type { Project } from '../types/project';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <h2>{project.name}</h2>
          <span className="modal-category">{project.category}</span>
        </div>

        <img src={project.imageUrl} alt={project.name} className="modal-image" />
        
        <div className="modal-body">
          <p className="modal-description">{project.fullDescription || project.description}</p>
          
          {project.technologies && (
            <div className="modal-technologies">
              <h4>Технології:</h4>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          )}

          {project.features && (
            <div className="modal-features">
              <h4>Особливості:</h4>
              <ul>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {project.screenshots && (
            <div className="modal-screenshots">
              <h4>Скріншоти:</h4>
              <div className="screenshots-grid">
                {project.screenshots.map((screenshot, index) => (
                  <img key={index} src={screenshot} alt={`Screenshot ${index + 1}`} />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="project-link">
            Переглянути проект
          </a>
        </div>
      </div>
    </div>
  );
};

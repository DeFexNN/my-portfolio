// src/components/ProjectTile.jsx
import React from 'react';

const ProjectTile = ({ image, title, description, onClick }) => {
  return (
    <div className="project-tile" onClick={onClick}>
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <h3 className="text-center">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjectTile;

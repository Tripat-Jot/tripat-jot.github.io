// // ProjectCard.js
// import React from 'react';

// const ProjectCard = ({ project }) => {
//   return (
//     <div className="project-card">
//       <img src={project.imageUrl} alt={project.name} />
//       <h3>{project.name}</h3>
//       <p>{project.description}</p>
//       <div className="project-links">
//         <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
//         <a href={project.deploymentLink} target="_blank" rel="noopener noreferrer">Deployed</a>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;



// ProjectCard.js
import React from 'react';
import './ProjectCard.css'; // Import CSS file for styling

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img className="project-image" src={project.imageUrl} alt={project.name} />
      <div className="project-details">
        <h3 className="project-title">{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-links">
          <a className="project-link" href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="project-link" href={project.deploymentLink} target="_blank" rel="noopener noreferrer">Deployed</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

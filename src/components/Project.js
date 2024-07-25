// import React from 'react';
import './Project.css';
import ProjectCard from './ProjectCard';
import image from '../assests/image.png';
import chat_image from '../assests/joining-a-room.JPG';
import dapp_logo from '../assests/Dapp-logo.jpeg';

// const Projects = () => {
//   const projects = [
//     {
//       id: 1,
//       name: 'Chat Application',
//       description: 'Tech Stack: ',
//       // imageUrl: 'https://ibb.co/m5yvb6T',
//       imageUrl: chat_image,
//       githubLink: 'https://github.com/Tripat-Jot/Chat-App',
//       deploymentLink: 'https://example.com/project1',
//     },
//     {
//       id: 2,
//       name: 'AgriStore',
//       description: 'Decentralized application using Ethereum Blockchain',
//       // imageUrl: 'https://ibb.co/m5yvb6T',
//       imageUrl: dapp_logo,
//       githubLink: 'https://github.com/user/project2',
//       deploymentLink: 'https://example.com/project2',
//     },
//     {
//       id: 3,
//       name: 'Project 3',
//       description: 'Description of Project 3.',
//       imageUrl: image,
//       githubLink: 'https://github.com/user/project3',
//       deploymentLink: 'https://example.com/project3',
//     },
//     {
//       id: 4,
//       name: 'Project 4',
//       description: 'Description of Project 4.',
//       imageUrl: 'https://ibb.co/m5yvb6T',
//       githubLink: 'https://github.com/user/project4',
//       deploymentLink: 'https://example.com/project4',
//     },
//     {
//       id: 5,
//       name: 'Project 5',
//       description: 'Description of Project 5.',
//       imageUrl: 'https://ibb.co/m5yvb6T',
//       githubLink: 'https://github.com/user/project5',
//       deploymentLink: 'https://example.com/project5',
//     },
//     // Add more projects as needed
//   ];

//   return (
//     <section id="projects">
//       <h2
//           style={{
//             color: "white",
//             // fontFamily: "Arial, sans-serif", 
//             fontFamily: "serif",
//             // padding: "20px",
//             textAlign: "center", 
//             borderRadius: "50px",
//             fontSize: "40px",
//             // textShadow: "0 0 20px blue"
//           }}
//           > Projects </h2>
//       <div className="project-list">
//         <div className="project-scroll">
//           {projects.map((project) => (
//             <ProjectCard key={project.id} project={project} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;





import React, { useState } from 'react';
// import './Project.css';
// import ProjectCard from './ProjectCard';
// import image from '../assets/image.png';
// import chat_image from '../assets/joining-a-room.JPG';

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const projects = [
    {
      id: 1,
      name: 'Chat Application',
      description: 'Tech Stack: ',
      imageUrl: chat_image,
      githubLink: 'https://github.com/Tripat-Jot/Chat-App',
      deploymentLink: 'https://example.com/project1',
    },
    {
      id: 2,
      name: 'AgriStore',
      description: 'Decentralized application using Ethereum Blockchain.',
      imageUrl: dapp_logo,
      githubLink: 'https://github.com/user/project2',
      deploymentLink: 'https://example.com/project2',
    },
    {
      id: 3,
      name: 'Project 3',
      description: 'Description of Project 3.',
      imageUrl: image,
      githubLink: 'https://github.com/user/project3',
      deploymentLink: 'https://example.com/project3',
    },
    {
      id: 4,
      name: 'Project 4',
      description: 'Description of Project 4.',
      imageUrl: 'https://ibb.co/m5yvb6T',
      githubLink: 'https://github.com/user/project4',
      deploymentLink: 'https://example.com/project4',
    },
    {
      id: 5,
      name: 'Project 5',
      description: 'Description of Project 5.',
      imageUrl: 'https://ibb.co/m5yvb6T',
      githubLink: 'https://github.com/user/project5',
      deploymentLink: 'https://example.com/project5',
    },
    // Add more projects as needed
  ];

  const handleMouseEnter = (id) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <section id="projects">
      <h2
        style={{
          color: 'white',
          fontFamily: 'serif',
          textAlign: 'center',
          borderRadius: '50px',
          fontSize: '40px',
        }}
      >
        Projects
      </h2>
      <div className="project-list">
        <div className="project-scroll">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-card ${hoveredCard && hoveredCard !== project.id ? 'shrink' : ''}`}
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

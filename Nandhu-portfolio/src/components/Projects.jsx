// src/pages/Projects.jsx
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <p>Here are some of the projects I’ve worked on.</p>
      <div className="project-list">
        <div className="project-item">
          <h2>Project 1</h2>
          <p>A React-based portfolio website showcasing my skills and projects.</p>
        </div>
        <div className="project-item">
          <h2>Project 2: Ease My Trip Clone</h2>
          <p>A travel booking platform that allows users to book flights, hotels, and more. Built with React, Node.js, and Firebase for authentication.</p>
        </div>
        <div className="project-item">
          <h2>Project 3: LinkedIn Clone</h2>
          <p>A social networking platform for professionals, featuring user profiles, posts, and job listings. Built using React, Redux, and Firebase.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;

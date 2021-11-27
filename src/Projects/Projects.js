import React from "react";
import "./project.css";
import Project from "./Project";
function Projects() {
  return (
    <div className="projects-container section" id="Projects">
      <div className="header">
        <h1>Projects</h1>
      </div>
      <div className="projects-grid">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}

export default Projects;

import React, { useState, useEffect } from "react";
import useInput from "../hooks/useInput";

export default function Projects() {
  const { error, onAdd, projects } = useInput();
  console.log("PROJECTS PAGE--->" + JSON.stringify(projects));
  return (
    <div>
      <h3>My Projects</h3>
      <div className="project-showcase">
        {projects?.map((project) => {
          return (
            <div className="project-item">
              <img src={project.poster} alt={project.name} />
              <h3>{project.name}</h3>
              {/* <p>ID: {project.id}</p> */}
              <p>{project.description}</p>
              <a href={project.repository}>GitHub Link</a>
              <br />
              <a href={project.link}>Published version</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

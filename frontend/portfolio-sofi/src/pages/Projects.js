import React from "react";
import useProject from "../hooks/useProject";

export default function Projects() {
  const { projects } = useProject();
  // console.log("PROJECTS PAGE--->" + JSON.stringify(projects));
  return (
    <div>
      <h3 className="mt-4 text-center">My Projects</h3>
      <div className="project-showcase">
        {projects?.map((project) => {
          return (
            <div key={project.id} className="project-item">
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

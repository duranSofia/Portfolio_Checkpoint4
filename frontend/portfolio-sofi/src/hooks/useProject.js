import { useState, useEffect } from "react";
import useAsyncError from "./useAsyncError";

// const API_URL = process.env.REACT_APP_API_URL;

export default function useProject() {
  const [error, setError] = useState("");
  const [projects, setProjects] = useState(null);
  const throwError = useAsyncError();
  useEffect(() => {
    fetchApi("/project")
      .then((projects) => {
        setProjects(projects);
      })
      .catch((err) => {
        throwError(err);
      });
  }, []);

  const fetchApi = (path, method, body) => {
    return fetch(`/api${path}`, {
      method,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    }).then((resp) => {
      if (!resp.ok) {
        return resp.json().then((json) => {
          console.log(resp.status);
          const error = new Error(json.message);
          error.status = resp.status;
          throw error;
        });
      }
      return resp.json();
    });
  };

  const handleAddProject = (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    axios({
      method: "POST",
    })
      .post("api/project", { body: formData })
      // fetch(`api/project`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/x-www-form-urlencoded",
      //   },
      //   body: formData,
      // })
      .then((projects) => {
        console.log("projects--> " + projects);
        setProjects([...projects, projects]);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleDelete = (projectId) => {
    fetchApi(`/project/${projectId}`, "DELETE")
      .then((deletedProject) => {
        setProjects((project) =>
          projects.filter((project) => deletedProject.id !== project.id)
        );
      })
      .catch((err) => setError(err.message));
  };

  const handleUpdate = (projectId, newData) => {
    fetchApi(`/project/${projectId}`, "PUT", { name: newData })
      .then((updatedProject) => {
        setProjects((projects) =>
          projects.map((project) => {
            if (project.id === updatedProject.id) {
              return updatedProject;
            }
            return project;
          })
        );
      })
      .catch((err) => setError(err.message));
  };

  return {
    error,
    projects,
    onAdd: handleAddProject,
    onDelete: (projectId) => handleDelete(projectId),
    onUpdate: (projectId, newData) => handleUpdate(projectId, newData),
  };
}

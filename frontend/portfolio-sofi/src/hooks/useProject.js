import { useState, useEffect } from "react";
import useAsyncError from "./useAsyncError";
import axios from "axios";

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
    // console.log("FORM--> " + JSON.stringify(formData));
    const formDataObj = Object.fromEntries(formData.entries());
    console.log("sending.. " + formDataObj);
    axios
      .post("api/project", formData, {})
      .then((response) => {
        const newProject = response.data;
        setProjects([...projects, newProject]);
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

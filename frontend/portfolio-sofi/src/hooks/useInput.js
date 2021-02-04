import { useState, useEffect } from "react";
import useAsyncError from "./useAsyncError";

// const API_URL = process.env.REACT_APP_API_URL;

export default function useInput() {
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
    return fetch(`/api/${path}`, {
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

  // const handleAddInput = () => {
  //   let newInput = { name: "New Project Name" };
  //   // Optimistic UI (We update the state before with a temporary item)
  //   // setData([...data, newInput]);
  //   // router.post("/", createProject);
  //   fetchApi(`/project`, "POST", newInput)
  //     .then((projects) => {
  //       setProjects([...projects, projects]);
  //     })
  //     .catch((err) => {
  //       setError(err.message);
  //       // If error, we roll back to the previous state
  //       // setData(data);
  //     });
  // };
  // const handleDeleteInput = (projectId) => {
  //   fetchApi(`/project/${projectId}`, "DELETE")
  //     .then((deletedProject) => {
  //       setData((data) =>
  //         data.filter((data) => deletedProject.id !== project.id)
  //       );
  //     })
  //     .catch((err) => setError(err.message));
  // };

  // const handleUpdateInput = (projectId, newData) => {
  //   fetchApi(`/project/${projectId}`, "PUT", { title: newData })
  //     .then((updatedProject) => {
  //       setProjects((projects) =>
  //         projects.map((project) => {
  //           if (project.id === updatedProject.id) {
  //             return updatedProject;
  //           }
  //           return project;
  //         })
  //       );
  //     })
  //     .catch((err) => setError(err.message));
  // };

  return {
    error,
    projects,
    // onAdd: handleAddInput,
    // onDelete: (projectId) => handleDeleteTodo(projectId),
    // onUpdate: (projectId, newData) => handleUpdate(projectId, newData),
  };
}

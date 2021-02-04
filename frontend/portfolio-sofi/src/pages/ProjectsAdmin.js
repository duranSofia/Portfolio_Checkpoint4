import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useProject from "../hooks/useProject";
import styled from "styled-components";
import useInputState from "../hooks/useInput";
import { TrashIcon } from "../components/Icons";

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border: none;
  /* border: 1px solid red; */
  border-radius: 5px;
  padding: 20px;
  margin: 8px 0;
  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.12);
  background-color: ${(props) => {
    return props.done ? "grey" : "";
  }};
`;

const TextInput = styled.input.attrs({ type: "text" })`
  width: 90%;
  color: black;
  border: none;
  border-radius: 40px;
`;

export const TextInputMain = ({
  initialValue = "",
  editable = true,
  inputRef,
  ...props
}) => {
  const [userInput, setUserInput] = useInputState(initialValue);
  console.log("input ref edit-->" + inputRef);
  return !editable ? (
    <p style={{ width: "90%", cursor: "pointer" }}>{userInput}</p>
  ) : (
    <TextInput
      ref={inputRef}
      value={userInput}
      onChange={setUserInput}
      {...props}
    ></TextInput>
  );
};

export default function ProjectsAdmin() {
  const { error, projects, onAdd, onUpdate, onDelete } = useProject();
  const formRef = useRef(null);

  const handleReset = () => {
    formRef.current.reset();
  };

  return (
    <div className="m-5">
      <h2>Admin Page</h2>
      <h3>Add New Project</h3>
      <Form
        ref={formRef}
        className="text-left"
        onSubmit={(e) => {
          e.preventDefault();
          onAdd(e);
          handleReset();
        }}
      >
        <Form.Group controlId="formGridAddress1">
          <Form.Label>Project Name</Form.Label>
          <Form.Control name="name" placeholder="Give your project a name" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Project Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            placeholder="Describe the project and technologies implemented"
          />
        </Form.Group>
        {/* TODO Add file upload route */}
        {/* <Form.Group>
          <Form.Label className="font-weight-bold">Poster Image</Form.Label>
          <Form.File id="exampleFormControlFile1" label="Example file input" />
        </Form.Group> */}
        <Form.Group controlId="formGridAddress2">
          <Form.Label>Repository</Form.Label>
          <Form.Control
            name="repository"
            placeholder="GitHub repository link"
          />
        </Form.Group>
        <Form.Group controlId="formGridAddress3">
          <Form.Label>Public Link</Form.Label>
          <Form.Control name="link" placeholder="Website/App Link" />
        </Form.Group>
        <Form.Group controlId="formGridAddress4">
          <Form.Label>Client </Form.Label>
          <Form.Control name="client" placeholder="Client" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <div className="projects-edit-mode">
        <h3>Edit Projects</h3>
        {error && console.log("Edit section error: " + error)}

        {projects?.map((project) => {
          return (
            <Item key={project.id}>
              <TextInputMain
                style={{ border: "none", boxShadow: "none" }}
                initialValue={project.name}
                onBlur={(event) => {
                  onUpdate(project.id, event.target.value);
                }}
              ></TextInputMain>
              <TrashIcon
                onClick={() => {
                  onDelete(project.id);
                }}
              />
            </Item>
          );
        })}
        <Button onClick={onAdd}>Add</Button>
      </div>
    </div>
  );
}

/* <img src={project.poster} alt={project.name} />
              <h3>{project.name}</h3>
              
              <p>{project.description}</p>
              <a href={project.repository}>GitHub Link</a>
              <br />
              <a href={project.link}>Published version</a> */

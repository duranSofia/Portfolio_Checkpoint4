import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useInput from "../hooks/useInput";

export default function ProjectsAdmin() {
  const { error, onAdd, projects } = useInput();

  return (
    <div>
      <h2>Admin Page</h2>
      <Form className="mx-4 px-2 text-left">
        <Form.Group controlId="formGridAddress1">
          <Form.Label>Project Name</Form.Label>
          <Form.Control placeholder="Project Name" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Project Description</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Project Image</Form.Label>
          <Form.File id="exampleFormControlFile1" label="Example file input" />
        </Form.Group>
        <Form.Group controlId="formGridAddress2">
          <Form.Label>Repository</Form.Label>
          <Form.Control placeholder="repository" />
        </Form.Group>
        <Form.Group controlId="formGridAddress2">
          <Form.Label>Public Link</Form.Label>
          <Form.Control placeholder="link" />
        </Form.Group>
        <Form.Group controlId="formGridAddress2">
          <Form.Label>Client </Form.Label>
          <Form.Control placeholder="Client" />
        </Form.Group>
        <Button onClick={onAdd} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import Home from "../pages/Home";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import ProjectsAdmin from "../pages/ProjectsAdmin";

export default function NavBar() {
  return (
    <div>
      <Router>
        <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/projects" exact component={Projects} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/admin" exact component={ProjectsAdmin} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

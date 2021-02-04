import "./App.scss";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import ProjectDetails from "./pages/ProjectDetails";
// import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
// import Home from "./pages/Home";
import ErrorBoundary from "./pages/ErrorBoundary";
// import ProjectsAdmin from "./pages/ProjectsAdmin";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <h1>Home</h1>
        {/* <ProjectsAdmin /> */}
        <Projects />
        {/* <Router>
          <div>

            <Switch>
              <Route path="/projects" exact component={Projects} />
              <Route
                path="/projects/:projectId/details"
                exact
                component={ProjectDetails}
              />
              <Route path="/contact" exact component={Contact} />
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router> */}
      </ErrorBoundary>
    </div>
  );
}

export default App;

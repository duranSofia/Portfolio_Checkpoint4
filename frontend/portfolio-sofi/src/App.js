import "./App.scss";
import ErrorBoundary from "./pages/ErrorBoundary";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <h1>Home</h1>
        <NavBar />
      </ErrorBoundary>
    </div>
  );
}

export default App;

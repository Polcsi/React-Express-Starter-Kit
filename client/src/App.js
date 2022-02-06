import logo from "./logo.svg";
import "./index.css";
import People from "./components/People";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Full Stack Application with NodeJs</p>
        <a
          className="App-link"
          href="http://localhost:5000/api/v1/test"
          rel="noopener noreferrer"
        >
          API Link
        </a>
        <People />
      </header>
    </div>
  );
}

export default App;

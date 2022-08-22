import logo from "./logo.jfif";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <h1>Dictionary</h1>
        <Dictionary />
      </div>
    </div>
  );
}

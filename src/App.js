import logo from "./logo.jfif";
import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <h1>DICTIONARY</h1>
        <main>
          <Dictionary defaultKeyWord="carrots" />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

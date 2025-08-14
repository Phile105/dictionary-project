import books from "./books.jpg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={books} className="App-books img-fluid" alt="books" />
        </header>
        <main>
          <Dictionary defaultKeyword="flowers" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by Nkosingiphile Mbhele and is{" "}
            <a href="https://github.com/Phile105/dictionary-project">
              open sourced in GitHub{" "}
            </a>{" "}
            and hosted on{" "}
            <a href="https://dictionary-word-app.netlify.app/">Netlify</a>{" "}
          </small>
        </footer>
      </div>
    </div>
  );
}

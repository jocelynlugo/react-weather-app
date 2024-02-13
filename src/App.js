import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <h1>Weather App </h1>
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://jocelynlugo.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Jocelyn Lugo
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/jocelynlugo/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}

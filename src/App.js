import "./App.scss";
import Header from "./components/Header";
import Characters from "./components/Characters";
// import "./main.sass";
import "./main.scss";
import "./components/Header.css";

function App() {
  return (
    // <div className="app">
    //   <h1>React + Webpack + Sass</h1>
    //   <p>Mi primer proyecto de React con Webpack</p>
    // </div>
    <>
      <Header title="Rick and Morty API" />
      <Characters />
    </>
  );
}

export default App;

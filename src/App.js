import "./App.css";
import NavBar from "./Components/navBar/navBar";
import Content from "./Components/bodyContent/content";

function App() {
  return (
    <div className="App">
      {/* Component for Navigation bar */}
      <NavBar />
      {/* Component for All the content in the body */}
      <Content />
    </div>
  );
}

export default App;

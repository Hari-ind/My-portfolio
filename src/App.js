import "./App.css";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Projects />
    </div>
  );
}
export default App;

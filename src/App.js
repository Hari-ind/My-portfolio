import "./App.css";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Particle from "./Particle";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
export default App;

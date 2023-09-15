import Navbar from "./Sections/Navbar/navbar";
import Intro  from "./Sections/Intro/intro";
import About from "./Sections/About/about";
import Projects from "./Sections/Projects/projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Projects />
    </div>
  );
}

export default App;

import Navbar from "./Sections/Navbar/navbar";
import Intro  from "./Sections/Intro/intro";
import About from "./Sections/About/about";
import Projects from "./Sections/Projects/projects";
import Contact from "./Sections/Contact/contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

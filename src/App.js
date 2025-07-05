import Navbar from "./Sections/Navbar/navbar";
import Intro  from "./Sections/Intro/intro";
import Skills from "./Sections/Skills/skills";
import Projects from "./Sections/Projects/projects";
import Contact from "./Sections/Contact/contact";
import Footer from "./Sections/Footer/footer";
import About from "./Sections/About/about";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Education from "./components/Education";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main
      id="top"
      className="min-h-screen bg-[#0b0b0c] text-[#f5f1e8]"
    >
      <ScrollProgress />
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Research />
      <Education />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;

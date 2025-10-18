import React from "react";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectsPage from "./pages/Projects.jsx";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import HobbiesValues from "./pages/HobbiesValues";
import Education from "./pages/Education";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Sidebar />
      <main className="flex-grow">
        {/* Section Hero */}
        <section id="home">
          <Home />
        </section>
        
        {/* Section About */}
        <section id="about">
          <About />
        </section>
        
        {/* Section Projects */}
        <section id="projects">
          <ProjectsPage />
        </section>
        
        {/* Section Skills */}
        <section id="skills">
          <Skills />
        </section>
        
        {/* Section Experience */}
        <section id="experience">
          <Experience />
        </section>
        
        {/* Section Education */}
        <section id="education">
          <Education />
        </section>
        
        {/* Section Achievements */}
        <section id="achievements">
          <Achievements />
        </section>

        {/* Section Hobbies & Values */}
        <section id="hobbies-values">
          <HobbiesValues />
        </section>

        {/* Section Contact */}
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

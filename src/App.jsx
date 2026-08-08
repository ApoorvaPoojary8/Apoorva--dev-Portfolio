import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import CursorBubbles from "./components/CursorBubbles";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <CursorBubbles />

      <Navbar />

      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Contact/>
      </main>

      <Footer />
    </>
  );
}

export default App;
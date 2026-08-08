import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Skills from "./components/Skills"

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Experience />
        <Skills/>
      </main>

      <Footer />
    </>
  );
}

export default App;
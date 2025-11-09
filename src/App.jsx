import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Import your pages
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import AllInOne from "./components/AllInOne";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        {/* AllInOne Page */}
        <Route path="/" element={<AllInOne />} />
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* About Page */}
        <Route path="/about" element={<About />} />

        {/* Projects Page */}
        <Route path="/projects" element={<Projects />} />

        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

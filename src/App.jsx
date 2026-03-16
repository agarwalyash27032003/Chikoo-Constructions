import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./ui/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";

const App = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        {/* <Route path="/contact-us" element={<Contact />} /> */}
      </Routes>
    </ div>
  );
};

export default App;

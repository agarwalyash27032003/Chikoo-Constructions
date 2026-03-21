import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./ui/Navbar";
import TopStrip from "./ui/TopStrip"; // 👈 ADD THIS

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import PageWrapper from "./ui/PageWrapper";
import ScrollTop from "./ui/ScrollTop"

const App = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <ScrollTop />
      {/* 🔥 GLOBAL HEADER */}
      <TopStrip />
      <Navbar />

      {/* ROUTES */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>

          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
          <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
          <Route path="/contact-us" element={<PageWrapper><Contact /></PageWrapper>} />

        </Routes>
      </AnimatePresence>

    </div>
  );
};

export default App;
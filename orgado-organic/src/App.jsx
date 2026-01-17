import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./assets/Home";
import Navbar from "./assets/Navbar";
import Footer from "./assets/Footer";
import Contact from "./assets/Contact";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

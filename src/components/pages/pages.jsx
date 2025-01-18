import React from "react";
import Header from "../common/header/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../home/home"
const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/services" element={<div>Services</div>} />
          <Route path="/blog" element={<div>Blog</div>} />
          <Route path="/pricing" element={<div>Pricing</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
        </Routes>
      </Router>
    </>
  );
};

export default Pages;

import React from "react";
import Header from "../common/header/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../home/home"
import About from "../about/about"
import Services from "../services/services"
import Footer from '../common/footer/footer'
import Contact from "../contact/contact";

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/services" Component={Services}/>
          <Route path="/blog" element={<div>Blog</div>} />
          <Route path="/pricing" element={<div>Pricing</div>} />
          <Route path="/contact" Component={Contact} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Pages;

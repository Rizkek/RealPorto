import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Awards from "../components/Awards";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-300 font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Portfolio />
      <Awards />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

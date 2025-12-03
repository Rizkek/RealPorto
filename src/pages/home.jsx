import React, { Suspense, lazy } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import ScrollToTop from "../components/ScrollToTop";

const Services = lazy(() => import("../components/Services"));
const Skills = lazy(() => import("../components/Skills"));
const Portfolio = lazy(() => import("../components/Portfolio"));
const Awards = lazy(() => import("../components/Awards"));
const Contact = lazy(() => import("../components/Contact"));
const Footer = lazy(() => import("../components/Footer"));

export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-300 font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Suspense fallback={<div className="min-h-screen bg-gray-900" />}>
        <Services />
        <Skills />
        <Portfolio />
        <Awards />
        <Contact />
        <Footer />
      </Suspense>
      <ScrollToTop />
    </div>
  );
}

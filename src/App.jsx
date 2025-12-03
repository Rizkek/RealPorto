import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import PortfolioCategory from "./pages/PortfolioCategory";

export default function App() {
  return (
    <Router>
      <Background3D />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/:category" element={<PortfolioCategory />} />
      </Routes>
    </Router>
  );
}

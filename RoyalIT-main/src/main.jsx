import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
import Careers from "./components/Careers";
import Services from "./components/Services";
import Contactus from "./components/Contactus";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Careers" element={<Careers/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/Contactus" element={<Contactus/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

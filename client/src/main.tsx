import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home.tsx'
import Navbar from './Navbar.tsx'
import Info from './Info.tsx'
import Analysis from './Analysis.tsx'
import Footer from './Footer.tsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="info" element={<Info />} />
        <Route path="analysis" element={<Analysis />} />
      </Route>

    </Routes>
    </BrowserRouter>
        <Footer/>
  </StrictMode>
)

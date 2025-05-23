import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home.tsx'
import Layout from './Layout.tsx'
import Info from './Info.tsx'
import Analysis from './Analysis.tsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout  />}>
        <Route index element={<Home />} />
        <Route path="info" element={<Info />} />
        <Route path="analysis" element={<Analysis />} />
        <Route path="*" element={<h1 className='m-5'>404 Not Found</h1>} />
      </Route>

    </Routes>
    </BrowserRouter>
  </StrictMode>
)

import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import { Listsusrenvpage } from './pages/Listsusrenvpage.tsx';
import { Index } from './pages/Index.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/listado" element={<Listsusrenvpage />} />
      <Route path="/" element={<Index />} />
    </Routes>
  </BrowserRouter>,
)

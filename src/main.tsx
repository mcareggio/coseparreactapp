import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import { Listsusrenvpage } from './pages/Listsusrenvpage.tsx';
import { Index } from './pages/Index.tsx';
import { ListadoFacturas } from './pages/ListFacturas.tsx';
import { RecibosTelefono } from './pages/RecibosTelefono.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Index />} />
      <Route path="/listado" element={<Listsusrenvpage />} />
      <Route path="/listado-facturas" element={<ListadoFacturas />} />
      <Route path="/recibos-telefono/:whatsapp" element={<RecibosTelefono />} />
    </Routes>
  </BrowserRouter>,
)

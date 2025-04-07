import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import { Listsusrenvpage } from './pages/Listsusrenvpage.tsx';
import { Index } from './pages/Index.tsx';
import { ListadoFacturas } from './pages/ListFacturas.tsx';
import { Recibos } from './pages/Recibos.tsx';
import { tipo_envio_str } from './types/common.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Index />} />

      <Route path="/listado" element={<Listsusrenvpage />} />
      <Route path="/listado-facturas" element={<ListadoFacturas />} />
      <Route path="/recibos-telefono/:telefono" element={<Recibos tipo_envio={tipo_envio_str.whatsapp} />} />
      <Route path="/recibos-email/:email" element={<Recibos tipo_envio={tipo_envio_str.mail} />} />
      <Route path="/recibos/:id" element={<Recibos tipo_envio={tipo_envio_str.none} />} />
    </Routes>
  </BrowserRouter>,
)

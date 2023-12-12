import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'; // Importe React uma vez

import Home from './Home';
import EmDestaque from './EmDestaque/EmDestaque';
import NovaMusica from './NovaMusica/NovaMusica';
import Detalhe from './Detalhe/Detalhe';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/EmDestaque" element={<EmDestaque />} />
        <Route path="/NovaMusica" element={<NovaMusica />} />
        <Route path="/Detalhe/:id" element={<Detalhe />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
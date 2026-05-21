import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Grupo from './pages/Grupo';
import EtarpEtiquetas from './pages/EtarpEtiquetas';
import EtarpAutomacao from './pages/EtarpAutomacao';
import FoxoneSoftware from './pages/FoxoneSoftware';
import Solucoes from './pages/Solucoes';
import Cases from './pages/Cases';
import Contato from './pages/Contato';
import NotFound from './pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/grupo" element={<Grupo />} />
      <Route path="/etarp-etiquetas" element={<EtarpEtiquetas />} />
      <Route path="/etarp-automacao" element={<EtarpAutomacao />} />
      <Route path="/foxone-software" element={<FoxoneSoftware />} />
      <Route path="/solucoes" element={<Solucoes />} />
      <Route path="/cases" element={<Cases />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

import React from 'react';
import { FileQuestion } from 'lucide-react';
import Button from '../components/ui/Button';
import Eyebrow from '../components/ui/Eyebrow';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="notfound-page">
      <div className="notfound-container">
        <FileQuestion size={64} className="notfound-icon" />
        <Eyebrow>ERRO 404</Eyebrow>
        <h1>Página não encontrada</h1>
        <p className="lead">O conteúdo que você tentou acessar não existe ou foi consolidado nesta reformulação.</p>
        <div className="notfound-actions">
          <Button variant="primary" href="/" size="lg">Voltar para a Home</Button>
        </div>
      </div>
    </div>
  );
}

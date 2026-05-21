import React, { useState, useMemo } from 'react';
import * as Icons from 'lucide-react';
import Eyebrow from '../components/ui/Eyebrow';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import solucoes from '../data/solucoes.json';
import unidades from '../data/unidades.json';
import './Solucoes.css';

export default function Solucoes() {
  const [search, setSearch] = useState('');
  const [selectedUnits, setSelectedUnits] = useState([]);
  const [selectedSegments, setSelectedSegments] = useState([]);
  const [modalItem, setModalItem] = useState(null);

  // Toggle filter lists
  const toggleUnit = (id) => {
    setSelectedUnits(prev =>
      prev.includes(id) ? prev.filter(u => u !== id) : [...prev, id]
    );
  };

  const toggleSegment = (id) => {
    setSelectedSegments(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const resetFilters = () => {
    setSearch('');
    setSelectedUnits([]);
    setSelectedSegments([]);
  };

  // Filter solutions
  const filteredSolutions = useMemo(() => {
    return solucoes.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
                            item.description.toLowerCase().includes(search.toLowerCase());
      const matchesUnit = selectedUnits.length === 0 || selectedUnits.includes(item.unit);
      const matchesSegment = selectedSegments.length === 0 || item.segment.some(s => selectedSegments.includes(s));
      return matchesSearch && matchesUnit && matchesSegment;
    });
  }, [search, selectedUnits, selectedSegments]);

  return (
    <div className="solutions-page">
      {/* Hero Header */}
      <header className="solutions-hero">
        <div className="solutions-hero__container">
          <Eyebrow>NOSSO PORTFÓLIO</Eyebrow>
          <h1>Soluções e Equipamentos</h1>
          <p className="lead">Consulte nosso catálogo integrado de suprimentos, hardware de automação e sistemas sob medida.</p>
        </div>
      </header>

      {/* Main Catalog */}
      <Section id="solutions-catalog" bg="alt">
        <div className="solutions-layout">
        {/* Sidebar Filters */}
        <aside className="solutions-sidebar" aria-label="Filtros do catálogo">
          <div className="sidebar-group search-group">
            <label htmlFor="search-input" className="sidebar-group__title">Buscar</label>
            <div className="search-input-wrapper">
              <Icons.Search className="search-icon" size={18} />
              <input
                id="search-input"
                type="text"
                placeholder="Ex: impressora, ribbon..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="sidebar-group">
            <span className="sidebar-group__title">Unidades</span>
            <div className="filter-options">
              {unidades.map(u => (
                <label key={u.id} className="filter-checkbox-label">
                  <input
                    type="checkbox"
                    checked={selectedUnits.includes(u.id)}
                    onChange={() => toggleUnit(u.id)}
                  />
                  <span className="checkbox-custom"></span>
                  <span>{u.shortName}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="sidebar-group">
            <span className="sidebar-group__title">Segmentos</span>
            <div className="filter-options">
              {[
                { id: 'industria', name: 'Indústria' },
                { id: 'varejo', name: 'Varejo' },
                { id: 'logistica', name: 'Logística' },
                { id: 'servicos', name: 'Serviços' },
              ].map(s => (
                <label key={s.id} className="filter-checkbox-label">
                  <input
                    type="checkbox"
                    checked={selectedSegments.includes(s.id)}
                    onChange={() => toggleSegment(s.id)}
                  />
                  <span className="checkbox-custom"></span>
                  <span>{s.name}</span>
                </label>
              ))}
            </div>
          </div>

          {(search || selectedUnits.length > 0 || selectedSegments.length > 0) && (
            <Button variant="ghost" size="sm" onClick={resetFilters} className="reset-btn">
              Limpar Filtros
            </Button>
          )}
        </aside>

        {/* Product Grid */}
        <main className="solutions-main">
          <div className="solutions-count">
            {filteredSolutions.length === 1 
              ? '1 solução encontrada' 
              : `${filteredSolutions.length} soluções encontradas`}
          </div>

          {filteredSolutions.length > 0 ? (
            <div className="solutions-grid">
              {filteredSolutions.map(item => {
                const unitData = unidades.find(u => u.id === item.unit);
                return (
                  <Card key={item.id} hover={true} className="product-card">
                    <div className="product-card__meta">
                      <Badge color={unitData?.colorHex || 'var(--etarp-cyan)'}>
                        {unitData?.shortName || 'Grupo Etarp'}
                      </Badge>
                    </div>
                    <h3 className="product-card__title">{item.name}</h3>
                    <p className="product-card__desc">{item.description}</p>
                    <div className="product-card__footer">
                      <Button variant="ghost" size="sm" onClick={() => setModalItem(item)}>
                        Ver detalhes
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="solutions-empty">
              <Icons.Inbox size={48} className="empty-icon" />
              <p>Nenhuma solução encontrada com os filtros selecionados.</p>
              <Button variant="primary" onClick={resetFilters} size="sm">Ver tudo</Button>
            </div>
          )}
        </main>
      </div> {/* Close solutions-layout */}
    </Section> {/* Close Section */}

    {/* Modal Details */}
    {modalItem && (
      <div className="solution-modal-overlay" onClick={() => setModalItem(null)}>
        <div className="solution-modal" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <button className="solution-modal__close" onClick={() => setModalItem(null)} aria-label="Fechar modal">
            <Icons.X size={24} />
          </button>
          <div className="solution-modal__content">
            <div className="modal-meta">
              <Badge color={unidades.find(u => u.id === modalItem.unit)?.colorHex}>
                {unidades.find(u => u.id === modalItem.unit)?.shortName}
              </Badge>
            </div>
            <h2 id="modal-title">{modalItem.name}</h2>
            <p className="modal-desc">{modalItem.description}</p>
            
            <div className="modal-details-box">
              <h4>Especificações / O que inclui:</h4>
              <p>{modalItem.details}</p>
            </div>

            <div className="modal-segments">
              <h4>Segmentos atendidos:</h4>
              <div className="modal-segment-badges">
                {modalItem.segment.map(seg => (
                  <span key={seg} className="segment-badge">
                    {seg.charAt(0).toUpperCase() + seg.slice(1)}
                  </span>
                ))}
              </div>
            </div>

            <div className="modal-actions">
              <Button variant="primary" href="/contato" onClick={() => setModalItem(null)}>
                Solicitar orçamento desta solução
              </Button>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
);
}

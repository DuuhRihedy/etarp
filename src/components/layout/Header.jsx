import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import './Header.css';

const NAV_ITEMS = [
  { label: 'Grupo', path: '/grupo' },
  { label: 'Etiquetas', path: '/etarp-etiquetas' },
  { label: 'Automação', path: '/etarp-automacao' },
  { label: 'Foxone', path: '/foxone-software' },
  { label: 'Soluções', path: '/solucoes' },
  { label: 'Cases', path: '/cases' },
  { label: 'Contato', path: '/contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`} id="site-header">
      <div className="header__inner">
        <Link to="/" className="header__logo" aria-label="Grupo Etarp — Página inicial">
          <img src={`${import.meta.env.BASE_URL}grupo-etarp.png`} alt="Grupo Etarp" height="40" />
        </Link>

        <nav className="header__nav-desktop" aria-label="Navegação principal">
          <ul className="header__list">
            {NAV_ITEMS.map(({ label, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`header__link ${location.pathname === path ? 'header__link--active' : ''}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {createPortal(
          <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`} aria-label="Navegação móvel">
            <ul className="header__list">
              {NAV_ITEMS.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className={`header__link ${location.pathname === path ? 'header__link--active' : ''}`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="header__cta-mobile">
              <Button variant="primary" href="/contato" size="sm">Falar com vendas</Button>
            </div>
          </nav>,
          document.body
        )}

        <div className="header__actions">
          <Button variant="primary" href="/contato" size="sm" className="header__cta-desktop">
            Falar com vendas
          </Button>
          <button
            className="header__hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}

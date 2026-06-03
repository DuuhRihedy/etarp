import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import HtmlLogo from '../ui/HtmlLogo';
import './Header.css';

const NAV_ITEMS = [
  { label: 'Grupo', path: '/grupo' },
  { label: 'Etiquetas', path: '/etarp-etiquetas' },
  { label: 'Automação', path: '/etarp-automacao' },
  { label: 'Locações', path: '/etarp-locacoes' },
  { label: 'Soluções', path: '/solucoes' },
  { label: 'Cases', path: '/cases' },
  { label: 'Branding', path: '/branding' },
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
        <Link to="/" className="header__logo" aria-label="Grupo Etarp – Página inicial">
          <HtmlLogo brand={{ id: 'grupo', folder: 'grupo-etarp', color1: '#0D2B4E', color2: '#0D2B4E', logoTitle: 'ETARP', logoSubtitle: 'GRUPO', iconSrc: 'logo-certo.svg' }} scale={0.4} />
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

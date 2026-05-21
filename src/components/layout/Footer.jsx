import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Mail, Phone } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="site-footer">
      <div className="footer__inner">
        <div className="footer__grid">
          <div className="footer__col">
            <h4 className="footer__heading">Unidades</h4>
            <ul className="footer__list">
              <li><Link to="/etarp-etiquetas">Etarp Etiquetas e Rótulos</Link></li>
              <li><Link to="/etarp-automacao">Etarp Automação Comercial</Link></li>
              <li><Link to="/foxone-software">Foxone Software</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Soluções</h4>
            <ul className="footer__list">
              <li><Link to="/solucoes">Catálogo de soluções</Link></li>
              <li><Link to="/solucoes">Etiquetas e rótulos</Link></li>
              <li><Link to="/solucoes">Automação comercial</Link></li>
              <li><Link to="/solucoes">Software sob medida</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Empresa</h4>
            <ul className="footer__list">
              <li><Link to="/grupo">Sobre o grupo</Link></li>
              <li><Link to="/cases">Cases de clientes</Link></li>
              <li><Link to="/contato">Contato</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Contato</h4>
            <ul className="footer__list footer__list--contact">
              <li>
                <Phone size={16} />
                <a href="tel:+551632895501">+55 (16) 3289-5501</a>
              </li>
              <li>
                <Phone size={16} />
                <a href="tel:+551632852790">+55 (16) 3285-2790</a>
              </li>
              <li>
                <Mail size={16} />
                <a href="mailto:grupoetarp@etarp.com.br">grupoetarp@etarp.com.br</a>
              </li>
            </ul>
            <div className="footer__social">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__address">
            <p><strong>Escritório:</strong> Rua Doutor Loiola, 516 — Vila Tibério, Ribeirão Preto-SP — CEP 14050-070</p>
            <p><strong>Fábrica:</strong> Rua Bela Vista, 1154 — Monte Alegre, Ribeirão Preto-SP — CEP 14051-070</p>
          </div>
          <p className="footer__copy">© {new Date().getFullYear()} Grupo Etarp. CNPJ: {'{{CNPJ_GRUPO_ETARP}}'}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

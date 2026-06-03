import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import Eyebrow from '../components/ui/Eyebrow';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import './Contato.css';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    telefone: '',
    unidade: '',
    mensagem: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.nome.trim()) newErrors.nome = 'Nome é obrigatório.';
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mail inválido.';
    }
    if (!formData.telefone.trim()) newErrors.telefone = 'Telefone é obrigatório.';
    if (!formData.mensagem.trim()) newErrors.mensagem = 'Mensagem é obrigatória.';
    if (!formData.unidade) newErrors.unidade = 'Selecione uma unidade de interesse.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Formulário enviado com sucesso:', formData);
      setSubmitted(true);
      setFormData({
        nome: '',
        email: '',
        empresa: '',
        telefone: '',
        unidade: '',
        mensagem: '',
      });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="contato-page">
      {/* Hero Header */}
      <header className="contato-hero">
        <div className="contato-hero__container">
          <Eyebrow>CANAIS DE ATENDIMENTO</Eyebrow>
          <h1>Fale com nossos especialistas</h1>
          <p className="lead">Dúvidas, orçamentos, comodato ou suporte técnico. Escolha o canal ideal ou preencha o formulário abaixo.</p>
        </div>
      </header>

      {/* Main Contact Grid */}
      <Section id="contato-main" bg="alt">
        <div className="contato-grid">
          {/* Form Card */}
          <Card className="contato-form-card" hover={false}>
            <h3>Envie uma mensagem</h3>
            <p className="form-subtitle">Retornamos seu contato em até 24 horas úteis.</p>

            {submitted && (
              <div className="form-success-toast">
                <Icons.CheckCircle size={20} />
                <span>Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contato-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nome">Nome Completo *</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className={errors.nome ? 'input-error' : ''}
                  />
                  {errors.nome && <span className="error-text">{errors.nome}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail Corporativo *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'input-error' : ''}
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="telefone">Telefone *</label>
                  <input
                    type="text"
                    id="telefone"
                    name="telefone"
                    placeholder="(00) 00000-0000"
                    value={formData.telefone}
                    onChange={handleChange}
                    className={errors.telefone ? 'input-error' : ''}
                  />
                  {errors.telefone && <span className="error-text">{errors.telefone}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="empresa">Empresa</label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="unidade">Unidade de Interesse *</label>
                <select
                  id="unidade"
                  name="unidade"
                  value={formData.unidade}
                  onChange={handleChange}
                  className={errors.unidade ? 'input-error' : ''}
                >
                  <option value="">Selecione...</option>
                  <option value="etiquetas">Etarp Etiquetas e Rótulos</option>
                  <option value="automacao">Etarp Automação Comercial</option>
                  <option value="locacoes">Etarp Locações</option>
                  <option value="outros">Outros / Grupo Institucional</option>
                </select>
                {errors.unidade && <span className="error-text">{errors.unidade}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="mensagem">Mensagem / Descrição do Projeto *</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows="5"
                  value={formData.mensagem}
                  onChange={handleChange}
                  className={errors.mensagem ? 'input-error' : ''}
                  placeholder="Conte-nos o que sua operação precisa..."
                ></textarea>
                {errors.mensagem && <span className="error-text">{errors.mensagem}</span>}
              </div>

              <Button type="submit" variant="primary">Enviar Mensagem</Button>
            </form>
          </Card>

          {/* Info Column */}
          <div className="contato-info-col">
            {/* Direct Channels */}
            <Card className="info-card" hover={false}>
              <h3>Canais Diretos</h3>
              <div className="direct-channels">
                <div className="channel-item">
                  <Icons.Phone size={20} className="channel-icon" />
                  <div>
                    <h4>Telefones de Vendas</h4>
                    <p><a href="tel:+551632895501">+55 (16) 3289-5501</a></p>
                    <p><a href="tel:+551632852790">+55 (16) 3285-2790</a></p>
                  </div>
                </div>
                <div className="channel-item">
                  <Icons.Mail size={20} className="channel-icon" />
                  <div>
                    <h4>E-mail Geral</h4>
                    <p><a href="mailto:grupoetarp@etarp.com.br">grupoetarp@etarp.com.br</a></p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Map & Address */}
            <Card className="info-card" hover={false}>
              <h3>Onde Estamos</h3>
              <div className="address-section">
                <div className="address-item">
                  <Icons.MapPin size={20} className="channel-icon" />
                  <div>
                    <h4>Escritório Central</h4>
                    <p>Rua Doutor Loiola, 516 — Vila Tibério</p>
                    <p>Ribeirão Preto-SP — CEP 14050-070</p>
                  </div>
                </div>
                <div className="address-item">
                  <Icons.Factory size={20} className="channel-icon" />
                  <div>
                    <h4>Fábrica de Etiquetas</h4>
                    <p>Rua Bela Vista, 1154 — Monte Alegre</p>
                    <p>Ribeirão Preto-SP — CEP 14051-070</p>
                  </div>
                </div>
              </div>
              <div className="static-map-placeholder">
                <Icons.Map size={36} className="map-icon" />
                <span>Mapa de Ribeirão Preto - SP</span>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}

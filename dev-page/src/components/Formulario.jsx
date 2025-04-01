import React, { useState, useEffect, useRef } from 'react';
import InputMask from 'react-input-mask';
import './Formulario.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

function Formulario() {
  useScrollAnimation('.animated-form');
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cidade: '',
    profissao: '',
    areaAtuacao: '',
    cnpj: '',
    cnpjNumero: '',
    empresa: '',
    tempoAtuacaoNumero: '',
    tempoAtuacaoPeriodo: 'meses',
    servicos: '',
    publicoAlvo: '',
    doresClientes: '',
    logotipo: '',
    slogan: '',
    cores: '',
    referencia: '',
    instagram: '',
    facebook: '',
    linkedin: '',
    tiktok: '',
    youtube: '',
    objetivo: '',
    depoimentos: '',
    oferta: '',
    atendimentoOnline: '',
    registroProfissional: '',
    numeroRegistro: ''
  });

  const [errors, setErrors] = useState({});
  const [showCNPJField, setShowCNPJField] = useState(false);
  const [showRegistroField, setShowRegistroField] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const rascunho = localStorage.getItem('formularioRascunho');
    if (rascunho) {
      const parsedData = JSON.parse(rascunho);
      setFormData(parsedData);
      if (parsedData.cnpj === 'Sim') setShowCNPJField(true);
      if (parsedData.registroProfissional === 'Sim') setShowRegistroField(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formularioRascunho', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'cnpj') {
      setShowCNPJField(value === 'Sim');
    }
    
    if (name === 'registroProfissional') {
      setShowRegistroField(value === 'Sim');
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let error = false;
    let errorMessage = '';

    const optionalFields = [
      'empresa', 'cnpjNumero', 'instagram', 'facebook', 
      'linkedin', 'tiktok', 'youtube', 'slogan', 'cores',
      'referencia', 'oferta', 'publicoAlvo', 'areaAtuacao',
      'numeroRegistro'
    ];

    if (value === '' && !optionalFields.includes(name)) {
      error = true;
      errorMessage = 'Este campo é obrigatório.';
    }

    if (name === 'email' && value && !/\S+@\S+\.\S+/.test(value)) {
      error = true;
      errorMessage = 'O e-mail informado é inválido.';
    }

    if (name === 'telefone' && value && value.replace(/\D/g, '').length < 11) {
      error = true;
      errorMessage = 'O telefone deve ter 11 dígitos.';
    }

    if ((name === 'nome' || name === 'profissao' || name === 'cidade') && value && value.length < 3) {
      error = true;
      errorMessage = 'O campo deve ter no mínimo 3 caracteres.';
    }

    if ((name === 'tempoAtuacaoNumero') && value && isNaN(value)) {
      error = true;
      errorMessage = 'Informe um número válido.';
    }

    setErrors({ ...errors, [name]: { error, errorMessage } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasErrors = false;
    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      const value = formData[key];
      const optionalFields = [
        'empresa', 'cnpjNumero', 'instagram', 'facebook', 
        'linkedin', 'tiktok', 'youtube', 'slogan', 'cores',
        'referencia', 'oferta', 'publicoAlvo', 'areaAtuacao',
        'numeroRegistro'
      ];

      if (value === '' && !optionalFields.includes(key)) {
        newErrors[key] = { error: true, errorMessage: 'Este campo é obrigatório.' };
        hasErrors = true;
      }
    });

    if (hasErrors) {
      setErrors(newErrors);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const message = `Novo formulário preenchido:\n\n` +
      `*Dados Pessoais*\n` +
      `Nome: ${formData.nome}\n` +
      `E-mail: ${formData.email}\n` +
      `Telefone: ${formData.telefone}\n` +
      `Cidade: ${formData.cidade}\n\n` +
      `*Dados Profissionais*\n` +
      `Profissão: ${formData.profissao}\n` +
      `Área de Atuação: ${formData.areaAtuacao || 'Não informado'}\n` +
      `Possui CNPJ? ${formData.cnpj}\n` +
      `CNPJ: ${formData.cnpj === 'Sim' ? formData.cnpjNumero : 'Não informado'}\n` +
      `Empresa: ${formData.empresa || 'Não informado'}\n` +
      `Tempo de atuação: ${formData.tempoAtuacaoNumero} ${formData.tempoAtuacaoPeriodo}\n` +
      `Realiza atendimento online? ${formData.atendimentoOnline}\n` +
      `Possui registro profissional? ${formData.registroProfissional}\n` +
      `${formData.registroProfissional === 'Sim' ? `Número do registro: ${formData.numeroRegistro || 'Não informado'}\n` : ''}` +
      `Público-alvo: ${formData.publicoAlvo || 'Não informado'}\n\n` +
      `*Serviços*\n` +
      `Serviços oferecidos: ${formData.servicos}\n` +
      `Principais dores dos clientes: ${formData.doresClientes}\n\n` +
      `*Identidade Visual*\n` +
      `Possui logotipo? ${formData.logotipo}\n` +
      `Slogan: ${formData.slogan || 'Não informado'}\n` +
      `Cores preferidas: ${formData.cores || 'Não informado'}\n` +
      `Referência de site: ${formData.referencia || 'Não informado'}\n\n` +
      `*Redes Sociais*\n` +
      `Instagram: ${formData.instagram || 'Não informado'}\n` +
      `Facebook: ${formData.facebook || 'Não informado'}\n` +
      `LinkedIn: ${formData.linkedin || 'Não informado'}\n` +
      `TikTok: ${formData.tiktok || 'Não informado'}\n` +
      `YouTube: ${formData.youtube || 'Não informado'}\n\n` +
      `*Objetivos*\n` +
      `Objetivo da página: ${formData.objetivo}\n` +
      `Incluir depoimentos? ${formData.depoimentos}\n` +
      `Oferta especial: ${formData.oferta || 'Não informado'}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5553991244320?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="formulario" className="formulario-tech" aria-labelledby="formulario-heading">
      <div className="tech-grid-lines"></div>
      <div className="container formulario-container animated-form">
        <h2 className="animated-form" id="formulario-heading">
          <span className="tech-highlight">FORMULÁRIO DE BRIEFING</span>
        </h2>
        
        <p className="obrigatorio-info tech-text">
          <span className="tech-bullet">{"</>"}</span> Campos marcados com * são obrigatórios
        </p>
        
        <form onSubmit={handleSubmit} ref={formRef} className="tech-form">
          {/* Dados Pessoais */}
          <fieldset className="tech-fieldset">
            <legend className="tech-legend">
              <span className="tech-bullet">{"</>"}</span> Dados Pessoais
            </legend>
            
            <div className={`form-group ${errors.nome?.error ? 'has-error' : ''}`}>
              <label htmlFor="nome" className="tech-label">
                Nome completo *
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                onBlur={handleBlur}
                className="tech-input"
                autoFocus
              />
              {errors.nome?.error && <small className="tech-error">{errors.nome.errorMessage}</small>}
            </div>

            <div className={`form-group ${errors.email?.error ? 'has-error' : ''}`}>
              <label htmlFor="email" className="tech-label">
                E-mail *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="tech-input"
              />
              {errors.email?.error && <small className="tech-error">{errors.email.errorMessage}</small>}
            </div>

            <div className={`form-group ${errors.telefone?.error ? 'has-error' : ''}`}>
              <label htmlFor="telefone" className="tech-label">
                Telefone/WhatsApp *
              </label>
              <InputMask
                mask="(99) 99999-9999"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                onBlur={handleBlur}
                className="tech-input"
              />
              {errors.telefone?.error && <small className="tech-error">{errors.telefone.errorMessage}</small>}
            </div>

            <div className={`form-group ${errors.cidade?.error ? 'has-error' : ''}`}>
              <label htmlFor="cidade" className="tech-label">
                Cidade e Estado *
              </label>
              <input
                type="text"
                id="cidade"
                name="cidade"
                value={formData.cidade}
                onChange={handleChange}
                onBlur={handleBlur}
                className="tech-input"
              />
              {errors.cidade?.error && <small className="tech-error">{errors.cidade.errorMessage}</small>}
            </div>
          </fieldset>

          {/* Dados Profissionais */}
          <fieldset className="tech-fieldset">
            <legend className="tech-legend">
              <span className="tech-bullet">{"</>"}</span> Dados Profissionais
            </legend>
            
            <div className={`form-group ${errors.profissao?.error ? 'has-error' : ''}`}>
              <label htmlFor="profissao" className="tech-label">
                Profissão *
              </label>
              <input
                type="text"
                id="profissao"
                name="profissao"
                value={formData.profissao}
                onChange={handleChange}
                onBlur={handleBlur}
                className="tech-input"
              />
              {errors.profissao?.error && <small className="tech-error">{errors.profissao.errorMessage}</small>}
            </div>

            <div className="form-group">
              <label htmlFor="areaAtuacao" className="tech-label">
                Área de Atuação
              </label>
              <select
                id="areaAtuacao"
                name="areaAtuacao"
                value={formData.areaAtuacao}
                onChange={handleChange}
                className="tech-select"
              >
                <option value="">Selecione...</option>
                <option value="Saúde">Saúde</option>
                <option value="Tecnologia">Tecnologia</option>
                <option value="Educação">Educação</option>
                <option value="Finanças">Finanças</option>
                <option value="Comércio">Comércio</option>
                <option value="Serviços">Serviços</option>
                <option value="Indústria">Indústria</option>
                <option value="Outros">Outros</option>
              </select>
            </div>

            <div className={`form-group ${errors.atendimentoOnline?.error ? 'has-error' : ''}`}>
              <label htmlFor="atendimentoOnline" className="tech-label">
                Realiza atendimento online? *
              </label>
              <select
                id="atendimentoOnline"
                name="atendimentoOnline"
                value={formData.atendimentoOnline}
                onChange={handleChange}
                onBlur={handleBlur}
                className="tech-select"
              >
                <option value="">Selecione...</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
                <option value="Ambos">Presencial e Online</option>
              </select>
              {errors.atendimentoOnline?.error && <small className="tech-error">{errors.atendimentoOnline.errorMessage}</small>}
            </div>

            <div className={`form-group ${errors.registroProfissional?.error ? 'has-error' : ''}`}>
              <label htmlFor="registroProfissional" className="tech-label">
                Possui registro profissional? (ex: CRP para psicólogos) *
              </label>
              <select
                id="registroProfissional"
                name="registroProfissional"
                value={formData.registroProfissional}
                onChange={handleChange}
                onBlur={handleBlur}
                className="tech-select"
              >
                <option value="">Selecione...</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </select>
              {errors.registroProfissional?.error && <small className="tech-error">{errors.registroProfissional.errorMessage}</small>}
            </div>

            {showRegistroField && (
              <div className="form-group">
                <label htmlFor="numeroRegistro" className="tech-label">
                  Número do registro profissional
                </label>
                <input
                  type="text"
                  id="numeroRegistro"
                  name="numeroRegistro"
                  placeholder="Ex: CRP 00/00000"
                  value={formData.numeroRegistro}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="tech-input"
                />
              </div>
            )}

            <div className={`form-group ${errors.cnpj?.error ? 'has-error' : ''}`}>
              <label htmlFor="cnpj" className="tech-label">
                Possui CNPJ? *
              </label>
              <select
                id="cnpj"
                name="cnpj"
                value={formData.cnpj}
                onChange={handleChange}
                onBlur={handleBlur}
                className="tech-select"
              >
                <option value="">Selecione...</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </select>
              {errors.cnpj?.error && <small className="tech-error">{errors.cnpj.errorMessage}</small>}
            </div>

            {showCNPJField && (
              <div className={`form-group ${errors.cnpjNumero?.error ? 'has-error' : ''}`}>
                <label htmlFor="cnpjNumero" className="tech-label">
                  CNPJ *
                </label>
                <InputMask
                  mask="99.999.999/9999-99"
                  id="cnpjNumero"
                  name="cnpjNumero"
                  value={formData.cnpjNumero}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="tech-input"
                />
                {errors.cnpjNumero?.error && <small className="tech-error">{errors.cnpjNumero.errorMessage}</small>}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="empresa" className="tech-label">
                Nome da Empresa
              </label>
              <input
                type="text"
                id="empresa"
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
                onBlur={handleBlur}
                className="tech-input"
              />
            </div>

            <div className={`form-group ${errors.tempoAtuacaoNumero?.error ? 'has-error' : ''}`}>
              <label htmlFor="tempoAtuacaoNumero" className="tech-label">
                Tempo de Atuação *
              </label>
              <div className="tempo-atuacao-container">
                <input
                  type="number"
                  id="tempoAtuacaoNumero"
                  name="tempoAtuacaoNumero"
                  min="1"
                  value={formData.tempoAtuacaoNumero}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="tech-input"
                />
                <select
                  name="tempoAtuacaoPeriodo"
                  value={formData.tempoAtuacaoPeriodo}
                  onChange={handleChange}
                  className="tech-select"
                >
                  <option value="meses">Meses</option>
                  <option value="anos">Anos</option>
                </select>
              </div>
              {errors.tempoAtuacaoNumero?.error && <small className="tech-error">{errors.tempoAtuacaoNumero.errorMessage}</small>}
            </div>

            <div className="form-group">
              <label htmlFor="publicoAlvo" className="tech-label">
                Público-Alvo
              </label>
              <textarea
                id="publicoAlvo"
                name="publicoAlvo"
                placeholder="Descreva seu público ideal"
                value={formData.publicoAlvo}
                onChange={handleChange}
                onBlur={handleBlur}
                className="tech-textarea"
              />
            </div>
          </fieldset>

          {/* Serviços */}
          <fieldset className="tech-fieldset">
            <legend className="tech-legend">
              <span className="tech-bullet">{"</>"}</span> Serviços
            </legend>
            
            <div className={`form-group ${errors.servicos?.error ? 'has-error' : ''}`}>
              <label htmlFor="servicos" className="tech-label">
                Serviços oferecidos *
              </label>
              <textarea
                id="servicos"
                name="servicos"
                placeholder="Descreva os serviços que você oferece"
                value={formData.servicos}
                onChange={handleChange}
                onBlur={handleBlur}
                className="tech-textarea"
              />
              {errors.servicos?.error && <small className="tech-error">{errors.servicos.errorMessage}</small>}
            </div>

            <div className={`form-group ${errors.doresClientes?.error ? 'has-error' : ''}`}>
              <label htmlFor="doresClientes" className="tech-label">
                Principais dores dos clientes *
              </label>
              <textarea
                id="doresClientes"
                name="doresClientes"
                placeholder="Quais são os principais problemas que seus clientes enfrentam?"
                value={formData.doresClientes}
                onChange={handleChange}
                onBlur={handleBlur}
                className="tech-textarea"
              />
              {errors.doresClientes?.error && <small className="tech-error">{errors.doresClientes.errorMessage}</small>}
            </div>
          </fieldset>

          {/* Identidade Visual */}
          <fieldset className="tech-fieldset">
            <legend className="tech-legend">
              <span className="tech-bullet">{"</>"}</span> Identidade Visual
            </legend>
            
            <div className={`form-group ${errors.logotipo?.error ? 'has-error' : ''}`}>
              <label htmlFor="logotipo" className="tech-label">
                Possui logotipo? *
              </label>
              <select
                id="logotipo"
                name="logotipo"
                value={formData.logotipo}
                onChange={handleChange}
                onBlur={handleBlur}
                className="tech-select"
              >
                <option value="">Selecione...</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </select>
              {errors.logotipo?.error && <small className="tech-error">{errors.logotipo.errorMessage}</small>}
            </div>

            <div className="form-group">
              <label htmlFor="slogan" className="tech-label">
                Slogan
              </label>
              <input
                type="text"
                id="slogan"
                name="slogan"
                placeholder="Seu slogan ou frase de impacto"
                value={formData.slogan}
                onChange={handleChange}
                onBlur={handleBlur}
                className="tech-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="cores" className="tech-label">
                Cores preferidas
              </label>
              <input
                type="text"
                id="cores"
                name="cores"
                placeholder="Ex: Azul, Branco e Prata"
                value={formData.cores}
                onChange={handleChange}
                onBlur={handleBlur}
                className="tech-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="referencia" className="tech-label">
                Referência de site
              </label>
              <input
                type="text"
                id="referencia"
                name="referencia"
                placeholder="URL de sites que você gosta"
                value={formData.referencia}
                onChange={handleChange}
                onBlur={handleBlur}
                className="tech-input"
              />
            </div>
          </fieldset>

          {/* Redes Sociais */}
          <fieldset className="tech-fieldset">
            <legend className="tech-legend">
              <span className="tech-bullet">{"</>"}</span> Redes Sociais
            </legend>
            
            <div className="form-group">
              <label htmlFor="instagram" className="tech-label">
                <i className="fab fa-instagram"></i> Instagram
              </label>
              <input
                type="text"
                id="instagram"
                name="instagram"
                placeholder="@seuuser ou URL"
                value={formData.instagram}
                onChange={handleChange}
                onBlur={handleBlur}
                className="tech-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="facebook" className="tech-label">
                <i className="fab fa-facebook"></i> Facebook
              </label>
              <input
                type="text"
                id="facebook"
                name="facebook"
                placeholder="URL do seu perfil/página"
                value={formData.facebook}
                onChange={handleChange}
                onBlur={handleBlur}
                className="tech-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="linkedin" className="tech-label">
                <i className="fab fa-linkedin"></i> LinkedIn
              </label>
              <input
                type="text"
                id="linkedin"
                name="linkedin"
                placeholder="URL do seu perfil"
                value={formData.linkedin}
                onChange={handleChange}
                onBlur={handleBlur}
                className="tech-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="tiktok" className="tech-label">
                <i className="fab fa-tiktok"></i> TikTok
              </label>
              <input
                type="text"
                id="tiktok"
                name="tiktok"
                placeholder="@seuuser ou URL"
                value={formData.tiktok}
                onChange={handleChange}
                onBlur={handleBlur}
                className="tech-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="youtube" className="tech-label">
                <i className="fab fa-youtube"></i> YouTube
              </label>
              <input
                type="text"
                id="youtube"
                name="youtube"
                placeholder="URL do seu canal"
                value={formData.youtube}
                onChange={handleChange}
                onBlur={handleBlur}
                className="tech-input"
              />
            </div>
          </fieldset>

          {/* Objetivos */}
          <fieldset className="tech-fieldset">
            <legend className="tech-legend">
              <span className="tech-bullet">{"</>"}</span> Objetivos
            </legend>
            
            <div className={`form-group ${errors.objetivo?.error ? 'has-error' : ''}`}>
              <label htmlFor="objetivo" className="tech-label">
                Objetivo da página *
              </label>
              <textarea
                id="objetivo"
                name="objetivo"
                placeholder="O que você espera alcançar com seu site?"
                value={formData.objetivo}
                onChange={handleChange}
                onBlur={handleBlur}
                className="tech-textarea"
              />
              {errors.objetivo?.error && <small className="tech-error">{errors.objetivo.errorMessage}</small>}
            </div>

            <div className={`form-group ${errors.depoimentos?.error ? 'has-error' : ''}`}>
              <label htmlFor="depoimentos" className="tech-label">
                Incluir depoimentos? *
              </label>
              <select
                id="depoimentos"
                name="depoimentos"
                value={formData.depoimentos}
                onChange={handleChange}
                onBlur={handleBlur}
                className="tech-select"
              >
                <option value="">Selecione...</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </select>
              {errors.depoimentos?.error && <small className="tech-error">{errors.depoimentos.errorMessage}</small>}
            </div>

            <div className="form-group">
              <label htmlFor="oferta" className="tech-label">
                Oferta especial
              </label>
              <input
                type="text"
                id="oferta"
                name="oferta"
                placeholder="Tem alguma promoção ou oferta especial?"
                value={formData.oferta}
                onChange={handleChange}
                onBlur={handleBlur}
                className="tech-input"
              />
            </div>
          </fieldset>

          <div className="form-actions">
            <button type="submit" className="tech-button">
              <span className="button-icon">{"</>"}</span>
              <span>ENVIAR BRIEFING</span>
              <span className="button-pulse"></span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Formulario;
import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import './Formulario.css';

function Formulario() {
  useEffect(() => {
    document.body.classList.add('formulario-page');
    return () => {
      document.body.classList.remove('formulario-page');
    };
  }, []);

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

  // Carregar rascunho ao iniciar
  useEffect(() => {
    const rascunho = localStorage.getItem('formularioRascunho');
    if (rascunho) {
      const parsedData = JSON.parse(rascunho);
      setFormData(parsedData);
      if (parsedData.cnpj === 'Sim') setShowCNPJField(true);
      if (parsedData.registroProfissional === 'Sim') setShowRegistroField(true);
    }
  }, []);

  // Salvar rascunho
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

    // Campos obrigatórios (exceto redes sociais e alguns específicos)
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

    // Validações específicas
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

    // Validação geral antes de enviar
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

    // Formatar mensagem para WhatsApp
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
    <div className="formulario-container">
      <h1>Preencha seu formulário</h1>
      <p className="obrigatorio-info">Campos marcados com * são obrigatórios</p>
      
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Dados Pessoais</legend>
          
          <div className="form-group">
            <label htmlFor="nome">Nome completo *</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.nome?.error ? 'error' : ''}
              autoFocus
            />
            {errors.nome?.error && <small className="error-message">{errors.nome.errorMessage}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email?.error ? 'error' : ''}
            />
            {errors.email?.error && <small className="error-message">{errors.email.errorMessage}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="telefone">Telefone/WhatsApp *</label>
            <InputMask
              mask="(99) 99999-9999"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.telefone?.error ? 'error' : ''}
            />
            {errors.telefone?.error && <small className="error-message">{errors.telefone.errorMessage}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="cidade">Cidade e Estado *</label>
            <input
              type="text"
              id="cidade"
              name="cidade"
              value={formData.cidade}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.cidade?.error ? 'error' : ''}
            />
            {errors.cidade?.error && <small className="error-message">{errors.cidade.errorMessage}</small>}
          </div>
        </fieldset>

        <fieldset>
          <legend>Dados Profissionais</legend>
          
          <div className="form-group">
            <label htmlFor="profissao">Profissão *</label>
            <input
              type="text"
              id="profissao"
              name="profissao"
              value={formData.profissao}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.profissao?.error ? 'error' : ''}
            />
            {errors.profissao?.error && <small className="error-message">{errors.profissao.errorMessage}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="areaAtuacao">Área de Atuação</label>
            <select
              id="areaAtuacao"
              name="areaAtuacao"
              value={formData.areaAtuacao}
              onChange={handleChange}
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

          <div className="form-group">
            <label htmlFor="atendimentoOnline">Realiza atendimento online? *</label>
            <select
              id="atendimentoOnline"
              name="atendimentoOnline"
              value={formData.atendimentoOnline}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.atendimentoOnline?.error ? 'error' : ''}
            >
              <option value="">Selecione...</option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
              <option value="Ambos">Presencial e Online</option>
            </select>
            {errors.atendimentoOnline?.error && <small className="error-message">{errors.atendimentoOnline.errorMessage}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="registroProfissional">Possui registro profissional? (ex: CRP para psicólogos) *</label>
            <select
              id="registroProfissional"
              name="registroProfissional"
              value={formData.registroProfissional}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.registroProfissional?.error ? 'error' : ''}
            >
              <option value="">Selecione...</option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>
            {errors.registroProfissional?.error && <small className="error-message">{errors.registroProfissional.errorMessage}</small>}
          </div>

          {showRegistroField && (
            <div className="form-group">
              <label htmlFor="numeroRegistro">Número do registro profissional</label>
              <input
                type="text"
                id="numeroRegistro"
                name="numeroRegistro"
                placeholder="Ex: CRP 00/00000"
                value={formData.numeroRegistro}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="cnpj">Possui CNPJ? *</label>
            <select
              id="cnpj"
              name="cnpj"
              value={formData.cnpj}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.cnpj?.error ? 'error' : ''}
            >
              <option value="">Selecione...</option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>
            {errors.cnpj?.error && <small className="error-message">{errors.cnpj.errorMessage}</small>}
          </div>

          {showCNPJField && (
            <div className="form-group">
              <label htmlFor="cnpjNumero">CNPJ *</label>
              <InputMask
                mask="99.999.999/9999-99"
                id="cnpjNumero"
                name="cnpjNumero"
                value={formData.cnpjNumero}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.cnpjNumero?.error ? 'error' : ''}
              />
              {errors.cnpjNumero?.error && <small className="error-message">{errors.cnpjNumero.errorMessage}</small>}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="empresa">Nome da Empresa</label>
            <input
              type="text"
              id="empresa"
              name="empresa"
              value={formData.empresa}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          <div className="form-group">
            <label htmlFor="tempoAtuacao">Tempo de Atuação *</label>
            <div className="tempo-atuacao-container">
              <input
                type="number"
                id="tempoAtuacaoNumero"
                name="tempoAtuacaoNumero"
                min="1"
                value={formData.tempoAtuacaoNumero}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.tempoAtuacaoNumero?.error ? 'error' : ''}
              />
              <select
                name="tempoAtuacaoPeriodo"
                value={formData.tempoAtuacaoPeriodo}
                onChange={handleChange}
              >
                <option value="meses">Meses</option>
                <option value="anos">Anos</option>
              </select>
            </div>
            {errors.tempoAtuacaoNumero?.error && <small className="error-message">{errors.tempoAtuacaoNumero.errorMessage}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="publicoAlvo">Público-Alvo</label>
            <textarea
              id="publicoAlvo"
              name="publicoAlvo"
              placeholder="Descreva seu público ideal"
              value={formData.publicoAlvo}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </fieldset>

        <fieldset>
          <legend>Serviços</legend>
          
          <div className="form-group">
            <label htmlFor="servicos">Serviços oferecidos *</label>
            <textarea
              id="servicos"
              name="servicos"
              placeholder="Descreva os serviços que você oferece"
              value={formData.servicos}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.servicos?.error ? 'error' : ''}
            />
            {errors.servicos?.error && <small className="error-message">{errors.servicos.errorMessage}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="doresClientes">Principais dores dos clientes *</label>
            <textarea
              id="doresClientes"
              name="doresClientes"
              placeholder="Quais são os principais problemas que seus clientes enfrentam?"
              value={formData.doresClientes}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.doresClientes?.error ? 'error' : ''}
            />
            {errors.doresClientes?.error && <small className="error-message">{errors.doresClientes.errorMessage}</small>}
          </div>
        </fieldset>

        <fieldset>
          <legend>Identidade Visual</legend>
          
          <div className="form-group">
            <label htmlFor="logotipo">Possui logotipo? *</label>
            <select
              id="logotipo"
              name="logotipo"
              value={formData.logotipo}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.logotipo?.error ? 'error' : ''}
            >
              <option value="">Selecione...</option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>
            {errors.logotipo?.error && <small className="error-message">{errors.logotipo.errorMessage}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="slogan">Slogan</label>
            <input
              type="text"
              id="slogan"
              name="slogan"
              placeholder="Seu slogan ou frase de impacto"
              value={formData.slogan}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          <div className="form-group">
            <label htmlFor="cores">Cores preferidas</label>
            <input
              type="text"
              id="cores"
              name="cores"
              placeholder="Ex: Azul, Branco e Prata"
              value={formData.cores}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          <div className="form-group">
            <label htmlFor="referencia">Referência de site</label>
            <input
              type="text"
              id="referencia"
              name="referencia"
              placeholder="URL de sites que você gosta"
              value={formData.referencia}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </fieldset>

        <fieldset>
          <legend>Redes Sociais</legend>
          
          <div className="form-group">
            <label htmlFor="instagram">
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
            />
          </div>

          <div className="form-group">
            <label htmlFor="facebook">
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
            />
          </div>

          <div className="form-group">
            <label htmlFor="linkedin">
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
            />
          </div>

          <div className="form-group">
            <label htmlFor="tiktok">
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
            />
          </div>

          <div className="form-group">
            <label htmlFor="youtube">
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
            />
          </div>
        </fieldset>

        <fieldset>
          <legend>Objetivos</legend>
          
          <div className="form-group">
            <label htmlFor="objetivo">Objetivo da página *</label>
            <textarea
              id="objetivo"
              name="objetivo"
              placeholder="O que você espera alcançar com seu site?"
              value={formData.objetivo}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.objetivo?.error ? 'error' : ''}
            />
            {errors.objetivo?.error && <small className="error-message">{errors.objetivo.errorMessage}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="depoimentos">Incluir depoimentos? *</label>
            <select
              id="depoimentos"
              name="depoimentos"
              value={formData.depoimentos}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.depoimentos?.error ? 'error' : ''}
            >
              <option value="">Selecione...</option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>
            {errors.depoimentos?.error && <small className="error-message">{errors.depoimentos.errorMessage}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="oferta">Oferta especial</label>
            <input
              type="text"
              id="oferta"
              name="oferta"
              placeholder="Tem alguma promoção ou oferta especial?"
              value={formData.oferta}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </fieldset>

        <div className="form-actions">
          <button type="submit" className="btn-submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Formulario;
import React, { useState, useEffect } from 'react';
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
    cnpj: '',
    empresa: '',
    tempoAtuacao: '',
    servicos: '',
    doresClientes: '',
    logotipo: '',
    slogan: '',
    cores: '',
    referencia: '',
    redesSociais: '',
    objetivo: '',
    depoimentos: '',
    oferta: '',
    blog: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};
    Object.keys(formData).forEach((key) => {
      if (formData[key] === '') {
        formErrors[key] = true;
      }
    });

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      const message = encodeURIComponent(
        `Novo formulário preenchido:\n\n` +
        `Nome: ${formData.nome}\n` +
        `E-mail: ${formData.email}\n` +
        `Telefone: ${formData.telefone}\n` +
        `Cidade: ${formData.cidade}\n` +
        `Profissão: ${formData.profissao}\n` +
        `Possui CNPJ? ${formData.cnpj}\n` +
        `Empresa: ${formData.empresa}\n` +
        `Tempo de atuação: ${formData.tempoAtuacao}\n` +
        `Serviços oferecidos: ${formData.servicos}\n` +
        `Principais dores dos clientes: ${formData.doresClientes}\n` +
        `Possui logotipo? ${formData.logotipo}\n` +
        `Slogan: ${formData.slogan}\n` +
        `Cores preferidas: ${formData.cores}\n` +
        `Referência de site: ${formData.referencia}\n` +
        `Redes sociais: ${formData.redesSociais}\n` +
        `Objetivo da página: ${formData.objetivo}\n` +
        `Incluir depoimentos? ${formData.depoimentos}\n` +
        `Oferta especial: ${formData.oferta}\n` +
        `Incluir blog? ${formData.blog}`
      );
      window.open(`https://wa.me/5553991244320?text=${message}`, '_blank');
    }
  };

  return (
    <div className="formulario-container">
      <h1>Preencha seu formulário</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome completo"
          onChange={handleChange}
          className={errors.nome ? 'error' : ''}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={handleChange}
          className={errors.email ? 'error' : ''}
          required
        />
        <input
          type="tel"
          name="telefone"
          placeholder="Telefone/WhatsApp"
          onChange={handleChange}
          className={errors.telefone ? 'error' : ''}
          required
        />
        <input
          type="text"
          name="cidade"
          placeholder="Cidade e Estado"
          onChange={handleChange}
          className={errors.cidade ? 'error' : ''}
          required
        />
        <input
          type="text"
          name="profissao"
          placeholder="Profissão"
          onChange={handleChange}
          className={errors.profissao ? 'error' : ''}
          required
        />
        <select
          name="cnpj"
          onChange={handleChange}
          className={errors.cnpj ? 'error' : ''}
          required
        >
          <option value="">Possui CNPJ?</option>
          <option value="Sim">Sim</option>
          <option value="Não">Não</option>
        </select>
        <input
          type="text"
          name="empresa"
          placeholder="Nome da empresa (se aplicável)"
          onChange={handleChange}
          className={errors.empresa ? 'error' : ''}
        />
        <input
          type="text"
          name="tempoAtuacao"
          placeholder="Tempo de atuação"
          onChange={handleChange}
          className={errors.tempoAtuacao ? 'error' : ''}
          required
        />
        <textarea
          name="servicos"
          placeholder="Serviços oferecidos"
          onChange={handleChange}
          className={errors.servicos ? 'error' : ''}
          required
        ></textarea>
        <textarea
          name="doresClientes"
          placeholder="Principais dores dos clientes"
          onChange={handleChange}
          className={errors.doresClientes ? 'error' : ''}
          required
        ></textarea>
        <select
          name="logotipo"
          onChange={handleChange}
          className={errors.logotipo ? 'error' : ''}
          required
        >
          <option value="">Possui logotipo?</option>
          <option value="Sim">Sim</option>
          <option value="Não">Não</option>
        </select>
        <input
          type="text"
          name="slogan"
          placeholder="Slogan (se tiver)"
          onChange={handleChange}
          className={errors.slogan ? 'error' : ''}
        />
        <input
          type="text"
          name="cores"
          placeholder="Cores preferidas"
          onChange={handleChange}
          className={errors.cores ? 'error' : ''}
          required
        />
        <input
          type="url"
          name="referencia"
          placeholder="Referência de site"
          onChange={handleChange}
          className={errors.referencia ? 'error' : ''}
        />
        <textarea
          name="redesSociais"
          placeholder="Links das redes sociais"
          onChange={handleChange}
          className={errors.redesSociais ? 'error' : ''}
        ></textarea>
        <input
          type="text"
          name="objetivo"
          placeholder="Objetivo da página"
          onChange={handleChange}
          className={errors.objetivo ? 'error' : ''}
          required
        />
        <select
          name="depoimentos"
          onChange={handleChange}
          className={errors.depoimentos ? 'error' : ''}
          required
        >
          <option value="">Incluir depoimentos?</option>
          <option value="Sim">Sim</option>
          <option value="Não">Não</option>
        </select>
        <input
          type="text"
          name="oferta"
          placeholder="Oferta especial (se houver)"
          onChange={handleChange}
          className={errors.oferta ? 'error' : ''}
        />
        <select
          name="blog"
          onChange={handleChange}
          className={errors.blog ? 'error' : ''}
        >
          <option value="">Incluir blog?</option>
          <option value="Sim">Sim</option>
          <option value="Não">Não</option>
        </select>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Formulario;

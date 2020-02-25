import React, { useState } from 'react';

import SectionTitle from  '../../Components/SectionTitle/SectionTitle';
import Button from  '../../Components/Button/Button';
import submitForm from './formSubmit';

import './Footer.scss';

export default function Footer() {
  const [formState, setFormState] = useState({
    status: 'awaiting',
    feedback: '',
    data: {
      nome: '',
      email: '',
      assunto: '',
      mensagem: '',
    }
  });

  const renderSubmitButton = () => {
    const props = {
      type: submitForm,
      children: 'Enviar'
    }
  
    if(formState.status === 'sending') {
      props.disabled = true;
      props.children = 'Enviando';
    }
  
    return <Button {...props} />
  }

  const handleInput = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    const { data } = formState;
    data[key] = value;

    setFormState({ ...formState, data })
  }

console.log(formState)
  return (
    <footer className="main-footer">
      <form onSubmit={(e) => submitForm(e, formState, setFormState)} id="contato">
        <SectionTitle
          title="Contato"
          subtitle="Ficou interessado em trabalhar comigo?"
          centered
        />

        <div className="fields">
          <input name="nome" type="text" onChange={handleInput} value={formState.data.nome} placeholder="Nome" />
          <input name="email" type="email" onChange={handleInput} value={formState.data.email} placeholder="E-mail" />
          <input name="assunto" type="text" onChange={handleInput} value={formState.data.assunto} placeholder="Assunto" />
          <textarea name="mensagem" cols="30" rows="10" onChange={handleInput} value={formState.data.mensagem} placeholder="Mensagem"></textarea>
          {renderSubmitButton()}
          <p className={`feedback ${formState.status !== 'awaiting' && 'shown'}`}>{formState.feedback}</p>
        </div>
      </form>
      <p className="disclaimer">
        © <span className="year">{new Date().getFullYear()}</span> Todos os direitos reservados a Amanda Yoshiizumi Creative Design | Desenvolvido por <a href="https://guiluchesi.com" target="_blank" rel="noopener noreferrer">Gui Luchesi</a>
      </p>
    </footer>
  );
}

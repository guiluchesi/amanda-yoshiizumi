import React, { Fragment } from 'react';

export default function submitForm(e, formState, setFormState) {
  e.preventDefault();
  setFormState({
    ...formState,
    status: 'sending',
  });

  const data = new URLSearchParams(new FormData(e.target));
  const url = 'https://submit-form.com/WyR2AnbUs0hGCMvzAzpK4';
  fetch(url, {
    method: 'post',
    body: data,
  })
  .then((res) => {
    if(!res.ok) {
      throw new Error();
    }
  
    return res;
  })
  .then(() => {
    setFormState({
      ...formState,
      status: 'sent',
      feedback: 'Obrigado! O seu e-mail foi enviado.',
      data: {
        nome: '',
        email: '',
        assunto: '',
        mensagem: '',
      }
    });

    setTimeout(() => {
      setFormState({
        ...formState,
        status: 'awaiting',
        feedback: ''
      });
    }, 5000)
  })
  .catch(() => {
    const nome = data.get('nome');
    const assunto = data.get('assunto');
    const mensagem = data.get('mensagem');
    const mailToLink = `mailto:mandy.yoshiizumi@gmail.com?subject=${encodeURI(assunto)}&body=${encodeURI(`Nome: ${nome} \nMensagem:\n${mensagem}`)}`

    setFormState({
      ...formState,
      status: 'error',
      feedback: <Fragment>
        Não foi possível enviar o formulário. <br/>
        Entre em contato pelo <a href={mailToLink}>mandy.yoshiizumi@gmail.com</a>
      </Fragment>,
    })
  })
}

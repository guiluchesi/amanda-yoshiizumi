import React, { Fragment } from 'react';

import './Depoimento.scss';

export default function Depoimento({info, testimonial}) {
  return (
    <Fragment>
      <div className="portrait">
        <img src={info.picture} alt={`${info.name}, ${info.jobTitle}`} />
      </div>
      <div className="conteudo">
        <q>"{testimonial}"</q>
        <hgroup className="info">
          <h4 className="nome">{info.name}</h4>
          <h4 className="cargo">{info.jobTitle}</h4>
        </hgroup>
      </div>
    </Fragment>
  );
}

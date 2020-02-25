import React from 'react';

import './Card.scss';

export default function Card({title, subtitle, icon, className = '', ...props}) {
  return (
    <div data-testid="card" className={`card ${className}`} {...props}>
      <img src={icon} alt={title} className="card-icon" />
      <h4 className="h3">{title}</h4>
      <p>{subtitle}</p>
    </div>
  );
}

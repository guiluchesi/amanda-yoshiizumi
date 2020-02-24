import React from 'react';

import './Project.scss';

export default function Project({thumb, title, subtitle, className = '', ...props}) {
  return (
    <div className={`project ${className}`} {...props}>
      <img src={thumb} alt={title} />
      <div className="info">
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

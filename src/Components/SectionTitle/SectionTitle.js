import React from 'react';

import './SectionTitle.scss'

export default function SectionTitle({title, subtitle, centered, className = '', ...props}) {
  return (
    <hgroup className={`section-title ${centered ? 'centered' : ''} ${className}`} {...props}>
      <h2 className="h6">{title}</h2>
      <h3 className="h2">{subtitle}</h3>
    </hgroup>
  );
}

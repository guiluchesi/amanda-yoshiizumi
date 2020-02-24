import React from 'react';

import './Social.scss';

export default function Social({ type, ...props }) {
  return (
    <a
      target="_blank"
      rel="noreferrer noopener"
      className={`social-item ${type}`}
      {...props}
    >
      {type}
    </a>
  );
}

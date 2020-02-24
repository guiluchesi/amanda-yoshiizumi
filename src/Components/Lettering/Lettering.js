import React from 'react';
import Typed from 'react-typed';

import './Lettering.scss';

export default function Lettering({base, options, className = '', ...props}) {
  return (
    <p className={`h1 main-lettering ${className}`} {...props}>
      {base} <Typed
        strings={options}
        className="typed"
        typeSpeed={40}
        backDelay={1700}
        backSpeed={50}
        loop
      />
    </p>
  );
}

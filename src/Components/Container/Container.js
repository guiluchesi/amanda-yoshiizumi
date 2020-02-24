import { createElement } from 'react';

import './Container.scss';

export default function Container({children, className = '', tag = 'div', ...props}) {
  return createElement(
    tag,
    { className: `container ${className}`, ...props },
    children
  );
}

import { createElement } from 'react';

import './Button.scss';

export default function Button({tag = 'button', className = '', type, children, ...props}) {
  return createElement(
    tag,
    {
      className: `btn ${type === 'marked' ? 'marked' : ''} ${className}`,
      target: '_blank',
      rel: 'noreferrer noopener',
      ...props
    },
    children
  );
}

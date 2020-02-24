import React from 'react';

import Social from '../Social/Social'

import Logo from  '../../Assets/img/logo-amanda-yoshiizumi.svg';

import './Nav.scss';

const socialLinks = {
  'twitter': 'https://twitter.com/MANDYellow',
  'instagram': 'https://instagram.com/mandyellow.jpg',
  'linkedin': 'https://www.linkedin.com/in/amanda-yoshiizumi-33011754/',
  'behance': 'https://www.behance.net/amandayoshiizumi',
}

export default function Nav() {
  return (
    <nav className="header-nav">
      <div className="logo">
        <img src={Logo} alt="Amanda Yoshiizumi" />
      </div>
      <ul className="social-links">
        {
          Object.keys(socialLinks).map((link, index, allLinks) => (
            <li key={link}><Social href={allLinks[link]} type={link} /></li>
          ))
        }
      </ul>
    </nav>
  );
}

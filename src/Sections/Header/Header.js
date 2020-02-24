import React, { Fragment } from 'react';

import Nav from '../../Components/Nav/Nav'
import Container from '../../Components/Container/Container'
import Lettering from '../../Components/Lettering/Lettering'

import './Header.scss';

import triangle3d from '../../Assets/img/triangle-3d.png';
import triangleLines from '../../Assets/img/triangle-lines.png';

export default function Header() {
  return (
    <header className="main-header">
      <div className="scene">
        <img data-depth="0.2" className="triangle-bg" src={triangle3d} alt="Triangulos de fundo" />
        <img data-depth="0.6" className="triangle-lines" src={triangleLines} alt="Borda em parallax dos triangulos" />
      </div>

      <Container>
        <Nav />
        <Lettering
          base={<Fragment>Todos os dias criando <br/> projetos que são </Fragment>}
          options={['flexíveis_', 'modernos_', 'criativos_']}
        />
      </Container>
    </header>
  );
}

import React from 'react';

import Container from '../../Components/Container/Container'
import SectionTitle from '../../Components/SectionTitle/SectionTitle'
import Card from '../../Components/Card/Card'

import criacaoDeMarca from '../../Assets/img/icon-criacao-marca.svg';
import sitesEAplicativos from '../../Assets/img/icon-sites-e-aplicativos.svg';
import midiasSociais from '../../Assets/img/icon-midias-sociais.svg';

import './Sobre.scss';

export default function Sobre() {
  return (
    <Container className="sobre" tag='section'>
      <SectionTitle
        title="Sobre a empresa"
        subtitle="Trabalhando com você para entender o seu negócio!"
      />
      <div className="cards">
        <Card
          icon={criacaoDeMarca}
          title="Criação de Marcas"
          subtitle="Criação de marca e elaboração de manual de identidade visual."
        />
        <Card
          icon={sitesEAplicativos}
          title="Sites e Aplicativos"
          subtitle="Criação de layout personalizado e exclusivo para sites e aplicativos."
        />
        <Card
          icon={midiasSociais}
          title="Mídias Sociais"
          subtitle="Criação de arte para mídias sociais para divulgação de produtos e serviços."
        />
      </div>
    </Container>
  );
}

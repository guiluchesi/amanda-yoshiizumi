import React, { Fragment } from 'react';

import Container from '../../Components/Container/Container';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import Project from '../../Components/Project/Project';
import Button from '../../Components/Button/Button';

import './Portifolio.scss';

const projects = [
  {
    thumb: require('../../Assets/img/projetos/portfolio-01.png'),
    title: "TouchPay AMLabs",
    subtitle: "Criação da marca e das telas do fluxo de pagamento para que sejam simples e intuitivas, além do layout do site, mockups do produto e materiais para divulgação."
  },
  {
    thumb: require('../../Assets/img/projetos/portfolio-02.png'),
    title: 'Câmbio Digital',
    subtitle: 'Desenvolvimento da identidade visual baseada na marca já existente do cliente para criação do novo site em parceria com a FocalWeb.',
  },
  {
    thumb: require('../../Assets/img/projetos/portfolio-03.png'),
    title: 'Avalon Eventos',
    subtitle: 'Trabalho de rebrand de todas as marcas do Circuito AnimeFest e novo posicionamento nas mídias sociais, com uma nova comunicação visual mais moderna.',
  },
  {
    thumb: require('../../Assets/img/projetos/portfolio-04.png'),
    title: 'AMLabs Ventures',
    subtitle: 'Criação da marca e site para divulgar o portfólio de negócios da startup studio AMLabs Ventures, além de vagas para trabalho e formação de talentos.',
  },
  {
    thumb: require('../../Assets/img/projetos/portfolio-05.png'),
    title: 'Barba Burguer',
    subtitle: 'Criação da marca e personalização de todo o material gráfico da hamburgueria, que incluem: papel manteiga, cardápio, cartão de visitas e embalagem para entrega.',
  },
  {
    thumb: require('../../Assets/img/projetos/portfolio-06.png'),
    title: 'WiseSales',
    subtitle: 'Criação das telas para o sistema WiseSales de fidelização de clientes, tanto para Desktop quando para Aplicativo Mobile em parceria com a AMLabs Ventures.',
  },
  {
    thumb: require('../../Assets/img/projetos/portfolio-07.png'),
    title: 'Korvack',
    subtitle: 'Criação da marca, template personalizado para a lives na TwichTV e comunicação visual padronizada para todas as redes sociais como Facebook e Twitter.',
  },
  {
    thumb: require('../../Assets/img/projetos/portfolio-08.png'),
    title: 'MR Paisagismo',
    subtitle: 'Criação da marca e material gráfico personalizado que incluem papel timbrado e cartão de visitas.',
  },
  {
    thumb: require('../../Assets/img/projetos/portfolio-09.png'),
    title: 'Cainvest Bank',
    subtitle: 'Site com fotos e ícones de serviços personalizados de acordo com a identidade visual da marca, realizado em parceria com a PrinciWeb.',
  },
]

export default function Portifolio() {
  return (
    <Container tag="section" className="portifolio">
      <SectionTitle
        title="Portifólio"
        subtitle={<Fragment>Soluções simples para desafios complexos. <br /> Conheça um pouco do meu trabalho!</Fragment>}
        centered
      />

      <div className="projects">
        {
          projects.map(({thumb, title, subtitle}) => (
            <Project
              key={title}
              thumb={thumb}
              title={title}
              subtitle={subtitle}
            />
          ))
        }
      </div>

      <Button href="https://www.behance.net/amandayoshiizumi" type="marked">
        Veja mais no meu Behance
      </Button>
    </Container>
  );
}

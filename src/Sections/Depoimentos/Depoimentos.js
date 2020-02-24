import React from 'react';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';

import Container from '../../Components/Container/Container';
import Depoimento from '../../Components/Depoimento/Depoimento';

import 'pure-react-carousel/dist/react-carousel.es.css';
import './Depoimentos.scss';

const depoimentos = [
  {
    info: {
      picture: require('../../Assets/img/clientes/eric-princiweb.jpg'),
      name: 'Eric Princi',
      jobTitle: 'Diretor de Projetos | PrinciWeb'
    },
    testimonial: 'Temos uma sólida parceria de trabalho. Além de uma excelente qualidade estética, a Amanda tem muita habilidade de captação de ideias e execução. Sempre comprometida e ágil, tenho confiança de que projetos que realizamos juntos terão êxito.',
  },
]

export default function Depoimentos() {
  return (
    <section className="depoimentos">
      <Container>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={21}
          totalSlides={depoimentos.length}
          className="depoimentos-wrapper"
        >
          <Slider>
            {depoimentos.map((depoimento, index) => (
              <Slide className="depoimento" index={index} key={`${depoimento.info.name} - ${index}`}>
                <Depoimento info={depoimento.info} testimonial={depoimento.testimonial} />
              </Slide>
            ))}
          </Slider>
          <div className="depoimentos-nav">
            <DotGroup />
          </div>
        </CarouselProvider>
      </Container>
    </section>
  );
}

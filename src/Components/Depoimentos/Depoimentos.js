import React from 'react';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';

import Depoimento from '../Depoimento/Depoimento'

export default function Depoimentos({depoimentos, ...props}) {
  return (
    <div data-testid="depoimentos" {...props}>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={21}
        totalSlides={depoimentos ? depoimentos.length : 0}
        className="depoimentos-wrapper"
        data-testid="slider"
      >
        <Slider>
          {
            depoimentos && depoimentos.map((depoimento, index) => (
              <Slide key={`${depoimento}-$${index}`} index={index} data-testid="depoimento" className="depoimento">
                <Depoimento info={depoimento.info} testimonial={depoimento.testimonial} />
              </Slide>
            ))
          }
        </Slider>
      </CarouselProvider>
    </div>
  );
}

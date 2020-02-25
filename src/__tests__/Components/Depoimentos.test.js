import React from 'react'
import { render, cleanup } from '@testing-library/react'

import Depoimentos from '~/Components/Depoimentos/Depoimentos'

describe('Depoimentos component', () => {
  it('should exist', () => {
    const { getByTestId } = render(<Depoimentos />);
    expect(getByTestId('depoimentos')).toBeTruthy();
  })

  it('should be a slider', () => {
    const { getByTestId } = render(<Depoimentos />);
    expect(getByTestId('slider')).toBeTruthy();
  })

  it('should render the all the testimonials as a slide', () => {
    const testimonials = [
      {
        info: {
          picture: require('../../Assets/img/clientes/eric-princiweb.jpg'),
          name: 'Testing 1',
          jobTitle: 'Testing'
        },
        testimonial: 'Lorem testing ipsum',
      },
      {
        info: {
          picture: require('../../Assets/img/clientes/eric-princiweb.jpg'),
          name: 'Testing 2',
          jobTitle: 'Testing'
        },
        testimonial: 'Lorem testing ipsum',
      },
    ];

    let { getAllByTestId, getByTestId } = render(<Depoimentos depoimentos={testimonials} />);
    expect(getAllByTestId('depoimento')).toHaveLength(2);

    cleanup();

    ({ getAllByTestId } = render(<Depoimentos depoimentos={[...testimonials, {
      info: {
        picture: require('../../Assets/img/clientes/eric-princiweb.jpg'),
        name: 'Testing 3',
        jobTitle: 'Testing'
      },
      testimonial: 'Lorem testing ipsum',
    }]} />));

    expect(getAllByTestId('depoimento')).toHaveLength(3);
  })
})
import React from 'react'
import { render } from '@testing-library/react'

import Button from '~/Components/Button/Button'

describe('Button component', () => {
  it('should exist', () => {
    const { getByTestId } = render(<Button />)
    expect(getByTestId('button')).toBeTruthy();
  });

  it('should render as a button by default', () => {
    const { getByTestId } = render(<Button />)
    expect(getByTestId('button')).toContainHTML('<button ');
  })

  it('should have a target blank by default', () => {
    const { getByTestId } = render(<Button />)
    expect(getByTestId('button')).toHaveAttribute('target', '_blank');
  })
  
  it('should render as an "a" if passed by props', () => {
    const { getByTestId } = render(<Button tag="a" />)
    expect(getByTestId('button')).toContainHTML('<a ');
  })
})
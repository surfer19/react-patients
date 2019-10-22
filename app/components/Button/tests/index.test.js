/**
 *
 * Tests for Button
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import Button from '../index';
const buttonText = 'buttonText';

const renderComponent = () => render(<Button>{buttonText}</Button>);

describe('<Button />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Button>{buttonText}</Button>);
    expect(spy).not.toHaveBeenCalled();
  });

  it('should exist', () => {
    const { container } = renderComponent();
    expect(container.querySelector('button')).not.toBeNull();
  });

  it('should have a class attribute with default value', () => {
    const { container } = renderComponent();
    expect(container.querySelector('button').hasAttribute('class')).toBe(true);
    expect(container.querySelector('button').getAttribute('class')).toBe(
      'btn btn-primary ',
    );
  });

  it('Should render and match the snapshot', () => {

    expect(renderComponent).toMatchSnapshot();
  });
});

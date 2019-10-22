/**
 *
 * Tests for Input
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import Input from '../index';
// import 'jest-dom/extend-expect'; // add some helpful assertions
const someLabel = 'someLabel';
const somePlaceholder = 'somePlaceholder';
const renderComponent = (props = {}) =>
  render(<Input label={someLabel} placeholder={somePlaceholder} {...props} />);

describe('<Input />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Input />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('should exist', () => {
    const { container } = renderComponent();
    expect(container.querySelector('input')).not.toBeNull();
  });

  it('should have a class attribute', () => {
    const { container } = renderComponent();
    expect(container.querySelector('input').hasAttribute('class')).toBe(true);
  });

  it('should have a aria-describedby attribute', () => {
    const { container } = renderComponent();
    expect(
      container.querySelector('input').hasAttribute('aria-describedby'),
    ).toBe(true);
  });

  it('should have a placeholder attribute', () => {
    const { container } = renderComponent();
    expect(container.querySelector('input').hasAttribute('placeholder')).toBe(
      true,
    );
  });

  it('should have a label tag', () => {
    const { container } = renderComponent();
    expect(container.querySelector('label')).not.toBe(null);
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Input />);
    expect(firstChild).toMatchSnapshot();
  });
});

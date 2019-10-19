/**
 *
 * Tests for H4
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import H4 from '../index';

describe('<H4 />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<H4 />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('should render its text', () => {
    const children = 'Text';
    const { container, queryByText } = render(<H4>{children}</H4>);
    const { childNodes } = container.querySelector('H4');
    expect(childNodes).toHaveLength(1);
    expect(queryByText(children)).not.toBeNull();
  });

  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<H4 />);
    expect(firstChild).toMatchSnapshot();
  });
});

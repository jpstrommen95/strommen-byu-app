import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  it, expect, describe,
} from '@jest/globals';
import SideNavItemList from './side-nav-item-list';

function mockComponent({ pageArray }) {
  return (
    <SideNavItemList
      pageArray={pageArray}
    />
  );
}

describe('side nav item list', () => {
  it('renders the component with one item', () => {
    expect.assertions(1);
    render(mockComponent({ pageArray: [{ name: 'my test' }] }));
    const htmlElement = screen.queryByRole('heading', { name: /my test/i });
    expect(htmlElement).toBeInTheDocument();
  });

  it('renders the component with two items', () => {
    expect.assertions(3);
    render(mockComponent({
      pageArray: [
        { name: 'my test 1' },
        { name: 'my test 2' },
      ],
    }));
    const htmlElements = screen.queryAllByRole('heading', { name: /my test/i });
    expect(htmlElements).toHaveLength(2);
    expect(htmlElements[0]).toHaveTextContent(/my test 1/);
    expect(htmlElements[1]).toHaveTextContent(/my test 2/);
  });
});

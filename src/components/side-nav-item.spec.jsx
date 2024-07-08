import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  it, expect, describe,
} from '@jest/globals';
import SideNavItem from './side-nav-item';

function mockComponent({ name }) {
  return (
    <SideNavItem
      name={name}
    />
  );
}

describe('side nav item', () => {
  it('renders the component', () => {
    expect.assertions(1);
    render(mockComponent({ name: 'my test' }));
    const htmlElement = screen.queryByRole('heading', { name: /^my test$/i });
    expect(htmlElement).toBeInTheDocument();
  });
});

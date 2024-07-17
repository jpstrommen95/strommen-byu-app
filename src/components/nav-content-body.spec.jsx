import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  it, expect, describe,
} from '@jest/globals';
import { MemoryRouter } from 'react-router-dom';
import NavContentBody from './nav-content-body';

function mockComponent() {
  return (
    <MemoryRouter>
      <NavContentBody
        pageArray={[
          { name: 'tab a' },
          { name: 'b' },
          { name: 'c' },
        ]}
        component={<p>hello world</p>}
      />
    </MemoryRouter>
  );
}

describe('nav content body', () => {
  it('renders the component', () => {
    expect.assertions(1);
    render(mockComponent());
    const htmlElement = screen.queryByText(/hello world/i);
    expect(htmlElement).toBeInTheDocument();
  });

  it('renders the nav rail', () => {
    expect.assertions(7);
    render(mockComponent());
    const navElements = screen.queryAllByRole('heading');
    expect(navElements).toHaveLength(3);
    expect(navElements[0]).toBeInTheDocument();
    expect(navElements[1]).toBeInTheDocument();
    expect(navElements[2]).toBeInTheDocument();
    expect(navElements[0]).toHaveTextContent(/tab a/i);
    expect(navElements[1]).toHaveTextContent(/b/i);
    expect(navElements[2]).toHaveTextContent(/c/i);
  });
});

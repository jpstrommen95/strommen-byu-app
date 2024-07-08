import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './app';

function mockComponent() {
  return (
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
}

describe('app', () => {
  it('should render the top menu', () => {
    expect.assertions(1);
    // WHEN
    render(mockComponent());
    const topMenuElement = screen.queryByRole('heading', { name: /strommenbyu.com/i });

    // THEN
    expect(topMenuElement).toBeInTheDocument();
  });
});

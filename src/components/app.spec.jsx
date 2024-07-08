import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './app';

function mockApp() {
  return <App />;
}

describe('app', () => {
  it('should render the top menu', () => {
    expect.assertions(1);
    // WHEN
    render(mockApp());
    const topMenuElement = screen.queryByRole('heading', { name: /strommenbyu.com/i });

    // THEN
    expect(topMenuElement).toBeInTheDocument();
  });
});

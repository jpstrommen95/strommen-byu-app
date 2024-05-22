import React from 'react';
import { render, screen } from '@testing-library/react';
import HelloWorld from './hello-world';

test('renders Hello, World! message', () => {
  render(<HelloWorld />);
  const headingElement = screen.getByText(/Hello, World!/i);
  expect(headingElement).toBeInTheDocument();
});

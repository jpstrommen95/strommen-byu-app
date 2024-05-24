import React from 'react';
import { render, screen } from '@testing-library/react';
import { it, expect } from '@jest/globals';
import HelloWorld from './hello-world';

it('renders Hello, World! message', () => {
  render(<HelloWorld />);
  const headingElement = screen.getByText(/Hello, World!/i);
  expect(headingElement).toBeInTheDocument();
});

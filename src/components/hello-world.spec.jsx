import React from 'react';
import { render, screen } from '@testing-library/react';
import { it, expect, describe } from '@jest/globals';
import HelloWorld from './hello-world';

describe('Hello World', () => {
  it('renders Hello, World! message', () => {
    render(<HelloWorld />);
    const headingElement = screen.getByText(/Hello, World!/i);
    expect(headingElement).toBeInTheDocument();
  });
});

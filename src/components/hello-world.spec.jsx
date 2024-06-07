import React from 'react';
import { render, screen } from '@testing-library/react';
import { it, expect, describe } from '@jest/globals';
import HelloWorld from './hello-world';

describe('hello world', () => {
  it('renders Hello, World! message', () => {
    expect.assertions(1);
    render(<HelloWorld />);
    const headingElement = screen.getByText(/Hello, World!/i);
    expect(headingElement).toBeInTheDocument();
  });
});

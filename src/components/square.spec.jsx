import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  it, expect, describe, jest,
} from '@jest/globals';
import Square from './square';

const mockOnClick = jest.fn();

function mockSquare({ value }) {
  return <Square onClick={mockOnClick} value={value} />;
}

describe('Square', () => {
  it('renders a button', () => {
    render(mockSquare({}));
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });

  it('contains the content \'X\'', () => {
    // WHEN
    render(mockSquare({ value: 'X' }));
    const buttonElement = screen.getByRole('button');

    // THEN
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(/^X$/);
  });

  it('onClick action is performed when button is clicked', () => {
    // GIVEN
    const { getByRole } = render(mockSquare({}));
    const buttonElement = getByRole('button');
    expect(buttonElement).toBeInTheDocument();

    // WHEN
    fireEvent.click(buttonElement);

    // THEN
    expect(mockOnClick).toHaveBeenCalled();
  });
});

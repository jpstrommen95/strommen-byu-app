import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  it, expect, describe, jest,
} from '@jest/globals';
import Board from './board';

const mockOnClick = jest.fn();

function mockBoard() {
  return (
    <Board
      onClick={mockOnClick}
      squaresArray={Array(9).fill('test')}
    />
  );
}

describe('board', () => {
  it('should render a board', () => {
    expect.assertions(1);
    // WHEN
    render(mockBoard());
    const boardElement = screen.getByTestId('board-base');

    // THEN
    expect(boardElement).toBeInTheDocument();
  });

  it('should render 3 rows of 3 empty squares for the board', () => {
    expect.assertions(11);
    // WHEN
    render(mockBoard());
    const boardRows = screen.getByTestId('board-base').getElementsByClassName('board-row');
    const boardSquares = screen.getByTestId('board-base').getElementsByClassName('square');

    // THEN
    expect(boardRows).toHaveLength(3);
    expect(boardSquares).toHaveLength(9);

    expect(boardRows[0]).toContainElement(boardSquares[0]);
    expect(boardRows[0]).toContainElement(boardSquares[1]);
    expect(boardRows[0]).toContainElement(boardSquares[2]);
    expect(boardRows[1]).toContainElement(boardSquares[3]);
    expect(boardRows[1]).toContainElement(boardSquares[4]);
    expect(boardRows[1]).toContainElement(boardSquares[5]);
    expect(boardRows[2]).toContainElement(boardSquares[6]);
    expect(boardRows[2]).toContainElement(boardSquares[7]);
    expect(boardRows[2]).toContainElement(boardSquares[8]);
  });

  it('should run the square\'s onClick action', () => {
    expect.assertions(2);
    // GIVEN
    render(mockBoard());
    const someSquare = screen.getAllByRole('button', { name: 'test' })[0];
    expect(someSquare).toBeInTheDocument();

    // WHEN
    fireEvent.click(someSquare);

    // THEN
    expect(mockOnClick).toHaveBeenCalledWith(expect.anything());
  });
});

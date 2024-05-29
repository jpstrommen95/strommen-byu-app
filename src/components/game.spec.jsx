import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  it, expect, describe,
} from '@jest/globals';
import Game from './game';

function mockGame() {
  return <Game />;
}

describe('Game', () => {
  describe('isThreeWayMatch', () => {
    it.each([
      {
        a: null, b: null, c: null, expected: false, desc: 'empty',
      },
      {
        a: 'X', b: 'O', c: 'X', expected: false, desc: 'both opponents',
      },
      {
        a: 'X', b: 'X', c: 'X', expected: true, desc: 'all X',
      },
      {
        a: 'O', b: 'O', c: 'O', expected: true, desc: 'all O',
      },
    ])('should return $expected if $desc', ({
      a, b, c, expected,
    }) => {
      const result = Game.isThreeWayMatch(a, b, c);
      expect(result).toBe(expected);
    });
  });

  describe('calculateWinner', () => {
    it.each([
      {
        squares: [
          null, null, null,
          null, null, null,
          null, null, null,
        ],
        expected: null,
        desc: 'should return null if empty game',
      },
      {
        squares: [
          null, null, null,
          'X', 'X', 'X',
          'O', 'O', null,
        ],
        expected: 'X',
        desc: 'should return \'X\' if winner for a simple game',
      },
      {
        squares: [
          'X', 'O', 'X',
          'X', 'O', null,
          'O', 'O', 'X',
        ],
        expected: 'O',
        desc: 'should return \'O\' if winner for a normal game',
      },
      {
        squares: [
          'X', 'X', 'O',
          'O', 'O', 'X',
          'X', 'X', 'O',
        ],
        expected: null,
        desc: 'should return null if tie',
      },
      {
        squares: [
          'X', 'X', 'X',
          'O', 'O', 'O',
          'X', 'O', 'X',
        ],
        expected: 'X',
        desc: 'should prioritize top line winner (\'X\') in an unrealistic dual-winner edge case',
      },
    ])('$desc', ({ squares, expected }) => {
      const result = Game.calculateWinner(squares);
      expect(result).toBe(expected);
    });
  });

  describe('getWinner', () => {
    const topLine = [0, 1, 2];
    const rightLine = [2, 5, 8];
    const diagonalLine = [0, 4, 8];

    it('should return X if X has won on the top line', () => {
      const result = Game.getWinner({
        lineToCheck: topLine,
        squares: [
          'X', 'X', 'X',
          'O', 'O', null,
          null, null, null,
        ],
      });

      expect(result).toBe('X');
    });

    it('should return O if O has won on the right line', () => {
      const result = Game.getWinner({
        lineToCheck: rightLine,
        squares: [
          'X', 'X', 'O',
          null, null, 'O',
          'X', 'X', 'O',
        ],
      });

      expect(result).toBe('O');
    });

    it('should return null if neither X nor O has won on the diagonal line', () => {
      const result = Game.getWinner({
        lineToCheck: diagonalLine,
        squares: [
          'X', 'X', 'O',
          null, null, 'O',
          'X', 'X', 'O',
        ],
      });

      expect(result).toBe(null);
    });
  });

  describe('render', () => {
    describe('empty state', () => {
      it('should render the board with empty state', () => {
        // WHEN
        render(mockGame());
        const squares = screen.getAllByRole('button', { name: '' });

        // THEN
        expect(squares).toHaveLength(9);
        expect(squares[0]).toHaveTextContent('');
        expect(squares[1]).toHaveTextContent('');
        expect(squares[2]).toHaveTextContent('');
        expect(squares[3]).toHaveTextContent('');
        expect(squares[4]).toHaveTextContent('');
        expect(squares[5]).toHaveTextContent('');
        expect(squares[6]).toHaveTextContent('');
        expect(squares[7]).toHaveTextContent('');
        expect(squares[8]).toHaveTextContent('');
      });

      it('should render game info with a button to jump to start', () => {
        // WHEN
        render(mockGame());
        const gameStartButton = screen.getByRole('button', { name: /go to game start/i });

        // THEN
        expect(gameStartButton).toBeInTheDocument();
      });

      it('should render game info with a status of X to go next (first)', () => {
        // WHEN
        render(mockGame());
        const statusDiv = screen.getByText(/next player/i);

        // THEN
        expect(statusDiv).toBeInTheDocument();
        expect(statusDiv).toHaveTextContent(/next player.*: X/i);
      });
    });

    describe('one move state', () => {
      it('should display O to go next', () => {
        // GIVEN
        render(mockGame());
        const statusDiv = screen.getByText(/next player/i);
        const squares = screen.getAllByRole('button', { name: '' });
        expect(statusDiv).toHaveTextContent(/next player.*: X/i);

        // WHEN
        fireEvent.click(squares[0]);

        // THEN
        expect(statusDiv).toHaveTextContent(/next player.*: O/i);
      });

      it('should display game start and move #1 history', () => {
        // GIVEN
        render(mockGame());
        const gameStartButton = screen.queryByRole('button', { name: /go to game start/i });
        const move1Button = screen.queryByRole('button', { name: /move.*1/ });
        expect(gameStartButton).toBeInTheDocument();
        expect(gameStartButton).toHaveTextContent(/go to game start/i);
        expect(move1Button).not.toBeInTheDocument();

        // WHEN
        const squares = screen.getAllByRole('button', { name: '' });
        fireEvent.click(squares[0]);

        // THEN
        const gameStartButtonAfter = screen.queryByRole('button', { name: /go to game start/i });
        const move1ButtonAfter = screen.queryByRole('button', { name: /move.*1/ });
        expect(gameStartButtonAfter).toBeInTheDocument();
        expect(gameStartButtonAfter).toHaveTextContent(/go to game start/i);
        expect(move1ButtonAfter).toBeInTheDocument();
        expect(move1ButtonAfter).toHaveTextContent(/go to move #1/i);
      });

      it('should display a board where X has placed a move', () => {
        // GIVEN
        render(mockGame());
        const squares = screen.getAllByRole('button', { name: '' });
        expect(squares[0]).toHaveTextContent('');

        // WHEN
        fireEvent.click(squares[0]);

        // THEN
        expect(squares[0]).toHaveTextContent(/x/i);
      });

      it('should still say O is next, if O clicks on X\'s first move', () => {
        // GIVEN
        render(mockGame());
        const statusDiv = screen.getByText(/next player/i);
        expect(statusDiv).toHaveTextContent(/next player.*: X/i);
        const squares = screen.getAllByRole('button', { name: '' });
        fireEvent.click(squares[0]); // X plays
        expect(statusDiv).toHaveTextContent(/next player.*: O/i);

        // WHEN
        fireEvent.click(squares[0]); // O clicks invalid square

        // THEN
        expect(statusDiv).toHaveTextContent(/next player.*: O/i);
      });

      it('should clear the board when clicking \'go to game start\' after the first move', () => {
        // GIVEN
        render(mockGame());
        const squares = screen.getAllByRole('button', { name: '' });
        expect(squares[0]).toHaveTextContent('');
        fireEvent.click(squares[0]); // X plays first move
        expect(squares[0]).toHaveTextContent(/x/i);

        // WHEN
        const gameStartButton = screen.queryByRole('button', { name: /go to game start/i });
        fireEvent.click(gameStartButton);

        // THEN
        expect(squares[0]).toHaveTextContent('');
      });
    });

    describe('winner state', () => {
      it('should display winner status after winning move', () => {
        // GIVEN
        render(mockGame());
        const statusDiv = screen.getByText(/next player/i);
        expect(statusDiv).toHaveTextContent(/next player.*x/i);

        // WHEN
        const squares = screen.getAllByRole('button', { name: '' });
        fireEvent.click(squares[0]); // X plays, state is: X--; ---; ---;
        fireEvent.click(squares[3]); // O plays, state is: X--; O--; ---;
        fireEvent.click(squares[1]); // X plays, state is: XX-; O--; ---;
        fireEvent.click(squares[4]); // O plays, state is: XX-; OO-; ---;
        fireEvent.click(squares[2]); // X plays, state is: XXX; OO-; ---;

        // THEN
        expect(statusDiv).toHaveTextContent(/winner.*x/i);
      });

      it('should display winner status even after post-win clicks', () => {
        // GIVEN
        render(mockGame());
        const statusDiv = screen.getByText(/next player/i);
        expect(statusDiv).toHaveTextContent(/next player.*x/i);

        // WHEN
        const squares = screen.getAllByRole('button', { name: '' });
        fireEvent.click(squares[0]); // X plays, state is: X--; ---; ---;
        fireEvent.click(squares[3]); // O plays, state is: X--; O--; ---;
        fireEvent.click(squares[1]); // X plays, state is: XX-; O--; ---;
        fireEvent.click(squares[4]); // O plays, state is: XX-; OO-; ---;
        fireEvent.click(squares[2]); // X plays, state is: XXX; OO-; ---;
        fireEvent.click(squares[5]); // O tries to click, but can't
        fireEvent.click(squares[6]); // O tries to click, but can't
        fireEvent.click(squares[1]); // O tries to click, but can't

        // THEN
        expect(statusDiv).toHaveTextContent(/winner.*x/i);
      });
    });
  });
});

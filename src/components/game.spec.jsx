import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  it, expect, describe, jest,
} from '@jest/globals';
import Game from './game';

const topLine = [0, 1, 2];
const rightLine = [2, 5, 8];
const diagonalLine = [0, 4, 8];

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
    it.todo('should render a game');
  });
});

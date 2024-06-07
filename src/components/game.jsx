import React from 'react';
import ordinal from 'ordinal';
import Board from './board';
import logger from '../utils/logger';

const winnerPrefix = 'Winner:';
const nextPlayerPrefix = 'Next Player V5:';

export default class Game extends React.Component {
  static getWinner({ lineToCheck, squares }) {
    const [a, b, c] = lineToCheck;
    if (this.isThreeWayMatch(squares[a], squares[b], squares[c])) {
      return squares[a];
    }

    return null;
  }

  static isThreeWayMatch(a, b, c) {
    return !!(a && a === b && a === c);
  }

  static calculateWinner(squares) {
    const horizontalLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ];

    const verticalLines = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];

    const diagonalLines = [
      [0, 4, 8],
      [2, 4, 6],
    ];

    const allLines = [
      ...horizontalLines,
      ...verticalLines,
      ...diagonalLines,
    ];

    const winnersByLine = allLines.map((lineToCheck) => this.getWinner({ lineToCheck, squares }));
    const overallWinner = winnersByLine.find((winner) => winner !== null) || null;
    logger.debug({
      firstLine: allLines[0],
      winnersByLine,
      overallWinner,
    });

    return overallWinner;
  }

  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      xIsNext: true,
      stepNumber: 0,
    };
  }

  handleClick(squareIndex) {
    const { history, stepNumber, xIsNext } = this.state;

    const history1 = history.slice(0, stepNumber + 1);
    const current = history1[history1.length - 1];
    const newSquares = current.squares.slice();

    // ignore click if winner
    if (Game.calculateWinner(newSquares) != null) {
      return;
    }
    // ignore click if already filled
    if (newSquares[squareIndex] != null) {
      return;
    }
    newSquares[squareIndex] = xIsNext ? 'X' : 'O';

    // can't modify state directly, only change happens through setState()
    this.setState({
      history: history1.concat([{
        squares: newSquares,
      }]),
      xIsNext: !xIsNext,
      stepNumber: history1.length,
    });
  }

  jumpTo(moveNum) {
    this.setState({
      stepNumber: moveNum,
      xIsNext: (moveNum % 2) === 0,
    });
  }

  render() {
    // retrieve history
    const { history, stepNumber, xIsNext } = this.state;
    const current = history[stepNumber];
    // check for winner
    const winner = Game.calculateWinner(current.squares);

    // list moves
    const movesArray = history.map((ele, moveIndex) => {
      const desc = (moveIndex !== 0)
        ? `Go to move #${moveIndex}`
        : 'Go to game start!';

      return (
      // key should ALWAYS be used in dynamic list items so react can render efficiently/correctly
        <li key={ordinal(moveIndex)}>
          <button
            type="button"
            onClick={() => this.jumpTo(moveIndex)}
          >
            {desc}
          </button>
        </li>
      );
    });

    let status;
    if (winner != null) {
      status = `${winnerPrefix} ${winner}`;
    } else {
      status = `${nextPlayerPrefix} ${xIsNext ? 'X' : 'O'}`;
    }

    // do the render
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squaresArray={current.squares}
            onClick={(squareIndex) => this.handleClick(squareIndex)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{movesArray}</ol>
        </div>
      </div>
    );
  }
}

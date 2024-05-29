import React from 'react';
import PropTypes from 'prop-types';
import Square from './square';

class Board extends React.Component {
  renderSquare(index) {
    const { squaresArray, onClick } = this.props;
    return (
      <Square
        value={squaresArray[index]}
        onClick={() => onClick(index)}
      />
    );
  }

  render() {
    // render board state
    return (
      <div data-testid="board-base">
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

Board.propTypes = {
  squaresArray: PropTypes.arrayOf(Square).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Board;

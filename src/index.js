import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class Square extends React.Component {
//     // state refactored into parent component
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //         value: null,
//     //     }
//     // }
//
//     render() {
//         return (
//             <button
//                 className="square"
//                 onClick={() => {
//                     this.props.onClick();
//                 }}
//             >
//                 {this.props.value}
//             </button>);
//     }
// }

// since Square doesn't keep its own state, it can be a function component
function Square(props) {
    return <button
        className="square"
        onClick={props.onClick}
    >
        {props.value}
    </button>
}

class Board extends React.Component {
    constructor(props) {
        super(props);

        // component states are immutable: instead of changing what's already there, set it to something new
        // this helps react know when to call render efficiently
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    renderSquare(i) {
        return <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
        />;
    }

    render() {
        // check for winner
        const winner = calculateWinner(this.state.squares);
        let status;
        if(winner != null) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        // render turn
        return (
            <div>
                <div className="status">{status}</div>
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
            </div>);
    }

    handleClick(squareIndex) {
        const newSquares = this.state.squares.slice();
        // ignore click if winner
        if(calculateWinner(newSquares) != null) {
            return;
        }
        // ignore click if already filled
        if(newSquares[squareIndex] != null) {
            return;
        }
        newSquares[squareIndex] = this.state.xIsNext ? 'X' : 'O';

        // can't modify state directly, only change happens through setState()
        this.setState({
            squares: newSquares,
            xIsNext: !this.state.xIsNext,
        });
    }



}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board/>
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>);
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    return null;
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game/>);

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
    // state has been lifted to the parent Game component; squares state has been expanded to history
    // constructor(props) {
    //     super(props);
    //
    //     // component states are immutable: instead of changing what's already there, set it to something new
    //     // this helps react know when to call render efficiently
    //     this.state = {
    //         squares: Array(9).fill(null),
    //         xIsNext: true,
    //     };
    // }

    renderSquare(index) {
        return <Square
            value={this.props.squaresArray[index]}
            onClick={() => this.props.onClick(index)}
        />;
    }

    render() {
        // render board state
        return (
            <div>
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

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [
                {
                    squares: Array(9).fill(null),
                }
            ],
            xIsNext: true,
            stepNumber: 0,
        };
    }

    render() {
        // retrieve history
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        // check for winner
        const winner = calculateWinner(current.squares);

        // list moves
        const movesArray = history.map((ele, moveIndex) => {
            const desc = (moveIndex !== 0)
                ? "Go to move #" + moveIndex
                : "Go to game start!";
            return (
                // key should ALWAYS be used in dynamic list items so react can render efficiently/correctly
                <li key={moveIndex}>
                    <button onClick={() => this.jumpTo(moveIndex)}>
                        {desc}
                    </button>
                </li>
            );
        });

        let status;
        if (winner != null) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
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
            </div>);
    }

    handleClick(squareIndex) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const newSquares = current.squares.slice();

        // ignore click if winner
        if (calculateWinner(newSquares) != null) {
            return;
        }
        // ignore click if already filled
        if (newSquares[squareIndex] != null) {
            return;
        }
        newSquares[squareIndex] = this.state.xIsNext ? 'X' : 'O';

        // can't modify state directly, only change happens through setState()
        this.setState({
            history: history.concat([{
                squares: newSquares,
            }]),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length,
        });
    }

    jumpTo(moveNum) {
        this.setState({
            stepNumber: moveNum,
            xIsNext: (moveNum % 2) === 0,
        });
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

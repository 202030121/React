import Square from './Square';
import {useState} from 'react';

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const[history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquare = history[history.length - 1];

  function handlePlay(nextSquare) {
    setHistory([...history, nextSquare]);
    setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove) {
    // 
  }

  const moves = history.map((square, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} square={currentSquare} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );

}

  function Board( { xIsNext, square, onPlay } ) {

  function handleClick(i) {
    if (square[i] || calculateWinner(square)) {
      return;
    }
    const nextSquare = square.slice();
    if (xIsNext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }
    onPlay(nextSquare);
  }

  const winner = calculateWinner(square);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div>
      <div className='status'>{status}</div>
      <div className='board-row'>
        <Square value={square[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={square[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={square[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className='board-row'>
        <Square value={square[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={square[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={square[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className='board-row'>
        <Square value={square[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={square[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={square[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </div>
  )
}

function calculateWinner(square) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a];
    }
  }
  return null;
}
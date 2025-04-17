import { useState } from "react";
import Square from "./Square";

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const[history, setHistory] = useState([Array(9),fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquare) {
    setHistory([...history, nextSquare]);
    setXIsNext(!xIsNext);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} Square={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );

}
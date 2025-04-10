import Square from './Square';
import {useState} from 'react';

export default function Board() {
  const [square, setSquare] = useState(Array(9).fill(null));

  function handleClick() {
    const nextSquare = square.slice();
    nextSquare[0] = "X";
    setSquare(nextSquare)
  }

  return (
    <div>
      <div className='board-row'>
        <Square value={square[0]} onSquareClick={handleClick}/>
        <Square value={square[1]} onSquareClick={handleClick}/>
        <Square value={square[2]} onSquareClick={handleClick}/>
      </div>
      <div className='board-row'>
        <Square value={square[3]} onSquareClick={handleClick}/>
        <Square value={square[4]} onSquareClick={handleClick}/>
        <Square value={square[5]} onSquareClick={handleClick}/>
      </div>
      <div className='board-row'>
        <Square value={square[6]} onSquareClick={handleClick}/>
        <Square value={square[7]} onSquareClick={handleClick}/>
        <Square value={square[8]} onSquareClick={handleClick}/>
      </div>
    </div>
  )
}
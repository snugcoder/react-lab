import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// eslint-disable-next-line react/prop-types
function Square({value, squareClick}){
  // const [value, setValue] = useState(null);
  // function handleClick(){
  //   setValue('X');
  // }
  return (
  // <button className="square"onClick={handleClick}> { value } </button>);
 <button className="square" onClick={squareClick}>{value}</button>);
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
    function handleClick(){
      const nextSquares = squares.slice();
      nextSquares[0] = "X";
      setSquares(nextSquares);
  }
  return (
    <>
      <div className="board-row">
      <Square value={squares[0]} squareClick={handleClick}/>
      <Square value={squares[1]} squareClick={handleClick}/>
      <Square value={squares[2]} squareClick={handleClick}/>
      </div>
      <div className="board-row">
      <Square value={squares[3]} squareClick={handleClick}/>
      <Square value={squares[4]} squareClick={handleClick}/>
      <Square value={squares[5]} squareClick={handleClick}/>
      </div>
      <div className="board-row">
      <Square value={squares[6]} squareClick={handleClick}/>
      <Square value={squares[7]} squareClick={handleClick}/>
      <Square value={squares[8]} squareClick={handleClick}/>
      </div>
    </>
  );
}
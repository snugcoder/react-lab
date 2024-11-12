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
  const [xIsNext, setXIsNext] = useState(true);
    function handleClick(i){
      if (squares[i] || calcWin(squares)) {
        return;
      }
      const nextSquares = squares.slice();
      if (xIsNext) {
        nextSquares[i] = "X";
      } else {
        nextSquares[i] = "O";
      }
      setSquares(nextSquares);
      setXIsNext(!xIsNext);
  }
  return (
    <>
      <div className="board-row">
      <Square value={squares[0]} squareClick={() => handleClick(0)}/>
      <Square value={squares[1]}  squareClick={() => handleClick(1)}/>
      <Square value={squares[2]} squareClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
      <Square value={squares[3]} squareClick={() => handleClick(3)}/>
      <Square value={squares[4]} squareClick={() => handleClick(4)}/>
      <Square value={squares[5]} squareClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
      <Square value={squares[6]} squareClick={() => handleClick(6)}/>
      <Square value={squares[7]} squareClick={() => handleClick(7)}/>
      <Square value={squares[8]} squareClick={() => handleClick(8)}/>
      </div>
    </>
  );
}

function calcWin(squares){
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
  for (let i =0; i<lines.length; i++){
    const [a,b,c] = lines[i];
    if(squares[a]&&squares[a] ===squares[b] && squares[a]===squares[c]){
      return squares[a];
    }
  }
  return null;
}
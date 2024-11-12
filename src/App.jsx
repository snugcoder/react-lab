import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// eslint-disable-next-line react/prop-types
function Square(){
  const [value, setValue] = useState(Array(9).fill(null));
  function handleClick(){
    setValue('X');
  }
  return (
  <button 
  className="square" 
  onClick={handleClick}> { value } </button>);
}

export default function Board() {
  return (
    <>
      <div className="board-row">
      <Square />
      <Square />
      <Square />
      </div>
      <div className="board-row">
      <Square />
      <Square />
      <Square />
      </div>
      <div className="board-row">
      <Square />
      <Square />
      <Square />
      </div>
    </>
  );
}
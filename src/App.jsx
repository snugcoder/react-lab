import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// eslint-disable-next-line react/prop-types
function Square(){
  const [value, setValue] = useState(null);
  function handleClick(){
    console.log("clicked!");
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
      <Square value={1}/>
      <Square value={2}/>
      <Square value={3}/>
      </div>
      <div className="board-row">
      <Square value={4}/>
      <Square value={5}/>
      <Square value={6}/>
      </div>
      <div className="board-row">
      <Square value={7}/>
      <Square value={8}/>
      <Square value={9}/>
      </div>
    </>
  );
}
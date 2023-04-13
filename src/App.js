import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [color, setColor] = useState('lightGrey');
  const colorSet = (col) => {
    setColor(col ? col : 'lightGrey');
  };
  return (
    <div>
      <div
        style={{
          height: '200px',
          width: '200px',
          backgroundColor: color,
          marginBottom: '12px',
        }}
      ></div>
      <p>type color</p>
      <input onChange={(e) => colorSet(e.target.value)}></input>
    </div>
  );
}

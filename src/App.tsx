import { useRef, useState } from 'react'

import './App.css'

function App() {
    let ref = useRef(0);
    const inputRef = useRef(null);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  function handleClickInput() {
    inputRef.current.focus();
  }
  return (
    <>
      <button onClick={handleClick}>
      Click me!
    </button>

    <input ref={inputRef} />
      <button onClick={handleClickInput}>
        Focus the input
      </button>
    </>
    
  );
}

export default App

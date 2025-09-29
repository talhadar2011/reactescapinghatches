import { useEffect, useRef, useState } from 'react'

import './App.css'
  function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isPlaying]);

  return <video ref={ref} src={src} loop playsInline />;
}
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
  const [isPlaying, setIsPlaying] = useState(false);




  return (
    <>
      <button onClick={handleClick}>
      Click me!
    </button>

    <input ref={inputRef} />
      <button onClick={handleClickInput}>
        Focus the input
      </button>
       <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
    
  );
}

export default App

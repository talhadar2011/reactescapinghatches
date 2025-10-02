import { useEffect, useRef, useState } from 'react'
import { usePointerPosition } from './pointerPosition';
import { useDelayedValue } from './dely';
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


function Dot({ position, opacity }) {
  return (
    <div style={{
      position: 'absolute',
      backgroundColor: 'pink',
      borderRadius: '50%',
      opacity,
      transform: `translate(${position.x}px, ${position.y}px)`,
      pointerEvents: 'none',
      left: -20,
      top: -20,
      width: 40,
      height: 40,
    }} />
  );
}
  const pos1 = usePointerPosition();
  const pos2 = useDelayedValue(pos1, 300);
  const pos3 = useDelayedValue(pos2, 200);
  const pos4 = useDelayedValue(pos3, 100);
  const pos5 = useDelayedValue(pos4, 50);

  return (
    <>
    <Dot position={pos1} opacity={1} />
      {/* <Dot position={pos2} opacity={0.8} />
      <Dot position={pos3} opacity={0.6} />
      <Dot position={pos4} opacity={0.4} />
      <Dot position={pos5} opacity={0.2} /> */}
      {/* <button onClick={handleClick}>
      Click me!
    </button>

    <input ref={inputRef} />
      <button onClick={handleClickInput}>
        Focus the input
      </button>
       <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button> */}
      {/* <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      /> */}
    </>
    
  );
}

export default App

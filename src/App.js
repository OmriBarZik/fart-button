import React from 'react';
import './App.css';
import fart01 from "./assets/audio/fart-01.mp3";
import fart02 from "./assets/audio/fart-02.mp3";
import fart03 from "./assets/audio/fart-03.mp3";
import fart04 from "./assets/audio/fart-04.mp3";
import fart05 from "./assets/audio/fart-05.mp3";
import fart06 from "./assets/audio/fart-06.mp3";
import fart07 from "./assets/audio/fart-07.mp3";
import fart08 from "./assets/audio/fart-08.mp3";

//import ReactAudioPlayer from 'react-audio-player';

const audioList = [
  fart01,
  fart02,
  fart03,
  fart04,
  fart05,
  fart06,
  fart07,
  fart08,
]

const pop = () => {
  const file = Math.floor(Math.random() * audioList.length)
  let audio = new Audio(audioList[file]);
  audio.play();
}

function App() {
  return (
    <div>
      <div onMouseDown={pop} onTouchStart={pop} className="obj"></div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Player from "./components/Player";
import Lyrics from "./components/Lyrics";

import lyricsLines from "./lyrics-lines";
import "./style.css";

const App = () => {
  const [index, setIndex] = useState(0);

  const handleTimeUpdate = (e) => {
    const actualIndex = lyricsLines.findIndex(
      (line) => line.time >= e.target.currentTime
    ) - 1;
    if (actualIndex > index) setIndex(actualIndex);
  };

  return (
    <div className="container">
      <Player
        src="fools-garden-lemon-tree.mp3"
        onTimeUpdate={handleTimeUpdate}
      />
      <Lyrics lines={lyricsLines} currentLineIndex={index} />
    </div>
  );
};

createRoot(document.querySelector("#app")).render(<App />);

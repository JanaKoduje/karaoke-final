import React, { useState, useEffect, useRef } from "react";

const Player = ({ src, onTimeUpdate }) => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef();

  useEffect(() => {
    if (playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [playing]);

  const handlePlay = () => {
    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} src={src} onTimeUpdate={onTimeUpdate}></audio>
      <div className="player-controls">
        <button
          onClick={handlePlay}
          className={"play-button" + (playing ? " pause" : " play")}
        ></button>
      </div>
    </>
  );
};

export default Player;

import React, { useRef, useEffect } from "react";

const Lyrics = ({ lines, currentLineIndex }) => {
  const linesRef = useRef();

  useEffect(() => {
    if (linesRef.current !== undefined) {
    linesRef.current.scrollIntoView({
      block: "start",
      inline: "nearest",
      behavior: "smooth",
    })};
  }, [currentLineIndex]);

  return (
    <div className="lyrics">
      {lines.map((line, index) => {
        if (currentLineIndex === index) {
          return (
            <p key={index} className="current-line" ref={linesRef}>
              {line.text}
            </p>
          );
        } else {
          return <p key={index}>{line.text}</p>;
        }
      })}
    </div>
  );
};

export default Lyrics;

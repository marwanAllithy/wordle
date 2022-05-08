import React from "react";

export default function Row({ guess, currentGuess, isLightMode }, index) {
  if (guess) {
    return (
      <div className="row past">
        {guess.map((l, index) => (
          <div
            style={{ color: !isLightMode ? "#121213" : "#ededed" }}
            key={index}
            className={l.color}
          >
            {l.key}
          </div>
        ))}
      </div>
    );
  }
  if (currentGuess) {
    let letters = currentGuess.split("");
    return (
      <div
        className="row current"
        key={index}
        style={{
          transition: "300ms",
          color: !isLightMode ? "#121213" : "#ededed",
        }}
      >
        {letters.map((letter, i) => (
          <div key={i} className="filled">
            {letter}
          </div>
        ))}

        {[...Array(5 - letters.length)].map((_, index) => (
          <div key={index.length}></div>
        ))}
      </div>
    );
  }
  return (
    <div className="row">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

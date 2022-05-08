import React, { useEffect } from "react";

export default function KeyPad({ isLightMode, handleKeyUp, usedKeys }) {
  const lettersArray = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "Backspace",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    "Enter",
  ];
  const [letters, setLetters] = React.useState();
  if (!letters) {
    setLetters(lettersArray);
  }
  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp]);

  return (
    <div className="keypad">
      {letters?.map((l) => {
        const color = usedKeys[l];
        console.log(usedKeys);
        console.log(color);
        return (
          <div
            key={l}
            onClick={() => handleKeyUp({ key: l })}
            style={{
              background: !isLightMode ? "#121213" : "#ededed",
              transition: "300ms",
              color: isLightMode ? "#121213" : "#ededed",
            }}
            className={color}
            //  className="yellow"
          >
            {l}
          </div>
        );
      })}
    </div>
  );
}

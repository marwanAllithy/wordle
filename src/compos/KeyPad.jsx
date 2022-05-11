import { useEffect, useState } from "react";

export default function KeyPad({
  isLightMode,
  handleKeyUp,
  turn,
  isCorrect,
  usedKeys,
}) {
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
  const [letters, setLetters] = useState();
  if (!letters) {
    setLetters(lettersArray);
  }
  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    if (isCorrect) {
      console.log("winner!");
      window.removeEventListener("keyup", handleKeyUp);
    }

    if (turn > 5) {
      console.log("game over");
      window.removeEventListener("keyup", handleKeyUp);
    }
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp]);

  return (
    <div className="keypad">
      {letters?.map((l) => {
        const color = usedKeys[l];
        return (
          <div
            key={l}
            onClick={() => handleKeyUp({ key: l })}
            style={{
              background: !isLightMode ? "#121213" : "#ededed",
              color: isLightMode ? "#121213" : "#ededed",
              transition: "300ms",
            }}
            className={color}
          >
            {l}
          </div>
        );
      })}
    </div>
  );
}

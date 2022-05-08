import useWorldle from "../../hooks/useWordle";
import { useEffect } from "react";
import Grid from "./Grid";
import KeyPad from "./KeyPad";

export const Wordle = ({ solution, isLightMode }) => {
  const { currentGuess, guesses, isCorrect, usedKeys, turn, handleKeyUp } =
    useWorldle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp]);
  useEffect(() => {
    console.log(guesses, turn, isCorrect);
  }, [guesses, turn, isCorrect]);
  return (
    <div
      style={{
        background: isLightMode ? "#121213" : "#ededed",
        transition: "300ms",
        height: "90vh",
      }}
    >
      {turn === 4 || (isCorrect === true && <div>solution - {solution}</div>)}
      <Grid
        isLightMode={isLightMode}
        currentGuess={currentGuess}
        guesses={guesses}
        turn={turn}
      />
      <KeyPad
        usedKeys={usedKeys}
        handleKeyUp={handleKeyUp}
        isLightMode={isLightMode}
      />
    </div>
  );
};

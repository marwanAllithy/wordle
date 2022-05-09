import useWorldle from "../../hooks/useWordle";
import { useEffect } from "react";
import Grid from "./Grid";
import KeyPad from "./KeyPad";
import { useCookies } from "react-cookie";

export const Wordle = ({ solution, isLightMode, setWins, setTries }) => {
  const {
    currentGuess,
    guesses,
    isCorrect,
    usedKeys,
    turn,
    wins,
    tries,
    handleKeyUp,
  } = useWorldle(solution);
  const [cookies, setCookie] = useCookies(["score"]);
  setCookie("tries", tries, { path: "/" });
  setCookie("wins", wins, { path: "/" });
  setWins(wins);
  setTries(tries);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp]);
  useEffect(() => {
    //     console.log(guesses, turn, isCorrect);
  }, [guesses, turn, isCorrect]);
  return (
    <div
      style={{
        background: isLightMode ? "#121213" : "#ededed",
        transition: "300ms",
        height: "90vh",
      }}
    >
      {solution}
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

import useWorldle from "../../hooks/useWordle";
import { useEffect, useState } from "react";
import Grid from "./Grid";
import KeyPad from "./KeyPad";
import { useCookies } from "react-cookie";
import Model from "./Model";

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
  //cookies
  const [cookies, setCookie] = useCookies(["score"]);
  setCookie("tries", tries, { path: "/" });
  setCookie("wins", wins, { path: "/" });
  setWins(wins);
  setTries(tries);

  //model
  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    if (isCorrect) {
      setTimeout(() => {
        setShowModel(true);
      }, 2000);
      window.removeEventListener("keyup", handleKeyUp);
    }

    if (turn > 5) {
      setTimeout(() => {
        setShowModel(true);
      }, 2000);
      window.removeEventListener("keyup", handleKeyUp);
    }

    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp, isCorrect, turn]);

  return (
    <div
      style={{
        background: isLightMode ? "#121213" : "#ededed",
        transition: "300ms",
        height: "90vh",
      }}
    >
      {/* {solution} */}
      <Grid
        isLightMode={isLightMode}
        currentGuess={currentGuess}
        guesses={guesses}
        turn={turn}
      />
      <KeyPad
        usedKeys={usedKeys}
        isCorrect={isCorrect}
        turn={turn}
        handleKeyUp={handleKeyUp}
        isLightMode={isLightMode}
      />
      {showModel && (
         <Model cookies={cookies} isCorrect={isCorrect} solution={solution} turn={turn} />
        )}
    </div>
  );
};

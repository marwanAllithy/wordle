import useWorldle from "../useWordle";
import {useEffect} from "react"
import Grid from "./Grid";

export const Wordle = ({solution}) => {
     const {currentGuess, guesses, isCorrect, turn, handleKeyUp} = useWorldle(solution);

     useEffect(() => {
          window.addEventListener("keyup", handleKeyUp);
          return () => window.removeEventListener("keyup", handleKeyUp);
     },[handleKeyUp])
     useEffect(() => {
          console.log(guesses, turn, isCorrect)
     },[guesses, turn, isCorrect])
   return (
        <>
        <div>solution - {solution}</div>
        {/* <div>current guess - {currentGuess}</div> */}
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
        </>
   )
}
import useWorldle from "../useWordle";
import {useEffect} from "react"

export const Wordle = ({solution}) => {
     const {currentGuess, handleKeyUp} = useWorldle(solution);

     useEffect(() => {
          window.addEventListener("keyup", handleKeyUp);
          return () => window.removeEventListener("keyup", handleKeyUp);
     },[handleKeyUp])
   return (
        <div>current guess - {currentGuess}</div>
   )
}
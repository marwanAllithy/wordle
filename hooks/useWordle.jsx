import {useState, useEffect} from 'react'
const useWorldle = (solution) => {
     const [turn, setTurn] = useState(0);
     const [currentGuess, setCurrentGuess] = useState("");
     const [guesses, setGuesses] = useState([]);
     const [history, setHistory] = useState([]);
     const [isCorrect, setIsCorrect] = useState(false);

     //format a guess into a array of letter objects
     const formateGuess = () => {
          console.log("formatting the guess - ", currentGuess )
     }
     //add a new guess to the guessing state 
     //update the incorrect state if the guess is correct
     // add one to the turn state 
     const addingNewGuesses = () => {

     }
     //handle keyup event and track the current guess
     //if user presses enter then add the guess to the guessing state
     const handleKeyUp = ({key}) => {

          if(key === "Enter"){
               //only add guess if turn is less that 5
               if(turn > 5){
                    console.log("you have reached all of your guesses")
                    return;
               }
               //dont allow the user to submit the same guess twice
               if(history.includes(currentGuess)){
                    console.log("you have already guessed this word")
                    return;
               }
               //check word is 5 letters long
               if (currentGuess.length !== 5){
                    console.log("word must be 5 letters long")
                    return;
               }
               formateGuess();
          }
          if (key === "Backspace") {
               setCurrentGuess(currentGuess.slice(0, -1));
          }
          if (/^[A-Za-z]$/.test(key)) {
               if (currentGuess.length < 5) {
                    setCurrentGuess((prev) => {return prev + key})
               }
               console.log(key)
          }
     }

     return {turn, currentGuess, guesses, isCorrect, handleKeyUp}
}

export default useWorldle
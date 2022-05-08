import { useState, useEffect } from "react";
const useWorldle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(6)]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [usedKeys, setUsedKeys] = useState({});

  //format a guess into a array of letter objects
  const formateGuess = () => {
    console.log("formatting the guess - ", currentGuess);
    let solutionArray = [...solution];
    let formattedGuess = [...currentGuess].map((i) => {
      return { key: i, color: "null" };
    });

    //find any green letters
    formattedGuess.forEach((l, i) => {
      if (solutionArray[i] === l.key) {
        formattedGuess[i].color = "green";
        solutionArray[i] = null;
      }
    });
    //find any yellow letters
    formattedGuess.forEach((l, i) => {
      if (solutionArray.includes(l.key) && l.color !== "green") {
        formattedGuess[i].color = "yellow";
        solutionArray[solutionArray.indexOf(l.key)] = null;
      }
    });
    return formattedGuess;
  };
  //add a new guess to the guessing state
  //update the incorrect state if the guess is correct
  // add one to the turn state
  const addNewGuesses = (formattedGuess) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
    }
    setGuesses((prevGuesses) => {
      let newGuesses = [...prevGuesses];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });
    setHistory((prevHistory) => {
      return [...prevHistory, currentGuess];
    });
    setUsedKeys((prevUsedKeys) => {
      formattedGuess.forEach((l) => {
        const currentColor = prevUsedKeys[l.key];
        // console.log(prevUsedKeys)

        if (l.color === "green") {
          prevUsedKeys[l.key] = "green";
          return;
        }
        if (l.color === "yellow" && currentColor !== ("gray" || "green")) {
          prevUsedKeys[l.key] === "yellow";
          return;
        }
        if (l.color === "null" && currentColor !== ("green" || "yellow")) {
          prevUsedKeys[l.key] = "null";
          return;
        }
      });
      return prevUsedKeys;
    });
    setTurn(turn + 1);
    setCurrentGuess("");
  };
  //handle keyup event and track the current guess
  //if user presses enter then add the guess to the guessing state
  const handleKeyUp = ({ key }) => {
    if (key === "Enter") {
      //only add guess if turn is less that 5
      if (turn > 5) {
        console.log("you have reached all of your guesses");
        return;
      }

      //dont allow the user to submit the same guess twice
      if (history.includes(currentGuess)) {
        console.log("you have already guessed this word");
        return;
      }

      //check word is 5 letters long
      if (currentGuess.length !== 5) {
        console.log("word must be 5 letters long");
        return;
      }

      const formatted = formateGuess();
      //     console.log(formatted)
      addNewGuesses(formatted);
    }

    if (key === "Backspace") {
      setCurrentGuess(currentGuess.slice(0, -1));
    }

    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key;
        });
      }

      // console.log(key)
    }
  };

  return { turn, currentGuess, guesses, usedKeys, isCorrect, handleKeyUp };
};

export default useWorldle;
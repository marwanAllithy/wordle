import { useState, useEffect } from "react";
import { Wordle } from "./compos/Wordle";
import solutionsData from "../data/db";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useCookies } from "react-cookie";
function App() {
  const [solution, setSolution] = useState();
  const [isLightMode, setIsLightMode] = useState(false);
  useEffect(() => {
    if (!solution) {
      setSolution(
        solutionsData[Math.floor(Math.random() * solutionsData.length)]
      );
    }
  }, []);
  // console.log(solution)

  //Cookies
  const [cookies, setCookie] = useCookies(["score"]);
  const [tries, setTries] = useState(0);
  const [wins, setWins] = useState(0);
  console.log(wins, tries);

  return (
    <div
      className="App"
      style={{
        background: isLightMode ? "#121213" : "#ededed",
        transition: "300ms",
      }}
    >
      <nav className="navbar">
        <div
          className="scores"
          style={{ color: !isLightMode ? "#121213" : "#ededed" }}
        >
          <h2 className="scores__statement">
            wins: {cookies.wins} | tries: {cookies.tries}
          </h2>
        </div>
        <h1 style={{ color: !isLightMode ? "#121213" : "#ededed" }}>Wordle</h1>
        <div
          style={{ color: !isLightMode ? "#121213" : "#ededed" }}
          onClick={() =>
            isLightMode ? setIsLightMode(false) : setIsLightMode(true)
          }
          className="mode__button click"
        >
          {isLightMode ? <BsFillSunFill /> : <BsFillMoonFill />}
        </div>
      </nav>
      {solution && (
        <Wordle
          setWins={setWins}
          setTries={setTries}
          isLightMode={isLightMode}
          solution={solution}
        />
      )}
    </div>
  );
}

export default App;

/* 
graphical features:
-- add dark mode :#121213 and light mode #ededed
-- make it a look alike wordle
 make the keypad functional:
-- add a keypad
-- add a grid
--change colors to the color of the key
data we need to track:
  -- solution
    -- 5 letter string, e.g. 'drain'
  -- past guesses
    -- an array of past guesses
    -- each past guess is an array of letter objects [{}, {}, {}, {}, {}]
    -- each object represents a letter in the guess word {letter: 'a', color: 'yellow'}
  -- current guess
    -- string 'hello'
  -- keypad letters
    -- array of letter objects [{key: 'a', color: 'green'}, {}, {} ...]
  -- number of turns
    -- an integer 0 - 6
game process:
  -- entering words:
    -- user enters a letter & a square is filled with that letter
    -- when a user hits delete it deletes the previous letter
    -- when a user hits enter it submits the word
      -- if all squares are not filled with letters then the word is not submitted
      -- if that word has already been used in a prev guess then the word is not submitted
  -- checking submitted words:
    -- each letter is checked to see if it matches to the solution
    -- each letter is assigned a color based on it's inclusion in the solution
      -- exact matches (correct position in the solution) are green
      -- partial matches (in the solution but not the correct position) are yellow
      -- none-matches (not in the solution at all) are grey
    -- the guess is added the grid with the correct colors
    -- the current guess moves to the next row
    -- the keypad letters are updated (colors)
  -- ending the game:
    -- when the guessed word fully matches the solution
      -- modal to say 'well done'
    -- when the user runs out of guesses
      -- modal to say 'unlucky'
*/

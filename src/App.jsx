import { useState, useEffect } from "react";
import { Wordle } from "./compos/Wordle";
import solutionsData from "../data/db";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
function App() {
  const [solution, setSolution] = useState();
  const [isLightMode, setIsLightMode] = useState(true);
  useEffect(() => {
    if (!solution) {
      setSolution(
        solutionsData[Math.floor(Math.random() * solutionsData.length)]
      );
    }
  }, []);

  //Cookies

  return (
    <div
      className="App"
      style={{
        background: isLightMode ? "#121213" : "#ededed",
        transition: "300ms",
      }}
    >
      <div className="app_wrapper">
        <nav className="navbar">
          <div></div>
          <h1
            className="title"
            style={{
              color: !isLightMode ? "#121213" : "#ededed",
              transition: "300ms",
            }}
          >
            Wordle
          </h1>
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
        {solution && <Wordle isLightMode={isLightMode} solution={solution} />}
      </div>
    </div>
  );
}

export default App;

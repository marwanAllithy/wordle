import Scores from "./Scores";

const Model = ({ isCorrect, cookies, solution, turn }) => {
  const reload = () => window.location.reload();
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <Scores cookies={cookies} isCorrect={isCorrect} />
          <h1>You Win!</h1>
          <p className="solution" style={{ color: isCorrect && "green" }}>
            {solution}
          </p>
          <p>Using only {turn} guesses :)</p>
          <button onClick={reload} className="retry__btn">
            Replay
          </button>
        </div>
      )}
      {!isCorrect && (
        <div>
          <Scores cookies={cookies} isCorrect={isCorrect} />
          <h1>you lose...</h1>
          <p className="solution" style={{ color: !isCorrect && "red" }}>
            {solution}
          </p>
          <p>Better luck next time :/</p>
          <button onClick={reload} className="retry__btn">
            Replay
          </button>
        </div>
      )}
    </div>
  );
};

export default Model;

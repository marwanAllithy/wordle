import Scores from "./Scores";

const Model = ({ isCorrect, solution, turn }) => {
  const reload = () => window.location.reload();
  return (
    <div className="modal">
      {isCorrect ? (
        <div>
          <Scores isCorrect={isCorrect} />
          <h1>You Win!</h1>
          <p className="solution" style={{ color: isCorrect && "green" }}>
            {solution}
          </p>
          <p>Using only {turn} guesses :)</p>
          <button onClick={reload} className="retry__btn">
            Replay
          </button>
        </div>
      ) : (
        <div>
          <Scores isCorrect={isCorrect} />
          <h1>you lost...</h1>
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

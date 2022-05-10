const Model = ({ isCorrect, solution, turn }) => {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>You Win!</h1>
          <p className="solution">
            <span>the word was</span>
            {solution}
          </p>
          <p>Using only {turn} guesses :)</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>you lose...</h1>
          <p className="solution">{solution}</p>
          <p>Better luck next time :/</p>
        </div>
      )}
    </div>
  );
};

export default Model;

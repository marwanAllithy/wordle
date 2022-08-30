import React from "react";
import useScore from "../stores/score";

const Scores = () => {
  const { wins } = useScore();
  return (
    <figure className="scores">
      <h2 className="scores__statement">wins: {wins}</h2>
    </figure>
  );
};

export default Scores;

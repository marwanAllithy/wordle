import React from "react";

const Scores = ({ cookies }) => {
  return (
    <figure className="scores">
      <h2 className="scores__statement">
        wins: {String(cookies?.wins)}
      </h2>
    </figure>
  );
};

export default Scores;

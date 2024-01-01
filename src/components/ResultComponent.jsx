// import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function ResultComponent() {
  const { state } = useLocation();
  const score = state.score;
  const attemptedCount = state.attempted.length;
  const percentage = Math.round((score / 10) * 100);

  const getMessage = () => {
    if (score < 3) return "You need more practice!";
    if (score < 6) return "Good job! You can do better!";
    return "Great job! Keep it up!";
  };

  return (
    <>
      <h1 className="result">Result</h1>
      <div className="flex flex-col gap-4">
        <h3>{getMessage()}</h3>
        <h2 className="score">Your score is {percentage}%</h2>
        <div className="flex space-x-6">
          <div className="font-bold">
            {[
              "Total number of questions",
              "Number of attempted questions",
              "Number of correct answers",
              "Number of wrong answers",
            ].map((label, index) => (
              <p key={index}>{label}</p>
            ))}
          </div>
          <div>
            {[10, attemptedCount, score, attemptedCount - score].map(
              (value, index) => (
                <p key={index}>{value}</p>
              )
            )}
          </div>
        </div>
      </div>
      <br />
      <div className="space-x-5">
        <NavLink to="/Quiz">
          <button className="play-again-button">Play Again</button>
        </NavLink>
        <NavLink to="/">
          <button className="back-button">Back to home</button>
        </NavLink>
      </div>
    </>
  );
}

export default ResultComponent;

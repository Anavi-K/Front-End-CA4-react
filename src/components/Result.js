import React from 'react';
import './Result.css';

const Results = ({ score, totalQuestions, onRestartQuiz }) => {
  const percentage = (score / totalQuestions) * 100;

  return (
    <div className="result-screen">
      <div className="score-box">
        <p>Your Score:</p>
        <h2>{score}/{totalQuestions}</h2>
        <p>Percentage: {percentage}%</p>
        <button onClick={onRestartQuiz}>Restart Quiz</button>
      </div>
    </div>
  );
};

export default Results;
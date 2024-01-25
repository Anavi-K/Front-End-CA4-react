// QuestionBox.js

import React, { useState, useEffect } from 'react';
import './QuestionBox.css';

const QuestionBox = ({ question, totalQuestions, onAnswer, currentQuestion }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    setSelectedOption(null);
    setIsHighlighted(false);
  }, [question]);

  const handleOptionClick = (option) => {
    if (selectedOption === null) {
      setSelectedOption(option);
      onAnswer(option.isCorrect);
    }
  };

  const highlightQuestion = () => {
    setIsHighlighted(true);
  };

  const removeHighlight = () => {
    setIsHighlighted(false);
  };

  return (
    <div className="question-box">
      <div className="question-info">
        <p className={`question-number ${isHighlighted ? 'highlighted' : ''}`}>
          Question: {currentQuestion} out of {totalQuestions}
        </p>
        <p className={`question-text ${isHighlighted ? 'highlighted' : ''}`}>
          {question.text}
        </p>
      </div>
      <div className="options">
        {question.options.map((option, index) => (
          <div
            key={index}
            className={`option ${selectedOption === option ? 'selected' : ''}`}
            onClick={() => handleOptionClick(option)}
          >
            {option.text}
          </div>
        ))}
      </div>
      <div className="highlight-buttons">
        <button onClick={highlightQuestion}>Highlight</button>
        <button onClick={removeHighlight}>Remove Highlight</button>
      </div>
    </div>
  );
};

export default QuestionBox;

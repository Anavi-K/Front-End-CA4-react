import React, { useState } from 'react';
import QuestionBox from './components/QuestionBox';
import Results from './components/Result';
import Header from './components/Header'; // Import the Header component
import questions from './questions';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [score, setScore] = useState(0);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    // Move to the next question or show results
    if (currentQuestion < questions.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      // Display results when all questions are answered
      setCurrentQuestion(questions.length + 1);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(1);
    setScore(0);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="content">
        {currentQuestion <= questions.length ? (
          <QuestionBox
            question={questions[currentQuestion - 1]}
            totalQuestions={questions.length}
            onAnswer={handleAnswer}
            currentQuestion={currentQuestion}
          />
        ) : (
          <Results score={score} totalQuestions={questions.length} onRestartQuiz={restartQuiz} />
        )}
      </div>
    </div>
  );
};

export default App;
import { useState } from 'react';
import './brainquest.css';

export default function BrainQ({ questions }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowAnswer(true);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setShowAnswer(false);
    } else {
      setCurrentIndex(0); // Restart quiz
      setSelectedOption(null);
      setShowAnswer(false);
    }
  };

  return (
    <div className='quiz-container'>
      <h2>Brain Quest</h2>
      <div className='question-box'>
        <h3>{currentQuestion.Question}</h3>
        <div className='options'>
          {currentQuestion.Option.map((option, index) => (
            <button
              key={index}
              className={`option-btn ${
                showAnswer
                  ? option === currentQuestion.Answer
                    ? 'correct'
                    : option === selectedOption
                    ? 'incorrect'
                    : ''
                  : ''
              }`}
              onClick={() => handleOptionClick(option)}
              disabled={showAnswer}
            >
              {option}
            </button>
          ))}
        </div>
        {showAnswer && (
          <p className='answer-feedback'>
            {selectedOption === currentQuestion.Answer
              ? '✅ Correct!'
              : `❌ Incorrect! The correct answer is: ${currentQuestion.Answer}`}
          </p>
        )}
        <button className='next-btn' onClick={handleNext}>
          {currentIndex < questions.length - 1
            ? 'Next Question'
            : 'Restart Quiz'}
        </button>
      </div>
    </div>
  );
}

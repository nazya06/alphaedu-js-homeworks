import { useState } from 'react';
import { FaCheck, FaTimes, FaArrowRight } from 'react-icons/fa';
import './QuizItem.css'; 

function QuizItem({ question, handleAnswer }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleClick = (option) => {
    if (!isAnswered) {
      setSelectedOption(option);
      setIsAnswered(true);
    }
  };

  const handleNext = () => {
    handleAnswer(selectedOption);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  return (
    <div className="quiz-container">
      <h3 className="quiz-question">{question.question}</h3>
      <ul className="options-list">
        {question.options.map((option, index) => {
          const isCorrect = option === question.correctAnswer;
          const isSelected = selectedOption === option;
          
          return (
            <li key={index} className="option-item">
              <input
                type="radio"
                id={`option-${index}`}
                name="quiz-option"
                checked={isSelected}
                onChange={() => handleClick(option)}
                disabled={isAnswered}
                className="option-radio"
              />
              <label
                htmlFor={`option-${index}`}
                className={`option-label ${
                  isSelected 
                    ? isCorrect ? 'correct' : 'incorrect' 
                    : ''
                }`}
              >
                {option}
                {isSelected && (
                  isCorrect 
                    ? <FaCheck className="icon-correct" /> 
                    : <FaTimes className="icon-incorrect" />
                )}
              </label>
            </li>
          );
        })}
      </ul>

      {isAnswered && (
        <button onClick={handleNext} className="next-button">
          Next <FaArrowRight />
        </button>
      )}
    </div>
  );
}

export default QuizItem;
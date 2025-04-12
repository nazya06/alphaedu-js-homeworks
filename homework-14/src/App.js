import { useState } from 'react';
import QuizList from './QuizList';


function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      id: 1,
      question: "С1+1?",
      options: ["2", "1", "3", "0"],
      correctAnswer: "2"
    },
    {
      id: 2,
      question: "Java+Script=?",
      options: ["Python", "JavaScript", "Java", "C++"],
      correctAnswer: "JavaScript"
    },
    {
      id: 3,
      question: "2 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "4"
    }
  ];

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="app">
      {showResult ? (
        <div className="result">
          <h2>Your Score: {score}/{questions.length}</h2>
          <button onClick={() => {
            setCurrentQuestionIndex(0);
            setScore(0);
            setShowResult(false);
          }}>Restart Quiz</button>
        </div>
      ) : (
        <QuizList 
          questions={questions} 
          currentQuestionIndex={currentQuestionIndex} 
          handleAnswer={handleAnswer} 
        />
      )}
    </div>
  );
}

export default App;
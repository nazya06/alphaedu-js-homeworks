import QuizItem from './QuizItem';

function QuizList({ questions, currentQuestionIndex, handleAnswer }) {
  return (
    <div className="quiz-list">
      <h2>Question {currentQuestionIndex + 1}/{questions.length}</h2>
      <QuizItem 
        question={questions[currentQuestionIndex]} 
        handleAnswer={handleAnswer} 
      />
    </div>
  );
}

export default QuizList;
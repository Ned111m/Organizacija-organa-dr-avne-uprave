import { useEffect } from 'react';
import useQuizStore from '../stores/useQuizStore';
import QuestionCard from './QuestionCard';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
  const {
    questions,
    setQuestions,
    currentQuestionIndex,
    submitAnswer,
    nextQuestion,
    previousQuestion,
    resetQuiz,
  } = useQuizStore();
  const navigate = useNavigate();

  // Fetch questions on mount (mock API call)
  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch('http://localhost:3001/api/questions');
      const data = await response.json();
      setQuestions(data);
    };
    fetchQuestions();
  }, [setQuestions]);

  const handleFinishQuiz = () => {
    navigate('/results');
  };

  const handleRestartQuiz = () => {
    resetQuiz(); // Reset the quiz state
    navigate('/'); // Navigate back to the start
  };

  if (questions.length === 0) return <div>Loading...</div>;

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="container mx-auto p-4">
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
        ></div>
      </div>

      <h2 className="text-xl mb-4">
        Question {currentQuestionIndex + 1} of {questions.length}
      </h2>

      {/* Question Card */}
      <QuestionCard
        question={currentQuestion}
        onAnswer={(answerId) => submitAnswer(currentQuestion.id, answerId)}
      />

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4">
        {/* Restart Quiz Button */}
        <button
          onClick={handleRestartQuiz}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Restart Quiz
        </button>

        {/* Previous Question Button (only show if not on the first question) */}
        {currentQuestionIndex > 0 && (
          <button
            onClick={previousQuestion}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Previous Question
          </button>
        )}

        {/* Next Question Button (only show if not on the last question) */}
        {currentQuestionIndex < questions.length - 1 ? (
          <button
            onClick={nextQuestion}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Next Question
          </button>
        ) : (
          <button
            onClick={handleFinishQuiz}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Finish Quiz
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
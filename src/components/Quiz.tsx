import { useEffect } from 'react';
import { useQuizStore } from '../stores/useQuizStore';
import QuestionCard from './QuestionCard';

const Quiz = () => {
  const { questions, setQuestions, currentQuestionIndex } = useQuizStore();

  // Fetch questions on mount (mock API call)
  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch('http://localhost:3001/api/questions');
      const data = await response.json();
      setQuestions(data);
    };
    fetchQuestions();
  }, [setQuestions]);

  if (questions.length === 0) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl mb-4">
        Question {currentQuestionIndex + 1} of {questions.length}
      </h2>
      <QuestionCard
        question={questions[currentQuestionIndex]}
      />
    </div>
  );
};
export default Quiz;
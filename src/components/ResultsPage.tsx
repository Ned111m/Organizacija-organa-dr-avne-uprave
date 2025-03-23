import useQuizStore from '../stores/useQuizStore';
import { Question, Answer } from '../types';

const ResultsPage = () => {
  const { questions, userAnswers } = useQuizStore();

  return (
    <div className="results-page">
      <h2>Quiz Results</h2>
      <ul>
        {questions.map((question: Question) => {
          const userAnswerId = userAnswers[question.id];
          const correctAnswer = question.answers.find((a: Answer) => a.isCorrect);

          return (
            <li key={question.id} className={userAnswerId === correctAnswer?.id ? 'correct' : 'incorrect'}>
              <h3>{question.text}</h3>
              <p>Your Answer: {question.answers.find(a => a.id === userAnswerId)?.text}</p>
              <p>Correct Answer: {correctAnswer?.text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ResultsPage;
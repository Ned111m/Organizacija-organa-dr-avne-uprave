import React from 'react';
import { QuestionCardProps } from '../types'; // Correct import

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer }) => {
  return (
    <div className="question-card">
      <h3>{question.text}</h3>
      <ul>
        {question.answers.map((answer) => (
          <li key={answer.id}>
            <button onClick={() => onAnswer?.(answer.id)}>
              {answer.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionCard;
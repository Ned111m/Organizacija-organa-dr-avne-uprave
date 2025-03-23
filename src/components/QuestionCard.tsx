import React from 'react';
import { QuestionCardProps } from '../types';

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer }) => {
  return (
    <div className="question-card bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">{question.text}</h3>
      <ul>
        {question.answers.map((answer) => (
          <li key={answer.id} className="mb-2">
            <button
              onClick={() => {
                if (onAnswer) {
                  onAnswer(answer.id);
                }
              }}
              className="w-full text-left bg-gray-100 hover:bg-gray-200 p-3 rounded-lg"
            >
              {answer.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionCard;
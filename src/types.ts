// src/types.ts
export type Question = {
  id: string;
  text: string;
  answers: Answer[];
};

export type Answer = {
  id: string;
  text: string;
  isCorrect: boolean;
};

export type QuestionCardProps = {
  question: Question;
  onAnswer?: (answerId: string) => void;
};
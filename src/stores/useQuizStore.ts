import { create } from 'zustand';

type Question = {
  id: string;
  text: string;
  answers: Answer[];
};

type Answer = {
  id: string;
  text: string;
  isCorrect: boolean;
};

type QuizState = {
  questions: Question[];
  currentQuestionIndex: number;
  userAnswers: Record<string, string>; // { questionId: answerId }
  score: number;
  setQuestions: (questions: Question[]) => void;
  submitAnswer: (questionId: string, answerId: string) => void;
  nextQuestion: () => void;
  calculateScore: () => void;
};

export const useQuizStore = create<QuizState>((set) => ({
  questions: [],
  currentQuestionIndex: 0,
  userAnswers: {},
  score: 0,
  setQuestions: (questions) => set({ questions }),
  submitAnswer: (questionId, answerId) =>
    set((state) => ({
      userAnswers: { ...state.userAnswers, [questionId]: answerId }
    })),
  nextQuestion: () =>
    set((state) => ({ currentQuestionIndex: state.currentQuestionIndex + 1 })),
  calculateScore: () =>
    set((state) => ({
      score: state.questions.reduce((acc, question) => {
        const userAnswerId = state.userAnswers[question.id];
        const correctAnswer = question.answers.find(a => a.isCorrect);
        return userAnswerId === correctAnswer?.id ? acc + 1 : acc;
      }, 0)
    }))
}));
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
  previousQuestion: () => void;
  resetQuiz: () => void;
};

const useQuizStore = create<QuizState>((set) => ({
  questions: [],
  currentQuestionIndex: 0,
  userAnswers: {},
  score: 0,
  setQuestions: (questions) => set({ questions }),
  submitAnswer: (questionId, answerId) =>
    set((state) => ({
      userAnswers: { ...state.userAnswers, [questionId]: answerId },
    })),
  nextQuestion: () =>
    set((state) => ({
      currentQuestionIndex: state.currentQuestionIndex + 1,
    })),
  previousQuestion: () =>
    set((state) => ({
      currentQuestionIndex: state.currentQuestionIndex - 1,
    })),
  resetQuiz: () =>
    set({
      questions: [],
      currentQuestionIndex: 0,
      userAnswers: {},
      score: 0,
    }),
}));

export default useQuizStore;
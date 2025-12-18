export interface VocabularyExercise {
  title: 'Word Meanings';
  grade_level: '4-6' | '7-9' | '10-12';
  difficulty: 'easy' | 'medium' | 'difficult';
  total_time: number; //in minutes
  total_questions: number;
  groups: WordMeaningsGroup[];
}

export interface WordMeaningsGroup {
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
  };
  questions: [Question, Question, Question];
}
export interface Question {
  definition: string;
  answer: 'A' | 'B' | 'C' | 'D' | 'E';
}

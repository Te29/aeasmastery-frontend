import type { VocabularyExercise } from '../types/vocabulary';

export const mockVocabularyData: VocabularyExercise = {
  title: 'Word Meanings',
  grade_level: '4-6',
  difficulty: 'easy',
  total_time: 30,
  total_questions: 15,
  groups: [
    {
      options: {
        A: 'cheerful',
        B: 'library',
        C: 'office',
        D: 'school',
        E: 'hat',
      },
      questions: [
        {
          definition: 'something you wear on your head',
          answer: 'E',
        },
        {
          definition: 'a place to borrow books',
          answer: 'B',
        },
        {
          definition: 'feeling very glad and happy',
          answer: 'A',
        },
      ],
    },
    {
      options: {
        A: 'contribute',
        B: 'describe',
        C: 'invite',
        D: 'envy',
        E: 'valuable',
      },
      questions: [
        {
          definition: 'to give money or help to something',
          answer: 'A',
        },
        {
          definition: 'to say or write what someone or something is like',
          answer: 'B',
        },
        {
          definition: 'worth a lot of money',
          answer: 'E',
        },
      ],
    },
    {
      options: {
        A: 'solution',
        B: 'bacteria',
        C: 'reaction',
        D: 'magnet',
        E: 'compass',
      },
      questions: [
        {
          definition: 'an answer to a problem',
          answer: 'A',
        },
        {
          definition: 'a tool that shows direction using Earth’s magnetism',
          answer: 'E',
        },
        {
          definition:
            'very tiny living things that can only be seen with a microscope',
          answer: 'B',
        },
      ],
    },
    {
      options: {
        A: 'imagine',
        B: 'summarize',
        C: 'destroy',
        D: 'ancient',
        E: 'patient',
      },
      questions: [
        {
          definition: 'to form a picture in your mind',
          answer: 'A',
        },
        {
          definition: 'to break something completely',
          answer: 'C',
        },
        {
          definition: 'very old',
          answer: 'D',
        },
      ],
    },
    {
      options: {
        A: 'generous',
        B: 'curious',
        C: 'brave',
        D: 'honest',
        E: 'polite',
      },
      questions: [
        {
          definition: 'willing to give or share',
          answer: 'A',
        },
        {
          definition: 'wanting to know more about something',
          answer: 'B',
        },
        {
          definition: 'showing good manners toward others',
          answer: 'E',
        },
      ],
    },
  ],
};

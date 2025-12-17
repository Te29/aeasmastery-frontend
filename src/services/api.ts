import axios from 'axios';
import type { GeminiResponse, GeneratorForm } from '../types';
import type { VocabularyExercise } from '../types/vocabulary';
import { VOCABULARY_SYSTEM_PROMPT } from '../constants/prompts';
import { extractJson } from '../utils/parseJson';

const API_URL = import.meta.env.VITE_API_URL;

export async function generateVocabularyExercise(
  form: GeneratorForm
): Promise<VocabularyExercise> {
  const userPrompt = `Generate a vocabulary exercise with:
- Grade level: ${form.grade}
- Difficulty: ${form.difficulty}
- Include answer sheet: ${form.includeAnswerSheet}
- Include answer key: ${form.includeAnswerKey}

Requirements:
- Part 1 (Word Meanings): 15 questions in 3 groups of 5
- Part 2 (Words in Context): 15 fill-in-blank questions
${form.grade !== '10-12' ? '- Part 3 (Spelling): 20 questions' : ''}

Return JSON only.`;

  const prompt = `${VOCABULARY_SYSTEM_PROMPT}\n${userPrompt}`;
  console.log(prompt);
  const response = await axios.post<GeminiResponse>(API_URL, {
    VOCABULARY_SYSTEM_PROMPT,
    prompt,
  });

  return extractJson(response.data.text) as VocabularyExercise;
}

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
`;

  const response = await axios.post<GeminiResponse>(API_URL, {
    prompt: `${VOCABULARY_SYSTEM_PROMPT}\n\n${userPrompt}`,
  });
  console.log(extractJson(response.data.text));
  return extractJson(response.data.text) as VocabularyExercise;
}

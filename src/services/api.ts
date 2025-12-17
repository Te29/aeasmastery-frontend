import type { GeminiResponse } from '../types';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export async function generateExercise(form: object): Promise<GeminiResponse> {
  const prompt =
    JSON.stringify(form) +
    ' According to the options json, generate a set of exercise for AEAS exam in Australia. Response in json.';

  const response = await axios.post<GeminiResponse>(API_URL, { prompt });
  return response.data;
}

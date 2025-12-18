export function extractJson(text: string): unknown {
  const cleaned = text
    .replace(/```json\n?/g, '')
    .replace(/```\n?/g, '')
    .trim();

  try {
    return JSON.parse(cleaned);
  } catch (error) {
    console.error('Failed to parse JSON:', error);
    console.error('Raw text:', cleaned);
    throw new Error('Invalid JSON response from AI');
  }
}

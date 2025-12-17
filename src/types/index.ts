export type GeneratorFormFields =
  | 'grade'
  | 'difficulty'
  | 'includeAnswerSheet'
  | 'includeAnswerKey';

export interface GeneratorForm {
  grade: string;
  difficulty: string;
  includeAnswerSheet: boolean;
  includeAnswerKey: boolean;
}

export interface RadioGroupConfig {
  name: GeneratorFormFields;
  legend: string;
  options: {
    label: string;
    value: string | boolean;
  }[];
}

export interface GeminiResponse {
  text: string;
}

export interface ButtonConfig {
  text: string;
  variant: 'primary' | 'secondary' | 'disabled';
  disabled: boolean;
}

export type GeneratorStatus = 'idle' | 'generating' | 'success' | 'error';

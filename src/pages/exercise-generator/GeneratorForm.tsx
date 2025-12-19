import {
  Field,
  Fieldset,
  Label,
  Legend,
  Radio,
  RadioGroup,
} from '@headlessui/react';
import { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import type { GeneratorStatus, GeneratorForm } from '../../types';
import { generateVocabularyExercise } from '../../services/api';
import { GENERATOR_FORM_OPTIONS, BUTTON_CONFIG } from '../../constants/index';
import type { VocabularyExercise } from '../../types/vocabulary';

interface GeneratorFormProps {
  status: GeneratorStatus;
  setStatus: React.Dispatch<React.SetStateAction<GeneratorStatus>>;
  setGeneratedData: React.Dispatch<
    React.SetStateAction<VocabularyExercise | null>
  >;
}

export function GeneratorForm({
  status,
  setStatus,
  setGeneratedData,
}: GeneratorFormProps) {
  const [form, setForm] = useState<GeneratorForm>({
    grade: '4-6',
    difficulty: 'easy',
    includeAnswerSheet: true,
    includeAnswerKey: true,
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('generating');
    try {
      const data = await generateVocabularyExercise(form);
      setGeneratedData(data);
      setStatus('success');
    } catch (error) {
      console.error('Failed to generate:', error);
      setStatus('error');
    }
  }

  return (
    <section className="py-2 md:py-5 bg-linear-to-b from-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form Card */}
          <div className="order-2 lg:order-1">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-10 space-y-10"
            >
              {GENERATOR_FORM_OPTIONS.map((group) => (
                <Fieldset key={group.name} className="space-y-4">
                  <Legend className="text-md font-semibold text-gray-900">
                    {group.legend}
                  </Legend>

                  <RadioGroup
                    value={form[group.name]}
                    onChange={(value) =>
                      setForm((f) => ({ ...f, [group.name]: value }))
                    }
                    className="grid grid-cols-2 sm:grid-cols-3 gap-6"
                  >
                    {group.options.map((option) => (
                      <Field
                        key={option.label}
                        className="flex items-center gap-3"
                      >
                        <Radio
                          value={option.value}
                          className="group relative flex h-6 w-6 items-center justify-center rounded-full border-2 border-gray-300 bg-white cursor-pointer focus:outline-none data-checked:border-yellow-500 data-checked:bg-yellow-500 transition"
                        >
                          <span className="invisible size-2.5 rounded-full bg-white group-data-checked:visible" />
                        </Radio>
                        <Label className="cursor-pointer text-sm font-medium text-gray-700 select-none">
                          {option.label}
                        </Label>
                      </Field>
                    ))}
                  </RadioGroup>
                </Fieldset>
              ))}

              <div className="pt-6">
                <Button
                  type="submit"
                  variant={BUTTON_CONFIG[status].variant}
                  disabled={BUTTON_CONFIG[status].disabled}
                  className="flex items-center justify-center w-full text-base py-4 font-semibold"
                >
                  {BUTTON_CONFIG[status].text}
                </Button>
              </div>
            </form>
          </div>

          {/* Decorative Animation */}
          <div className="order-1 lg:order-2 flex justify-center">
            <DotLottieReact
              src="generator.lottie"
              loop
              autoplay
              aria-hidden="true"
              className="w-full max-w-md"
              style={{ maxHeight: '500px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

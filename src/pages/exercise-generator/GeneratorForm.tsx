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
import type { GeneratorStatus } from './ExerciseGeneratorPage';

type FormKeys =
  | 'grade'
  | 'difficulty'
  | 'includeAnswerSheet'
  | 'includeAnswerKey';

type GeneratorFormProps = {
  status: GeneratorStatus;
  setStatus: React.Dispatch<React.SetStateAction<GeneratorStatus>>;
};

type ButtonConfig = {
  text: string;
  variant: 'primary' | 'secondary' | 'disabled';
  disabled: boolean;
};

const buttonConfig: Record<GeneratorStatus, ButtonConfig> = {
  idle: { text: '点击生成', variant: 'primary', disabled: false },
  generating: { text: '正在生成...', variant: 'disabled', disabled: true },
  success: { text: '再次生成', variant: 'primary', disabled: false },
  error: { text: '重新生成', variant: 'primary', disabled: false },
};

const radioGroups: {
  name: FormKeys;
  legend: string;
  options: {
    label: string;
    value: string | boolean;
  }[];
}[] = [
  {
    name: 'grade',
    legend: '年级选择',
    options: [
      {
        label: '4-6',
        value: '4-6',
      },
      {
        label: '7-9',
        value: '7-9',
      },
      {
        label: '10-12',
        value: '10-12',
      },
    ],
  },
  {
    name: 'difficulty',
    legend: '难度选择',
    options: [
      { label: '简单', value: 'easy' },
      { label: '中等', value: 'medium' },
      { label: '困难', value: 'difficult' },
    ],
  },
  {
    name: 'includeAnswerSheet',
    legend: '是否附带答题卡',
    options: [
      { label: '是', value: true },
      { label: '否', value: false },
    ],
  },
  {
    name: 'includeAnswerKey',
    legend: '是否附带答案',
    options: [
      { label: '是', value: true },
      { label: '否', value: false },
    ],
  },
];

export function GeneratorForm({ status, setStatus }: GeneratorFormProps) {
  const [form, setForm] = useState({
    grade: '4-6',
    difficulty: 'easy',
    includeAnswerSheet: true,
    includeAnswerKey: true,
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('generating');

    setTimeout(() => {
      setStatus('error');
    }, 2000);
  }

  return (
    <div className="max-w-7xl mx-auto px-20 md:px-24 py-2 md:py-4">
      <div className="flex items-center justify-between gap-12">
        {/* Left: Generator Options Form  */}
        <form
          className="flex flex-3 flex-col gap-10"
          onSubmit={handleSubmit}
          method="post"
          action="#"
        >
          {radioGroups.map((group) => (
            <Fieldset key={group.name} className="flex flex-col gap-4">
              <Legend className="text-md font-bold text-gray-900">
                {group.legend}
              </Legend>
              <RadioGroup
                name={group.name}
                value={form[group.name]}
                onChange={(value) =>
                  setForm((f) => ({ ...f, [group.name]: value }))
                }
                aria-label="Grade choice"
                className="flex gap-20 mx-10"
              >
                {group.options.map((option) => (
                  <Field key={option.label} className="flex items-center gap-2">
                    <Radio
                      value={option.value}
                      className="group flex size-5 items-center justify-center rounded-full border bg-white data-checked:bg-blue-400 cursor-pointer"
                    >
                      <span className="invisible size-2 rounded-full bg-white group-data-checked:visible" />
                    </Radio>
                    <Label className="cursor-pointer">{option.label}</Label>
                  </Field>
                ))}
              </RadioGroup>
            </Fieldset>
          ))}
          <Button
            type="submit"
            variant={buttonConfig[status].variant}
            disabled={buttonConfig[status].disabled}
            className="w-1/2 mt-10 "
          >
            {buttonConfig[status].text}
          </Button>
        </form>

        {/*Right: Decorative image*/}
        <DotLottieReact
          src="generator.lottie"
          aria-hidden="true"
          loop
          autoplay
          className="flex-4 flex justify-center"
        />
      </div>
    </div>
  );
}

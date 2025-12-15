import { Header } from '../../components/layout/Header';
import { FeatureCardTitle } from '../../components/layout/FeatureCardTitle';
import { GeneratorForm } from './GeneratorForm';
import { useState, useRef, useEffect } from 'react';
import { GenerationResult } from './GenerationResult';

export type GeneratorStatus = 'idle' | 'generating' | 'success' | 'error';

export function ExerciseGeneratorPage() {
  const [status, setStatus] = useState<GeneratorStatus>('idle');

  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status !== 'idle') {
      resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [status]);

  return (
    <>
      <Header />
      <FeatureCardTitle
        title="AI生成词汇练习"
        description="选择年级及难度，生成真题标准格式练习。"
      />
      <GeneratorForm status={status} setStatus={setStatus} />
      <GenerationResult status={status} ref={resultRef} />
    </>
  );
}

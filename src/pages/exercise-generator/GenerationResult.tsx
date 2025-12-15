import { forwardRef } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Button } from '../../components/ui/Button';
import type { GeneratorStatus } from './ExerciseGeneratorPage';

type ResultConfig = {
  text: string;
  decorativeImage: string;
};

const resultConfig: Record<Exclude<GeneratorStatus, 'idle'>, ResultConfig> = {
  generating: { text: '生成中...', decorativeImage: 'loading.lottie' },
  success: { text: '生成成功！', decorativeImage: 'success.lottie' },
  error: { text: '生成失败，请重试', decorativeImage: 'error.lottie' },
};

export const GenerationResult = forwardRef<
  HTMLDivElement,
  { status: GeneratorStatus }
>(({ status }, ref) => {
  if (status === 'idle') return null;
  return (
    <div ref={ref} className="max-w-7xl mx-auto px-40 md:px-50 py-10 md:py-40">
      <div className="flex items-center ">
        {/* Left: decorative image and notification text */}
        <DotLottieReact
          src={resultConfig[status].decorativeImage}
          loop
          autoplay
          aria-hidden="true"
          className="flex-1"
        />
        <p className="text-lg font-bold text-gray-900 flex-1">
          {resultConfig[status].text}
        </p>

        {/* Right: Download funtion */}
        {status === 'success' && (
          <Button className="flex-1 md:max-w-1/6">下载试题</Button>
        )}
      </div>
    </div>
  );
});

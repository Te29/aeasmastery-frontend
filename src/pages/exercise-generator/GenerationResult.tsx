import { forwardRef, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Button } from '../../components/ui/Button';
import type { GeneratorStatus } from '../../types';
import { mockVocabularyData } from '../../.data/mockData';
import { VocabularyExercisePDF } from '../../components/pdf/VocabularyExercisePDF';
import { PDFPreview } from '../../components/pdf/PDFPreview';
import { PDFDownload } from '../../components/pdf/PDFDownload';
import type { VocabularyExercise } from '../../types/vocabulary';

type ResultConfig = {
  text: string;
  decorativeImage: string;
};

const resultConfig: Record<Exclude<GeneratorStatus, 'idle'>, ResultConfig> = {
  generating: { text: 'Generating...', decorativeImage: 'loading.lottie' },
  success: {
    text: 'Generation Successful!',
    decorativeImage: 'success.lottie',
  },
  error: {
    text: 'Generation Failed. Please try again.',
    decorativeImage: 'error.lottie',
  },
};

interface GenerationResultProps {
  status: GeneratorStatus;
  generatedData: VocabularyExercise | null; // ← Accept real data
}

export const GenerationResult = forwardRef<
  HTMLDivElement,
  GenerationResultProps
>(({ status, generatedData }, ref) => {
  const [showPreview, setShowPreview] = useState(false);

  const pdfDocument = generatedData ? (
    <VocabularyExercisePDF data={generatedData} />
  ) : (
    <VocabularyExercisePDF data={mockVocabularyData} />
  );

  if (status === 'idle') return null;
  return (
    <div ref={ref} className="max-w-7xl mx-auto px-40 md:px-50 py-10 md:py-40">
      <div className="flex flex-col ">
        {/* Top: decorative image and notification text */}
        <div className="flex items-center">
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
        </div>

        {/* Bottom: Download function */}
        {status === 'success' && (
          <div className="mt-8">
            {' '}
            {/* Added some top margin for separation */}
            <div className="flex justify-center gap-6">
              {' '}
              {/* ← This centers the buttons with proper space */}
              <PDFDownload
                document={pdfDocument}
                filename="vocabulary-worksheet.pdf"
                label="Download PDF"
              />
              <Button onClick={() => setShowPreview(!showPreview)}>
                {showPreview ? 'Hide Preview' : 'Preview Worksheet'}
              </Button>
            </div>
            {showPreview && (
              <div className="mt-8 bg-gray-50 rounded-lg overflow-hidden shadow-inner">
                <PDFPreview document={pdfDocument} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
});

import { PDFViewer, Document, type DocumentProps } from '@react-pdf/renderer';
import { cn } from '../../utils/cn';

interface PDFPreviewProps {
  document: React.ReactElement<DocumentProps, typeof Document>;
  className?: string;
}

export function PDFPreview({ document, className }: PDFPreviewProps) {
  return (
    <PDFViewer
      width="100%"
      height="100%"
      className={cn(
        'w-full h-[80vh] max-w-5xl mx-auto',
        'border-2 border-gray-300 rounded-lg shadow-xl bg-gray-50',
        className
      )}
    >
      {document}
    </PDFViewer>
  );
}

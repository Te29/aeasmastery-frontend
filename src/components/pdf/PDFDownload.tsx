import {
  PDFDownloadLink,
  Document,
  type DocumentProps,
} from '@react-pdf/renderer';
import { Button } from '../ui/Button';
interface PDFDownloadProps {
  document: React.ReactElement<DocumentProps, typeof Document>;
  filename: string;
  label?: string;
}

export function PDFDownload({
  document,
  filename,
  label = 'Download PDF',
}: PDFDownloadProps) {
  return (
    <PDFDownloadLink document={document} fileName={filename}>
      {({ loading }) => (
        <Button disabled={loading}>
          {loading ? 'Generating PDF...' : label}
        </Button>
      )}
    </PDFDownloadLink>
  );
}

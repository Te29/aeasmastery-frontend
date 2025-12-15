export function FeatureCardTitle({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-7xl mx-auto px-8 md:px-12 py-8 md:py-12">
      <div className="flex items-end justify-between gap-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-sm text-gray-600 mb-8 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

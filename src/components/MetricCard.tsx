interface MetricCardProps {
  value: string;
  label: string;
  context?: string;
}

export default function MetricCard({ value, label, context }: MetricCardProps) {
  return (
    <div className="text-center p-6 md:p-8">
      <p className="font-serif text-4xl md:text-5xl font-bold text-gold mb-2">
        {value}
      </p>
      <p className="text-sm text-gray-400 tracking-wide uppercase">
        {label}
      </p>
      {context && (
        <p className="text-xs text-gray-600 mt-2 leading-relaxed">
          {context}
        </p>
      )}
    </div>
  );
}

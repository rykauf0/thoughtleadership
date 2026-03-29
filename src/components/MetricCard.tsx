interface MetricCardProps {
  value: string;
  label: string;
  delay?: string;
}

export default function MetricCard({ value, label, delay = "" }: MetricCardProps) {
  return (
    <div className={`text-center p-6 ${delay}`}>
      <p className="font-serif text-4xl md:text-5xl font-bold text-gold mb-2">
        {value}
      </p>
      <p className="text-sm text-gray-400 tracking-wide uppercase">
        {label}
      </p>
    </div>
  );
}

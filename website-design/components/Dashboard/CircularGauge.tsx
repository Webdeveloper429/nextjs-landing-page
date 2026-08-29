"use client";

function CircularGauge({
  value,
  label,
  change,
}: {
  value: number;
  label: string;
  change: number;
}) {
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset =
    circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="relative h-32 w-32">
        <svg
          className="h-full w-full transform -rotate-90"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="2"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#8b6cf5"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-500"
          />
          <circle
            cx="50"
            cy="50"
            r="37"
            fill="rgba(139, 108, 245, 0.1)"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-3xl font-bold text-white">
            {value.toFixed(1)}%
          </div>
          <div className="text-xs uppercase tracking-wider text-white/40">
            {label}
          </div>
        </div>
      </div>
      <div className="text-sm text-green-400">
        ▲ {change.toFixed(1)} pts
      </div>
    </div>
  );
}

export default CircularGauge;

"use client";

function CallsIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

interface MetricsGridProps {
  aiCalls: number;
  talkTime: string;
}

export default function MetricsGrid({
  aiCalls,
  talkTime,
}: MetricsGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="rounded-lg border border-purple-500/20 bg-purple-500/5 p-6">
        <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wider text-purple-400">
          <CallsIcon />
          <span>AI Calls</span>
        </div>
        <div className="text-2xl font-bold text-white">
          {aiCalls}
        </div>
        <div className="mt-1 text-xs text-white/50">
          across your locations - this cohort
        </div>
      </div>

      <div className="rounded-lg border border-orange-500/20 bg-orange-500/5 p-6">
        <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wider text-orange-400">
          <ClockIcon />
          <span>Talk Time</span>
        </div>
        <div className="text-2xl font-bold text-white">
          {talkTime}
        </div>
        <div className="mt-1 text-xs text-white/50">
          avg per call
        </div>
      </div>
    </div>
  );
}

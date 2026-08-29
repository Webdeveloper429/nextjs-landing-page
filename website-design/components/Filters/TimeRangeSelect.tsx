"use client";

import { useState } from "react";

function ChevronDown() {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

type TimeRangeSelectProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function TimeRangeSelect({
  value,
  onChange,
}: TimeRangeSelectProps) {
  const [open, setOpen] = useState(false);

  const timeRanges = [
    "Last 7 Days",
    "Last 30 Days",
    "Last 90 Days",
    "This Year",
  ];

  return (
    <div className="relative">
      <label className="mb-2 block text-xs font-medium tracking-wide text-white/40">
        TIME RANGE
      </label>

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full min-w-[220px] items-center justify-between rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white transition hover:border-white/20"
      >
        <span>{value}</span>

        <ChevronDown />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 w-full min-w-[220px] overflow-hidden rounded-lg border border-white/10 bg-[#18181b] p-1 shadow-xl">
          {timeRanges.map((range) => (
            <button
              key={range}
              type="button"
              onClick={() => {
                onChange(range);
                setOpen(false);
              }}
              className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left text-sm text-white/70 transition hover:bg-white/[0.06] hover:text-white"
            >
              <span>{range}</span>

              {range === value && (
                <span className="text-sm text-white">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
"use client";

function FunnelStep({
  value,
  label,
  width,
}: {
  value: string;
  label: string;
  width: string;
}) {
  return (
    <div className="mb-4 last:mb-0">
      <div
        className="flex items-center justify-between rounded-full bg-gradient-to-r from-purple-500/20 to-purple-500/5 px-6 py-3 transition-all duration-300"
        style={{
          width,
        }}
      >
        <span className="font-bold text-white">{value}</span>
        <span className="text-xs uppercase tracking-wider text-white/50">
          {label}
        </span>
      </div>
    </div>
  );
}

interface FunnelProps {
  leads: number;
  booked: number;
  showed: number;
  sold: number;
  bookRate: number;
  showRate: number;
  closeRate: number;
}

export default function Funnel({
  leads,
  booked,
  showed,
  sold,
  bookRate,
  showRate,
  closeRate,
}: FunnelProps) {
  return (
    <div className="space-y-6">
      <div>
        <FunnelStep
          value={leads.toLocaleString()}
          label="LEADS"
          width="100%"
        />

        <div className="my-2 flex items-center justify-between pl-6 pr-6">
          <span className="text-xs uppercase tracking-wider text-purple-400">
            {bookRate.toFixed(1)}%
          </span>
          <span className="text-xs uppercase tracking-wider text-purple-400">
            BOOK RATE
          </span>
        </div>

        <FunnelStep
          value={booked.toLocaleString()}
          label="BOOKED"
          width={`${(booked / leads) * 100}%`}
        />

        <div className="my-2 flex items-center justify-between pl-6 pr-6">
          <span className="text-xs uppercase tracking-wider text-purple-400">
            {showRate.toFixed(1)}%
          </span>
          <span className="text-xs uppercase tracking-wider text-purple-400">
            SHOW RATE
          </span>
        </div>

        <FunnelStep
          value={showed.toLocaleString()}
          label="SHOWED"
          width={`${(showed / leads) * 100}%`}
        />

        <div className="my-2 flex items-center justify-between pl-6 pr-6">
          <span className="text-xs uppercase tracking-wider text-purple-400">
            {closeRate.toFixed(1)}%
          </span>
          <span className="text-xs uppercase tracking-wider text-purple-400">
            CLOSE RATE
          </span>
        </div>

        <FunnelStep
          value={sold.toLocaleString()}
          label="SOLD"
          width={`${(sold / leads) * 100}%`}
        />
      </div>

      <p className="text-sm text-white/60">
        Leads and Booked are tracked automatically. Showed and
        Sold count only the outcomes recorded in your CRM, so
        these numbers are as complete as your CRM updates.
        Memberships often close in your billing system or
        aren&apos;t entered yet, so your real Showed and Sold
        may be higher.
      </p>
    </div>
  );
}

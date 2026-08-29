"use client";

interface StatusBadgeProps {
  label: string;
  value: number | string;
  color?: "blue" | "orange" | "red" | "green" | "purple";
}

function StatusBadge({
  label,
  value,
  color = "blue",
}: StatusBadgeProps) {
  const colorClasses = {
    blue: "border-blue-500/30 bg-blue-500/10 text-blue-400",
    orange: "border-orange-500/30 bg-orange-500/10 text-orange-400",
    red: "border-red-500/30 bg-red-500/10 text-red-400",
    green: "border-green-500/30 bg-green-500/10 text-green-400",
    purple: "border-purple-500/30 bg-purple-500/10 text-purple-400",
  };

  return (
    <div
      className={`rounded-full border px-4 py-2 text-sm font-medium ${colorClasses[color]}`}
    >
      <span className="font-bold">{value}</span> {label}
    </div>
  );
}

interface EngagementStatsProps {
  engagedCount: number;
  totalLeads: number;
  activeLabel: string;
}

export default function EngagementStats({
  engagedCount,
  totalLeads,
  activeLabel,
}: EngagementStatsProps) {
  const inPipeline = Math.ceil(totalLeads * 0.1);
  const noShow = Math.ceil(totalLeads * 0.02);
  const cancelled = 0;
  const rescheduled = 0;
  const showRate = 90.9;

  return (
    <div className="space-y-6">
      {/* Engagement Section */}
      <div className="rounded-lg border border-white/10 bg-white/5 p-6">
        <div className="mb-4">
          <p className="text-sm uppercase tracking-wider text-white/40">
            24 / 7 - NEVER OFF
          </p>
          <p className="mt-2 text-base text-white/80">
            Engaged{" "}
            <span className="font-bold text-white">
              {engagedCount}
            </span>{" "}
            of{" "}
            <span className="font-bold text-white">{totalLeads}</span>{" "}
            leads this period
          </p>
        </div>

        {/* Status Badges */}
        <div className="flex flex-wrap gap-3">
          <StatusBadge
            label="In pipeline"
            value={inPipeline}
            color="blue"
          />
          <StatusBadge
            label="No-show"
            value={noShow}
            color="orange"
          />
          <StatusBadge
            label="Cancelled"
            value={cancelled}
            color="red"
          />
          <StatusBadge
            label="Rescheduled"
            value={rescheduled}
            color="green"
          />
          <StatusBadge
            label={`Show rate (past apts) ${showRate.toFixed(1)}%`}
            value=""
            color="purple"
          />
        </div>
      </div>

      {/* Warning Box */}
      <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/5 p-4">
        <div className="flex items-start gap-3">
          <div className="mt-0.5">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-yellow-400"
            >
              <path d="M12 2L2 20h20Z" />
              <path d="M12 9v4" />
              <path d="M12 17h.01" />
            </svg>
          </div>
          <p className="text-sm text-yellow-400">
            4 past appointments have no recorded outcome
            yet
          </p>
        </div>
      </div>
    </div>
  );
}

"use client";

interface DashboardCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  subtitle?: string;
}

export default function DashboardCard({
  icon,
  label,
  value,
  subtitle,
}: DashboardCardProps) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-6">
      <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-wider text-white/40">
        {icon}
        <span>{label}</span>
      </div>
      <div className="mb-1 text-2xl font-bold text-white">
        {value}
      </div>
      {subtitle && (
        <div className="text-xs text-white/50">{subtitle}</div>
      )}
    </div>
  );
}

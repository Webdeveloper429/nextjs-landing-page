"use client";

interface PerformanceRowProps {
  location: string;
  leads: number;
  booked: number;
  bookPercentage: number;
  showed: number;
  sold: number;
  closePercentage: number;
}

export default function PerformanceTable({
  data,
}: {
  data: PerformanceRowProps[];
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-white/10">
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/10 bg-white/5">
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-white/50">
              GYM
            </th>
            <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-white/50">
              LEADS
            </th>
            <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-white/50">
              BOOKED
            </th>
            <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-white/50">
              BOOK %
            </th>
            <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-white/50">
              SHOWED
            </th>
            <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-white/50">
              SOLD
            </th>
            <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-white/50">
              CLOSE %
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className="border-b border-white/5 hover:bg-white/5 transition-colors"
            >
              <td className="px-6 py-4 text-white font-medium">
                {row.location}
              </td>
              <td className="px-6 py-4 text-right text-white">
                {row.leads}
              </td>
              <td className="px-6 py-4 text-right text-white">
                {row.booked}
              </td>
              <td className="px-6 py-4 text-right text-green-400">
                {row.bookPercentage.toFixed(1)}%
              </td>
              <td className="px-6 py-4 text-right text-white">
                {row.showed}
              </td>
              <td className="px-6 py-4 text-right text-white">
                {row.sold}
              </td>
              <td className="px-6 py-4 text-right text-green-400">
                {row.closePercentage.toFixed(0)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}



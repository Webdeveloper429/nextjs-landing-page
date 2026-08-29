import Header from "@/components/Header/Header";
import CircularGauge from "@/components/Dashboard/CircularGauge";
import MetricsGrid from "@/components/Dashboard/MetricsGrid";
import Funnel from "@/components/Dashboard/Funnel";
import PerformanceTable from "@/components/Dashboard/PerformanceTable";
import EngagementStats from "@/components/Dashboard/EngagementStats";
import { getLocationAnalytics } from "@/lib/locationData";

const locations = [
  "bloomington",
  "canton",
  "cromwell",
  "ellington",
  "estero",
  "farmington",
  "glastonbury",
  "granby",
  "manchester",
  "marshfield",
  "newington",
  "plover",
  "rhinelander",
  "somers",
  "southington",
  "stevens-point",
  "waupaca",
  "west-hartford",
  "wilton",
  "windsor",
];

type LocationPageProps = {
  params: Promise<{
    location: string;
  }>;
};

export default async function LocationPage({
  params,
}: LocationPageProps) {
  const { location } = await params;

  if (!locations.includes(location)) {
    return <div>Location not found</div>;
  }

  const analytics = getLocationAnalytics(location);

  if (!analytics) {
    return <div>Location data not found</div>;
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="px-6 py-8 lg:px-8">
        {/* Header */}
        <Header />

        <div className="mx-auto w-full max-w-[1500px]">
          {/* Page Title */}
          <div className="mb-12">
            <p className="mb-3 text-sm uppercase tracking-wider text-white/40">
              Location
            </p>
            <h1 className="text-4xl font-bold">
              Anytime Fitness {analytics.location}
            </h1>
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid gap-8">
            {/* Top Section: Autonomy + Metrics */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
              {/* Circular Gauge - Autonomy */}
              <div className="flex justify-center lg:col-span-1">
                <CircularGauge
                  value={analytics.autonomy}
                  label="Autonomy"
                  change={analytics.bookingRateChange}
                />
              </div>

              {/* Metrics Grid */}
              <div className="lg:col-span-4">
                <MetricsGrid
                  aiCalls={analytics.aiCalls}
                  talkTime={analytics.talkTime}
                />
              </div>
            </div>

            {/* Engagement Stats Section */}
            <EngagementStats
              engagedCount={analytics.booked}
              totalLeads={analytics.leads}
              activeLabel="Always on"
            />

            {/* Funnel Section */}
            <div className="rounded-lg border border-white/10 bg-white/5 p-8">
              <h2 className="mb-6 text-lg font-semibold uppercase tracking-wider text-white/40">
                Lead Funnel
              </h2>
              <Funnel
                leads={analytics.leads}
                booked={analytics.booked}
                showed={analytics.showed}
                sold={analytics.sold}
                bookRate={analytics.bookRate}
                showRate={analytics.showRate}
                closeRate={analytics.closeRate}
              />
            </div>

            {/* Performance Table */}
            <div>
              <h2 className="mb-6 text-lg font-semibold uppercase tracking-wider text-white/40">
                Gym Performance
              </h2>
              <PerformanceTable
                data={[
                  {
                    location: analytics.location,
                    leads: analytics.leads,
                    booked: analytics.booked,
                    bookPercentage: analytics.bookRate,
                    showed: analytics.showed,
                    sold: analytics.sold,
                    closePercentage: analytics.closeRate_pct,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
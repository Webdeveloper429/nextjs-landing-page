"use client";

import { useState } from "react";
import Header from "@/components/Header/Header";
import LocationSelect from "@/components/Filters/LocationSelect";
import TimeRangeSelect from "@/components/Filters/TimeRangeSelect";

function FilterIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 5h16" />
      <path d="M7 12h10" />
      <path d="M10 19h4" />
    </svg>
  );
}

function MiniChart() {
  return (
    <div className="mini-chart">
      <svg
        viewBox="0 0 520 110"
        preserveAspectRatio="none"
        className="mini-chart-svg"
      >
        <defs>
          <linearGradient
            id="chartFill"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#7659e8"
              stopOpacity="0.28"
            />
            <stop
              offset="100%"
              stopColor="#7659e8"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>

        <path
          d="
            M0 70
            L20 78
            L38 66
            L55 72
            L72 68
            L91 66
            L108 43
            L124 62
            L143 55
            L160 63
            L177 59
            L195 83
            L212 65
            L230 72
            L247 63
            L265 38
            L281 35
            L299 61
            L317 52
            L334 61
            L351 49
            L368 67
            L385 57
            L402 66
            L419 76
            L437 60
            L454 66
            L470 52
            L486 71
            L501 39
            L520 92
            L520 110
            L0 110
            Z
          "
          fill="url(#chartFill)"
        />

        <path
          d="
            M0 70
            L20 78
            L38 66
            L55 72
            L72 68
            L91 66
            L108 43
            L124 62
            L143 55
            L160 63
            L177 59
            L195 83
            L212 65
            L230 72
            L247 63
            L265 38
            L281 35
            L299 61
            L317 52
            L334 61
            L351 49
            L368 67
            L385 57
            L402 66
            L419 76
            L437 60
            L454 66
            L470 52
            L486 71
            L501 39
            L520 92
          "
          fill="none"
          stroke="#8569f4"
          strokeWidth="3"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        <circle
          cx="501"
          cy="39"
          r="4"
          fill="#a88eff"
        />
      </svg>
    </div>
  );
}

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
    <div className="funnel-step">
      <div
        className="funnel-bar"
        style={{
          width,
        }}
      >
        <span className="funnel-value">
          {value}
        </span>

        <span className="funnel-label">
          {label}
        </span>
      </div>
    </div>
  );
}

function RateBadge({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rate-badge">
      {children}
    </div>
  );
}

export default function Home() {
  const [location, setLocation] =
    useState("All Locations");

  const [range, setRange] =
    useState("Last 30 Days");

  return (
    <main className="dashboard-page">

      {/* Header */}
      <Header />

      <div className="dashboard-container">

        {/* Filters */}
        <section className="filters">

          <LocationSelect
            value={location}
            onChange={setLocation}
          />

          <TimeRangeSelect
            value={range}
            onChange={setRange}
          />

        </section>

        {/* Main Pipeline Card */}
        <section className="pipeline-card">

          <div className="pipeline-header">

            <div className="pipeline-title">
              <FilterIcon />
              <span>LEAD PIPELINE</span>
            </div>

            <div className="live-status">
              <span className="live-dot" />
              <span>Live pipeline</span>
              <span>•</span>
              <span>Last 30 Days</span>
            </div>

          </div>

          <div className="pipeline-content">

            {/* Left Statistics */}
            <aside className="stats-panel">

              <div className="stat-section">

                <span className="stat-eyebrow">
                  TOUR BOOKING RATE
                </span>

                <div className="booking-rate">
                  45.1%
                </div>

                <div className="rate-change">

                  <span className="negative">
                    ▼ 2.0 pts
                  </span>

                  <span>
                    vs prior period
                  </span>

                </div>

                <p className="booking-description">
                  <strong>564</strong> of{" "}
                  <strong>1,250</strong> leads booked a tour
                </p>

                <p className="crm-description">
                  Recorded as sold in your CRM: 9.0% (113 of
                  1,250) · your real total may be higher
                </p>

              </div>

              {/* Daily Leads */}
              <div className="daily-leads">

                <span className="stat-eyebrow">
                  DAILY LEADS
                </span>

                <MiniChart />

                <div className="chart-meta">
                  <span>
                    43 / day avg
                  </span>

                  <span>
                    peak 65
                  </span>
                </div>

              </div>

            </aside>

            {/* Funnel */}
            <div className="funnel-panel">

              <div className="funnel-wrapper">

                <FunnelStep
                  value="1,250"
                  label="LEADS"
                  width="100%"
                />

                <RateBadge>
                  45.1% <span>BOOK RATE</span>
                </RateBadge>

                <FunnelStep
                  value="564"
                  label="BOOKED"
                  width="60%"
                />

                <RateBadge>
                  41.3% <span>SHOW RATE</span>
                </RateBadge>

                <FunnelStep
                  value="233"
                  label="SHOWED"
                  width="28%"
                />

                <RateBadge>
                  48.5% <span>CLOSE RATE</span>
                </RateBadge>

                <FunnelStep
                  value="113"
                  label="SOLD"
                  width="28%"
                />

              </div>

              <p className="funnel-description">
                Leads and Booked are tracked automatically.
                Showed and Sold count only the outcomes recorded
                in your CRM, so these numbers are as complete as
                your CRM updates. Memberships often close in your
                billing system or aren&apos;t entered yet, so your
                real Showed and Sold may be higher.
              </p>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}
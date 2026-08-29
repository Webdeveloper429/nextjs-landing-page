"use client";

function DashboardLogo() {
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      >
        <path d="M5 15V9" />
        <path d="M9 18V6" />
        <path d="M13 15V9" />
        <path d="M17 20V4" />
        <path d="M21 14v-4" />
      </svg>
    </div>
  );
}

function DownloadIcon() {
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
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

const Header = () => {
  return (
    <header className="w-full">
      <div className="mx-auto flex w-full max-w-[1500px] items-center justify-between gap-6 px-0 py-8 lg:px-0 xl:px-0">
        
        {/* Brand */}
        <div className="flex min-w-0 items-center gap-3">
          
          <DashboardLogo />

          <div className="min-w-0">
            <h1 className="text-lg font-semibold leading-tight tracking-[-0.02em] text-white">
              Maurice
            </h1>

            <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-white/45">
              <span>27 active locations</span>

              <span className="text-white/25">
                •
              </span>

              <span>Last 30 Days</span>

              <span className="text-white/25">
                •
              </span>

              <span>LeadGains</span>
            </div>
          </div>
        </div>

        {/* Header Actions */}
        <div className="flex shrink-0 items-center gap-3">

          {/* Sync Status */}
          <div className="hidden items-center gap-2 text-xs text-white/50 sm:flex">
            
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />

            <span>
              Synced 9m ago
            </span>

          </div>

          {/* Export Button */}
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm font-medium text-white/80 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
          >
            <DownloadIcon />

            <span>
              Export
            </span>
          </button>

        </div>
      </div>
    </header>
  );
};

export default Header;
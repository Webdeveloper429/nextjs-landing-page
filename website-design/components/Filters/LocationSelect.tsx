"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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

type LocationSelectProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function LocationSelect({
  value,
  onChange,
}: LocationSelectProps) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const locations = [
    "All Locations",
    "Anytime Fitness Bloomington",
    "Anytime Fitness Canton",
    "Anytime Fitness Cromwell",
    "Anytime Fitness Ellington",
    "Anytime Fitness Estero",
    "Anytime Fitness Farmington",
    "Anytime Fitness Glastonbury",
    "Anytime Fitness Granby",
    "Anytime Fitness Manchester",
    "Anytime Fitness Marshfield",
    "Anytime Fitness Newington",
    "Anytime Fitness Plover",
    "Anytime Fitness Rhinelander",
    "Anytime Fitness Somers",
    "Anytime Fitness Southington",
    "Anytime Fitness Stevens Point",
    "Anytime Fitness Waupaca",
    "Anytime Fitness West Hartford",
    "Anytime Fitness Wilton",
    "Anytime Fitness Windsor",
  ];

const handleLocationSelect = (location: string) => {
  onChange(location);
  setOpen(false);

  if (location === "All Locations") {
    router.push("/");
    return;
  }

  const slug = location
    .replace("Anytime Fitness ", "")
    .toLowerCase()
    .replace(/\s+/g, "-");

  router.push(`/locations/${slug}`);
};

  return (
    <div className="relative">
      <label className="mb-2 block text-xs font-medium tracking-wide text-white/40">
        LOCATION
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
          {locations.map((location) => (
            <button
              key={location}
              type="button"
              onClick={() => handleLocationSelect(location)}
              className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left text-sm text-white/70 transition hover:bg-white/[0.06] hover:text-white"
            >
              <span>{location}</span>

              {location === value && (
                <span className="text-sm text-white">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
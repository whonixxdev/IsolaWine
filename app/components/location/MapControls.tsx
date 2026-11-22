"use client";

import {
  LOCATION_MESSAGES,
  type LocationStatus,
} from "@/app/lib/maps/map-config";

interface MapControlsProps {
  query: string;
  onQueryChange: (value: string) => void;
  status: LocationStatus;
  onLocate: () => void;
}

export default function MapControls({
  query,
  onQueryChange,
  status,
  onLocate,
}: MapControlsProps) {
  const hasError =
    status === "denied" ||
    status === "unavailable" ||
    status === "timeout" ||
    status === "unsupported";

  return (
    <div className="flex flex-col gap-3">
      <label htmlFor="location-search" className="sr-only">
        Search Isola Wine locations
      </label>
      <input
        id="location-search"
        type="search"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder="Search store or area"
        className="w-full border border-neutral-300 bg-white px-4 py-3 text-sm text-[#1E2A21] outline-none transition-colors placeholder:text-neutral-400 focus:border-[#1E2A21]"
      />

      <button
        type="button"
        onClick={onLocate}
        disabled={status === "loading"}
        className="w-full border border-[#1E2A21] bg-[#1E2A21] px-4 py-3 text-xs font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-[#1E2A21] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Getting location..." : "Find nearest Isola"}
      </button>

      <p
        role="status"
        aria-live="polite"
        className={`text-xs ${hasError ? "text-red-700" : "text-neutral-500"}`}
      >
        {LOCATION_MESSAGES[status]}
      </p>
    </div>
  );
}
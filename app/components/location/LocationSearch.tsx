"use client";

import type { FormEvent } from "react";
import { LocateFixed, Search, X } from "lucide-react";
import { LocationStatus } from "@/app/lib/maps/Useuserlocation";
import { labelFont } from "./LocationFonts";


interface LocationSearchProps {
  query: string;
  status: LocationStatus;
  onQueryChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onLocate: () => void;
}

const STATUS_MESSAGES: Record<LocationStatus, string> = {
  idle: "Allow your location to see the nearest places first.",
  loading: "Finding your location.",
  ready: "Places are sorted by distance from you.",
  denied:
    "Location access is turned off. Allow it in your browser settings to see distances.",
  unavailable: "We could not find your location. You can still search by name or area.",
};

export default function LocationSearch({
  query,
  status,
  onQueryChange,
  onSubmit,
  onLocate,
}: LocationSearchProps) {
  const loading = status === "loading";
  const ready = status === "ready";

  return (
    <div className={`${labelFont.className} flex flex-col gap-4`}>
      <form onSubmit={onSubmit} role="search" className="relative">
        <label htmlFor="location-search" className="sr-only">
          Search Isola Wine locations
        </label>
        <Search
          size={17}
          strokeWidth={1.5}
          aria-hidden="true"
          className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[#1E2A21]/60"
        />
        <input
          id="location-search"
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search Isola Wine, store, or area"
          autoComplete="off"
          className="h-12 w-full rounded-full border border-[#D8D0C2] bg-transparent pl-12 pr-12 text-[14px] tracking-[0.02em] text-[#1E2A21] placeholder:text-[#1E2A21]/50 focus:border-[#5A1C26] focus:outline-none [&::-webkit-search-cancel-button]:hidden"
        />
        {query ? (
          <button
            type="button"
            onClick={() => onQueryChange("")}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-[#1E2A21]/70 transition-colors duration-300 hover:text-[#5A1C26] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#5A1C26]"
          >
            <X size={16} strokeWidth={1.5} aria-hidden="true" />
          </button>
        ) : null}
      </form>

      <button
        type="button"
        onClick={onLocate}
        disabled={loading}
        className={`inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-full border px-6 text-[11px] font-medium uppercase tracking-[0.22em] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5A1C26] disabled:cursor-wait ${
          ready
            ? "border-[#1E2A21] bg-[#1E2A21] text-[#F8F6EF] hover:bg-[#5A1C26]"
            : "border-[#D8D0C2] text-[#1E2A21] hover:border-[#5A1C26] hover:text-[#5A1C26]"
        }`}
      >
        <LocateFixed size={15} strokeWidth={1.5} aria-hidden="true" />
        <span>{loading ? "Locating" : ready ? "Update my location" : "Use my location"}</span>
      </button>

      <p
        aria-live="polite"
        className="min-h-[2.5rem] text-[13px] leading-[1.6] tracking-[0.02em] text-[#1E2A21]/70"
      >
        {STATUS_MESSAGES[status]}
      </p>
    </div>
  );
}
"use client";

import { MapCoordinates } from "@/app/lib/maps/maps-config";
import LocationCard from "./LocationCard";
import { LocationResult } from "./Locationdata";
import { labelFont } from "./LocationFonts";


interface LocationListProps {
  results: LocationResult[];
  selectedId: string | null;
  origin: MapCoordinates | null;
  onSelect: (id: string | null) => void;
  onClear: () => void;
}

export default function LocationList({
  results,
  selectedId,
  origin,
  onSelect,
  onClear,
}: LocationListProps) {
  const count = results.length;

  return (
    <div className={`${labelFont.className} mt-4 flex min-h-0 flex-1 flex-col`}>
      <p className="border-b border-[#D8D0C2] pb-3 text-[13px] tracking-[0.03em] text-[#1E2A21]/70">
        {count} {count === 1 ? "place" : "places"}
        {origin ? ", nearest first" : ""}
      </p>

      {count > 0 ? (
        <ul className="max-h-[30rem] min-h-0 flex-1 overflow-y-auto lg:max-h-none">
          {results.map((item) => (
            <LocationCard
              key={item.location.id}
              location={item.location}
              distanceKm={item.distanceKm}
              selected={item.location.id === selectedId}
              origin={origin}
              onSelect={onSelect}
            />
          ))}
        </ul>
      ) : (
        <div className="py-10 text-center">
          <p className="text-[14px] leading-[1.8] text-[#1E2A21]/80">
            No Isola Wine locations match your search.
          </p>
          <button
            type="button"
            onClick={onClear}
            className="mt-4 inline-flex h-11 items-center justify-center rounded-full border border-[#D8D0C2] px-7 text-[11px] font-medium uppercase tracking-[0.22em] text-[#1E2A21] transition-colors duration-300 hover:border-[#5A1C26] hover:text-[#5A1C26] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5A1C26]"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
}
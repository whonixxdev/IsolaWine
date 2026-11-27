"use client";

import { useMemo, useState, type FormEvent } from "react";
import { MotionConfig } from "motion/react";
import LocationList from "./LocationList";
import LocationMap from "./LocationMap";
import LocationSearch from "./LocationSearch";
import { distanceInKm } from "@/app/lib/maps/maps-config";
import { useUserLocation } from "@/app/lib/maps/Useuserlocation";
import { GENERIC_SEARCH_TERMS, KIND_SEARCH_TERMS, LOCATIONS, LocationData, LocationResult } from "./Locationdata";


const matchesQuery = (location: LocationData, query: string) => {
  const tokens = query.toLowerCase().split(/\s+/).filter(Boolean);

  if (tokens.length === 0) return true;

  const haystack = [
    "isola wine",
    location.name,
    location.kind,
    KIND_SEARCH_TERMS[location.kind],
    location.area,
    location.address ?? "",
    location.description,
  ]
    .join(" ")
    .toLowerCase();

  return tokens.every(
    (token) => GENERIC_SEARCH_TERMS.includes(token) || haystack.includes(token),
  );
};

export default function LocationExplorer() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { status, position, locate } = useUserLocation();

  const results = useMemo<LocationResult[]>(() => {
    const matched = LOCATIONS.filter((location) =>
      matchesQuery(location, query),
    ).map((location) => ({
      location,
      distanceKm: position ? distanceInKm(position, location.coordinates) : null,
    }));

    if (position) {
      matched.sort((a, b) => (a.distanceKm ?? 0) - (b.distanceKm ?? 0));
    }

    return matched;
  }, [query, position]);

  const selected =
    results.find((item) => item.location.id === selectedId) ?? null;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (status === "idle") {
      locate();
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="grid grid-cols-1 gap-6 lg:h-[44rem] lg:grid-cols-[26rem_minmax(0,1fr)] lg:grid-rows-1 lg:gap-8">
        <div className="flex min-h-0 flex-col rounded-[1.5rem] border border-[#D8D0C2] p-5 lg:rounded-[2rem] lg:p-7">
          <LocationSearch
            query={query}
            status={status}
            onQueryChange={setQuery}
            onSubmit={handleSubmit}
            onLocate={locate}
          />
          <LocationList
            results={results}
            selectedId={selectedId}
            origin={position}
            onSelect={setSelectedId}
            onClear={() => setQuery("")}
          />
        </div>

        <div className="h-[26rem] sm:h-[32rem] lg:h-full">
          <LocationMap
            results={results}
            selected={selected}
            userPosition={position}
            onSelect={setSelectedId}
          />
        </div>
      </div>
    </MotionConfig>
  );
}
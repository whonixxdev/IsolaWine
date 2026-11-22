"use client";

import { useMemo, useState } from "react";
import {
  MAP_LOCATIONS,
  buildDirectionsEmbedUrl,
  buildOverviewEmbedUrl,
  buildPlaceEmbedUrl,
  filterLocations,
  sortByDistance,
  type LatLngTuple,
} from "@/app/lib/maps/map-config";
import { useUserLocation } from "@/app/lib/maps/use-user-location";
import LocationCard from "./LocationCard";
import MapContainer from "./MapContainer";
import MapControls from "./MapControls";

interface Selection {
  id: string;
  origin: LatLngTuple | null;
}

export default function LocationExplorer() {
  const { position, status, request } = useUserLocation();
  const [query, setQuery] = useState("");
  const [selection, setSelection] = useState<Selection | null>(null);

  const locations = useMemo(
    () => sortByDistance(MAP_LOCATIONS, position),
    [position]
  );

  const visibleLocations = useMemo(
    () => filterLocations(locations, query),
    [locations, query]
  );

  const nearestId = position ? (locations[0]?.id ?? null) : null;
  const activeId =
    selection && selection.origin === position ? selection.id : nearestId;
  const active = locations.find((item) => item.id === activeId) ?? null;

  const mapSrc = useMemo(() => {
    if (!active) return buildOverviewEmbedUrl();
    if (position) return buildDirectionsEmbedUrl(position, active);
    return buildPlaceEmbedUrl(active);
  }, [active, position]);

  const handleSelect = (id: string) => {
    setSelection({ id, origin: position });
  };

  const handleShowAll = () => {
    setSelection(null);
  };

  return (
    <section className="flex min-h-screen flex-col gap-6 px-6 pb-6 pt-28 md:h-screen md:flex-row">
      <aside className="order-2 flex w-full flex-col overflow-hidden md:order-1 md:w-96">
        <h1 className="mb-6 text-2xl tracking-wide text-[#1E2A21]">
          Find Isola Wine
        </h1>

        <MapControls
          query={query}
          onQueryChange={setQuery}
          status={status}
          onLocate={request}
        />

        <div className="mt-6 flex items-center justify-between border-t border-neutral-200 pt-4">
          <p className="text-xs uppercase tracking-[0.15em] text-neutral-500">
            {visibleLocations.length} locations
          </p>
          {!position && active && (
            <button
              type="button"
              onClick={handleShowAll}
              className="text-xs font-medium uppercase tracking-[0.15em] text-[#1E2A21] underline underline-offset-4"
            >
              Show all
            </button>
          )}
        </div>

        <ul className="mt-2 flex-1 overflow-y-auto">
          {visibleLocations.map((item) => (
            <LocationCard
              key={item.id}
              location={item}
              active={item.id === activeId}
              nearest={item.id === nearestId}
              origin={position}
              onSelect={handleSelect}
            />
          ))}
          {visibleLocations.length === 0 && (
            <li className="py-6 text-sm text-neutral-500">
              No locations match your search.
            </li>
          )}
        </ul>
      </aside>

      <div className="order-1 h-80 w-full md:order-2 md:h-auto md:flex-1">
        <MapContainer src={mapSrc} title="Isola Wine locations map" />
      </div>
    </section>
  );
}
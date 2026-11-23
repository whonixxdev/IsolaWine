"use client";

import { useMemo, useState } from "react";
import {
  MAP_LOCATIONS,
  filterLocations,
  sortByDistance,
  type LatLngTuple,
} from "@/app/lib/maps/map-config";
import { useUserLocation } from "@/app/lib/maps/use-user-location";
import TextTitle from "../ui/title/Texttitle";
import LocationCard from "./LocationCard";
import MapContainer from "./MapContainer";
import MapControls from "./MapControls";

interface Selection {
  id: string | null;
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

  const handleSelect = (id: string) => {
    setSelection({ id, origin: position });
  };

  const handleShowAll = () => {
    setSelection({ id: null, origin: position });
  };

  return (
    <section className="flex min-h-svh flex-col px-6 pb-6 pt-28 md:h-svh">
      <div className="mb-8 flex justify-center text-center [&_:is(h1,h2,h3,h4)]:text-[clamp(2rem,3.2vw,2.75rem)]! [&_:is(h1,h2,h3,h4)]:leading-[1.1]!">
        <TextTitle eyebrow="Where to find us" title="Our Location" as="h2" />
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-6 md:flex-row">
        <aside className="order-2 flex min-h-0 w-full flex-col overflow-hidden md:order-1 md:w-96">
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
            {active && (
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
          <MapContainer
            locations={visibleLocations}
            active={active}
            userPosition={position}
            onSelect={handleSelect}
          />
        </div>
      </div>
    </section>
  );
}
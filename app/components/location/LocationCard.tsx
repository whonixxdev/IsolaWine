"use client";

import {
  buildDirectionsUrl,
  formatDistance,
  type LatLngTuple,
  type MapLocationWithDistance,
} from "@/app/lib/maps/map-config";

interface LocationCardProps {
  location: MapLocationWithDistance;
  active: boolean;
  nearest: boolean;
  origin: LatLngTuple | null;
  onSelect: (id: string) => void;
}

export default function LocationCard({
  location,
  active,
  nearest,
  origin,
  onSelect,
}: LocationCardProps) {
  return (
    <li className="border-b border-neutral-200">
      <button
        type="button"
        onClick={() => onSelect(location.id)}
        aria-pressed={active}
        className={`w-full px-1 py-4 text-left transition-colors ${
          active ? "bg-neutral-50" : "bg-white hover:bg-neutral-50"
        }`}
      >
        <span className="flex items-start justify-between gap-4">
          <span>
            <span className="block text-sm font-medium tracking-wide text-[#1E2A21]">
              {location.name}
            </span>
            {location.address && (
              <span className="mt-1 block text-xs text-neutral-500">
                {location.address}
              </span>
            )}
            {location.regency && (
              <span className="mt-0.5 block text-xs text-neutral-500">
                {location.regency}
              </span>
            )}
          </span>
          <span className="flex shrink-0 flex-col items-end gap-1">
            {nearest && (
              <span className="border border-[#C49A3C] px-2 py-0.5 text-[10px] uppercase tracking-[0.15em] text-[#1E2A21]">
                Nearest
              </span>
            )}
            {location.distanceKm !== null && (
              <span className="text-xs font-medium text-[#1E2A21]">
                {formatDistance(location.distanceKm)}
              </span>
            )}
          </span>
        </span>
      </button>

      {active && (
        <a
          href={buildDirectionsUrl(origin, location)}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-4 ml-1 inline-block text-xs font-medium uppercase tracking-[0.15em] text-[#1E2A21] underline underline-offset-4"
        >
          Get Directions
        </a>
      )}
    </li>
  );
}
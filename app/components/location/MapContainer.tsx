"use client";

import dynamic from "next/dynamic";
import type {
  LatLngTuple,
  MapLocationWithDistance,
} from "@/app/lib/maps/map-config";

interface MapContainerProps {
  locations: MapLocationWithDistance[];
  active: MapLocationWithDistance | null;
  userPosition: LatLngTuple | null;
  onSelect: (id: string) => void;
}

const InteractiveMap = dynamic(() => import("./InteractiveMap"), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse bg-neutral-100" />,
});

export default function MapContainer({
  locations,
  active,
  userPosition,
  onSelect,
}: MapContainerProps) {
  return (
    <div className="relative isolate h-full min-h-[450px] w-full overflow-hidden rounded-2xl bg-neutral-100">
      <div className="absolute inset-0">
        <InteractiveMap
          locations={locations}
          active={active}
          userPosition={userPosition}
          onSelect={onSelect}
        />
      </div>
    </div>
  );
}
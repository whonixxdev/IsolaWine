"use client";

import { useEffect } from "react";
import {
  AdvancedMarker,
  AdvancedMarkerAnchorPoint,
  APIProvider,
  Map as GoogleMap,
  useMap,
} from "@vis.gl/react-google-maps";
import { BALI_CENTER, BALI_ZOOM, FIT_PADDING, MAPS_API_KEY, MAP_ID, MapCoordinates, SELECTED_ZOOM, SINGLE_ZOOM } from "@/app/lib/maps/maps-config";
import { LocationResult } from "./Locationdata";
import { labelFont } from "./LocationFonts";
import { KIND_ICONS } from "./location-icons";


type MapInstance = NonNullable<ReturnType<typeof useMap>>;

interface LocationMapProps {
  results: LocationResult[];
  selected: LocationResult | null;
  userPosition: MapCoordinates | null;
  onSelect: (id: string | null) => void;
}

const fitTo = (map: MapInstance, points: MapCoordinates[]) => {
  const lats = points.map((point) => point.lat);
  const lngs = points.map((point) => point.lng);
  const north = Math.max(...lats);
  const south = Math.min(...lats);
  const east = Math.max(...lngs);
  const west = Math.min(...lngs);

  if (north === south && east === west) {
    map.panTo(points[0]);
    map.setZoom(SINGLE_ZOOM);
    return;
  }

  map.fitBounds({ north, south, east, west }, FIT_PADDING);
};

function MapController({
  results,
  selected,
  userPosition,
}: Omit<LocationMapProps, "onSelect">) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    if (selected) {
      map.panTo(selected.location.coordinates);
      map.setZoom(SELECTED_ZOOM);
      return;
    }

    if (results.length === 0) return;

    const points = results.map((item) => item.location.coordinates);
    const focus = userPosition ? [points[0], userPosition] : points;
    fitTo(map, focus);
  }, [map, selected, results, userPosition]);

  return null;
}

function PlaceMarker({
  item,
  active,
  onSelect,
}: {
  item: LocationResult;
  active: boolean;
  onSelect: (id: string | null) => void;
}) {
  const Icon = KIND_ICONS[item.location.kind];

  return (
    <AdvancedMarker
      position={item.location.coordinates}
      title={item.location.name}
      anchorPoint={AdvancedMarkerAnchorPoint.CENTER}
      zIndex={active ? 10 : 1}
      onClick={() => onSelect(active ? null : item.location.id)}
    >
      <span
        className={`flex items-center justify-center rounded-full border-2 text-[#F8F6EF] shadow-md transition-all duration-300 ${
          active
            ? "h-12 w-12 border-[#C49A3C] bg-[#5A1C26]"
            : "h-10 w-10 border-[#F8F6EF] bg-[#1E2A21]"
        }`}
      >
        <Icon size={active ? 20 : 17} strokeWidth={1.5} aria-hidden="true" />
      </span>
    </AdvancedMarker>
  );
}

export default function LocationMap({
  results,
  selected,
  userPosition,
  onSelect,
}: LocationMapProps) {
  if (!MAPS_API_KEY) {
    return (
      <div
        className={`${labelFont.className} flex h-full min-h-[24rem] items-center justify-center rounded-[1.5rem] border border-[#D8D0C2] p-8 text-center lg:rounded-[2rem]`}
      >
        <p className="max-w-sm text-[14px] leading-[1.8] text-[#1E2A21]/80">
          Google Maps is not set up yet. Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to
          .env.local and restart the development server.
        </p>
      </div>
    );
  }

  return (
    <div className="relative h-full min-h-[24rem] overflow-hidden rounded-[1.5rem] border border-[#D8D0C2] lg:rounded-[2rem]">
      <APIProvider apiKey={MAPS_API_KEY}>
        <GoogleMap
          mapId={MAP_ID}
          defaultCenter={BALI_CENTER}
          defaultZoom={BALI_ZOOM}
          gestureHandling="cooperative"
          disableDefaultUI
          zoomControl
          clickableIcons={false}
          className="h-full w-full"
        >
          <MapController
            results={results}
            selected={selected}
            userPosition={userPosition}
          />

          {results.map((item) => (
            <PlaceMarker
              key={item.location.id}
              item={item}
              active={selected?.location.id === item.location.id}
              onSelect={onSelect}
            />
          ))}

          {userPosition ? (
            <AdvancedMarker
              position={userPosition}
              title="Your location"
              anchorPoint={AdvancedMarkerAnchorPoint.CENTER}
              zIndex={20}
            >
              <span className="block h-4 w-4 rounded-full border-[3px] border-[#F8F6EF] bg-[#5A1C26] shadow-md" />
            </AdvancedMarker>
          ) : null}
        </GoogleMap>
      </APIProvider>
    </div>
  );
}
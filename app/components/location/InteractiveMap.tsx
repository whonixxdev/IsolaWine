"use client";

import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";
import {
  CircleMarker,
  MapContainer as LeafletMap,
  TileLayer,
  Tooltip,
  useMap,
} from "react-leaflet";
import {
  BALI_BOUNDS,
  BALI_MAX_BOUNDS,
  MAP_CONFIG,
  buildDirectionsUrl,
  type LatLngTuple,
  type MapLocationWithDistance,
} from "@/app/lib/maps/map-config";
import MapMarker from "./MapMarker";

interface InteractiveMapProps {
  locations: MapLocationWithDistance[];
  active: MapLocationWithDistance | null;
  userPosition: LatLngTuple | null;
  onSelect: (id: string) => void;
}

interface MapViewControllerProps {
  activeId: string | null;
  activeLat: number | null;
  activeLng: number | null;
}

function WheelZoomGuard() {
  const map = useMap();

  useEffect(() => {
    const container = map.getContainer();

    const handleMouseEnter = () => {
      map.scrollWheelZoom.enable();
    };

    const handleMouseLeave = () => {
      map.scrollWheelZoom.disable();
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    map.scrollWheelZoom.disable();

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [map]);

  return null;
}

function MapViewController({
  activeId,
  activeLat,
  activeLng,
}: MapViewControllerProps) {
  const map = useMap();
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (activeId !== null && activeLat !== null && activeLng !== null) {
      map.flyTo([activeLat, activeLng], MAP_CONFIG.placeZoom, {
        duration: 1.4,
      });
    } else if (!isFirstRun.current) {
      map.closePopup();
      map.flyToBounds(BALI_BOUNDS, { duration: 1.2 });
    }

    isFirstRun.current = false;
  }, [map, activeId, activeLat, activeLng]);

  return null;
}

function buildDescription(location: MapLocationWithDistance): string {
  return [location.address, location.regency].filter(Boolean).join(", ");
}

export default function InteractiveMap({
  locations,
  active,
  userPosition,
  onSelect,
}: InteractiveMapProps) {
  return (
    <LeafletMap
      bounds={BALI_BOUNDS}
      maxBounds={BALI_MAX_BOUNDS}
      maxBoundsViscosity={0.8}
      minZoom={8}
      maxZoom={18}
      scrollWheelZoom={false}
      className="h-full w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url={`https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png?key=${process.env.NEXT_PUBLIC_CARTO_API_KEY}`}
        maxZoom={20}
      />

      <WheelZoomGuard />

      <MapViewController
        activeId={active?.id ?? null}
        activeLat={active?.latitude ?? null}
        activeLng={active?.longitude ?? null}
      />

      {locations.map((location) => (
        <MapMarker
          key={location.id}
          position={[location.latitude, location.longitude]}
          title={location.name}
          description={buildDescription(location)}
          directionsHref={buildDirectionsUrl(userPosition, location)}
          active={location.id === active?.id}
          onSelect={() => onSelect(location.id)}
        />
      ))}

      {userPosition && (
        <>
          <CircleMarker
            center={userPosition}
            radius={16}
            interactive={false}
            pathOptions={{
              color: "#2F6FED",
              weight: 0,
              fillColor: "#2F6FED",
              fillOpacity: 0.18,
            }}
          />
          <CircleMarker
            center={userPosition}
            radius={7}
            pathOptions={{
              color: "#ffffff",
              weight: 2,
              fillColor: "#2F6FED",
              fillOpacity: 1,
            }}
          >
            <Tooltip direction="top" offset={[0, -8]}>
              You are here
            </Tooltip>
          </CircleMarker>
        </>
      )}
    </LeafletMap>
  );
}

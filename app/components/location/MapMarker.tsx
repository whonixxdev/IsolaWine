"use client";

import L from "leaflet";
import { useEffect, useMemo, useRef } from "react";
import { Marker, Popup } from "react-leaflet";
import type { LatLngTuple } from "@/app/lib/maps/map-config";

interface MapMarkerProps {
  position: LatLngTuple;
  title: string;
  description?: string;
  directionsHref?: string;
  active?: boolean;
  onSelect?: () => void;
}

function createMarkerIcon(active: boolean) {
  const width = active ? 36 : 30;
  const height = active ? 48 : 40;
  const color = active ? "#C49A3C" : "#1E2A21";
  const html = `<svg width="${width}" height="${height}" viewBox="0 0 24 32" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 20 12 20s12-11 12-20C24 5.4 18.6 0 12 0z" fill="${color}" stroke="#ffffff" stroke-width="1.5"/><circle cx="12" cy="12" r="4.5" fill="#ffffff"/></svg>`;

  return L.divIcon({
    className: "",
    html,
    iconSize: [width, height],
    iconAnchor: [width / 2, height],
    popupAnchor: [0, -height],
  });
}

export default function MapMarker({
  position,
  title,
  description,
  directionsHref,
  active = false,
  onSelect,
}: MapMarkerProps) {
  const markerRef = useRef<L.Marker | null>(null);
  const icon = useMemo(() => createMarkerIcon(active), [active]);

  useEffect(() => {
    if (active) {
      markerRef.current?.openPopup();
    }
  }, [active]);

  return (
    <Marker
      ref={markerRef}
      position={position}
      icon={icon}
      zIndexOffset={active ? 1000 : 0}
      eventHandlers={{ click: () => onSelect?.() }}
    >
      <Popup autoPan={false}>
        <span className="block text-[13px] font-medium text-[#1E2A21]">
          {title}
        </span>
        {description && (
          <span className="mt-1 block text-xs text-neutral-500">
            {description}
          </span>
        )}
        {directionsHref && (
          <a
            href={directionsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-[11px] font-medium uppercase tracking-[0.15em] text-[#1E2A21]! underline underline-offset-4"
          >
            Get Directions
          </a>
        )}
      </Popup>
    </Marker>
  );
}
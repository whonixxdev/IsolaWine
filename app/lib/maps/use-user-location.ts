import { useCallback, useState } from "react";
import type { LatLngTuple, LocationStatus } from "./map-config";

export function useUserLocation() {
  const [position, setPosition] = useState<LatLngTuple | null>(null);
  const [status, setStatus] = useState<LocationStatus>("idle");

  const request = useCallback(() => {
    if (typeof navigator === "undefined" || !navigator.geolocation) {
      setStatus("unsupported");
      return;
    }

    setStatus("loading");

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setPosition([coords.latitude, coords.longitude]);
        setStatus("success");
      },
      (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          setStatus("denied");
        } else if (error.code === error.TIMEOUT) {
          setStatus("timeout");
        } else {
          setStatus("unavailable");
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  }, []);

  return { position, status, request };
}
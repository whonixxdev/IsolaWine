export type LatLngTuple = [number, number];

export type LocationStatus =
  | "idle"
  | "loading"
  | "success"
  | "denied"
  | "unavailable"
  | "timeout"
  | "unsupported";

export interface MapLocation {
  id: string;
  name: string;
  address?: string;
  regency?: string;
  latitude: number;
  longitude: number;
}

export interface MapLocationWithDistance extends MapLocation {
  distanceKm: number | null;
}

export const MAP_CONFIG = {
  overviewEmbedUrl: "",
  overviewQuery: "Cantine Balita Bali",
  overviewZoom: 9,
  placeZoom: 15,
};

export const BALI_BOUNDS: [LatLngTuple, LatLngTuple] = [
  [-8.95, 114.4],
  [-8.0, 115.75],
];

export const BALI_MAX_BOUNDS: [LatLngTuple, LatLngTuple] = [
  [-9.3, 113.9],
  [-7.6, 116.3],
];

export const LOCATION_MESSAGES: Record<LocationStatus, string> = {
  idle: "Location is off. Showing all Isola Wine locations.",
  loading: "Getting your location...",
  success: "Showing the nearest Isola Wine first.",
  denied: "Location permission was denied. Enable it in your browser settings.",
  unavailable: "Your location is currently unavailable.",
  timeout: "Locating took too long. Please try again.",
  unsupported: "Your browser does not support geolocation.",
};

export const MAP_LOCATIONS: MapLocation[] = [
  {
    id: "cantine-balita-winery",
    name: "Cantine Balita Winery",
    address: "Tajun, Kec. Kubutambahan, Bali 81172",
    regency: "Buleleng",
    latitude: -8.1368781,
    longitude: 115.2394467,
  },
  {
    id: "cantine-balita-distribution-office",
    name: "Cantine Balita Distribution Office",
    latitude: -8.6720251,
    longitude: 115.1719656,
  },
];

export function getDistanceKm(from: LatLngTuple, to: LatLngTuple): number {
  const earthRadiusKm = 6371;
  const toRad = (value: number) => (value * Math.PI) / 180;
  const dLat = toRad(to[0] - from[0]);
  const dLng = toRad(to[1] - from[1]);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(from[0])) * Math.cos(toRad(to[0])) * Math.sin(dLng / 2) ** 2;
  return earthRadiusKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export function sortByDistance(
  locations: MapLocation[],
  origin: LatLngTuple | null
): MapLocationWithDistance[] {
  if (!origin) {
    return locations.map((item) => ({ ...item, distanceKm: null }));
  }
  return locations
    .map((item) => ({
      ...item,
      distanceKm: getDistanceKm(origin, [item.latitude, item.longitude]),
    }))
    .sort((a, b) => (a.distanceKm ?? 0) - (b.distanceKm ?? 0));
}

export function filterLocations<T extends MapLocation>(
  locations: T[],
  query: string
): T[] {
  const keyword = query.trim().toLowerCase();
  if (!keyword) return locations;
  return locations.filter((item) =>
    `${item.name} ${item.address ?? ""} ${item.regency ?? ""}`
      .toLowerCase()
      .includes(keyword)
  );
}

export function formatDistance(km: number): string {
  return km < 1 ? `${Math.round(km * 1000)} m` : `${km.toFixed(1)} km`;
}

export function buildOverviewEmbedUrl(): string {
  if (MAP_CONFIG.overviewEmbedUrl) return MAP_CONFIG.overviewEmbedUrl;
  const query = encodeURIComponent(MAP_CONFIG.overviewQuery);
  return `https://maps.google.com/maps?q=${query}&z=${MAP_CONFIG.overviewZoom}&output=embed`;
}

export function buildPlaceEmbedUrl(location: MapLocation): string {
  const label = encodeURIComponent(location.name);
  return `https://maps.google.com/maps?q=${location.latitude},${location.longitude}(${label})&z=${MAP_CONFIG.placeZoom}&output=embed`;
}

export function buildDirectionsEmbedUrl(
  origin: LatLngTuple,
  destination: MapLocation
): string {
  return `https://maps.google.com/maps?saddr=${origin[0]},${origin[1]}&daddr=${destination.latitude},${destination.longitude}&output=embed`;
}

export function buildDirectionsUrl(
  origin: LatLngTuple | null,
  destination: MapLocation
): string {
  const params = new URLSearchParams({
    api: "1",
    destination: `${destination.latitude},${destination.longitude}`,
    travelmode: "driving",
  });
  if (origin) {
    params.set("origin", `${origin[0]},${origin[1]}`);
  }
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

export function buildSearchUrl(): string {
  const params = new URLSearchParams({
    api: "1",
    query: MAP_CONFIG.overviewQuery,
  });
  return `https://www.google.com/maps/search/?${params.toString()}`;
}
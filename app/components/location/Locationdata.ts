import { MapCoordinates } from "@/app/lib/maps/maps-config";

export type LocationKind = "Winery" | "Distributor" | "Store";

export interface LocationData {
  id: string;
  name: string;
  kind: LocationKind;
  area: string;
  address?: string;
  description: string;
  phone?: string;
  hours?: string;
  coordinates: MapCoordinates;
}

export interface LocationResult {
  location: LocationData;
  distanceKm: number | null;
}

export const KIND_SEARCH_TERMS: Record<LocationKind, string> = {
  Winery: "winery vineyard kebun anggur",
  Distributor: "distributor distribution distribusi office kantor",
  Store: "store shop toko",
};

export const GENERIC_SEARCH_TERMS: readonly string[] = [
  "isola",
  "wine",
  "wines",
  "anggur",
  "toko",
  "store",
  "shop",
  "buy",
  "beli",
  "jual",
  "near",
  "nearest",
  "nearby",
  "me",
  "terdekat",
  "di",
  "at",
  "in",
  "the",
  "where",
  "to",
];

export const LOCATIONS: LocationData[] = [
  {
    id: "cantine-balita-distribution-office",
    name: "Cantine Balita Distribution Office",
    kind: "Distributor",
    area: "South Bali",
    description:
      "The distribution office for Isola wines in South Bali. Contact the team to ask about stock and delivery.",
    coordinates: { lat: -8.6720251, lng: 115.1719656 },
  },
  {
    id: "cantine-balita-winery",
    name: "Cantine Balita Winery",
    kind: "Winery",
    area: "North Bali",
    description:
      "The Isola winery in North Bali, where the wines are made from grapes grown in Bali.",
    coordinates: { lat: -8.1368781, lng: 115.2394467 },
  },
];
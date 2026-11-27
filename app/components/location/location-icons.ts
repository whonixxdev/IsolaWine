import { Store, Truck, Wine, type LucideIcon } from "lucide-react";
import { LocationKind } from "./Locationdata";

export const KIND_ICONS: Record<LocationKind, LucideIcon> = {
  Winery: Wine,
  Distributor: Truck,
  Store: Store,
};
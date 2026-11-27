"use client";

import { AnimatePresence, motion } from "motion/react";
import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { MapCoordinates, buildDirectionsUrl, formatDistance } from "@/app/lib/maps/maps-config";
import { LocationData } from "./Locationdata";
import { labelFont, titleFont } from "./LocationFonts";
import { KIND_ICONS } from "./location-icons";


const EASE = [0.22, 1, 0.36, 1] as const;

interface LocationCardProps {
  location: LocationData;
  distanceKm: number | null;
  selected: boolean;
  origin: MapCoordinates | null;
  onSelect: (id: string | null) => void;
}

export default function LocationCard({
  location,
  distanceKm,
  selected,
  origin,
  onSelect,
}: LocationCardProps) {
  const Icon = KIND_ICONS[location.kind];

  return (
    <li className={`${labelFont.className} border-t border-[#D8D0C2] first:border-t-0`}>
      <button
        type="button"
        aria-expanded={selected}
        onClick={() => onSelect(selected ? null : location.id)}
        className="flex w-full items-start gap-4 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5A1C26]"
      >
        <span
          className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
            selected
              ? "border-[#5A1C26] bg-[#5A1C26] text-[#F8F6EF]"
              : "border-[#D8D0C2] text-[#1E2A21]"
          }`}
        >
          <Icon size={17} strokeWidth={1.5} aria-hidden="true" />
        </span>

        <span className="min-w-0 flex-1">
          <span
            className={`${titleFont.className} block text-[22px] leading-tight text-[#1E2A21]`}
          >
            {location.name}
          </span>
          <span className="mt-1 block text-[13px] tracking-[0.03em] text-[#1E2A21]/70">
            {location.kind}, {location.area}
          </span>
        </span>

        {distanceKm !== null ? (
          <span className="shrink-0 pt-1 text-[13px] font-medium text-[#5A1C26]">
            {formatDistance(distanceKm)}
          </span>
        ) : null}
      </button>

      <AnimatePresence initial={false}>
        {selected ? (
          <motion.div
            key="detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="pb-6 pl-14">
              <p className="text-[14px] leading-[1.8] text-[#1E2A21]/80">
                {location.description}
              </p>

              {location.address || location.hours || location.phone ? (
                <ul className="mt-4 flex flex-col gap-2.5 text-[13px] tracking-[0.02em] text-[#1E2A21]">
                  {location.address ? (
                    <li className="flex items-start gap-3">
                      <MapPin
                        size={15}
                        strokeWidth={1.5}
                        aria-hidden="true"
                        className="mt-0.5 shrink-0 text-[#5A1C26]"
                      />
                      <span>{location.address}</span>
                    </li>
                  ) : null}
                  {location.hours ? (
                    <li className="flex items-start gap-3">
                      <Clock
                        size={15}
                        strokeWidth={1.5}
                        aria-hidden="true"
                        className="mt-0.5 shrink-0 text-[#5A1C26]"
                      />
                      <span>{location.hours}</span>
                    </li>
                  ) : null}
                  {location.phone ? (
                    <li className="flex items-start gap-3">
                      <Phone
                        size={15}
                        strokeWidth={1.5}
                        aria-hidden="true"
                        className="mt-0.5 shrink-0 text-[#5A1C26]"
                      />
                      <a
                        href={`tel:${location.phone.replace(/\s+/g, "")}`}
                        className="transition-colors duration-300 hover:text-[#5A1C26]"
                      >
                        {location.phone}
                      </a>
                    </li>
                  ) : null}
                </ul>
              ) : null}

              <a
                href={buildDirectionsUrl(location.coordinates, origin)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex h-11 items-center justify-center gap-2.5 rounded-full bg-[#1E2A21] px-7 text-[11px] font-medium uppercase tracking-[0.22em] text-[#F8F6EF] transition-colors duration-300 hover:bg-[#5A1C26] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5A1C26]"
              >
                <Navigation size={14} strokeWidth={1.5} aria-hidden="true" />
                <span>Get directions</span>
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </li>
  );
}
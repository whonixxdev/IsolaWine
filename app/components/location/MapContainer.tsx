"use client";

interface MapContainerProps {
  src: string;
  title: string;
}

export default function MapContainer({ src, title }: MapContainerProps) {
  return (
    <div className="relative h-full min-h-[450px] w-full overflow-hidden rounded-2xl bg-neutral-100">
      <iframe
        key={src}
        src={src}
        title={title}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}
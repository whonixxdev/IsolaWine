import Image from "next/image";

interface ImageSlotProps {
  src: string | null;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
}

export default function ImageSlot({
  src,
  alt,
  sizes,
  priority = false,
  className = "",
  imageClassName = "",
}: ImageSlotProps) {
  return (
    <div className={`relative overflow-hidden bg-[#1E2A21]/[0.06] ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover ${imageClassName}`}
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 flex items-center justify-center"
        >
          <svg
            viewBox="0 0 48 48"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-10 w-10 text-[#1E2A21]/25"
          >
            <path d="M24 42V22" />
            <path d="M24 30C16 30 10 24 10 14c8 0 14 5 14 16" />
            <path d="M24 26c6 0 12-4 14-12-8 0-14 4-14 12" />
          </svg>
        </div>
      )}
    </div>
  );
}
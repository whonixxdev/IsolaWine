import fs from "node:fs";
import path from "node:path";

import ScrollVelocityWave from "../../components/animations/Scroll/Scrollvelocitywave";

const imageDirectory = path.join(
  process.cwd(),
  "public",
  "assets",
  "imgs",
  "Tours",
);

function getTourImages(): string[] {
  if (!fs.existsSync(imageDirectory)) {
    return [];
  }

  const files = fs
    .readdirSync(imageDirectory)
    .filter((file) => /\.(jpe?g|png|webp|avif)$/i.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => `/assets/imgs/Tours/${encodeURIComponent(file)}`);

  if (files.length === 0) return [];

  // Menggandakan array gambar (misal dikali 3) agar galeri terlihat lebih banyak/penuh
  return [...files, ...files];
}

export default function GalleryTours() {
  const images = getTourImages();

  if (images.length === 0) {
    return (
      <div className="font-cabinet mx-auto max-w-xl px-6 text-center text-sm text-[#1E2A21]">
        <p>Tour photos are not available yet.</p>

        {process.env.NODE_ENV !== "production" && (
          <p className="mt-2 break-all text-xs opacity-60">
            Folder checked: {imageDirectory}
          </p>
        )}
      </div>
    );
  }

  return (
    <ScrollVelocityWave
      images={images}
      columns={4}
      parallaxDistance={200}
      waveIntensity={0.05}
    />
  );
}
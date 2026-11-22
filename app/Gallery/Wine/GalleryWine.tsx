import fs from "node:fs";
import path from "node:path";

import ScrollVelocityWave from "../../components/animations/Scroll/Scrollvelocitywave";

const imageDirectory = path.join(
  process.cwd(),
  "public",
  "assets",
  "imgs",
  "wine",
);

function getWineImages(): string[] {
  if (!fs.existsSync(imageDirectory)) {
    return [];
  }

  return fs
    .readdirSync(imageDirectory)
    .filter((file) => /\.(jpe?g|png|webp|avif)$/i.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => `/assets/imgs/wine/${encodeURIComponent(file)}`);
}

export default function GalleryWine() {
  const images = getWineImages();

  if (images.length === 0) {
    return (
      <div className="font-cabinet mx-auto max-w-xl px-6 text-center text-sm text-[#1E2A21]">
        <p>Wine photos are not available yet.</p>

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
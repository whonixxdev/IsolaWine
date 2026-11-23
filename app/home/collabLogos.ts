export interface CollabLogo {
  src: string;
  alt: string;
}

export interface CollabLogos {
  online: CollabLogo[];
  offline: CollabLogo[];
}

const COLLAB_URL = "/assets/collab";

const ONLINE_FILES = [
  "collabOnline.webp",
  "collabOnline2.webp",
  "collabOnline3.webp",
];

const OFFLINE_FILES = Array.from(
  { length: 10 },
  (_, index) => `collabOffline${index + 1}.webp`,
);

function toLogos(files: string[], label: string): CollabLogo[] {
  return files.map((file, index) => ({
    src: `${COLLAB_URL}/${file}`,
    alt: `Isola Wine ${label} stockist ${index + 1}`,
  }));
}

export function getCollabLogos(): CollabLogos {
  return {
    online: toLogos(ONLINE_FILES, "online"),
    offline: toLogos(OFFLINE_FILES, "offline"),
  };
}
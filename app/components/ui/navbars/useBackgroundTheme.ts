"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export type BackgroundTheme = "light" | "dark";

const LIGHT_LUMINANCE_LIMIT = 0.6;

let sampler: CanvasRenderingContext2D | null = null;

function getSampler() {
  if (sampler) return sampler;
  const canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = 1;
  sampler = canvas.getContext("2d", { willReadFrequently: true });
  return sampler;
}

function toRgba(color: string) {
  const ctx = getSampler();
  if (!ctx) return null;
  ctx.clearRect(0, 0, 1, 1);
  ctx.fillStyle = "#000000";
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 1, 1);
  const data = ctx.getImageData(0, 0, 1, 1).data;
  return { r: data[0], g: data[1], b: data[2], a: data[3] / 255 };
}

function isInsideNavbar(el: Element) {
  return el.closest("[data-navbar-root]") !== null;
}

function readTheme(probeY: number): BackgroundTheme {
  const x = Math.round(window.innerWidth / 2);
  const stack = document
    .elementsFromPoint(x, probeY)
    .filter((el) => !isInsideNavbar(el));

  for (const el of stack) {
    const marked = el.getAttribute("data-navbar-theme");
    if (marked === "light") return "light";
    if (marked === "dark") return "dark";
  }

  for (const el of stack) {
    if (
      el instanceof HTMLImageElement ||
      el instanceof HTMLVideoElement ||
      el instanceof HTMLCanvasElement
    ) {
      return "dark";
    }

    const style = window.getComputedStyle(el);

    if (style.backgroundImage.includes("url(")) return "dark";

    const bg = style.backgroundColor;
    if (!bg || bg === "transparent" || bg === "rgba(0, 0, 0, 0)") continue;

    const rgba = toRgba(bg);
    if (!rgba || rgba.a < 0.5) continue;

    const luminance =
      (0.2126 * rgba.r + 0.7152 * rgba.g + 0.0722 * rgba.b) / 255;

    return luminance > LIGHT_LUMINANCE_LIMIT ? "light" : "dark";
  }

  return "light";
}

export function useBackgroundTheme(probeY: number): BackgroundTheme {
  const [theme, setTheme] = useState<BackgroundTheme>("dark");
  const pathname = usePathname();

  useEffect(() => {
    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const next = readTheme(probeY);
        setTheme((prev) => (prev === next ? prev : next));
      });
    };

    update();

    const timers = [
      window.setTimeout(update, 150),
      window.setTimeout(update, 600),
    ];
    const interval = window.setInterval(update, 400);

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      cancelAnimationFrame(frame);
      timers.forEach((timer) => window.clearTimeout(timer));
      window.clearInterval(interval);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [probeY, pathname]);

  return theme;
}
/* eslint-disable react-hooks/set-state-in-effect */

"use client";

import { useEffect, useId, useState } from "react";
import { motion } from "motion/react";

type ThemeMode = "light" | "dark";

const options: { label: string; value: ThemeMode }[] = [
  { label: "LIGHT", value: "light" },
  { label: "DARK", value: "dark" },
];

export default function LightDark() {
  const [mode, setMode] = useState<ThemeMode>("light");
  const pillId = useId();

  useEffect(() => {
    const saved = window.localStorage.getItem("theme");
    const initial: ThemeMode = saved === "dark" ? "dark" : "light";

    setMode(initial);
    document.documentElement.classList.toggle(
      "dark",
      initial === "dark"
    );
  }, []);

  const changeMode = (value: ThemeMode) => {
    setMode(value);

    document.documentElement.classList.toggle(
      "dark",
      value === "dark"
    );

    window.localStorage.setItem("theme", value);
  };

  return (
    <div
      role="group"
      aria-label="Theme mode"
      className="relative flex items-center rounded-full border border-[var(--border-color)] bg-[var(--surface-color)] p-1 shadow-sm backdrop-blur-md"
    >
      {options.map((option) => {
        const active = mode === option.value;

        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={active}
            onClick={() => changeMode(option.value)}
            className={`relative rounded-full px-3.5 py-1.5 text-[10px] font-medium tracking-[0.2em] transition-colors duration-300 sm:px-4 ${
              active
                ? "text-[var(--active-text)]"
                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            }`}
          >
            {active && (
              <motion.span
                layoutId={pillId}
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 32,
                }}
                className="absolute inset-0 rounded-full bg-[var(--pill-color)] shadow-sm"
              />
            )}

            <span className="relative z-10">
              {option.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

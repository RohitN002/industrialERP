"use client";

import { useTheme } from "./ThemeProvider";

export function ThemeController() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-2 p-2 bg-(--surface) border border-(--border) rounded-lg">
      <button
        onClick={() => setTheme("light")}
        className={getClass(theme === "light")}
      >
        ☀️ Light
      </button>

      <button
        onClick={() => setTheme("dark")}
        className={getClass(theme === "dark")}
      >
        🌙 Dark
      </button>

      <button
        onClick={() => setTheme("system")}
        className={getClass(theme === "system")}
      >
        💻 System
      </button>
    </div>
  );
}

function getClass(active: boolean) {
  return `
    px-3 py-1.5 text-sm rounded-md
    ${
      active
        ? "bg-[var(--primary)] text-white"
        : "bg-transparent text-[var(--textSecondary)] hover:bg-[var(--surfaceHover)]"
    }
  `;
}

"use client";
import { useSyncExternalStore } from "react";
function getTheme() {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}
function subscribe(callback) {
  const onStorage = (event) => {
    if (event.key !== "theme") return;
    document.documentElement.classList.toggle(
      "dark",
      event.newValue === "dark",
    );
    callback();
  };
  window.addEventListener("themechange", callback);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener("themechange", callback);
    window.removeEventListener("storage", onStorage);
  };
}
export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "light");
  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* Theme still works without storage. */
    }
    window.dispatchEvent(new Event("themechange"));
  }
  return { theme, toggle };
}

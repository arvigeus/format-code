import { useState, useEffect, createContext } from "react";

const preferDarkQuery = "(prefers-color-scheme: dark)";
export default function useDarkMode(): [string, () => void] {
  const [mode, setMode] = useState(
    () =>
      window.localStorage.getItem("colorMode") ||
      (window.matchMedia(preferDarkQuery).matches ? "dark" : "light")
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const handleChange = () => setMode(mediaQuery.matches ? "dark" : "light");
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("colorMode", mode);
  }, [mode]);

  const toggle = () => setMode(mode === "dark" ? "light" : "dark");

  return [mode, toggle];
}

export const ThemeContext = createContext(() => {});

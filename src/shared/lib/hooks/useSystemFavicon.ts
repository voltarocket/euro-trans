import { useEffect } from "react";

export const useSystemFavicon = () => {
  useEffect(() => {
    const updateFavicon = (isDark: boolean) => {
      const existing = document.getElementById("favicon");
      if (existing) existing.remove();

      const link = document.createElement("link");
      link.id = "favicon";
      link.rel = "icon";
      link.type = "image/png";
      link.href = `${isDark ? "/favicon-dark.png" : "/favicon-light.png"}?v=${Date.now()}`;
      document.head.appendChild(link);

      console.log("Favicon updated to:", link.href);
    };

    const media = window.matchMedia("(prefers-color-scheme: dark)");

    updateFavicon(media.matches); // установка при первом рендере

    const handler = (e: MediaQueryListEvent) => {
      console.log("Theme changed:", e.matches ? "dark" : "light");
      updateFavicon(e.matches);
    };

    media.addEventListener("change", handler);

    return () => {
      media.removeEventListener("change", handler);
    };
  }, []);
};
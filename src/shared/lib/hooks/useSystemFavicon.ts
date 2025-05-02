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
    };

    const media = window.matchMedia("(prefers-color-scheme: dark)");

    updateFavicon(media.matches); 

    const handler = (e: MediaQueryListEvent) => {
      updateFavicon(e.matches);
    };

    media.addEventListener("change", handler);

    return () => {
      media.removeEventListener("change", handler);
    };
  }, []);
};
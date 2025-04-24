import { useEffect } from "react";

export const useSystemFavicon = () => {
  useEffect(() => {
    const favicon = document.getElementById("favicon") as HTMLLinkElement | null;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateFavicon = (e: MediaQueryList | MediaQueryListEvent) => {
      if (favicon) {
        favicon.href = e.matches ? "/favicon-dark.svg" : "/favicon-light.svg";
      }
    };

    updateFavicon(mediaQuery); 
    mediaQuery.addEventListener("change", updateFavicon);

    return () => {
      mediaQuery.removeEventListener("change", updateFavicon);
    };
  }, []);
};
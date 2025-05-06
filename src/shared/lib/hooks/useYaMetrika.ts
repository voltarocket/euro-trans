import { useEffect } from 'react';

declare global {
  interface Window {
    ym?: YmFunction;
    ym_a?: YmParameters[];
  }
}

type YmFunction = (id: number, action: string, ...args: any[]) => void;
type YmParameters = [number, string, ...any[]];

export const useYaMetrika = (id: number) => {
  useEffect(() => {
    if (window.ym) return;

    const script = document.createElement('script');
    script.src = 'https://mc.yandex.ru/metrika/tag.js';
    script.async = true;
    document.head.appendChild(script);

    window.ym = function (...args: Parameters<YmFunction>) {
      (window.ym_a = window.ym_a || []).push(args);
    };

    window.ym(id, 'init', {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
    });

    return () => {
      document.head.removeChild(script);
    };
  }, [id]);
};
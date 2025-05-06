import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useTrackPageViews = (id: number) => {
  const location = useLocation();

  useEffect(() => {
    if (window.ym) {
      window.ym(id, 'hit', location.pathname + location.search);
    }
  }, [location, id]);
};
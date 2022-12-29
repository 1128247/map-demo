import mapboxgl, { type Map, type LngLatLike, type TransformRequestFunction } from 'mapbox-gl';
import { useEffect, useState } from 'react';
const { Map: Instance } = mapboxgl;

mapboxgl.accessToken = 'pk.eyJ1IjoieHV5YW5nd2FuZyIsImEiOiJja2ptZTdhY2cwOGVwMnFwNHJvc291anZmIn0.211hOwmvuAIEaD_LpyRx-Q';

interface MapOption {
  center?: LngLatLike;
  zoom?: number;
  transformRequest?: TransformRequestFunction;
}

const useMap = (selector: string | HTMLElement, option?: MapOption, style = 'mapbox://styles/xuyangwang/ckjmlf9q11k5u19t4j6bqp6yi') => {
  const [map, setMap] = useState<Map>();
  useEffect(() => {
    let container: string | HTMLElement | null = null;
    if (typeof selector === 'string') container = document.querySelector<HTMLElement>(selector);
    else if (selector instanceof HTMLElement) container = selector;
    if (container === null) throw 'selector is undefined';
    const mapInstance = new Instance({
      style,
      container,
      ...option
    });
    setMap(mapInstance);
    return () => {
      mapInstance.remove();
    };
  }, []);

  return map;
};

export default useMap;

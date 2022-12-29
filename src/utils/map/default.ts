import { GeoJSON } from 'geojson';

const DEFAULT_POLYGON: GeoJSON.Feature = {
  type: 'Feature',
  properties: {},
  geometry: {
    type: 'Polygon',
    coordinates: []
  }
};

const DEFAULT_POINT:GeoJSON.Feature  = {
  type: 'Feature',
  properties: {},
  geometry: {
    type: 'Point',
    coordinates: []
  }
};

export { DEFAULT_POINT, DEFAULT_POLYGON };

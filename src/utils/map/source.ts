import { Map } from 'mapbox-gl';
import { GeoJSON } from 'geojson';
import { DEFAULT_POINT } from './default';

type SourceType = 'geojson' | 'video' | 'image' | 'canvas' | 'vector' | 'raster' | 'raster-dem' | 'custom';

const sourceIds:Array<string> = [];

const useSource = (map: Map, id: string, type: SourceType, defaultData: GeoJSON.Feature | GeoJSON.FeatureCollection) => {
  if (type === 'geojson') {
    addGeoJSONSource(map, id, defaultData);
  }
};

const addGeoJSONSource = (map: Map, id: string, defaultData = DEFAULT_POINT as GeoJSON.Feature | GeoJSON.FeatureCollection) => {
  if(map.getSource(id)){
    throw `source:${id} is existed`;
  }
  sourceIds.push(id);
  map.addSource(id, { type: 'geojson', data: defaultData});
  const updateSource = (geoJSON: GeoJSON.Feature | GeoJSON.FeatureCollection) => {
    const source = map.getSource(id);
    if (source.type === 'geojson') {
      source.setData(geoJSON);
    }
  };
  return updateSource;
};

const removeAllSource = (map: Map)=>{
  for(const sourceId of sourceIds){
    map.removeSource(sourceId);
  }
};

const removeSource = (map: Map, id: string)=>{
  if(sourceIds.includes(id))
    map.removeSource(id);
};


export { useSource, removeSource, removeAllSource };

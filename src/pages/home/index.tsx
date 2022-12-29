import React, { memo, useEffect } from 'react';
import useMap from '@/hooks/useMap';
import { useSource } from '@/utils/map';
import { DEFAULT_POLYGON } from '@/utils/map';
import HomeWrapper from './style';

const home = () => {
  const map = useMap('#map', { center: [114.0544374, 22.54555379], zoom: 9 });

  const initSource = ()=>{
    useSource(map!, 'cityPointSource', 'geojson', DEFAULT_POLYGON);
  };
  map?.on('load', ()=>{
    initSource();
  });
  map?.on('remove', ()=>{

  });
  return (
    <HomeWrapper>
      <div className="home">
        <div id="map"></div>
      </div>
    </HomeWrapper>
  );
};

export default memo(home);

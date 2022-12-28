import React, { memo } from 'react';
import useMap from '@/hooks/useMap';
import HomeWrapper from './style';

const home = () => {
  const map = useMap('.map', {center: [114.0544374, 22.54555379]});
  console.log('map:', map);
  return (
    <HomeWrapper>
      <div className="home">
        <div className="map"></div>
      </div>
    </HomeWrapper>
  );
};

export default memo(home);

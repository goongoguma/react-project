import React, { useEffect } from 'react';
import { MapWrapper, NaverMap } from './map.style';

const MapView = () => {
  useEffect(() => {
    const naverMap = window.naver.maps;
    const mapDiv = document.getElementById('naver-map');
    const mapOption = {
      center: new naverMap.LatLng(37.3595704, 127.105399),
      zoom: 10,
    };
    const map = new naverMap.Map(mapDiv, mapOption);
  }, []);

  return (
    <MapWrapper>
      <NaverMap id="naver-map" />
    </MapWrapper>
  );
};

export default MapView;

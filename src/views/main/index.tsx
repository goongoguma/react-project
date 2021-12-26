import React from 'react';
import NavigationContainer from '@components/navigation/navigation.container';
import RegionContainer from '@components/region/region.container';
import SidenavContainer from '@components/sidenav/sidenav.container';
import MapContainer from '@components/map/map.container';
import BottomnavContainer from '@components/bottomnav/bottomnav.container';
import { MapWrapper } from './index.style';

const Main = () => {
  return (
    <section>
      <NavigationContainer />
      <RegionContainer />
      <MapWrapper>
        <SidenavContainer />
        <MapContainer />
        <BottomnavContainer />
      </MapWrapper>
    </section>
  );
};

export default Main;

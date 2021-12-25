import React from 'react';
import NavigationContainer from '@components/navigation/navigation.container';
import RegionContainer from '@components/region/region.container';
import SidebarContainer from '@components/sidebar/sidebar.container';
import MapContainer from '@components/map/map.container';
import { SidebarMapWrapper } from './index.tyle';

const Main = () => {
  return (
    <section>
      <NavigationContainer />
      <RegionContainer />
      <SidebarMapWrapper>
        <SidebarContainer />
        <MapContainer />
      </SidebarMapWrapper>
    </section>
  );
};

export default Main;

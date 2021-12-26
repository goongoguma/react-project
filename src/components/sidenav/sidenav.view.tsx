import React from 'react';
import NavItemContainer from '@components/navItem/navItem.container';
import { SidenavWrapper } from './sidenav.style';

const SidenavView = () => {
  return (
    <SidenavWrapper>
      <NavItemContainer />
    </SidenavWrapper>
  );
};

export default SidenavView;

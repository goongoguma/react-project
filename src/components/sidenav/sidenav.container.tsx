import React from 'react';
import judo from '@assets/images/judo.jpeg';
import SidenavView from './sidenav.view';

const SidenavContainer = () => {
  return (
    <div>
      <img src={judo} alt="image" />
      <SidenavView />
    </div>
  );
};

export default SidenavContainer;

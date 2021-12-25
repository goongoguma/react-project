import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { HeaderWrapper } from './header.style';

const HeaderView = () => {
  return (
    <HeaderWrapper>
      <span>Company Logo</span>
      <h1>ABYO</h1>
      <span>
        <FontAwesomeIcon icon={faUserCircle} size="2x" />
      </span>
    </HeaderWrapper>
  );
};

export default HeaderView;

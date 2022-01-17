import React from 'react';
import boxing from '@assets/images/boxing.jpeg';
import jiujitsu from '@assets/images/jiujitsu.jpeg';
import judo from '@assets/images/judo.jpeg';
import taekwondo from '@assets/images/taekwondo.jpeg';
import muaythai from '@assets/images/muaythai.jpeg';
import kickBoxing from '@assets/images/kickBoxing.jpeg';
import { NavItem, NavItemImage, NavItemText, NavItemTextTitle, NavItemTextDesc } from './navItem.style';
import { NavData } from './navItem.type';

const NaItemView = ({ data }: { data: NavData[] }) => {
  const handleLocation = () => {
    console.log('clicked');
  };
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {data?.map((item: NavData) => (
        <NavItem onClick={handleLocation} key={item.id}>
          <NavItemImage image={jiujitsu} />
          <NavItemText>
            <NavItemTextTitle>{item.title}</NavItemTextTitle>
            <NavItemTextDesc>
              <li>
                - 운영시간: {item.startTime} ~ {item.endTime}
              </li>
              <li>- 위치: {item.location}</li>
              <li>- 관장: {item.owner} 관장님</li>
              <li>- {item.closeTime}</li>
            </NavItemTextDesc>
          </NavItemText>
        </NavItem>
      ))}
    </>
  );
};

export default NaItemView;

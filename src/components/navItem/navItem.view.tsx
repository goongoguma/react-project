import React from 'react';
import boxing from '@assets/images/boxing.jpeg';
import jiujitsu from '@assets/images/jiujitsu.jpeg';
import judo from '@assets/images/judo.jpeg';
import taekwondo from '@assets/images/taekwondo.jpeg';
import muaythai from '@assets/images/muaythai.jpeg';
import kickBoxing from '@assets/images/kickBoxing.jpeg';
import { NavItem, NavItemImage, NavItemText, NavItemTextTitle, NavItemTextDesc } from './navItem.style';

const NaItemView = () => {
  const handleLocation = () => {
    console.log('clicked');
  };
  return (
    <>
      <NavItem onClick={handleLocation}>
        <NavItemImage image={jiujitsu} />
        <NavItemText>
          <NavItemTextTitle>송도 본주짓수</NavItemTextTitle>
          <NavItemTextDesc>
            <li> - 운영시간: 09:00 ~ 20:00</li>
            <li>- 위치: 만수3지구</li>
            <li>- 관장: 김oo 관장님</li>
            <li>- 매주 토/일 및 공휴일 휴무</li>
          </NavItemTextDesc>
        </NavItemText>
      </NavItem>
      <NavItem>
        <NavItemImage image={judo} />
        <NavItemText>
          <NavItemTextTitle>와와 유도장</NavItemTextTitle>
          <NavItemTextDesc>
            <li> - 운영시간: 11:00 ~ 18:00</li>
            <li>- 위치: 연수 2동</li>
            <li>- 관장: 박oo 관장님</li>
            <li>- 매주 토/일 및 공휴일 운영</li>
          </NavItemTextDesc>
        </NavItemText>
      </NavItem>
      <NavItem>
        <NavItemImage image={boxing} />
        <NavItemText>
          <NavItemTextTitle>연수 복싱</NavItemTextTitle>
          <NavItemTextDesc>
            <li> - 운영시간: 07:00 ~ 22:00</li>
            <li>- 위치: 연수6동</li>
            <li>- 관장: 최oo 관장님</li>
            <li>- 휴무 없음</li>
          </NavItemTextDesc>
        </NavItemText>
      </NavItem>
      <NavItem>
        <NavItemImage image={muaythai} />
        <NavItemText>
          <NavItemTextTitle>송도 무에타이</NavItemTextTitle>
          <NavItemTextDesc>
            <li> - 운영시간: 10:00 ~ 18:00</li>
            <li>- 위치: 도림 2동</li>
            <li>- 관장: 박oo 관장님</li>
            <li>- 매주 토/일 휴무</li>
          </NavItemTextDesc>
        </NavItemText>
      </NavItem>
      <NavItem>
        <NavItemImage image={kickBoxing} />
        <NavItemText>
          <NavItemTextTitle>챔피언 킥복싱</NavItemTextTitle>
          <NavItemTextDesc>
            <li> - 운영시간: 09:00 ~ 22:00</li>
            <li>- 위치: 연수 6동</li>
            <li>- 관장: 고oo 관장님</li>
            <li>- 휴무 없음</li>
          </NavItemTextDesc>
        </NavItemText>
      </NavItem>
      <NavItem>
        <NavItemImage image={taekwondo} />
        <NavItemText>
          <NavItemTextTitle>용인 태권도 클럽</NavItemTextTitle>
          <NavItemTextDesc>
            <li> - 운영시간: 11:00 ~ 23:00</li>
            <li>- 위치: 선학 1동</li>
            <li>- 관장: 김oo 관장님</li>
            <li>- 매주 일요일 휴무</li>
          </NavItemTextDesc>
        </NavItemText>
      </NavItem>
    </>
  );
};

export default NaItemView;

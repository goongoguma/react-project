import React from 'react';
import {
  SidebarWrapper,
  SidebarItem,
  SidebarItemImage,
  SidebarItemText,
  SidebarItemTextTitle,
  SidebarItemTextDesc,
} from './sidebar.style';

const SidebarView = () => {
  return (
    <SidebarWrapper>
      <SidebarItem>
        <SidebarItemImage />
        <SidebarItemText>
          <SidebarItemTextTitle>송도 본주짓수</SidebarItemTextTitle>
          <SidebarItemTextDesc>
            <li> - 운영시간: 09:00 ~ 20:00</li>
            <li>- 위치: 만수3지구</li>
            <li>- 관장: 김oo 관장님</li>
            <li>- 매주 토/일 및 공휴일 휴무</li>
          </SidebarItemTextDesc>
        </SidebarItemText>
      </SidebarItem>
      <SidebarItem>
        <SidebarItemImage />
        <SidebarItemText>
          <SidebarItemTextTitle>와와 유도장</SidebarItemTextTitle>
          <SidebarItemTextDesc>
            <li> - 운영시간: 11:00 ~ 18:00</li>
            <li>- 위치: 연수 2동</li>
            <li>- 관장: 박oo 관장님</li>
            <li>- 매주 토/일 및 공휴일 운영</li>
          </SidebarItemTextDesc>
        </SidebarItemText>
      </SidebarItem>
      <SidebarItem>
        <SidebarItemImage />
        <SidebarItemText>
          <SidebarItemTextTitle>연수 복싱</SidebarItemTextTitle>
          <SidebarItemTextDesc>
            <li> - 운영시간: 07:00 ~ 22:00</li>
            <li>- 위치: 연수 6동</li>
            <li>- 관장: 최oo 관장님</li>
            <li>- 휴무 없음</li>
          </SidebarItemTextDesc>
        </SidebarItemText>
      </SidebarItem>
      <SidebarItem>
        <SidebarItemImage />
        <SidebarItemText>
          <SidebarItemTextTitle>송도 무에타이</SidebarItemTextTitle>
          <SidebarItemTextDesc>
            <li> - 운영시간: 10:00 ~ 18:00</li>
            <li>- 위치: 도림 2동</li>
            <li>- 관장: 박oo 관장님</li>
            <li>- 매주 토/일 휴무</li>
          </SidebarItemTextDesc>
        </SidebarItemText>
      </SidebarItem>
      <SidebarItem>
        <SidebarItemImage />
        <SidebarItemText>
          <SidebarItemTextTitle>챔피언 킥복싱</SidebarItemTextTitle>
          <SidebarItemTextDesc>
            <li> - 운영시간: 09:00 ~ 22:00</li>
            <li>- 위치: 연수 6동</li>
            <li>- 관장: 고oo 관장님</li>
            <li>- 휴무 없음</li>
          </SidebarItemTextDesc>
        </SidebarItemText>
      </SidebarItem>
      <SidebarItem>
        <SidebarItemImage />
        <SidebarItemText>
          <SidebarItemTextTitle>홍수환 복싱 클럽</SidebarItemTextTitle>
          <SidebarItemTextDesc>
            <li> - 운영시간: 11:00 ~ 23:00</li>
            <li>- 위치: 선학 1동</li>
            <li>- 관장: 안oo 관장님</li>
            <li>- 매주 일요일 휴무</li>
          </SidebarItemTextDesc>
        </SidebarItemText>
      </SidebarItem>
    </SidebarWrapper>
  );
};

export default SidebarView;

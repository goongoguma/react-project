import styled from 'styled-components';

export const SidebarWrapper = styled.ul`
  background: cadetblue;
  flex: 1;
  padding: 0;
  margin: 0;
  overflow: auto;
`;

export const SidebarItem = styled.li`
  list-style: none;
  padding: 10px;
  background: blanchedalmond;
  display: flex;
  align-items: center;
`;

export const SidebarItemImage = styled.div`
  width: 100px;
  height: 100px;
  background: blueviolet;
`;

export const SidebarItemText = styled.div`
  padding: 0 10px;
  flex: 1;
`;

export const SidebarItemTextTitle = styled.p`
  font-weight: bold;
`;

export const SidebarItemTextDesc = styled.ul`
  font-size: 13px;
  margin: 0;
  padding: 0;

  & li {
    list-style: none;
  }
`;

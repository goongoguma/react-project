import styled from 'styled-components';

interface IStyleWrapperProps {
  image: string;
}

export const NavItem = styled.li`
  list-style: none;
  padding: 10px;
  background: blanchedalmond;
  display: flex;
  align-items: center;
  cursor: pointer;
  @media (max-width: 1024px) {
    display: block;
    min-width: 200px;
    border: 1px solid black;
    cursor: pointer;
  }
`;

export const NavItemImage = styled.div<IStyleWrapperProps>`
  width: 100px;
  height: 100px;
  background-image: url(${(props) => props.image || 'blue'});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const NavItemText = styled.div`
  padding: 0 10px;
  flex: 1;
`;

export const NavItemTextTitle = styled.p`
  font-weight: bold;
`;

export const NavItemTextDesc = styled.ul`
  font-size: 13px;
  margin: 0;
  padding: 0;

  & li {
    list-style: none;
  }
`;

import styled, { keyframes } from 'styled-components';

export const RegionWrapper = styled.form`
  background: aquamarine;
  padding: 20px;
`;

export const RegionList = styled.ul`
  list-style: none;
  display flex;
  justify-content: center;
  & li {
    padding: 0 20px;
    width: 150px;
  }
`;

export const RegionItems = styled.div`
  position: relative;
`;

export const RegionListItems = styled.div`
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.1s linear, opacity 0.1s linear;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  position: absolute;
  background: cornflowerblue;
  border-radius: 10px;
  width: 110px;
  top: 30px;
  & label {
    padding: 5px 0;
    & span::before {
      content: '';
      margin: 10px;
    }
  }
`;

export const RegionListCategory = styled.div`
  background: pink;
  display: flex;
  justify-content: space-evenly;
  padding: 5px 0;
  border-radius: 10px;
  & input[type='checkbox'] {
    visibility: hidden;
  }
  & input[type='checkbox']:checked ~ ${RegionListItems} {
    visibility: visible;
    opacity: 1;
  }
  & svg {
    padding: 0 10px;
  }
`;

export const RegionListCategoryLabel = styled.label`
  width: 100%;
  pointer: cursor;
  text-align: center;
`;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {
  RegionWrapper,
  RegionList,
  RegionItems,
  RegionListCategory,
  RegionListItems,
  RegionListCategoryLabel,
} from './region.style';

const RegionView = () => {
  return (
    <RegionWrapper>
      <RegionList>
        <li>
          <RegionItems>
            <RegionListCategory>
              <input type="checkbox" id="city" />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <RegionListCategoryLabel htmlFor="city">도시</RegionListCategoryLabel>
              <FontAwesomeIcon icon={faChevronDown} />
              <RegionListItems>
                <label htmlFor="서울">
                  <input type="radio" id="서울" />
                  <span>서울</span>
                </label>
                <label htmlFor="인천">
                  <input type="radio" id="인천" />
                  <span>인천</span>
                </label>
                <label htmlFor="경기">
                  <input type="radio" id="경기" />
                  <span>경기</span>
                </label>
                <label htmlFor="강원">
                  <input type="radio" id="강원" />
                  <span>강원</span>
                </label>
                <label htmlFor="전라">
                  <input type="radio" id="전라" />
                  <span>전라</span>
                </label>
              </RegionListItems>
            </RegionListCategory>
          </RegionItems>
        </li>
        <li>
          <RegionItems>
            <RegionListCategory>
              <input type="checkbox" id="town" />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <RegionListCategoryLabel htmlFor="town">군/구</RegionListCategoryLabel>
              <FontAwesomeIcon icon={faChevronDown} />
              <RegionListItems>
                <label htmlFor="강서구">
                  <input type="radio" id="강서구" />
                  <span>강서구</span>
                </label>
                <label htmlFor="강남구">
                  <input type="radio" id="강남구" />
                  <span>강남구</span>
                </label>
                <label htmlFor="강북구">
                  <input type="radio" id="강북구" />
                  <span>강북구</span>
                </label>
                <label htmlFor="마포구">
                  <input type="radio" id="마포구" />
                  <span>마포구</span>
                </label>
                <label htmlFor="관악구">
                  <input type="radio" id="관악구" />
                  <span>관악구</span>
                </label>
              </RegionListItems>
            </RegionListCategory>
          </RegionItems>
        </li>
      </RegionList>
    </RegionWrapper>
  );
};

export default RegionView;

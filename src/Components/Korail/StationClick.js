import React from 'react';
import styled from 'styled-components';
import { BiSearchAlt } from 'react-icons/bi';
import ChangeArrow from './images/ChangeArrow.js';
import Arrow from './images/Arrow.js';
import Frame from './images/Frame.js';

function StationClick() {
  return (
    <StationClickWrapper>
      <KtxHeader>
        <Way>편도</Way>
        <Way>왕복</Way>
      </KtxHeader>
      <StationChoiceBox>
        <Start>
          <DirectionText>출발</DirectionText>
          <p>서울</p>
        </Start>
        <ChangeBox>
          <ChangeArrow />
        </ChangeBox>
        <ArrowIcon>
          <Arrow />
        </ArrowIcon>
        <Arrival>
          <DirectionText>도착</DirectionText>
          <p>부산</p>
        </Arrival>
        <KtxMap>KTX역 선택 지도</KtxMap>
      </StationChoiceBox>
      <MainStationBox>
        <Frame />
        <SearchBar>
          <input
            type='text'
            className='input-search'
            placeholder='역 명을 입력해주세요.'
          />
          <button type='submit'>
            <BiSearchAlt size='34' color='black' />
          </button>
        </SearchBar>
        <div className='stationListBox'>
          <p className='station-title'>주요 역</p>
          <p>역 이름</p>
        </div>
      </MainStationBox>
    </StationClickWrapper>
  );
}

const StationClickWrapper = styled.div`
  flex-direction: column;
  width: 375px;
  height: 45px;
`;

const KtxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

const Way = styled.div`
  width: 157px;
  height: 45px;
  font-weight: 500;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StationChoiceBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Start = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;
`;

const Arrival = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 50px;
`;

const DirectionText = styled.p`
  font-weight: 700;
  font-size: 30px;
  line-height: 43px;
  display: flex;
  justify-content: center;
`;

const ChangeBox = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 0.5px solid #3f9cf1;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  width: 10%;
`;

const ArrowIcon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const KtxMap = styled.div`
  width: 308px;
  height: 29px;
  background: #ffffff;
  border: 1px solid #686868;
  border-radius: 20px;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #686868;
`;

const MainStationBox = styled.div`
  background: #ededed;
  display: contents;
  align-items: center;
  text-align: center;
`;

const SearchBar = styled.div`
  width: 375px;
  height: 60px;
  background: #f4f4f4;
`;

export default StationClick;

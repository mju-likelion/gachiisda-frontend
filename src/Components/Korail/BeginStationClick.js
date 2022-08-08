import React from 'react';
import styled from 'styled-components';
import SearchEnter from './images/SearchEnter';
import ChangeArrow from './images/ChangeArrow.js';
import Arrow from './images/Arrow.js';
import Frame from './images/Frame.js';

function BeginStationClick() {
  return (
    <StationClickWrapper>
      <KtxHeader>
        <OneWay>편도</OneWay>
        <Way>왕복</Way>
      </KtxHeader>
      <StationWrap>
        <Start>
          <DirectionText>출발</DirectionText>
        </Start>
        <ChangeBox>
          <ChangeArrow />
        </ChangeBox>
        <Arrival>
          <DirectionText>도착</DirectionText>
        </Arrival>
      </StationWrap>
      <StationNameWrap>
        <StationStart>
          <StationName>서울</StationName>
        </StationStart>
        <ArrowIcon>
          <Arrow />
        </ArrowIcon>
        <StationArrival>
          <StationName>부산</StationName>
        </StationArrival>
      </StationNameWrap>
      <KtxMap>KTX역 선택 지도</KtxMap>
      <MainStationBox>
        <Frame />
        <SearchBar>
          <SearchInput placeholder='역 명을 입력해주세요.' />
          <SearchIcon>
            <SearchEnter />
          </SearchIcon>{' '}
        </SearchBar>
        <div className='StationListBox'>
          <StationTitle>주요 역</StationTitle>
          <StationDetail>역 이름</StationDetail>
        </div>
      </MainStationBox>
    </StationClickWrapper>
  );
}

const StationClickWrapper = styled.div`
  background: #f4f4f4;
`;

const KtxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  background: #ffffff;
`;

const OneWay = styled.div`
  width: 157px;
  height: 45px;
  font-weight: bold;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #064a87;
  border-bottom: 2px solid #064a87;
`;

const Way = styled.div`
  width: 157px;
  height: 45px;
  font-weight: bold;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StationWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Start = styled.div`
  display: flex;
  align-items: center;
  margin-right: 67px;
`;

const Arrival = styled.div`
  display: flex;
  align-items: center;
  margin-left: 67px;
`;

const StationNameWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StationStart = styled.div`
  display: flex;
  align-items: center;
  margin-right: 70px;
`;

const StationArrival = styled.div`
  display: flex;
  align-items: center;
  margin-left: 70px;
`;

const StationName = styled.div`
  font-weight: 700;
  font-size: 30px;
  line-height: 43px;
  display: flex;
  justify-content: center;
`;

const DirectionText = styled.p`
  font-weight: 500px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  color: #686868;
  margin: 16px 0 10px;
`;

const ChangeBox = styled.button`
  width: 60px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid #3f9cf1;
  border-radius: 10px;
  padding: 0px 10px;
  background: transparent;
  margin-top: 20px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  color: #686868;
  margin: 14px 34px 11px;
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.input`
  background: transparent;
  border-style: none;
  width: 70%;
  color: #7a7a7a;
  font-weight: 400;
  font-size: 16px;
  border: 2px solid #d9d9d9;
  padding: 10px;
`;

const SearchIcon = styled.button`
  border: none;
  background: transparent;
`;

const StationTitle = styled.div`
  background: #ededed;
  color: #064a87;
  font-weight: 700;
  font-size: 18px;
  padding: 9px 290px 9px 20px;
`;

const StationDetail = styled.div`
  font-weight: 500;
  font-size: 18px;
`;

export default BeginStationClick;

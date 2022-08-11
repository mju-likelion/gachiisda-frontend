import React from 'react';
import Header from './Layouts/Header';
import styled from 'styled-components';
import Switch from './images/MainSwitchBtn';
import { ReactComponent as Train } from './images/MainTrain.svg';
import { ReactComponent as Ticket } from './images/MainTicket.svg';
import Arrow from './images/BlueArrow';
import { ReactComponent as NoneTicket } from './images/NoneClickTicketBtn.svg';
import { ReactComponent as NoneTicket2 } from './images/NoneClickTicketBtn2.svg';

import { Link } from 'react-router-dom';
function Main() {
  return (
    <MainAll>
      <MainWaySelect>
        <MainOneWay>편도</MainOneWay>
        <MainAroundWay>왕복</MainAroundWay>
      </MainWaySelect>

      <div>
        <MainGoStationDivStyle>
          <MainGoStationDiv>
            <MainGoMentDiv>
              <MainGoMent>출발</MainGoMent>
              <MainGoStation>
                <Link to='/StationClick'>서울</Link>
              </MainGoStation>
            </MainGoMentDiv>

            <ArrowDiv>
              <MainSwitchBtn>
                <Switch />
              </MainSwitchBtn>
              <GoArrow>
                <Arrow />
              </GoArrow>
            </ArrowDiv>
            <MainArrivedMentDiv>
              <MainArrivedMent>도착</MainArrivedMent>
              <MainArrivedStation>
                <Link to='/StationClick'>부산</Link>
              </MainArrivedStation>
            </MainArrivedMentDiv>
          </MainGoStationDiv>
          <MainSelectKTX>KTX역 선택 지도</MainSelectKTX>
        </MainGoStationDivStyle>
      </div>

      <MainGoDiv>
        <MainInfoMent>출발일</MainInfoMent>
        <div>
          <Link to='/StartSection'> 2022년 n월 nn일 (요일) 시 : 분</Link>
        </div>
        <MainInfoArrow>▽</MainInfoArrow>
      </MainGoDiv>
      <MainGoDiv>
        <MainInfoMent>승객 연령 및 좌석수</MainInfoMent>
        <div>
          <Link to='/PeopleSection'> 어른 1명</Link>
        </div>
        <MainInfoArrow>▽</MainInfoArrow>
      </MainGoDiv>
      <MainGoDiv>
        <MainInfoMent>상세 옵션</MainInfoMent>
        <div>인접역 표출, SR 연계 표출</div>
        <MainInfoArrow>▽</MainInfoArrow>
      </MainGoDiv>

      <MainTrainInquire>
        <Link to='/StationSelect'> 열차 조회하기</Link>
      </MainTrainInquire>
      <MainTrainbtn>
        <Train height='25px' />
        <div>승차권예매</div>
      </MainTrainbtn>
      <MainNoneActbtn>
        <NoneTicket />
      </MainNoneActbtn>
      <MainNoneActbtn>
        <NoneTicket2 />
      </MainNoneActbtn>
      <MainTicketbtn>
        <Ticket height='30px' />
        <div>승차권확인</div>
      </MainTicketbtn>
      <Header />
    </MainAll>
  );
}

const MainWaySelect = styled.div``;

const MainAroundWay = styled.div`
  background-color: white;
  color: #064a87;
  font-size: 25px;
  float: right;
  width: 50%;
  height: 40px;
  padding-top: 5px;
`;

const MainOneWay = styled.div`
  background-color: white;
  color: #064a87;
  font-size: 25px;
  float: left;
  width: 50%;
  height: 40px;
  padding-top: 5px;
  border-bottom: 2px solid #064a87;
`;

const MainGoMentDiv = styled.div`
  display: flex;
  width: 50%;
  height: 40%;

  flex-direction: column;
`;

const ArrowDiv = styled.div`
  display: flex;
  width: 15%;
  height: 40%;

  flex-direction: column;
`;

const MainArrivedMentDiv = styled.div`
  display: flex;
  width: 50%;
  height: 40%;
  flex-direction: column;
`;

const MainGoMent = styled.div`
  font-size: 12px;
  color: #686868;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainGoStation = styled.div`
  color: #064a87;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`;

const MainArrivedMent = styled.div`
  font-size: 12px;
  color: #686868;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainArrivedStation = styled.div`
  color: #064a87;
  font-size: 30px;
  font-weight: bold;
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`;

const MainSwitchBtn = styled.div`
  border: 0.5px solid #3f9cf1;
  border-radius: 8px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GoArrow = styled.div`
  padding-top: 15px;
`;

const MainInfoMent = styled.div`
  color: #3f9cf1;
  font-size: 15px;
  font-weight: bold;
  padding-bottom: 5px;
`;

const MainInfoArrow = styled.div`
  color: #3f9cf1;
`;

const MainTrainInquire = styled.div`
  background-color: #c6dfee;
  color: #064a87;
  font-size: 25px;
  font-weight: bold;
  margin-top: 20px;
`;

const MainTrainbtn = styled.button`
  background-color: #f9f9f9;
  border: 0px;
  float: left;
  width: 25%;
  height: 54px;
`;

const MainNoneActbtn = styled.div`
  background-color: #f9f9f9;
  height: 54px;
  float: left;
  width: 25%;
`;

const MainTicketbtn = styled.button`
  background-color: #f9f9f9;
  border: 0px;
  float: left;
  width: 25%;
  height: 54px;
`;

const MainGoStationDiv = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainGoStationDivStyle = styled.div`
  color: #000000;
  border-bottom: 1px solid #686868;
  padding-bottom: 10px;
`;

const MainGoDiv = styled.div`
  width: 100%;
  height: 98px;
  color: #000000;
  border-bottom: 1px solid #686868;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainSelectKTX = styled.button`
  background-color: white;
  border-radius: 20px;
  color: #686868;
  border: 1px solid #686868;
  width: 90%;
  height: 29px;
  cursor: pointer;
`;

const MainAll = styled.div`
  background-color: #f4f4f4;
  text-align: center;
  margin-top: 64px;
`;

export default Main;

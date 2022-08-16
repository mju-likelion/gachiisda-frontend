import React from 'react';
import styled from 'styled-components';
import Footer from './Layouts/Footer';
import { ReactComponent as Arrow } from './images/Arrow.svg';
import { ReactComponent as MinAgo } from './images/MinAgo.svg';
import { ReactComponent as QR } from './images/QrIcon.svg';

import { ReactComponent as Train } from './images/Train.svg';
import { ReactComponent as Ticket } from './images/Ticket.svg';
import { ReactComponent as NoneTicket } from './images/NoneClickTicketBtn.svg';
import { ReactComponent as NoneTicket2 } from './images/NoneClickTicketBtn2.svg';
import Header from './Layouts/Header';
//useRecoilValue
import { useRecoilValue } from 'recoil';
import { startStation, arrivalStation, startDate } from '../../atoms/Stations';

function TicketConfirm() {
  const startStValue = useRecoilValue(startStation);
  const arrivalStvalue = useRecoilValue(arrivalStation);
  const startDtValue = useRecoilValue(startDate);

  return (
    <All>
      <div>
        <ConfirmHeader>승차권(1)</ConfirmHeader>
        <ConfirmHeader2>정기권패스</ConfirmHeader2>
      </div>

      <Day>
        {startDtValue.year}년 {startDtValue.month}월 {startDtValue.date}일 (
        {startDtValue.day})
      </Day>
      <StationDivWrap>
        <StationDiv>
          <GoWrap>
            <GoStation>{startStValue}</GoStation>
            <GoTime>출발 : 시간</GoTime>
          </GoWrap>
          <ArrowWrap>
            <Arrow />
          </ArrowWrap>
          <ArrivedWrap>
            <ArrivedStation>{arrivalStvalue}</ArrivedStation>
            <ArrivedTime>도착 : 시간</ArrivedTime>
          </ArrivedWrap>
        </StationDiv>
      </StationDivWrap>

      <TrainNameDiv>
        <TrainName>무궁화호 1211</TrainName>
      </TrainNameDiv>

      <SeatDiv>
        <SeatTitleDiv>
          <SeatTitle>타는 곳 번호</SeatTitle>
          <SeatTitle>호차 번호</SeatTitle>
          <SeatTitle>좌석 번호</SeatTitle>
          <SeatTitle>운임 영수증</SeatTitle>
        </SeatTitleDiv>

        <SeatContentsDiv>
          <SeatContentsWrap>
            <MinAgo />
          </SeatContentsWrap>
          <SeatContentsWrap>
            <TrainNumWrap>
              <TrainNum>1</TrainNum>
              <TrainNumFix>호차</TrainNumFix>
            </TrainNumWrap>
          </SeatContentsWrap>
          <SeatContentsWrap>
            <SeatNum>13</SeatNum>
          </SeatContentsWrap>
          <SeatContentsWrap>
            <QR />
          </SeatContentsWrap>
        </SeatContentsDiv>
      </SeatDiv>
      <ConfirmFooter>
        <MainTrainbtn>
          <Train />
          <div>승차권예매</div>
        </MainTrainbtn>
        <MainNoneActbtn>
          <NoneTicket />
        </MainNoneActbtn>
        <MainNoneActbtn>
          <NoneTicket2 />
        </MainNoneActbtn>
        <MainTicketbtn>
          <Ticket />
          <div>승차권확인</div>
        </MainTicketbtn>
      </ConfirmFooter>
      <Footer>미션을 수행해주세요 !</Footer>
      <Header />
    </All>
  );
}

const All = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  position: fixed;
  margin-top: 64px;
  width: 100%;
  height: 100%;
  background-color: #ededed;
`;

const ConfirmHeader = styled.div`
  background-color: white;
  color: #064a87;
  font-size: 20px;
  float: left;
  width: 50%;
  height: 45px;
  border-bottom: 2px solid #064a87;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ConfirmHeader2 = styled.div`
  background-color: white;
  color: #686868;
  font-size: 20px;
  float: right;
  width: 50%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Day = styled.div`
  background-color: #064a87;
  color: #ffffff;
  border-radius: 5px 5px 0 0;
  width: 200px;
  height: 36px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: 10px;
  margin-left: 10px;
`;

const StationDiv = styled.div`
  background-color: #ffffff;
  width: 95%;
  height: 105px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const GoStation = styled.div`
  color: #064a87;
  font-weight: bold;
  font-size: 30px;
`;

const GoTime = styled.div`
  color: #686868;
  font-size: 12px;
`;

const ArrivedStation = styled.div`
  color: #064a87;
  font-weight: bold;
  font-size: 30px;
`;

const ArrivedTime = styled.div`
  color: #686868;
  font-size: 12px;
`;

const GoWrap = styled.div`
  height: 105px;
  width: 139px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

const ArrivedWrap = styled.div`
  height: 105px;
  width: 139px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

const ArrowWrap = styled.div`
  width: 80px;
  display: flex;
  text-align: center;
  justify-content: center;
`;

const StationDivWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const TrainNameDiv = styled.div`
  background-color: #e1e9f6;
  height: 52px;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 20px;
  margin-bottom: 20px;
  width: 90%;
  margin-left: 10px;
`;

const TrainName = styled.div`
  font-size: 16px;
`;

const SeatDiv = styled.div`
  width: 95%;
  margin-left: 10px;
`;

const SeatTitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SeatTitle = styled.div`
  background-color: #d9d9d9;
  font-size: 9px;
  font-weight: bold;
  color: #686868;
  width: 25%;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SeatContentsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.65px solid #686868;
`;

const TrainNum = styled.div`
  font-size: 30px;
  color: #064a87;
`;

const TrainNumFix = styled.div`
  font-size: 13px;
  color: #064a87;
  padding-bottom: 4px;
`;

const SeatNum = styled.div`
  font-size: 30px;
  color: #064a87;
`;

const TrainNumWrap = styled.div`
  display: flex;
  align-items: flex-end;
`;

const SeatContentsWrap = styled.div`
  background-color: #ffffff;
  width: 25%;
  height: 91px;
  display: flex;
  justify-content: center;
  align-items: center;
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

const ConfirmFooter = styled.div`
  display: flex;
  position: fixed;
  bottom: 140px;
  background-color: #f9f9f9;
  width: 100%;
`;

export default TicketConfirm;

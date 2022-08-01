import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Arrow } from './images/Arrow.svg';
import { ReactComponent as QR } from './images/QR.svg';
import { ReactComponent as MinAgo } from './images/MinAgo.svg';

function TicketConfirm() {
  return (
    <div>
      <All>
        <ConfirmHeaderWrap>
          <ConfirmHeader>승차권(1)</ConfirmHeader>
          <ConfirmHeader2>정기권패스</ConfirmHeader2>
        </ConfirmHeaderWrap>

        <Day>2022년 n월 nn일 (요일)</Day>
        <StationDIVWrap>
          <StationDIV>
            <GoWrap>
              <GoStation>서울</GoStation>
              <GoTime>출발 : 시간</GoTime>
            </GoWrap>
            <ArrowWrap>
              <Arrow />
            </ArrowWrap>
            <ArrivedWrap>
              <ArrivedStation>부산</ArrivedStation>
              <ArrivedTime>도착 : 시간</ArrivedTime>
            </ArrivedWrap>
          </StationDIV>
        </StationDIVWrap>

        <TrainNumDIV>
          <TrainNum>무궁화호 1211</TrainNum>
        </TrainNumDIV>

        <SeatDIV>
          <SeatTitleDIV>
            <SeatTitle>타는 곳 번호</SeatTitle>
            <SeatTitle>호차 번호</SeatTitle>
            <SeatTitle>좌석 번호</SeatTitle>
            <SeatTitle>운임 영수증</SeatTitle>
          </SeatTitleDIV>

          <SetContentsDIV>
            <MinAgo />

            <QR />
          </SetContentsDIV>
        </SeatDIV>
      </All>
    </div>
  );
}
const All = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;

  background-color: #f4f4f4;
`;
const ConfirmHeaderWrap = styled.div``;

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
  /* float: left; */
  width: 200px;
  height: 36px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const StationDIV = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 105px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;
const ArrivedWrap = styled.div`
  height: 105px;
  width: 139px;
  /* background-color: yellow; */
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;
const ArrowWrap = styled.div`
  /* height: 105px; */
  width: 80px;
  /* background-color: green; */
  display: flex;
  text-align: center;
  justify-content: center;
`;
const StationDIVWrap = styled.div`
  display: flex;
  justify-content: center;
`;
const TrainNumDIV = styled.div`
  background-color: #e1e9f6;
  height: 52px;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 20px;
`;
const TrainNum = styled.div`
  font-size: 16px;
`;
const SeatDIV = styled.div``;
const SeatTitleDIV = styled.div`
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
const SetContentsDIV = styled.div``;
// const StationDIV = styled.div``;
// const StationDIV = styled.div``;
// const StationDIV = styled.div``;
// const StationDIV = styled.div``;

export default TicketConfirm;

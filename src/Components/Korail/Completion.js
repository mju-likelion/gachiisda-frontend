import React from 'react';
import styled from 'styled-components';
import BlackArrow from './images/BlackArrow';
import TimeImage from './images/TimeImage';
import Qr from './images/Qr';
import { ReactComponent as FooterImg } from './images/FooterImg.svg';

const Item = ({ text }) => text;

function Completion() {
  return (
    <All>
      <MainMent>예매 되었습니다</MainMent>
      <MiddleMent>
        열차 출입구에 큐알코드 인식기가 있는 경우
        <Item text={<br />} />
        또는 역무원의 요청이 있을 경우,
      </MiddleMent>
      <EnddingMent>해당 큐알코드를 보여주시면 됩니다.</EnddingMent>
      <ImageWrap>
        <FooterImg />
        <Arrow>
          <BlackArrow />
        </Arrow>
      </ImageWrap>
      <SeatTable>
        <SeatTitleWrap>
          <SeatTitle>타는 곳 번호</SeatTitle>
          <SeatTitle>호차 번호</SeatTitle>
          <SeatTitle>좌석 번호</SeatTitle>
          <SeatTitle>운임 영수증</SeatTitle>
        </SeatTitleWrap>
        <SeatContents>
          <SeatContentsWrap>
            <TimeImage />
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
            <Qr />
          </SeatContentsWrap>
        </SeatContents>
      </SeatTable>
    </All>
  );
}

const All = styled.div`
  align-items: center;
  text-align: center;
`;

const MainMent = styled.div`
  margin-top: 78px;
  font-weight: 700;
  font-size: 39px;
  align-items: center;
  text-align: center;
  color: #000000;
`;

const MiddleMent = styled.div`
  margin-top: 36px;
  font-weight: 400;
  font-size: 18px;
`;

const EnddingMent = styled.div`
  margin-top: 18px;
  font-weight: 700;
  font-size: 20px;
`;

const ImageWrap = styled.div`
  margin-top: 41px;
`;

const Arrow = styled.div`
  margin: 1px 0px 0px 215px;
`;

const SeatTable = styled.div`
  width: 95%;
  margin-left: 10px;
`;

const SeatTitleWrap = styled.div`
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

const SeatContents = styled.div`
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

export default Completion;

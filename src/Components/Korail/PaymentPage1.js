import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Arrow } from './images/Arrow.svg';

function paymentPage1() {
  return (
    <div>
      <All>
        <PaymentHeader>결제</PaymentHeader>
        <DayDIV>
          <Day>2022년 n월 n일 (요일)</Day>
          <TrainWrap>
            <TrainType>열차 종류</TrainType>
            <TrainNum>열차 번호</TrainNum>
          </TrainWrap>
        </DayDIV>

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

        <TicketInfoDIV>
          <TicketInfoWrap>
            <TicketInfo>내 승차권 정보</TicketInfo>
            <TicketInfo>(호차/좌석번호)</TicketInfo>
          </TicketInfoWrap>
          {/* <Detail>상세</Detail> */}
        </TicketInfoDIV>

        <PriceDiscountDIV>
          <PriceDIV>
            <PriceTitle>승차권</PriceTitle>
            <PriceWrap>
              <Price>XX,XXX원</Price>
            </PriceWrap>
          </PriceDIV>
          <DiscountDIV>
            <DiscountTitle>할인 적용 전</DiscountTitle>
            <DiscountWrap>
              <Discount>XX,XXX원 (총 XX,XXX원 할인)</Discount>
            </DiscountWrap>
          </DiscountDIV>
        </PriceDiscountDIV>
      </All>
    </div>
  );
}
const All = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  background-color: #f4f4f4;
  height: 100%;
  flex-direction: column;
`;
const PaymentHeader = styled.div`
  height: 64px;
  background-color: #b285c8;
  color: #ffffff;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Day = styled.div`
  font-size: 15px;
  color: #70139c;
`;
const TrainType = styled.div`
  font-size: 12px;
  color: #b76cda;
`;
const TrainNum = styled.div`
  font-size: 12px;
  color: #b76cda;
`;
const DayDIV = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
`;
const TrainWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const StationDIV = styled.div`
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
const StationDIVWrap = styled.div`
  display: flex;
  justify-content: center;
`;
const TicketInfoDIV = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: green; */
  height: 66px;
  border-top: 1px solid #686868;
  border-bottom: 1px solid #686868;
`;
const TicketInfo = styled.div``;
// const Detail = styled.div`
//   font-size: 16px;
//   color: #686868;
//   background-color: #b3d5f2;
//   width: 47px;
//   height: 33px;
// `;
const TicketInfoWrap = styled.div`
  display: flex;
`;
const PriceDIV = styled.div`
  width: 220px;
  height: 26px;
`;
const DiscountDIV = styled.div`
  width: 375px;
  height: 23px;
`;

const PriceTitle = styled.div`
  font-size: 18px;
  float: left;
`;
const Price = styled.div`
  color: #70139c;
  font-weight: bold;
  font-size: 18px;
  float: right;
`;
const DiscountTitle = styled.div`
  font-size: 16px;
  float: left;
`;
const Discount = styled.div`
  float: right;
`;
const PriceWrap = styled.div``;
const DiscountWrap = styled.div``;
const PriceDiscountDIV = styled.div``;
// const All = styled.div``;
// const All = styled.div``;
// const All = styled.div``;

export default paymentPage1;

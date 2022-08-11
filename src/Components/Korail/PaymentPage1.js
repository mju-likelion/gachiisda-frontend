import React from 'react';
import styled from 'styled-components';
import { ReactComponent as BlueArrow } from './images/BlueArrow.svg';
import { ReactComponent as AnotherDiscount } from './images/AnotherDiscount.svg';
import PaymentFooter from './Layouts/PaymentFooter1';

function paymentPage1() {
  return (
    <All>
      <PaymentHeader>결제</PaymentHeader>
      <DayDiv>
        <Day>2022년 n월 n일 (요일)</Day>
        <TrainWrap>
          <TrainType>열차 종류</TrainType>
          <TrainNum>열차 번호</TrainNum>
        </TrainWrap>
      </DayDiv>

      <StationDivWrap>
        <StationDiv>
          <GoWrap>
            <GoStation>서울</GoStation>
            <GoTime>출발 : 시간</GoTime>
          </GoWrap>
          <ArrowWrap>
            <BlueArrow />
          </ArrowWrap>
          <ArrivedWrap>
            <ArrivedStation>부산</ArrivedStation>
            <ArrivedTime>도착 : 시간</ArrivedTime>
          </ArrivedWrap>
        </StationDiv>
      </StationDivWrap>

      <TicketInfoDiv>
        <TicketInfoWrap>
          <div>내 승차권 정보</div>
          <div>(호차/좌석번호)</div>
        </TicketInfoWrap>
        <DetailWrap>
          <Detail>상세</Detail>
        </DetailWrap>
      </TicketInfoDiv>

      <PriceDiscountDiv>
        <PriceDiv>
          <PriceTitle>승차권</PriceTitle>
          <div>
            <Price>XX,XXX원</Price>
          </div>
        </PriceDiv>
        <DiscountDiv>
          <DiscountTitle>할인 적용 전</DiscountTitle>
          <div>
            <Discount>XX,XXX원 (총 XX,XXX원 할인)</Discount>
          </div>
        </DiscountDiv>
      </PriceDiscountDiv>
      <div>
        <AnotherDiscount width='100%' />
      </div>
      <PaymentFooter />
    </All>
  );
}

const All = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  background-color: #f4f4f4;
  width: 100%;
  flex-direction: column;
  margin-top: 64px;
  padding-bottom: 252px;
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
  margin: 15px 0 4px 0;
`;

const TrainType = styled.div`
  font-size: 12px;
  color: #b76cda;
`;

const TrainNum = styled.div`
  font-size: 12px;
  color: #b76cda;
`;

const DayDiv = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 15px;
`;

const TrainWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const StationDiv = styled.div`
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

const TicketInfoDiv = styled.div`
  height: 66px;
  border-top: 1px solid #686868;
  border-bottom: 1px solid #686868;
`;

const Detail = styled.div`
  font-size: 16px;
  color: #686868;
  background-color: #b3d5f2;
  width: 47px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TicketInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  float: left;
  margin: 13px 0 0 140px;
`;

const PriceDiv = styled.div`
  width: 220px;
  height: 26px;
  margin-top: 10px;
`;

const DiscountDiv = styled.div`
  width: 375px;
  height: 23px;
  margin-bottom: 10px;
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

const PriceDiscountDiv = styled.div`
  padding-left: 10px;
  border-bottom: 1px solid #686868;
`;

const DetailWrap = styled.div`
  float: right;
  margin-right: 20px;
  margin-top: 18px;
`;

export default paymentPage1;

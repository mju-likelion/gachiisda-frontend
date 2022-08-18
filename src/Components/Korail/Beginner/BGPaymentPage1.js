import React from 'react';
import styled from 'styled-components';
import Footer from '../Layouts/Footer';
import { ReactComponent as Arrow } from '../images/Arrow.svg';
import { ReactComponent as AnotherDiscount } from '../images/AnotherDiscount.svg';
import PaymentFooter from '../Layouts/BGPaymentFooter1';
import Header from '../Layouts/Header';
//useRecoilValue
import { useRecoilValue } from 'recoil';
import {
  startStation,
  arrivalStation,
  startDate,
  seatName,
} from '../../../atoms/Stations';

function BGPaymentPage1() {
  const startStValue = useRecoilValue(startStation);
  const arrivalStvalue = useRecoilValue(arrivalStation);
  const startDtValue = useRecoilValue(startDate);
  const seatNmValue = useRecoilValue(seatName);

  const handleClick = () => {
    alert('승차권 가격을 확인 하신 후,\n아래의 다음 버튼을 눌러주세요');
  };
  return (
    <All>
      <PaymentHeader>결제</PaymentHeader>
      <DayDiv>
        <Day>
          {' '}
          {startDtValue.year}년 {startDtValue.month}월 {startDtValue.date}일 (
          {startDtValue.day})
        </Day>
        <TrainWrap>
          <TrainType>열차 종류</TrainType>
          <TrainNum>열차 번호</TrainNum>
        </TrainWrap>
      </DayDiv>

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

      <TicketInfoDiv>
        <TicketInfoWrap>
          <div>내 승차권 정보</div>
          <div>(1호차/{seatNmValue})</div>
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
      <Footer onClick={handleClick}>미션을 수행해주세요 !</Footer>
      <Header />
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
  padding-top: 64px;
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
  margin-top: 15px;
  margin-bottom: 4px;
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
  margin-left: 140px;
  margin-top: 13px;
  width: 30%;
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
  border: 5px solid #3f9cf1;
`;

const DetailWrap = styled.div`
  float: right;
  margin-right: 20px;
  margin-top: 18px;
`;

export default BGPaymentPage1;

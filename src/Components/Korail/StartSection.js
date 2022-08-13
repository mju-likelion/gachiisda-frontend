import React from 'react';
import styled from 'styled-components';
import Header from './Layouts/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';

function StartSection() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://15.164.225.225:3300/api/korail/date').then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <div>
      <StartSectionWrapper>
        <Header />
        <Blanck />
        <FirstBox>
          <OneWayWrap>
            <OneWay>편도</OneWay>
          </OneWayWrap>
          <BothWay>왕복</BothWay>
        </FirstBox>
        <DateBox>
          <Type>출발일</Type>
          <Total>2022년 n월 nn일 (요일) 시:분</Total>
          <Type>△</Type>
        </DateBox>
        <CalendarBox>
          <Calendar>달력에서 날짜 선택</Calendar>
        </CalendarBox>
        <MiddleBox>
          <DayBox>
            <DifferDay>요일</DifferDay>
            <Date>날짜</Date>
            <Week>
              {data && (
                <div>{JSON.stringify(data.data[0].next[0].nextDate)}</div>
              )}

              {/* {data.data[0].next[0].nextDate.map((user) => (
                <div key={user}>{user}</div>
              ))} */}
            </Week>
          </DayBox>
        </MiddleBox>
        <HourWrap>
          <SecondMiddleBox>
            <Number>숫자</Number>
            <Si>시</Si>
          </SecondMiddleBox>
          <SecondMiddleBox>
            <Number>숫자</Number>
            <Si>시</Si>
          </SecondMiddleBox>
          <SecondMiddleBox>
            <Number>숫자</Number>
            <Si>시</Si>
          </SecondMiddleBox>
        </HourWrap>
        <LineTwo />
        <FirstThirdBox>
          <Type>승객 연령 및 좌석수</Type>
          <Total>어른 1명</Total>
          <Type>▽</Type>
        </FirstThirdBox>
        <Line />
        <SecondThirdBox>
          <Type>상세 옵션</Type>
          <Total>인접역 표출, SR연계 표출</Total>
          <Type>▽</Type>
        </SecondThirdBox>
        <Line />
        <Inquiry>열차 조회하기</Inquiry>
      </StartSectionWrapper>
    </div>
  );
}

const StartSectionWrapper = styled.div`
  text-align: center;
`;

const FirstBox = styled.div`
  background-color: white;
  justify-content: space-around;
  display: flex;
  height: 43px;
  align-items: center;
`;

const DateBox = styled.div`
  background-color: #e1e9f6;
  height: 98px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const CalendarBox = styled.div`
  background-color: #ededed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
`;

const Calendar = styled.div`
  border-radius: 20px;
  width: 300px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px solid black;
`;

const DayBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Date = styled.div`
  display: flex;
  font-size: 13px;
  flex-direction: column;
  font-weight: bold;
`;

const Week = styled.span`
  font-size: 10px;
  font-weight: 400;
`;

const MiddleBox = styled.div`
  display: flex;
  background-color: #ededed;
  justify-content: space-around;
  height: 90px;
`;

const SecondMiddleBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #d9d9d9;
  height: 60px;
`;

const HourWrap = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Number = styled.div`
  font-size: 22px;
  font-weight: bold;
  height: 60px;
  display: flex;
  align-items: center;
`;

const Si = styled.span`
  font-size: 15px;
`;

const Type = styled.div`
  font-weight: bold;
  font-size: 15px;
  color: #3f9cf1;
`;

const Total = styled.div`
  font-size: Mixed;
  font-weight: 600;
`;

const Inquiry = styled.div`
  background-color: #c6dfee;
  font-weight: bold;
  font-size: 25px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #064a87;
`;

const LineTwo = styled.div`
  background-color: #ededed;
  height: 10px;
`;

const Line = styled.div`
  height: 1.5px;
  background-color: gray;
`;

const FirstThirdBox = styled.div`
  height: 98px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const SecondThirdBox = styled.div`
  background-color: #f5f5f5;
  height: 98px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const OneWay = styled.div`
  color: #064a87;
  font-weight: medium;
  font-size: 25px;
`;

const BothWay = styled.div`
  color: #686868;
  font-weight: medium;
  font-size: 25px;
  width: 50%;
`;

const Blanck = styled.div`
  background-color: #b3d5f2;
  height: 64px;
`;

const DifferDay = styled.div`
  font-size: 8px;
  font-weight: bold;
  color: #000000;
`;

const OneWayWrap = styled.div`
  border-bottom: 2px solid #064a87;
  width: 50%;
`;
export default StartSection;

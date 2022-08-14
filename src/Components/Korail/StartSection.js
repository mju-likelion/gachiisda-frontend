import React from 'react';
import styled from 'styled-components';
// import Header from './Layouts/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import Footer from './Layouts/Footer';

function StartSection() {
  const [day, setDay] = useState([]);
  const [date, setDate] = useState([]);
  const [time, setTime] = useState([]);

  const [godate, setGoDate] = useState('');
  // const [goDay, setGoDay] = useState('');
  const [goTime, setGoTime] = useState('');
  // 초기값fasle, 시간 목록을 보여줄지 결정하는 useState

  useEffect(() => {
    axios.get('http://15.164.225.225:3300/api/korail/date').then((response) => {
      setDay(response.data.data.next.nextDay);
      setDate(response.data.data.next.nextDate);
      setTime(response.data.data.timeTable);
    });
  }, []);

  return (
    <div>
      <StartSectionWrapper>
        <DateBox>
          <Type>출발일</Type>
          <Total>
            2022년 8월 {godate}일 {goTime} 00분
          </Total>
          <Type>△</Type>
        </DateBox>
        <CalendarBox>
          <Calendar>달력에서 날짜 선택</Calendar>
        </CalendarBox>
        <MiddleBox>
          <DayBox>
            <DifferDay>
              {day.map((day) => (
                <InDay key={day.index}>{day}</InDay>
              ))}
            </DifferDay>
            <Date>
              {date.map((date) => (
                <InDate key={date.index} onClick={() => setGoDate(date)}>
                  {date}
                </InDate>
              ))}
            </Date>
          </DayBox>
        </MiddleBox>
        <HourWrap>
          <SecondMiddleBox>
            <Number>
              {time.map((time) => (
                <InTime key={time.index} onClick={() => setGoTime(time)}>
                  {time}
                </InTime>
              ))}
            </Number>
          </SecondMiddleBox>
        </HourWrap>
      </StartSectionWrapper>
    </div>
  );
}

const StartSectionWrapper = styled.div`
  text-align: center;
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
  justify-content: center;
  overflow: scroll;
`;

const Date = styled.div`
  display: flex;
  font-size: 13px;
  font-weight: bold;
`;

const InDate = styled.div`
  display: flex;
  padding: 0 5px 0 5px;
`;

const InDay = styled.div`
  display: flex;
  padding: 0 10px 0 10px;
`;

const MiddleBox = styled.div`
  display: flex;
  background-color: #ededed;
  height: 90px;
`;

const SecondMiddleBox = styled.div`
  display: flex;
  background-color: #d9d9d9;
  height: 60px;
  overflow: scroll;
`;

const HourWrap = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Number = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
`;

const InTime = styled.div`
  font-size: 20px;
  white-space: nowrap;
  padding: 0 5px 0 5px;
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

const DifferDay = styled.div`
  font-size: 8px;
  font-weight: bold;
  color: #000000;
  display: flex;
`;

export default StartSection;

import React from 'react';
import styled from 'styled-components';
import Footer from '../Layouts/Footer';

function BGStartSection() {
  return (
    <div>
      <BGStartSectionWrapper>
        <Blanck />
        <FirstBox>
          <OneWay>편도</OneWay>
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
            <DayDay>요일</DayDay>
            <Date>
              날짜 <Week>월요일</Week>
            </Date>
          </DayBox>
          <DayBox>
            <DayDay>요일</DayDay>
            <Date>
              날짜
              <Week>화요일</Week>
            </Date>
          </DayBox>
          <DayBox>
            <DayDay>요일</DayDay>
            <Date>
              날짜
              <Week>수요일</Week>
            </Date>
          </DayBox>
          <DayBox>
            <DayDay>요일</DayDay>
            <Date>
              날짜
              <Week>목요일</Week>
            </Date>
          </DayBox>
          <DayBox>
            <DayDay>요일</DayDay>
            <Date>
              날짜
              <Week>금요일</Week>
            </Date>
          </DayBox>
          <DayBox>
            <DayDay>요일</DayDay>
            <Date>
              날짜
              <Week>토요일</Week>
            </Date>
          </DayBox>
          <DayBox>
            <DayDay>요일</DayDay>
            <Date>
              날짜
              <Week>일요일</Week>
            </Date>
          </DayBox>
        </MiddleBox>

        <SecondMiddleBox>
          <Number>
            숫자<Si>시</Si>
          </Number>
          <Number>
            숫자<Si>시</Si>
          </Number>
          <Number>
            숫자<Si>시</Si>
          </Number>
          <Number>
            숫자<Si>시</Si>
          </Number>
          <Number>
            숫자<Si>시</Si>
          </Number>
          <Number>
            숫자<Si>시</Si>
          </Number>
        </SecondMiddleBox>
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
      </BGStartSectionWrapper>
      <Footer>
        출발 할 날짜와 시간을 골라주세요. 해당하는 날짜 및 시간이 없을 시,
        영역에 손가락을 대고 왼쪽으로 밀면 그 다음 날짜와 시간이 나옵니다.
        날짜와 시간을 선택하신 뒤 승객 연령 및 좌석수 칸을 눌러주세요
      </Footer>
    </div>
  );
}

const BGStartSectionWrapper = styled.div`
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
  height: 50px;
  display: flex;
  font-size: 13px;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  /* background-color: gray; */
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
  justify-content: space-around;
  height: 60px;
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
`;

const Blanck = styled.div`
  background-color: #b3d5f2;
  height: 64px;
`;

const DayDay = styled.div`
  font-size: 8px;
  font-weight: bold;
  color: #000000;
`;

export default BGStartSection;

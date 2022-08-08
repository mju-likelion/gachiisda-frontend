import React from 'react';
import styled from 'styled-components';

function PeopleSection() {
  return (
    <StartSectionWrapper>
      <Blanck></Blanck>
      <FirstBox>
        <OneWay>편도</OneWay>
        <BothWay>왕복</BothWay>
      </FirstBox>

      <SeatBox>
        <Age>승객 연령 및 좌석수</Age>
        <Total>어른 1명</Total>
        <Age> △ </Age>
      </SeatBox>
      <MiddleBox>
        <AtLeast>최소 1명 - 최대 9명</AtLeast>

        <ByAge>
          <Type>어른(만 13세 이상)</Type>

          <Minus>－ </Minus>
          <Add>0</Add>
          <Plus>＋</Plus>
        </ByAge>

        <ByAge>
          <Type>어린이(만 6세 ~12세)</Type>
          <Add>
            <Minus>－ </Minus>
            <Add>0</Add>
            <Plus>＋</Plus>
          </Add>
        </ByAge>
        <ByAge>
          <Type>유아(만 6세 미만)</Type>
          <Add>
            <Minus>－ </Minus>
            <Add>0</Add>
            <Plus>＋</Plus>
          </Add>
        </ByAge>
        <ByAge>
          <Type>경로(만 65세 이상)</Type>
          <Add>
            <Minus>－ </Minus>
            <Add>0</Add>
            <Plus>＋</Plus>
          </Add>
        </ByAge>
        <ByAge>
          <Type>중증 장애인</Type>
          <Add>
            <Minus>－ </Minus>
            <Add>0</Add>
            <Plus>＋</Plus>
          </Add>
        </ByAge>
        <ByAge>
          <Type>경증 장애인</Type>
          <Add>
            <Minus>－ </Minus>
            <Add>0</Add>
            <Plus>＋</Plus>
          </Add>
        </ByAge>
      </MiddleBox>

      <OptionBox>
        <Age>상세 옵션</Age>
        <Total>인접역 표출, SR연계 표출</Total>
        <Age>▽</Age>
      </OptionBox>

      <Line></Line>
      <Inquiry>열차 조회하기</Inquiry>
    </StartSectionWrapper>
  );
}

const StartSectionWrapper = styled.div`
  text-align: center;
`;

const Age = styled.div`
  color: #3f9cf1;
  font-weight: bold;
  font-size: 15px;
`;

const FirstBox = styled.div`
  background-color: white;
  justify-content: space-around;
  display: flex;
  width: 375px;
  height: 45px;
`;

const AtLeast = styled.div`
  color: #686868;
  font-weight: 500;
  font-size: 12px;
  height: 17px;
`;

const Minus = styled.button`
  display: flex;
  margin-left: 100px;
  margin-right: 10px;
  float: right;
`;

const Plus = styled.button`
  background-color: white;
  border: 1px solid black;
  border-radius: 20px;
  height: 25px;
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
`;

const SeatBox = styled.div`
  height: 98px;
  background-color: #e1e9f6;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const OneWay = styled.div`
  width: 157px;
  height: 45px;
  font-weight: bold;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #064a87;
  border-bottom: 2px solid #064a87;
`;

const BothWay = styled.div`
  width: 157px;
  height: 45px;
  font-weight: 500;
  font-weight: bold;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Total = styled.div`
  font-weight: 600;
`;

const ByAge = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 10px;
  font-size: 18px;
`;

const Blanck = styled.div``;

const MiddleBox = styled.div`
  height: 330px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* align-items: flex-start; */
  font-weight: bold;
  background-color: #ededed;
`;

const OptionBox = styled.div`
  background-color: #f5f5f5;
  height: 98px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Line = styled.div`
  height: 1.5px;
  background-color: gray;
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

const Type = styled.div`
  font-weight: Medium;
  font-size: 18px;
  color: #000000;
`;

const Add = styled.div``;

export default PeopleSection;

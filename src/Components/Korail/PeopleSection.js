import React from 'react';
import styled from 'styled-components';
// import React, {useState, useEffect} from 'react';

function PeopleSection() {
  //const [item,setItem] = useState(0)
  //const [finalSum, setfinalSum] = useState();

  // useEffect(() => {
  //  setfinalSum(finalSum);
  // });

  //const plus = (id) => setItem(item + 1)
  // const minus = (id) => setItem(item - 1)

  // const totalSum = () => {
  // let total = 0; ...

  // }
  return (
    <StartSectionWrapper>
      <Blanck></Blanck>
      <FirstBox>
        <OneWay>편도</OneWay>
        <BothWay>왕복</BothWay>
      </FirstBox>

      <SeatBox>
        <Age>승객 연령 및 좌석수</Age>
        {/* 밑의 기능을 넣어서 합계 내기 */}
        <Total>어른 1명</Total>
        <Age> △ </Age>
      </SeatBox>
      <AtLeast>최소 1명 - 최대 9명</AtLeast>

      <MiddleBox>
        {/* id로 묶기 */}
        <ByAge>
          <Type>어른(만 13세 이상)</Type> <Type>어린이(만 6세 ~12세)</Type>
          <Type>유아(만 6세 미만)</Type>
          <Type>경로(만 65세 이상)</Type>
          <Type>중증 장애인</Type>
          <Type>경증 장애인</Type>
        </ByAge>
        <ByCount>
          {/* OnClick, map함수로 구현 */}
          <Add>
            <Minus>－</Minus>0<Plus>＋</Plus>
          </Add>
          <Add>
            <Minus>－</Minus>0<Plus>＋</Plus>
          </Add>
          <Add>
            <Minus>－</Minus>0<Plus>＋</Plus>
          </Add>
          <Add>
            <Minus>－</Minus>0<Plus>＋</Plus>
          </Add>
          <Add>
            <Minus>－</Minus>0<Plus>＋</Plus>
          </Add>
          <Add>
            <Minus>－</Minus>0<Plus>＋</Plus>
          </Add>
        </ByCount>
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
  margin-top: 64px;
`;

const Age = styled.div`
  color: #3f9cf1;
  font-weight: bold;
  font-size: 15px;
`;

const FirstBox = styled.div`
  background-color: white;
  justify-content: center;
  display: flex;
  width: 100%;
  height: 45px;
`;

const AtLeast = styled.div`
  color: #686868;
  background-color: #ededed;
  font-weight: 500;
  font-size: 12px;
  height: 17px;
  padding-top: 5px;
`;

const Minus = styled.button`
  display: flex;
  border: none;
  margin-right: 8px;
  font-size: 20px;
`;

const Plus = styled.button`
  background-color: white;
  border: 1px solid black;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px 0 10px;
  font-size: 20px;
`;

const SeatBox = styled.div`
  height: 98px;
  background-color: #e1e9f6;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const OneWay = styled.div`
  width: 50%;
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
  width: 50%;
  height: 45px;
  font-weight: 500;
  font-weight: bold;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Total = styled.div`
  //font-weight: 600;
`;

const ByAge = styled.div`
  display: flex;
  margin-left: 20px;
  flex-direction: column;
  width: 50%;
  text-align: left;
  justify-content: space-evenly;
  font-weight: 600;
`;

const ByCount = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Blanck = styled.div``;

const MiddleBox = styled.div`
  height: 330px;
  display: flex;
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

const Add = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
`;

export default PeopleSection;

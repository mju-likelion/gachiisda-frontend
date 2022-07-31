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
      <AtLeast>최소 1명 - 최대 9명</AtLeast>
      <div className='m'>
        <ByAge>
          <div>어른(만 13세 이상)</div>
          <Minus>
            - 0 <Plus>+</Plus>
          </Minus>
        </ByAge>

        <ByAge>
          <div>어린이(만 6세 ~12세)</div>
          <Minus>
            - 0 <Plus>+</Plus>
          </Minus>
        </ByAge>
        <ByAge>
          <div>유아(만 6세 미만)</div>
          <Minus>
            - 0 <Plus>+</Plus>
          </Minus>
        </ByAge>
        <ByAge>
          <div>경로(만 65세 이상)</div>
          <Minus>
            - 0 <Plus>+</Plus>
          </Minus>
        </ByAge>
        <ByAge>
          <div>중증 장애인</div>
          <Minus>
            - 0 <Plus>+</Plus>
          </Minus>
        </ByAge>
        <ByAge>
          <div>경증 장애인</div>
          <Minus>
            - 0 <Plus>+</Plus>
          </Minus>
        </ByAge>
      </div>

      <div className='x'>
        <Age>상세 옵션</Age>
        <div className='u'>인접역 표출, SR연계 표출</div>
        <Age>▽</Age>
      </div>

      <div className='line' />
      <div className='f'>열차 조회하기</div>
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
`;

const AtLeast = styled.div`
  color: #686868;
  font-weight: 500;
  font-size: 12px;
  height: 17px;
`;

const Minus = styled.div`
  display: flex;
  /* margin-left: 200px; */
  margin-right: 10px;
`;

const Plus = styled.div`
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
  color: #064a87;
  font-weight: medium;
  font-size: 25px;
`;

const BothWay = styled.div`
  color: #686868;
  font-weight: medium;
  font-size: 25px;
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
export default PeopleSection;

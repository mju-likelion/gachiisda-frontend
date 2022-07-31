import React from "react";
import styled from 'styled-components';

function PeopleSection() {
  return (
    <StartSectionWrapper>
      <div className="a" />
      <FirstBox>
        <div className="oneway">편도</div>
        <div className="bothway">왕복</div>
      </FirstBox>

      <SeatBox>
        <Age>승객 연령 및 좌석수</Age>
        <div className="u">어른 1명</div>
        <Age> △ </Age>
      </SeatBox>
      <Atleast>최소 1명 - 최대 9명</Atleast>
      <div className="m">

        <div className="n">
          <div>어른(만 13세 이상)</div>
          <Minus>
            - 0
            {' '}
            <Plus>+</Plus>
          </Minus>
        </div>

        <div className="n">
          <div>어린이(만 6세 ~12세)</div>
          <Minus>
            - 0
            {' '}
            <Plus>+</Plus>
          </Minus>
        </div>
        <div className="n">
          <div>유아(만 6세 미만)</div>
          <Minus>
            - 0
            {' '}
            <Plus>+</Plus>
          </Minus>
        </div>
        <div className="n">
          <div>경로(만 65세 이상)</div>
          <Minus>
            - 0
            {' '}
            <Plus>+</Plus>
          </Minus>
        </div>
        <div className="n">
          <div>중증 장애인</div>
          <Minus>
            - 0
            {' '}
            <Plus>+</Plus>
          </Minus>
        </div>
        <div className="n">
          <div>경증 장애인</div>
          <Minus>
            - 0
            {' '}
            <Plus>+</Plus>
          </Minus>
        </div>
      </div>

      <div className="x">
        <Age>상세 옵션</Age>
        <div className="u">인접역 표출, SR연계 표출</div>
        <Age>▽</Age>
      </div>

      <div className="line" />
      <div className="f">열차 조회하기</div>

    </StartSectionWrapper>
  );
}

export default PeopleSection;

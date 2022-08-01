import React from 'react';
import styled from 'styled-components';
import Ktx from './images/Ktx.js';

const Item = ({ text }) => text;

function List() {
  return (
    <div>
      <All>
        <KtxIcon>
          <Ktx />
        </KtxIcon>
        <ListH1>연습 목록을 선택해주세요</ListH1>
        <KtxListMent type='submit'>
          수원역 - 부산역
          <Item text={<br />} />
          2022년 8월 5일 14:25
          <Item text={<br />} />
          새마을 일반석 1매
        </KtxListMent>
        <KtxListMent type='submit'>
          서울역 - 김천구미역
          <Item text={<br />} />
          2022년 8월 15일 10:30
          <Item text={<br />} />
          KTX 일반석 2매 예매
        </KtxListMent>
      </All>
    </div>
  );
}

const KtxIcon = styled.div`
  padding-top: 52px;
  text-align: center;
`;

const ListH1 = styled.div`
  font-weight: bold, 500;
  font-size: 25px;
  line-height: 37px;
  align-items: center;
  text-align: center;
  color: #000000;
  margin-top: 43px;
  margin-bottom: 33px;
`;

const KtxListMent = styled.button`
  border: none;
  white-space: pre-wrap;
  margin-top: 48px;
  font-weight: bold, 500;
  font-size: 23px;
  line-height: 33px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #064a87;
  flex: none;
  order: 0;
  flex-grow: 0;
  flex-direction: row;
  justify-content: center;
  padding: 32px 15px;
  gap: 10px;
  width: 320px;
  height: 163px;
  background: #b3d5f2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
`;

const All = styled.div`
  background-color: #eff3fa;
  text-align: center;
  padding-bottom: 114px;
`;

export default List;

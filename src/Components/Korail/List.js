/* eslint-disable linebreak-style */
import React from 'react';
import './List.css';
import Ktx from './images/ktx.svg';

const Item = ({ text }) => text;

function List() {
  return (
    <div>
      <div className="Ktx-Icon">
        <img alt="ktx" src={Ktx} />
      </div>
      <h1 className="List-h1">연습 목록을 선택해주세요</h1>
      <div className="Ktx-ListMent">
        수원역 - 부산역
        <Item text={<br />} />
        2022년 8월 5일 14:25
        <Item text={<br />} />
        새마을 일반석 1매
      </div>
      <div className="Ktx-ListMent">
        서울역 - 김천구미역
        <Item text={<br />} />
        2022년 8월 15일 10:30
        <Item text={<br />} />
        KTX 일반석 2매 예매
      </div>
    </div>
  );
}
export default List;

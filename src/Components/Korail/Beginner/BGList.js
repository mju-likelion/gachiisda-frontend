import React from 'react';
import styled from 'styled-components';
import Ktx from '../images/Ktx.js';

import { Link } from 'react-router-dom';
import Axios from '../../../axios.js';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { manyPerson } from '../../../atoms/Stations';

const Item = ({ text }) => text;

function BGList() {
  const [todayDate, setTodayDate] = useState('');
  const [todayMonth, setTodayMonth] = useState('');
  const [todayYear, setTodayYear] = useState('');
  const [totalCount, setTotalCount] = useRecoilState(manyPerson);
  setTotalCount(0);
  totalCount;

  useEffect(() => {
    Axios.get('/api/korail/date').then((response) => {
      setTodayDate(parseInt(response.data.data.dates[0].date));
      setTodayMonth(response.data.data.dates[0].month);
      setTodayYear(response.data.data.dates[0].year);
    });
  }, []);
  return (
    <All>
      <KtxIcon>
        <Ktx />
      </KtxIcon>
      <ListH1>연습 목록을 선택해주세요</ListH1>
      <div>
        <Link to='/BGMain' style={{ textDecoration: 'none' }}>
          <KtxListMent type='submit'>
            수원역 - 부산역
            <Item text={<br />} />
            {todayYear}년 {todayMonth}월 {todayDate + 1}일 14:25
            <Item text={<br />} />
            새마을 일반석 1매
          </KtxListMent>
        </Link>
      </div>
      <div>
        <Link to='/BGMain' style={{ textDecoration: 'none' }}>
          <KtxListMent type='submit'>
            서울역 - 김천구미역
            <Item text={<br />} />
            {todayYear}년 {todayMonth}월 {todayDate + 5}일 10:30
            <Item text={<br />} />
            KTX 일반석 2매 예매
          </KtxListMent>
        </Link>
      </div>
    </All>
  );
}

const KtxIcon = styled.div`
  padding-top: 52px;
  text-align: center;
`;

const ListH1 = styled.div`
  font-weight: bold;
  font-size: 25px;
  align-items: center;
  text-align: center;
  color: #000000;
  margin: 43px 0px 33px 0px;
`;

const KtxListMent = styled.button`
  border: none;
  font-weight: 500;
  font-size: 23px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #064a87;
  justify-content: center;
  padding: 32px 15px;
  gap: 10px;
  width: 320px;
  height: 163px;
  background: #b3d5f2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: 48px auto 0px auto;
`;

const All = styled.div`
  background-color: #eff3fa;
  text-align: center;
  height: 100vh;
`;

export default BGList;

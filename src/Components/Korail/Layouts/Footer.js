import React from 'react';
import styled from 'styled-components';

/*function Parent() {
  return (
    <MissionMent
      text={' 수원역 - 부산역 2022년 8월 5일 14:25 새마을 일반석 1매 '}
    />
  );
}*/

function Footer() {
  return (
    <All>
      <MissionFooter>{/* <MissionMent*/}</MissionFooter>
      <MainFooter type='submit'>도움이 필요하면 이 칸을 눌러 주세요</MainFooter>
    </All>
  );
}

const MissionFooter = styled.div`
  width: 375px;
  height: 90px;
  background-color: #e1e9f6;
  font-weight: bold;
  font-size: 15px;
  text-align: center;
  align-items: center;
  color: #000000;
  padding-top: 14px;
`;

const MainFooter = styled.button`
  border: none;
  width: 375px;
  height: 40px;
  background: #b3d5f2;
  padding-top: 5px;
  font-weight: bold;
  font-size: 18px;
  align-items: center;
  text-align: center;
  color: #000000;
  cursor: pointer;
`;

const All = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 130px;
  background-color: #b3d5f2;
`;

export default Footer;

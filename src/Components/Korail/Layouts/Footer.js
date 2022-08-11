import React from 'react';
import styled from 'styled-components';

const Item = ({ text }) => text;

function Footer() {
  return (
    <All>
      <MissionFooter>
        초급단계일 경우 : 해당 영역에 안내 문구 표시
        <Item text={<br />} />
        고급단계일 경우 : 해당 영역에 미션 문구 표시
      </MissionFooter>
      <MainFooter type='submit'>도움이 필요하면 이 칸을 눌러 주세요</MainFooter>
    </All>
  );
}

const MissionFooter = styled.div`
  width: 375px;
  height: 100px;
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
  height: 140px;
  background-color: #b3d5f2;
`;

export default Footer;

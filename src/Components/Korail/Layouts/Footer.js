import React from 'react';
import styled from 'styled-components';

const Footer = (props) => {
  return (
    <All>
      <MissionWrap>
        <MissionFooter>{props.children}</MissionFooter>
      </MissionWrap>
      <MainFooter
        onClick={() => {
          props.onClick();
        }}
      >
        도움이 필요하면 이 칸을 눌러 주세요
      </MainFooter>
    </All>
  );
};

const MissionWrap = styled.div`
  display: flex;
  width: 100%;
`;

const MissionFooter = styled.div`
  width: 100%;
  height: 90px;
  background-color: #e1e9f6;
  font-weight: bold;
  font-size: 15px;
  text-align: center;
  align-items: center;
  color: #000000;
  padding: 14px 0 0 20px;
  display: flex;
`;

const MainFooter = styled.button`
  border: none;
  width: 375px;
  height: 40px;
  background: #b3d5f2;
  padding-top: 5px;
  font-weight: bold;
  font-size: 18px;
  color: #000000;
  cursor: pointer;
`;

const All = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 130px;
  background-color: #b3d5f2;
  display: flex;
  flex-direction: column;
`;

export default Footer;

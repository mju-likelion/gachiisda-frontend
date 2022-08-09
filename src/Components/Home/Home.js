import React from 'react';
import styled from 'styled-components';
import Kiosk from './images/KioskIcon.svg';
import Dict from './images/DictionaryIcon.svg';

function Home() {
  return (
    <div>
      <h1 className="Home-h1">원하는 기능을 눌러주세요</h1>
      <div className="Home-Icon">
        <img alt="kiosk" src={Kiosk} />
        <div className="Home-IconMent">키오스크 연습</div>
      </div>
      <div className="Home-Icon">
        <img alt="dictionaryIcon" src={Dict} />
        <div className="Home-IconMent">외래어 사전</div>
      </div>
    </div>
  );
}
const HomeTitleDiv = styled.div`
  padding-top: 50px;
`;
const HomeTitle = styled.div`
  font-size: 31px;
  font-weight: bold;
`;

const HomeIconImg = styled.div`
  padding-bottom: 20px;
  padding-top: 20px;
`;

const HomeIconBtn = styled.button`
  width: 216px;
  height: 70px;
  background-color: #b3d5f2;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  font-size: 2em;
  font-weight: bold;
  align-items: center;
  border: 0;
  cursor: pointer;
`;

const HomeIcon = styled.div`
  padding-top: 50px;
  padding-bottom: 30px;
`;

const HomeAll = styled.div`
  text-align: center;
  background-color: #eff3fa;
  padding-bottom: 80px;
`;

export default Home;

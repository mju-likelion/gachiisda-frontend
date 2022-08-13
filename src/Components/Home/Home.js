import React from 'react';
import styled from 'styled-components';
import Kiosk from './images/KioskIcon.svg';
import Dict from './images/DictionaryIcon.svg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <HomeAll>
        <HomeTitleDiv>
          <HomeTitle>원하는 기능을</HomeTitle>
          <HomeTitle>눌러주세요</HomeTitle>
        </HomeTitleDiv>
        <HomeIcon>
          <Link
            style={{ textDecoration: 'none', color: '#064a87' }}
            to='/SelectLevel'
          >
            <HomeIconImg>
              <img alt='Kiosk' src={Kiosk} />
            </HomeIconImg>
            <HomeIconBtn>키오스크 연습</HomeIconBtn>
          </Link>
        </HomeIcon>
        <HomeIcon>
          <Link
            style={{ textDecoration: 'none', color: '#064a87' }}
            to='/DictMain'
          >
            <HomeIconImg>
              <img alt='DictionaryIcon' src={Dict} />
            </HomeIconImg>
            <HomeIconBtn>외래어 사전</HomeIconBtn>
          </Link>
        </HomeIcon>
      </HomeAll>
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

const HomeIconBtn = styled.div`
  width: 216px;
  height: 70px;
  background-color: #b3d5f2;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  font-size: 2em;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  display: flex;
  border: 0;
  cursor: pointer;
  text-decoration: none;
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

import React from 'react';
import styled from 'styled-components';
import BackIcon from '../images/BackIcon';
import { ReactComponent as HomeIcon } from '../images/HomeIcon.svg';

function Header() {
  return (
    <HeaderAll>
      <HeaderBackIcon>
        <HeaderBackIconImg>
          <BackIcon />
        </HeaderBackIconImg>
        <HeaderBackIconMent>이전화면</HeaderBackIconMent>
      </HeaderBackIcon>

      <HeaderHomeIcon>
        <HeaderHomeIconMent>처음화면</HeaderHomeIconMent>
        <HeaderHomeIconImg>
          <HomeIcon />
        </HeaderHomeIconImg>
      </HeaderHomeIcon>
    </HeaderAll>
  );
}

const HeaderBackIcon = styled.button`
  border: 0;
  background-color: #b3d5f2;
  cursor: pointer;
  font-size: 15px;
`;

const HeaderBackIconMent = styled.div`
  float: left;
  margin-top: 30px;
  margin-left: 1rem;
  color: #686868;
  text-align: center;
  font-weight: bold;
`;

const HeaderHomeIcon = styled.button`
  float: right;
  border: 0;
  background-color: #b3d5f2;
  cursor: pointer;
  font-size: 15px;
`;

const HeaderHomeIconMent = styled.div`
  float: left;
  margin-top: 30px;
  margin-right: 1rem;
  color: #686868;
  text-align: center;
  font-weight: bold;
`;

const HeaderBackIconImg = styled.div`
  float: left;
  margin-top: 30px;
  margin-left: 1rem;
`;

const HeaderHomeIconImg = styled.div`
  float: right;
  margin-top: 30px;
  margin-right: 1rem;
`;

const HeaderAll = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 64px;
  background-color: #b3d5f2;
`;

export default Header;

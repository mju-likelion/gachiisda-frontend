import React from 'react';
import styled from 'styled-components';
import BackIcon from '../images/BackIcon';
import { ReactComponent as HomeIcon } from '../images/HomeIcon.svg';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <HeaderAll>
      <HeaderBackIcon onClick={() => navigate(-1)}>
        <HeaderBackIconImg>
          <BackIcon />
        </HeaderBackIconImg>
        <HeaderBackIconMent>이전화면</HeaderBackIconMent>
      </HeaderBackIcon>

      <HeaderHomeIcon>
        <HeaderHomeIconMent>
          <Link style={{ textDecoration: 'none', color: '#686868' }} to='/'>
            처음화면
          </Link>
        </HeaderHomeIconMent>
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
  float: left;
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
  position: fixed;
  top: 0;
  width: 100%;
  height: 64px;
  background-color: #b3d5f2;
`;

export default Header;

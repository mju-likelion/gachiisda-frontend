import React from "react";
import styled from "styled-components";
import BackIcon from "../images/HeaderBackIcon.svg";
import HomeIcon from "../images/HeaderHomeIcon.svg";

function Header() {
  return (
    <div>
      <HeaderAll>
        <HeaderBackIcon>
          <HeaderBackIconImg alt="BackIcon" src={BackIcon} />
          <HeaderBackIconMent>이전화면</HeaderBackIconMent>
        </HeaderBackIcon>
        <HeaderHomeIcon>
          <HeaderHomeIconMent>처음화면</HeaderHomeIconMent>
          <HeaderHomeIconImg alt="HomeIcon" src={HomeIcon} />
        </HeaderHomeIcon>
      </HeaderAll>
    </div>
  );
}

const HeaderBackIcon = styled.button`
border:0;
background-color:#B3D5F2;
cursor: pointer;
font-size : 15px;


`;
const HeaderBackIconMent = styled.div`
float: left;
    margin-top: 30px;
    margin-left: 1rem;
    color: #686868;
    text-align: center;
    font-weight:bold;`;

const HeaderHomeIcon = styled.button`
float: right;
border:0;
background-color:#B3D5F2;
cursor: pointer;
font-size : 15px;

`;
const HeaderHomeIconMent = styled.div`
float: left;
    margin-top: 30px;
    margin-right: 1rem;
    color: #686868;
    text-align: center;
    font-weight:bold;`;

const HeaderBackIconImg = styled.img`
    float: left;
    margin-top: 30px;
    margin-left: 1rem;`;

const HeaderHomeIconImg = styled.img`
    float: right;
    margin-top: 30px;
    margin-right: 1rem;`;

const HeaderAll = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 64px;
    background-color: #B3D5F2;`;

export default Header;

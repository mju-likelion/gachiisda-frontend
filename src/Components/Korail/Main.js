import React from 'react';
import styled from 'styled-components';
import Switch from './images/MainSwitchBtn.svg';
import Train from './images/MainTrain.svg';
import Ticket from './images/MainTicket.svg';
// import "./Main.css";

function Main() {
  return (
    <div>
      <MainAll>
        <MainWaySelect>
          <MainOneWay>편도</MainOneWay>
          <MainAroungWay>왕복</MainAroungWay>
        </MainWaySelect>
        <div>
          {/* <MainGoMentDIV> */}
          <MainGoMent>출발</MainGoMent>
          <MainSwitchBtn><img alt="switch_button" src={Switch} /></MainSwitchBtn>
          <MainArrivedMent>도착</MainArrivedMent>
          {/* </MainGoMentDIV> */}
          <MainGoStationDIV>
            <MainGoStation>
              서울
            </MainGoStation>
            <div className="Main_Go_arrow">-&gt;</div>
            <MainArrivedStation>
              부산
            </MainArrivedStation>
            <MainSelectKTX>KTX역 선택 지도</MainSelectKTX>
          </MainGoStationDIV>
        </div>
        <MainGoDIV>
          <MainInfoMent>출발일</MainInfoMent>
          <div>2022년 n월 nn일 (요일) 시 : 분</div>
          <MainInfoArrow>▽</MainInfoArrow>
        </MainGoDIV>
        <MainGoDIV>
          <MainInfoMent>승객 연령 및 좌석수</MainInfoMent>
          <div>어른 1명</div>
          <MainInfoArrow>▽</MainInfoArrow>
        </MainGoDIV>
        <MainGoDIV>
          <MainInfoMent>상세 옵션</MainInfoMent>
          <div>인접역 표출, SR 연계 표출</div>
          <MainInfoArrow>▽</MainInfoArrow>
        </MainGoDIV>
        <div />
        <MainTrainInquire>열차 조회하기</MainTrainInquire>
        <MainTrainbtn>
          <img alt="Main_Train" src={Train} />
          <div>승차권예매</div>
        </MainTrainbtn>
        <MainNoneActbtn>할인 ꞏ 정기권</MainNoneActbtn>
        <MainNoneActbtn>관광상품</MainNoneActbtn>
        <MainTicketbtn>
          <img alt="Main_Ticket" src={Ticket} />
          <div>승차권확인</div>
        </MainTicketbtn>
      </MainAll>
    </div>
  );
}

const MainWaySelect = styled.div`
`;

const MainOneWay = styled.div`
background-color: white;
    color: #064A87;
    font-size: 25px;
    float: left;
    width: 50%;
    height: 40px;
    border-bottom: 2px solid #064A87;
    padding-top: 5px;



`;
const MainAroungWay = styled.div`
background-color: white;
color: #064A87;
font-size: 25px;
float: right;
width: 50%;
height: 40px;
    padding-top: 5px;
`;
// const MainGoMentDIV = styled.div`
// float:left;

// `;

const MainGoMent = styled.div`
font-size: 12px;
color: #686868;
// float: left;
width: 45%;
`;

const MainSwitchBtn = styled.div`
border: 0.5px solid #3F9CF1;
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 10px;
    width: 10%;
    // float: left;

`;

const MainArrivedMent = styled.div`
font-size: 12px;
    color: #686868;
    // float: left;
    width: 45%;
`;
const MainGoStation = styled.div`
color: #064A87;
    font-size: 30px;
    font-weight: bold;
    float: left;
    width: 45%;
    /* margin-top: 20px; */
`;
const MainArrivedStation = styled.div`
color: #064A87;
font-size: 30px;
font-weight: bold;
float:right;
width: 45%;
`;
const MainInfoMent = styled.div`
color:#3F9CF1
;
font-size: 15px;
font-weight: bold;
}
`;
const MainInfoArrow = styled.div`
color: #3F9CF1;

`;
const MainTrainInquire = styled.div`
background-color: #C6DFEE;
    color:#064A87;
    font-size: 25px;
    font-weight: bold;
`;
const MainTrainbtn = styled.button`
background-color: #F9F9F9;
border: 0px;
float: left;
/* padding: 10px; */
width: 25%;
height:54px;

`;
const MainNoneActbtn = styled.div`
background-color: #F9F9F9;
height:54px;
float: left;
/* padding: 10px; */
width: 25%;
`;
const MainTicketbtn = styled.button`
background-color: #F9F9F9;
    border: 0px;
    float: left;
    /* padding: 10px; */
    width: 25%;
    height:54px;

`;
const MainGoStationDIV = styled.div`
width: 100%;
height: 140px;
color: #000000;
border-bottom: 1px solid #686868;

`;

const MainGoDIV = styled.div`
width: 100%;
    height: 98px;
    color: #000000;
    border-bottom: 1px solid #686868;
`;
const MainSelectKTX = styled.button`
background-color: white;
    border-radius: 20px;
    color:#686868;
    border: 1px solid #686868;
    width: 90%;
    height: 29px;
`;
const MainAll = styled.div`
background-color: #F7F7F7;
text-align:center;
`;

export default Main;

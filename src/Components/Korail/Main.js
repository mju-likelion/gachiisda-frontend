import React from 'react';
import styled from 'styled-components';
import Switch from './images/MainSwitchBtn.svg';
import Train from './images/MainTrain.svg';
import Ticket from './images/MainTicket.svg';
import Arrow from './images/BlueArrow.svg';
import NoneTicket from './images/NoneClickTicketBtn.svg';
import NoneTicket2 from './images/NoneClickTicketBtn2.svg';
// import "./Main.css";

function Main() {
  return (
    <div>
      <MainAll>
        <MainWaySelect>
          <MainOneWay>편도</MainOneWay>
          <MainAroundWay>왕복</MainAroundWay>
        </MainWaySelect>
        <div>
          <MainGoStationDIVStyle>
            <MainGoStationDIV>
              <MainGoMentDIV>
                <MainGoMent>출발</MainGoMent>
                <MainGoStation>
                  서울
                </MainGoStation>
              </MainGoMentDIV>

              <ArrowDIV>
                <MainSwitchBtn><img alt="switctButton" src={Switch} /></MainSwitchBtn>
                <GoArrow><img alt="blueArrow" src={Arrow} /></GoArrow>
              </ArrowDIV>
              <MainArrivedMentDIV>
                <MainArrivedMent>도착</MainArrivedMent>
                <MainArrivedStation>
                  부산
                </MainArrivedStation>
              </MainArrivedMentDIV>

            </MainGoStationDIV>
            <MainSelectKTX>KTX역 선택 지도</MainSelectKTX>
          </MainGoStationDIVStyle>

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
          <img alt="MainTrain" height="25px" src={Train} />
          <div>승차권예매</div>
        </MainTrainbtn>
        <MainNoneActbtn>
          <img alt="NoneClickTicketBtn" src={NoneTicket} />
        </MainNoneActbtn>
        <MainNoneActbtn>
          <img alt="NoneClickTicketBtn2" src={NoneTicket2} />
        </MainNoneActbtn>
        <MainTicketbtn>
          <img alt="MainTicket" height="30px" src={Ticket} />
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
const MainAroundWay = styled.div`
background-color: white;
color: #064A87;
font-size: 25px;
float: right;
width: 50%;
height: 40px;
    padding-top: 5px;
`;

// 출발역div
const MainGoMentDIV = styled.div`
display:flex;
width:50%;
height:40%;


flex-direction:column;
// background-color:red;
`;
// 화살표div
const ArrowDIV = styled.div`
display:flex;
width:15%;
height:40%;


flex-direction:column;
// background-color:yellow;


`;
// 도착역div
const MainArrivedMentDIV = styled.div`
display:flex;
width:50%;
height:40%;

flex-direction:column;
// background-color:green;


`;
// 출발역 ment, 역
const MainGoMent = styled.div`
font-size: 12px;
color: #686868;
display:flex;
justify-content:center;
align-items:center;
// padding-top:10px;
// margin-top:5px;


`;
const MainGoStation = styled.div`
color: #064A87;
    font-size: 30px;
    font-weight: bold;
    display:flex;
    justify-content:center;
    align-items:center;
    padding-top:10px;
`;

// 도착역 ment,역
const MainArrivedMent = styled.div`
font-size: 12px;
    color: #686868;
    display:flex;
    justify-content:center;
    align-items:center;


`;
const MainArrivedStation = styled.div`
color: #064A87;
font-size: 30px;
font-weight: bold;
float:right;
display:flex;
justify-content:center;
align-items:center;
padding-top:10px;

`;

// 화살표 둘
const MainSwitchBtn = styled.div`
border: 0.5px solid #3F9CF1;
    border-radius: 8px;
    padding-left: 10px;
    padding-right: 10px;
    margin-top:5px;
    display:flex;
    justify-content:center;
    align-items:center;



`;

const GoArrow = styled.div`
padding-top:15px;
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
width: 25%;
// margin-top:0px;
`;
const MainTicketbtn = styled.button`
background-color: #F9F9F9;
    border: 0px;
    float: left;
    width: 25%;
    height:54px;

`;
// 감싸는 div
const MainGoStationDIV = styled.div`
width: 100%;
height: 130px;


display:flex;
justify-content:center;
align-items:center;

`;
// 감싸는 div style
const MainGoStationDIVStyle = styled.div`
color: #000000;
border-bottom: 1px solid #686868;
padding-bottom:10px;
`;

const MainGoDIV = styled.div`
width: 100%;
    height: 98px;
    color: #000000;
    border-bottom: 1px solid #686868;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    `;
const MainSelectKTX = styled.button`
background-color: white;
    border-radius: 20px;
    color:#686868;
    border: 1px solid #686868;
    width: 90%;
    height: 29px;
    cursor:pointer;
`;

const MainAll = styled.div`
background-color: #F7F7F7;
text-align:center;
`;

export default Main;

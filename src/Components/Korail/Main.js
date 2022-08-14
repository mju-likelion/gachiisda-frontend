import React from 'react';
import Header from './Layouts/Header';
import styled from 'styled-components';
import Switch from './images/MainSwitchBtn';
import { ReactComponent as Train } from './images/MainTrain.svg';
import { ReactComponent as Ticket } from './images/MainTicket.svg';
import Arrow from './images/BlueArrow';
import { ReactComponent as NoneTicket } from './images/NoneClickTicketBtn.svg';
import { ReactComponent as NoneTicket2 } from './images/NoneClickTicketBtn2.svg';
import { useState } from 'react';

import { Link } from 'react-router-dom';
function Main() {
  const GoClick = () => {
    setShowResults(true);
  };

  const ArrivedClick = () => {
    setShowAriResults(true);
  };
  const [seoul, setSeoul] = useState('서울');
  const [busan, setBusan] = useState('부산');
  const [showResults, setShowResults] = useState(false);
  const [showAriResults, setShowAriResults] = useState(false);

  const ArrivedResults = () => (
    <div id='Arrivedresults'>
      <StationTitle>주요 역</StationTitle>
      <StationDetailWrap>
        <div>
          <StationDetail
            onClick={() => setBusan('서울') & setShowAriResults(false)}
          >
            서울
          </StationDetail>
          <StationDetail
            onClick={() => setBusan('용산') & setShowAriResults(false)}
          >
            용산
          </StationDetail>
          <StationDetail
            onClick={() => setBusan('광명') & setShowAriResults(false)}
          >
            광명
          </StationDetail>
          <StationDetail
            onClick={() => setBusan('영등포') & setShowAriResults(false)}
          >
            영등포
          </StationDetail>
          <StationDetail
            onClick={() => setBusan('수원') & setShowAriResults(false)}
          >
            수원
          </StationDetail>
          <StationDetail
            onClick={() => setBusan('평택') & setShowAriResults(false)}
          >
            평택
          </StationDetail>
          <StationDetail
            onClick={() => setBusan('천안') & setShowAriResults(false)}
          >
            천안
          </StationDetail>
          <StationDetail
            onClick={() => setBusan('대전') & setShowAriResults(false)}
          >
            대전
          </StationDetail>
          <StationDetail
            onClick={() => setBusan('김천구미') & setShowAriResults(false)}
          >
            김천구미
          </StationDetail>
          <StationDetail
            onClick={() => setBusan('구미') & setShowAriResults(false)}
          >
            구미
          </StationDetail>
          <StationDetail
            onClick={() => setBusan('부산') & setShowAriResults(false)}
          >
            부산
          </StationDetail>
          <StationDetail
            onClick={() => setBusan('대구') & setShowAriResults(false)}
          >
            대구
          </StationDetail>
          <StationDetail
            onClick={() => setBusan('울산') & setShowAriResults(false)}
          >
            울산
          </StationDetail>
          <StationDetail
            onClick={() => setBusan('포항') & setShowAriResults(false)}
          >
            포항
          </StationDetail>
          <StationDetail
            onClick={() => setBusan('강릉') & setShowAriResults(false)}
          >
            강릉
          </StationDetail>
          <StationDetail
            onClick={() => setBusan('목포') & setShowAriResults(false)}
          >
            목포
          </StationDetail>
          <StationDetail
            onClick={() => setBusan('전주') & setShowAriResults(false)}
          >
            전주
          </StationDetail>
          <StationDetail
            onClick={() => setBusan('동해') & setShowAriResults(false)}
          >
            동해
          </StationDetail>
          <StationDetail
            onClick={() => setBusan('평창') & setShowAriResults(false)}
          >
            평창
          </StationDetail>
          <StationDetail
            onClick={() => setBusan('안동') & setShowAriResults(false)}
          >
            안동
          </StationDetail>
        </div>
      </StationDetailWrap>
    </div>
  );

  const Results = () => (
    <div id='results'>
      <StationTitle>주요 역</StationTitle>
      <StationDetailWrap>
        <div>
          <StationDetail
            onClick={() => setSeoul('서울') & setShowResults(false)}
          >
            서울
          </StationDetail>
          <StationDetail
            onClick={() => setSeoul('용산') & setShowResults(false)}
          >
            용산
          </StationDetail>
          <StationDetail
            onClick={() => setSeoul('광명') & setShowResults(false)}
          >
            광명
          </StationDetail>
          <StationDetail
            onClick={() => setSeoul('영등포') & setShowResults(false)}
          >
            영등포
          </StationDetail>
          <StationDetail
            onClick={() => setSeoul('수원') & setShowResults(false)}
          >
            수원
          </StationDetail>
          <StationDetail
            onClick={() => setSeoul('평택') & setShowResults(false)}
          >
            평택
          </StationDetail>
          <StationDetail
            onClick={() => setSeoul('천안') & setShowResults(false)}
          >
            천안
          </StationDetail>
          <StationDetail
            onClick={() => setSeoul('대전') & setShowResults(false)}
          >
            대전
          </StationDetail>
          <StationDetail
            onClick={() => setSeoul('김천구미') & setShowResults(false)}
          >
            김천구미
          </StationDetail>
          <StationDetail
            onClick={() => setSeoul('구미') & setShowResults(false)}
          >
            구미
          </StationDetail>
          <StationDetail
            onClick={() => setSeoul('부산') & setShowResults(false)}
          >
            부산
          </StationDetail>
          <StationDetail
            onClick={() => setSeoul('대구') & setShowResults(false)}
          >
            대구
          </StationDetail>
          <StationDetail
            onClick={() => setSeoul('울산') & setShowResults(false)}
          >
            울산
          </StationDetail>
          <StationDetail
            onClick={() => setSeoul('포항') & setShowResults(false)}
          >
            포항
          </StationDetail>
          <StationDetail
            onClick={() => setSeoul('강릉') & setShowResults(false)}
          >
            강릉
          </StationDetail>
          <StationDetail
            onClick={() => setSeoul('목포') & setShowResults(false)}
          >
            목포
          </StationDetail>
          <StationDetail
            onClick={() => setSeoul('전주') & setShowResults(false)}
          >
            전주
          </StationDetail>
          <StationDetail
            onClick={() => setSeoul('동해') & setShowResults(false)}
          >
            동해
          </StationDetail>
          <StationDetail
            onClick={() => setSeoul('평창') & setShowResults(false)}
          >
            평창
          </StationDetail>
          <StationDetail
            onClick={() => setSeoul('안동') & setShowResults(false)}
          >
            안동
          </StationDetail>
        </div>
      </StationDetailWrap>
    </div>
  );

  const Another = () => (
    <div id='another'>
      <MainGoDiv>
        <MainInfoMent>출발일</MainInfoMent>
        <div>
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            to='/StartSection'
          >
            2022년 n월 nn일 (요일) 시 : 분
          </Link>
        </div>
        <MainInfoArrow>▽</MainInfoArrow>
      </MainGoDiv>
      <MainGoDiv>
        <MainInfoMent>승객 연령 및 좌석수</MainInfoMent>
        <div>
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            to='/PeopleSection'
          >
            어른 1명
          </Link>
        </div>
        <MainInfoArrow>▽</MainInfoArrow>
      </MainGoDiv>
      <MainGoDiv>
        <MainInfoMent>상세 옵션</MainInfoMent>
        <div>인접역 표출, SR 연계 표출</div>
        <MainInfoArrow>▽</MainInfoArrow>
      </MainGoDiv>
      <MainTrainInquire>
        <Link
          style={{ textDecoration: 'none', color: 'black' }}
          to='/StationSelect'
        >
          열차 조회하기
        </Link>
      </MainTrainInquire>
      <MainTrainbtn>
        <Train height='25px' />
        <div>승차권예매</div>
      </MainTrainbtn>
      <MainNoneActbtn>
        <NoneTicket />
      </MainNoneActbtn>
      <MainNoneActbtn>
        <NoneTicket2 />
      </MainNoneActbtn>
      <MainTicketbtn>
        <Ticket height='30px' />
        <div>승차권확인</div>
      </MainTicketbtn>
    </div>
  );

  return (
    <MainAll>
      <div>
        <MainOneWay>편도</MainOneWay>
        <MainAroundWay>왕복</MainAroundWay>
      </div>

      <div>
        <MainGoStationDivStyle>
          <MainGoStationDiv>
            <MainGoMentDiv>
              <MainGoMent>출발</MainGoMent>
              <MainGoStation onClick={GoClick}>{seoul}</MainGoStation>
            </MainGoMentDiv>

            <ArrowDiv>
              <MainSwitchBtn>
                <Switch />
              </MainSwitchBtn>
              <GoArrow>
                <Arrow />
              </GoArrow>
            </ArrowDiv>
            <MainArrivedMentDiv>
              <MainArrivedMent>도착</MainArrivedMent>
              <MainArrivedStation onClick={ArrivedClick}>
                {busan}
              </MainArrivedStation>
            </MainArrivedMentDiv>
          </MainGoStationDiv>
          <MainSelectKTX>KTX역 선택 지도</MainSelectKTX>
        </MainGoStationDivStyle>
      </div>

      <Header />
      {showResults || showAriResults ? null : <Another />}
      {showResults ? <Results /> : null}
      {showAriResults ? <ArrivedResults /> : null}
    </MainAll>
  );
}

const MainAroundWay = styled.div`
  background-color: white;
  color: #064a87;
  font-size: 25px;
  float: right;
  width: 50%;
  height: 40px;
  padding-top: 5px;
`;

const MainOneWay = styled.div`
  background-color: white;
  color: #064a87;
  font-size: 25px;
  float: left;
  width: 50%;
  height: 40px;
  padding-top: 5px;
  border-bottom: 2px solid #064a87;
`;

const MainGoMentDiv = styled.div`
  display: flex;
  width: 50%;
  height: 40%;

  flex-direction: column;
`;

const ArrowDiv = styled.div`
  display: flex;
  width: 15%;
  height: 40%;

  flex-direction: column;
`;

const MainArrivedMentDiv = styled.div`
  display: flex;
  width: 50%;
  height: 40%;
  flex-direction: column;
`;

const MainGoMent = styled.div`
  font-size: 12px;
  color: #686868;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainGoStation = styled.div`
  color: #064a87;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  border: none;
`;

const MainArrivedMent = styled.div`
  font-size: 12px;
  color: #686868;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainArrivedStation = styled.div`
  color: #064a87;
  font-size: 30px;
  font-weight: bold;
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`;

const MainSwitchBtn = styled.div`
  border: 0.5px solid #3f9cf1;
  border-radius: 8px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GoArrow = styled.div`
  padding-top: 15px;
`;

const MainInfoMent = styled.div`
  color: #3f9cf1;
  font-size: 15px;
  font-weight: bold;
  padding-bottom: 5px;
`;

const MainInfoArrow = styled.div`
  color: #3f9cf1;
`;

const MainTrainInquire = styled.div`
  background-color: #c6dfee;
  color: #064a87;
  font-size: 25px;
  font-weight: bold;
  margin-top: 20px;
`;

const MainTrainbtn = styled.button`
  background-color: #f9f9f9;
  border: 0px;
  float: left;
  width: 25%;
  height: 54px;
`;

const MainNoneActbtn = styled.div`
  background-color: #f9f9f9;
  height: 54px;
  float: left;
  width: 25%;
`;

const MainTicketbtn = styled.button`
  background-color: #f9f9f9;
  border: 0px;
  float: left;
  width: 25%;
  height: 54px;
`;

const MainGoStationDiv = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainGoStationDivStyle = styled.div`
  color: #000000;
  border-bottom: 1px solid #686868;
  padding-bottom: 10px;
`;

const MainGoDiv = styled.div`
  width: 100%;
  height: 98px;
  color: #000000;
  border-bottom: 1px solid #686868;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainSelectKTX = styled.button`
  background-color: white;
  border-radius: 20px;
  color: #686868;
  border: 1px solid #686868;
  width: 90%;
  height: 29px;
`;

const MainAll = styled.div`
  background-color: #f4f4f4;
  text-align: center;
  margin-top: 64px;
`;

const StationTitle = styled.div`
  color: #064a87;
  font-weight: 700;
  font-size: 18px;
  padding: 9px 290px 9px 20px;
`;

const StationDetail = styled.button`
  font-weight: 500;
  font-size: 18px;
  width: 186px;
  height: 66px;
  display: inline-block;
  border: none;
  cursor: pointer;
`;

const StationDetailWrap = styled.div`
  width: 375px;
`;
export default Main;

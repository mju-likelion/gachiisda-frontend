import React from 'react';
import Header from '../Layouts/Header';
import styled from 'styled-components';
import Switch from '../images/MainSwitchBtn';
import { ReactComponent as Train } from '../images/MainTrain.svg';
import { ReactComponent as Ticket } from '../images/MainTicket.svg';
import Arrow from '../images/BlueArrow';
import { ReactComponent as NoneTicket } from '../images/NoneClickTicketBtn.svg';
import { ReactComponent as NoneTicket2 } from '../images/NoneClickTicketBtn2.svg';
import { useState, useEffect } from 'react';
import BGMainFooter from '../Layouts/BGMainFooter';
import axios from 'axios';
import Footer from '../Layouts/Footer';

function Main() {
  //show useState
  const [showGoResults, setshowGoResults] = useState(false);
  const [showAriResults, setShowAriResults] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [showPeople, setShowPeople] = useState(false);

  //axios부르는 useState
  const [day, setDay] = useState([]);
  const [date, setDate] = useState([]);
  const [time, setTime] = useState([]);

  //main 값 변경
  const [seoul, setSeoul] = useState('서울');
  const [busan, setBusan] = useState('부산');
  const [godate, setGoDate] = useState('');
  const [goTime, setGoTime] = useState('');

  const handleClick = () => {
    alert(
      '1. 코레일톡에 접속하신 후, 하단의 선택 항목이 ‘승차권예매’로 되어 있는지 확인합니다. \n2. 파란색 네모 칸영역을 눌러 출발역을 선택해주세요.',
    );
  };

  const GoClick = () => {
    setshowGoResults(true);
  };

  const ArrivedClick = () => {
    setShowAriResults(true);
  };

  useEffect(() => {
    axios.get('http://15.164.225.225:3300/api/korail/date').then((response) => {
      setDay(response.data.data.next.nextDay);
      setDate(response.data.data.next.nextDate);
      setTime(response.data.data.timeTable);
    });
  }, []);

  //인원수 클릭 관련 useState
  const [adultCount, setAudltCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [babyCount, setBabyCount] = useState(0);
  const [grandCount, setGrandCount] = useState(0);
  const [severeCount, setSevereCount] = useState(0);
  const [mildCount, setMildCount] = useState(0);

  const handleDecrease = (type) => {
    if (type == 'adult' && adultCount > 0) {
      setAudltCount(adultCount - 1);
    }
    if (type == 'child' && childCount > 0) {
      setChildCount(childCount - 1);
    }
    if (type == 'baby' && babyCount > 0) {
      setBabyCount(babyCount - 1);
    }
    if (type == 'oldman' && grandCount > 0) {
      setGrandCount(grandCount - 1);
    }
    if (type == 'severe' && severeCount > 0) {
      setSevereCount(severeCount - 1);
    }
    if (type == 'mild' && mildCount > 0) {
      setMildCount(mildCount - 1);
    }
  };

  const handleIncrease = (type) => {
    if (type == 'adult' && adultCount < 9) {
      setAudltCount(adultCount + 1);
    }
    if (type == 'child' && childCount < 9) {
      setChildCount(childCount + 1);
    }
    if (type == 'baby' && babyCount < 9) {
      setBabyCount(babyCount + 1);
    }
    if (type == 'oldman' && grandCount < 9) {
      setGrandCount(grandCount + 1);
    }
    if (type == 'severe' && severeCount < 9) {
      setSevereCount(severeCount + 1);
    }
    if (type == 'mild' && mildCount < 9) {
      setMildCount(mildCount + 1);
    }
  };

  useEffect(() => {}, [adultCount]);

  //승객 연령 및 좌석수 Section
  const PeopleClick = () => (
    <div>
      <PeopleStartSectionWrapper>
        <SeatBox>
          <div onClick={() => setShowPeople(false)}>
            <Age>승객 연령 및 좌석수</Age>
            <TotalBox>
              {adultCount > 0 && `어른 ${adultCount}명 `}
              {childCount > 0 && `어린이 ${childCount}명 `}
              {babyCount > 0 && `유아 ${babyCount}명 `}
              {grandCount > 0 && `경로 ${grandCount}명 `}
              {severeCount > 0 && `중증 장애인 ${severeCount}명 `}
              {mildCount > 0 && `경증 장애인 ${mildCount}명 `}
            </TotalBox>
            <Age> △ </Age>
          </div>
        </SeatBox>
        <AtLeast>최소 1명 - 최대 9명</AtLeast>

        <PeopleMiddleBox>
          <ByAge>
            <AdultType>어른(만 13세 이상)</AdultType>
            <PeopleType>어린이(만 6세 ~12세)</PeopleType>
            <PeopleType>유아(만 6세 미만)</PeopleType>
            <PeopleType>경로(만 65세 이상)</PeopleType>
            <PeopleType>중증 장애인</PeopleType>
            <PeopleType>경증 장애인</PeopleType>
          </ByAge>
          <ByCount>
            <AdultAdd>
              <Minus onClick={() => handleDecrease('adult')}>－</Minus>
              {adultCount}
              <Plus onClick={() => handleIncrease('adult')}>＋</Plus>
            </AdultAdd>
            <Add>
              <Minus onClick={() => handleDecrease('child')}>－</Minus>
              {childCount}
              <Plus onClick={() => handleIncrease('child')}>＋</Plus>
            </Add>
            <Add>
              <Minus onClick={() => handleDecrease('baby')}>－</Minus>
              {babyCount}
              <Plus onClick={() => handleIncrease('baby')}>＋</Plus>
            </Add>
            <Add>
              <Minus onClick={() => handleDecrease('oldman')}>－</Minus>
              {grandCount}
              <Plus onClick={() => handleIncrease('oldman')}>＋</Plus>
            </Add>
            <Add>
              <Minus onClick={() => handleDecrease('severe')}>－</Minus>
              {severeCount}
              <Plus onClick={() => handleIncrease('severe')}>＋</Plus>
            </Add>
            <Add>
              <Minus onClick={() => handleDecrease('mild')}>－</Minus>
              {mildCount}
              <Plus onClick={() => handleIncrease('mild')}>＋</Plus>
            </Add>
          </ByCount>
        </PeopleMiddleBox>
      </PeopleStartSectionWrapper>
    </div>
  );

  //출발일 Section
  const DateClick = () => (
    <div>
      <StartSectionWrapper>
        <DateBox>
          <Type>출발일</Type>
          <Total>
            2022년 {godate.substring(1, 2)}월 {godate.substring(3, 5)}일{' '}
            {goTime} 00분
          </Total>
          <Type>△</Type>
        </DateBox>
        <CalendarBox>
          <Calendar>달력에서 날짜 선택</Calendar>
        </CalendarBox>
        <MiddleBox>
          <DayBox>
            <DifferDay>
              {day.map((day) => (
                <InDay key={day.index}>{day}</InDay>
              ))}
            </DifferDay>
            <Date>
              {date.map((date) => (
                <InDate key={date.index} onClick={() => setGoDate(date)}>
                  {date.substring(3, 5)}
                </InDate>
              ))}
            </Date>
          </DayBox>
        </MiddleBox>
        <HourWrap>
          <SecondMiddleBox>
            <Number>
              {time.map((time) => (
                <InTime
                  key={time.index}
                  onClick={() => setGoTime(time) & setShowDate(false)}
                >
                  {time}
                </InTime>
              ))}
            </Number>
          </SecondMiddleBox>
        </HourWrap>
      </StartSectionWrapper>
    </div>
  );

  //도착역 변경 Section
  const ArrivedResults = () => (
    <div>
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

  //출발역 변경 Section
  const GoResults = () => (
    <div>
      <StationTitle>주요 역</StationTitle>
      <StationDetailWrap>
        <div>
          <StationDetail
            onClick={() => setSeoul('서울') & setshowGoResults(false)}
          >
            서울
          </StationDetail>
          <StationDetail
            onClick={() => setSeoul('용산') & setshowGoResults(false)}
          >
            용산
          </StationDetail>
          <StationDetail
            onClick={() => setSeoul('광명') & setshowGoResults(false)}
          >
            광명
          </StationDetail>
          <StationDetail
            onClick={() => setSeoul('영등포') & setshowGoResults(false)}
          >
            영등포
          </StationDetail>
          <StationDetail
            onClick={() => setSeoul('수원') & setshowGoResults(false)}
          >
            수원
          </StationDetail>
          <StationDetail
            onClick={() => setSeoul('평택') & setshowGoResults(false)}
          >
            평택
          </StationDetail>
          <StationDetail
            onClick={() => setSeoul('천안') & setshowGoResults(false)}
          >
            천안
          </StationDetail>
          <StationDetail
            onClick={() => setSeoul('대전') & setshowGoResults(false)}
          >
            대전
          </StationDetail>
          <StationDetail
            onClick={() => setSeoul('김천구미') & setshowGoResults(false)}
          >
            김천구미
          </StationDetail>
          <StationDetail
            onClick={() => setSeoul('구미') & setshowGoResults(false)}
          >
            구미
          </StationDetail>
          <StationDetail
            onClick={() => setSeoul('부산') & setshowGoResults(false)}
          >
            부산
          </StationDetail>
          <StationDetail
            onClick={() => setSeoul('대구') & setshowGoResults(false)}
          >
            대구
          </StationDetail>
          <StationDetail
            onClick={() => setSeoul('울산') & setshowGoResults(false)}
          >
            울산
          </StationDetail>
          <StationDetail
            onClick={() => setSeoul('포항') & setshowGoResults(false)}
          >
            포항
          </StationDetail>
          <StationDetail
            onClick={() => setSeoul('강릉') & setshowGoResults(false)}
          >
            강릉
          </StationDetail>
          <StationDetail
            onClick={() => setSeoul('목포') & setshowGoResults(false)}
          >
            목포
          </StationDetail>
          <StationDetail
            onClick={() => setSeoul('전주') & setshowGoResults(false)}
          >
            전주
          </StationDetail>
          <StationDetail
            onClick={() => setSeoul('동해') & setshowGoResults(false)}
          >
            동해
          </StationDetail>
          <StationDetail
            onClick={() => setSeoul('평창') & setshowGoResults(false)}
          >
            평창
          </StationDetail>
          <StationDetail
            onClick={() => setSeoul('안동') & setshowGoResults(false)}
          >
            안동
          </StationDetail>
        </div>
      </StationDetailWrap>
    </div>
  );

  //바뀐 main 화면
  const Another = () => (
    <div>
      <MainGoDiv>
        <MainInfoMent>출발일</MainInfoMent>
        <div onClick={() => setShowDate(true)}>
          2022년 {godate.substring(1, 2)}월 {godate.substring(3, 5)}일 {goTime}{' '}
          00분
        </div>
        <MainInfoArrow>▽</MainInfoArrow>
      </MainGoDiv>

      <MainGoDiv onClick={() => setShowPeople(true)}>
        <MainInfoMent>승객 연령 및 좌석수</MainInfoMent>
        <div>
          {adultCount > 0 && `어른 ${adultCount}명 `}
          {childCount > 0 && `어린이 ${childCount}명 `}
          {babyCount > 0 && `유아 ${babyCount}명 `}
          {grandCount > 0 && `경로 ${grandCount}명 `}
          {severeCount > 0 && `중증 장애인 ${severeCount}명 `}
          {mildCount > 0 && `경증 장애인 ${mildCount}명 `}
        </div>
        <MainInfoArrow>▽</MainInfoArrow>
      </MainGoDiv>

      <MainGoDiv>
        <MainInfoMent>상세 옵션</MainInfoMent>
        <div>인접역 표출, SR 연계 표출</div>
        <MainInfoArrow>▽</MainInfoArrow>
      </MainGoDiv>

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

  //리턴값
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
      <BGMainFooter />
      <Footer />

      {showGoResults || showAriResults || showDate || showPeople ? null : (
        <Another />
      )}
      {showGoResults ? <GoResults /> : null}
      {showAriResults ? <ArrivedResults /> : null}
      {showDate ? <DateClick /> : null}
      {showPeople ? <PeopleClick /> : null}
      <Footer onClick={handleClick}>미션을 수행해주세요 !</Footer>
    </MainAll>
  );
}

//스타일 컴포넌트
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
  justify-content: center;
  align-items: center;
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
  cursor: pointer;
  border-bottom: 2px solid #70139c;
  border: 5px solid #3f9cf1;
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
  cursor: pointer;
  border-bottom: 2px solid #70139c;
  border: 5px solid #3f9cf1;
`;

const MainSwitchBtn = styled.div`
  border: 0.5px solid #3f9cf1;
  border-radius: 8px;
  padding: 0 10px;
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

const MainTrainbtn = styled.button`
  background-color: #f9f9f9;
  border: 0px;
  float: left;
  width: 25%;
  height: 54px;
  border-bottom: 2px solid #70139c;
  border: 5px solid #3f9cf1;
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
  cursor: pointer;
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

const StartSectionWrapper = styled.div`
  text-align: center;
`;

const DateBox = styled.div`
  background-color: #e1e9f6;
  height: 98px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const CalendarBox = styled.div`
  background-color: #ededed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
`;

const Calendar = styled.div`
  border-radius: 20px;
  width: 300px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px solid black;
`;

const DayBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: scroll;
`;

const Date = styled.div`
  display: flex;
  font-size: 13px;
  font-weight: bold;
  padding: 5px 10px 0 10px;
`;

const InDate = styled.div`
  display: flex;
  font-size: 15px;
  padding: 5px 10px 0 10.5px;
`;

const InDay = styled.div`
  display: flex;
  font-size: 12px;
  padding: 5px 13px 0 12.8px;
`;

const MiddleBox = styled.div`
  display: flex;
  background-color: #ededed;
  height: 90px;
  border-bottom: 2px solid #70139c;
  border: 5px solid #3f9cf1;
`;

const SecondMiddleBox = styled.div`
  display: flex;
  background-color: #d9d9d9;
  height: 60px;
  overflow: scroll;
`;

const HourWrap = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Number = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
`;

const InTime = styled.div`
  font-size: 20px;
  white-space: nowrap;
  padding: 0 5px 0 5px;
`;

const Type = styled.div`
  font-weight: bold;
  font-size: 15px;
  color: #3f9cf1;
`;

const Total = styled.div`
  font-size: Mixed;
  font-weight: 600;
`;

const DifferDay = styled.div`
  font-size: 8px;
  font-weight: bold;
  color: #000000;
  display: flex;
  padding: 5px 10px 0 10px;
`;

const PeopleStartSectionWrapper = styled.div`
  text-align: center;
`;

const Age = styled.div`
  color: #3f9cf1;
  font-weight: bold;
  font-size: 15px;
`;

const AtLeast = styled.div`
  color: #686868;
  background-color: #ededed;
  font-weight: 500;
  font-size: 12px;
  height: 17px;
  padding-top: 5px;
`;

const Minus = styled.button`
  display: flex;
  border: none;
  margin-right: 8px;
  font-size: 20px;
`;

const Plus = styled.button`
  background-color: white;
  border: 1px solid black;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  font-size: 20px;
`;

const SeatBox = styled.div`
  height: 98px;
  background-color: #e1e9f6;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const TotalBox = styled.div`
  gap: 0 10px;
  width: 315px;
  margin: 8px auto 3px auto;
`;

const ByAge = styled.div`
  display: flex;
  margin-left: 20px;
  flex-direction: column;
  width: 50%;
  text-align: left;
  justify-content: space-evenly;
  font-weight: 600;
`;

const ByCount = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const PeopleMiddleBox = styled.div`
  height: 330px;
  display: flex;
  background-color: #ededed;
`;

const PeopleType = styled.div`
  font-weight: Medium;
  font-size: 18px;
  color: #000000;
`;

const Add = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
`;

const AdultType = styled.div`
  padding-bottom: 3.5px;
  border-bottom: 5px solid #3f9cf1;
`;

const AdultAdd = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
  border-bottom: 5px solid #3f9cf1;
`;

export default Main;

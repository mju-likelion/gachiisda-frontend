import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import StationArrow from './images/StationArrow';
import { ReactComponent as FooterTrainBtn } from './images/FooterTrainBtn.svg';
import { ReactComponent as FooterTicketBtn } from './images/FooterTicketBtn.svg';
import { ReactComponent as NoneTicket } from './images/FooterTicket.svg';
import { ReactComponent as NoneTicket2 } from './images/FooterTicket2.svg';
import { Link } from 'react-router-dom';
import Footer from './Layouts/Footer';
import Header from './Layouts/Header';
//useRecoilValue
import Axios from '../../axios';
import { useRecoilValue } from 'recoil';
import { startStation, arrivalStation, startDate } from '../../atoms/Stations';

function StationSelect() {
  const startStValue = useRecoilValue(startStation);
  const arrivalStValue = useRecoilValue(arrivalStation);
  const startDtValue = useRecoilValue(startDate);

  const selectTrainList = ['전체', 'KTX', '새마을', '무궁화'];
  const selectSeatList = ['일반석', '우등석', '특석'];
  const selectList = ['직통', '..'];
  const [Selected, setSelected] = useState('');
  const [modal, setModal] = useState(false);
  // axios
  /*
    const [trainNameId, setTrainNameId] = useState([]);
    const [startTimeId, setStartTime] = useState([]);
    const [ArrTime, setArrTime] = useState([]);

    const [roomName, setRoomName] = useState([]);
    const [takeTime, setTakeTime] = useState([]);
    */

  const getList = async () => {
    try {
      console.log('axios실행');
      console.log(startStValue, arrivalStValue, startDtValue);
      const data = await Axios.get('/api/korail/trains', {
        params: {
          depPlaceId: startStValue,
          arrPlaceId: arrivalStValue,
          depPlandTime: startDtValue,
        },
      });
      console.log(data, '입니다');
    } catch {
      console.log('에러입니다');
    }
  };

  useEffect(() => {
    getList();
    console.log('useEffect실행');
  }, []);

  const [list, setList] = useState < Array < getList >> [];
  const [listId, setListId] = useState([]);

  const getAllList = async () => {
    const listData = await Axios.get('/api/korail/trains');
    const { data } = listData.data;
    setList(data);
  };

  const getListById = async (id) => {
    if (id) {
      try {
        const byId = await Axios.get(`/getAllList/${id}`);
        const { data } = byId.data;
        setListId(data);
      } catch {
        console.log('에러입니다');
      }
    }
  };

  useEffect(
    () => {
      getAllList();
      if (list.id) {
        getListById(listId.id);
      }
    },
    [listId.id],
    [list.id],
  );

  const handleClick = () => {
    alert('미션에 나타나있는 시간대를 찾아보세요 ');
  };

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  const modalPage = () => {
    return (
      <div>
        <SelectModal>
          <TimeWrap>
            <TimeMent>일반석</TimeMent>
            <CloseBtn onClick={() => setModal(false)}>x</CloseBtn>
          </TimeWrap>
          <DetailBtnWrap>
            <BtnMent>열차시각</BtnMent>
            <BtnMent>운임요금</BtnMent>
            <SeatBtnMent>
              <Link
                style={{ textDecoration: 'none', color: '#fff' }}
                to='/ChooseSectionFirst'
              >
                {' '}
                좌석선택
              </Link>
            </SeatBtnMent>
          </DetailBtnWrap>
        </SelectModal>
        <TicketingBtn>
          <Link
            style={{ textDecoration: 'none', color: '#064A87' }}
            to='/PaymentPage1'
          >
            예매
          </Link>
        </TicketingBtn>
      </div>
    );
  };

  return (
    <All>
      <PageHeader>
        <StationName>{startStValue}</StationName>
        <div>
          <StationArrow />
        </div>
        <StationName>{arrivalStValue}</StationName>
      </PageHeader>
      <SelectWrap>
        <DayWrap>
          <DayButton>이전날</DayButton>
          <Date>
            {startDtValue.year}년 {startDtValue.month}월 {startDtValue.date}일 (
            {startDtValue.day})
          </Date>
          <DayButton>다음날</DayButton>
        </DayWrap>
        <SelectButWrap>
          <SelectTrainBut onChange={handleSelect} value={Selected}>
            {selectTrainList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </SelectTrainBut>
          <SelectSeatBut onChange={handleSelect} value={Selected}>
            {selectSeatList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </SelectSeatBut>
          <SelectBut onChange={handleSelect} value={Selected}>
            {selectList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </SelectBut>
        </SelectButWrap>
      </SelectWrap>
      <ListWrap>
        <TableHeader>
          <Title>열차</Title>
          <Title>출발</Title>
          <Title>도착</Title>
          <Title>일반실</Title>
          <Title>특/우등</Title>
        </TableHeader>
        <TableContent
          onClick={() => {
            setModal(!modal);
          }}
        >
          <TrainWrap>
            {/**/}
            <TrainName>해당 열차</TrainName>
            <TrainNum>열차 번호</TrainNum>
          </TrainWrap>
          <StartTimeWrap>
            <Time>시간:몇분</Time>
            <Station>출발역</Station>
          </StartTimeWrap>
          <ArrivalTimeWrap>
            <Time>시간:몇분</Time>
            <Station>도착역</Station>
          </ArrivalTimeWrap>
          <NormalWrap>
            <Price>XX,XXX원</Price>
          </NormalWrap>
          <EtcWrap>
            <Price>XX,XXX원</Price>
          </EtcWrap>
        </TableContent>
      </ListWrap>
      {modal ? modalPage() : null}
      <PageFooter>
        <TrainBtn>
          <FooterTrainBtn />
          <TrainMent>승차권예매</TrainMent>
        </TrainBtn>
        <NoneBtnWrap>
          <NoneTicket />
        </NoneBtnWrap>
        <NoneBtnWrap>
          <NoneTicket2 />
        </NoneBtnWrap>
        <TicketBtn>
          <FooterTicketBtn />
          <TicketMent>승차권확인</TicketMent>
        </TicketBtn>
      </PageFooter>
      <Footer onClick={handleClick}>미션을 수행해주세요 !</Footer>
      <Header />
    </All>
  );
}
const All = styled.div`
  margin-top: 64px;
`;
const PageHeader = styled.div`
  background-color: #dcf3f6;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 29px;
`;

const StationName = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: #064a87;
`;

const SelectWrap = styled.div`
  background-color: #f4f4f4;
  justify-content: center;
  align-items: center;
`;

const DayWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DayButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  border: 1px solid #064a87;
  border-radius: 15px;
  color: #064a87;
  font-weight: 400;
  font-size: 15px;
`;

const Date = styled.div`
  margin: 20px 36px;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
`;

const SelectButWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px;
`;

const SelectTrainBut = styled.select`
  width: 140px;
  border: 0.5px solid #686868;
  margin-right: 15px;
`;

const SelectSeatBut = styled.select`
  width: 114px;
  border: 0.5px solid #686868;
  margin-right: 15px;
`;

const SelectBut = styled.select`
  width: 64px;
  border: 0.5px solid #686868;
`;

const ListWrap = styled.div`
  background-color: #f4f4f4;
`;

const TableHeader = styled.div`
  background: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 15px;
  color: #686868;
`;

const Title = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 25%;
  height: 22px;
`;

const TableContent = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 100%;
`;

const TrainWrap = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 25%;
`;

const TrainName = styled.div`
  font-size: 15px;
`;

const TrainNum = styled.div`
  font-size: 12px;
`;

const StartTimeWrap = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 25%;
`;

const ArrivalTimeWrap = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 25%;
`;

const Time = styled.div`
  font-size: 15px;
`;

const Station = styled.div`
  font-size: 12px;
`;

const NormalWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
`;

const EtcWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
`;

const Price = styled.div`
  font-size: 13px;
  color: #064a87;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 2px;
  margin: 8px;
  width: 60px;
  height: 42px;
  border: 1px solid #064a87;
`;

const PageFooter = styled.div`
  display: flex;
  position: fixed;
  bottom: 140px;
  background-color: #f9f9f9;
  width: 100%;
`;

const TrainBtn = styled.button`
  background-color: #f9f9f9;
  border: 0px;
  float: left;
  width: 25%;
  height: 54px;
`;

const TrainMent = styled.div`
  color: #064a87;
  font-weight: bold;
  font-size: 11px;
`;

const TicketBtn = styled.button`
  background-color: #f9f9f9;
  border: 0px;
  float: left;
  width: 25%;
  height: 54px;
`;

const TicketMent = styled.div`
  font-size: 11px;
  font-weight: bold;
`;

const NoneBtnWrap = styled.div`
  background-color: #f9f9f9;
  height: 54px;
  width: 25%;
`;

const SelectModal = styled.div`
  background: rgba(0, 0, 0, 0.7);
`;

const TimeMent = styled.div`
  padding: 10px;
  align-items: flex-start;
  font-weight: 700;
  font-size: 12px;
  color: #ffffff;
`;

const CloseBtn = styled.button`
  border-style: none;
  font-weight: 700;
  font-size: 15px;
  color: #ffffff;
  background: transparent;
  margin-left: 75%;
`;

const TimeWrap = styled.div`
  display: flex;
`;

const DetailBtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SeatBtnMent = styled.button`
  width: 33%;
  height: 42px;
  background: transparent;
  font-weight: 700;
  font-size: 15px;
  color: #ffffff;
  border: none;
`;

const BtnMent = styled.button`
  width: 33%;
  height: 42px;
  background: transparent;
  font-weight: 700;
  font-size: 15px;
  color: #ffffff;
  border: none;
  border-right: 1px solid #ffffff;
`;

const TicketingBtn = styled.button`
  background: #c6dfee;
  width: 100%;
  height: 40px;
  font-weight: 700;
  font-size: 25px;
  color: #064a87;
  border: none;
`;

export default StationSelect;

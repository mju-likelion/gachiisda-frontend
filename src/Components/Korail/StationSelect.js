import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import StationArrow from './images/StationArrow';
import { ReactComponent as FooterTrainBtn } from './images/FooterTrainBtn.svg';
import { ReactComponent as FooterTicketBtn } from './images/FooterTicketBtn.svg';
import { ReactComponent as NoneTicket } from './images/FooterTicket.svg';
import { ReactComponent as NoneTicket2 } from './images/FooterTicket2.svg';
import ModalPage from './ModalPage';
import Footer from './Layouts/Footer';
import Header from './Layouts/Header';
//useRecoilValue
import Axios from '../../axios';
import { useRecoilValue } from 'recoil';
import {
  startStation,
  arrivalStation,
  startDate,
  startStationId,
  arrivalStationId,
  // startTime,
} from '../../atoms/Stations';
import { getHours, getMinutes, subHours } from 'date-fns';

function StationSelect() {
  const startStValue = useRecoilValue(startStation);
  const arrivalStValue = useRecoilValue(arrivalStation);
  const startDtValue = useRecoilValue(startDate);
  const startStIdValue = useRecoilValue(startStationId);
  const arrivalStIdValue = useRecoilValue(arrivalStationId);

  const selectTrainList = ['전체', 'KTX', '새마을', '무궁화'];
  const selectSeatList = ['일반석', '우등석', '특석'];
  const selectList = ['직통', '경유'];
  const [Selected, setSelected] = useState('');
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };

  const dtYear = String(startDtValue.year);
  const dtMonth = String(startDtValue.month);
  const dtDate = startDtValue.date;
  // const dtTime = startTime;

  const [testData, setTestData] = useState([]);

  const getDtAll = dtYear + '-' + dtMonth + '-' + dtDate;

  const getList = async () => {
    try {
      const data = await Axios.get('/api/korail/trains', {
        params: {
          depPlaceId: startStIdValue,
          arrPlaceId: arrivalStIdValue,
          depPlandTime: getDtAll,
        },
      });
      setTestData(data.data.data);
    } catch {
      alert('error');
    }
  };

  useEffect(() => {
    getList();
  }, []);

  const handleClick = () => {
    alert('미션에 나타나있는 시간대를 찾아보세요 ');
  };

  const handleSelect = (e) => {
    setSelected(e.target.value);
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
          <DateWrap>
            {startDtValue.year}년 {startDtValue.month}월 {startDtValue.date}일 (
            {startDtValue.day})
          </DateWrap>
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
        {testData.map((item) => (
          <TableContent
            onClick={() => {
              openModal();
            }}
            key={item.id}
          >
            <TrainWrap>
              <TrainName>{item.train_grade_name}</TrainName>
              <TrainNum>{item.id}</TrainNum>
            </TrainWrap>
            <StartTimeWrap>
              <Time>
                {getHours(new Date(item.dep_pland_time))
                  .toString()
                  .padStart(2, '0')}
                :
                {getMinutes(new Date(item.dep_pland_time))
                  .toString()
                  .padStart(2, '0')}
              </Time>
              <Station>{item.dep_place_name}</Station>
            </StartTimeWrap>
            <ArrivalTimeWrap>
              <Time>
                {getHours(subHours(new Date(item.arr_pland_time), 9))
                  .toString()
                  .padStart(2, '0')}
                :
                {getMinutes(new Date(item.arr_pland_time))
                  .toString()
                  .padStart(2, '0')}
              </Time>
              <Station>{item.arr_place_name}</Station>
            </ArrivalTimeWrap>
            <NormalWrap>
              <Price>XX,XXX원</Price>
            </NormalWrap>
            <EtcWrap>
              <Price>XX,XXX원</Price>
            </EtcWrap>
          </TableContent>
        ))}
      </ListWrap>
      {modal && <ModalPage />}
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

const DateWrap = styled.div`
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

export default StationSelect;

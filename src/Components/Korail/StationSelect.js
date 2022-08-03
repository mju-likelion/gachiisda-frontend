import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Arrow from './images/Arrow';

function StationSelect() {
  const selectTrainList = ['전체', 'KTX', '새마을', '무궁화'];
  const selectSeatList = ['일반석', '우등석', '특석'];
  const selectList = ['직통', '..'];
  const [Selected, setSelected] = useState('');

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  return (
    <All>
      <PageHeader>
        <StationName>서울</StationName>
        <ArrowWrap>
          <Arrow />
        </ArrowWrap>
        <StationName>부산</StationName>
      </PageHeader>
      <SelectWrap>
        <DayWrap>
          <DayButton>이전날</DayButton>
          <Date>2022년 n월 nn일 (요일)</Date>
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
        <TableContent>
          <TrainWrap>
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
    </All>
  );
}

const All = styled.div``;

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

const ArrowWrap = styled.div``;

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
  flex-direction: row;
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
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 36px;
  margin-left: 36px;
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

const TableContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TrainWrap = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
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
`;

const ArrivalTimeWrap = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
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
`;

const EtcWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Price = styled.div`
  font-size: 15px;
  color: #064a87;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 2px;
  margin: 8px;
  width: 67px;
  height: 42px;
  border: 1px solid #064a87;
`;

export default StationSelect;

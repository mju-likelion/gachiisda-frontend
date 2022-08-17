import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Arrow } from '../Home/images/Arrow.svg';
import { ReactComponent as Seat2 } from '../Home/images/Seat2.svg';
// import seat1 from '../Home/images/Seat1.svg';
import Footer from './Layouts/Footer';
import Header from './Layouts/Header';
import Axios from '../../axios';
import { seatName, manyPerson } from '../../atoms/Stations';
import { useRecoilState, useRecoilValue } from 'recoil';

function ChooseSectionFirst() {
  const [seatNum, setSeatNum] = useState([]);
  const [seatNm, setSeatNm] = useRecoilState(seatName);
  const PersonValue = useRecoilValue(manyPerson);

  useEffect(() => {
    Axios.get('/api/korail/trains/1/1').then((response) => {
      setSeatNum(response.data.data[0].Seats);
    });
  }, []);

  const [list, setList] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  // const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    alert(`${PersonValue}개의 의자를 선택하세요 `);
  };

  const SelectBox = () => {
    return (
      <Selectn>
        <option key='second' value='second'>
          1호차 (16석)
        </option>
        <option key='third' value='third'>
          2호차 (16석)
        </option>
        <option key='fourth' value='fourth'>
          3호차 (16석)
        </option>
      </Selectn>
    );
  };

  const Appendlis = (num) => {
    let ls = list;
    ls[num] = !ls[num];

    setList(ls);
  };

  useEffect(() => {}, [list]);

  /*   const returnimg2 = () => {
    return <IImg img alt='seat1' src={seat1}></IImg>;
   };*/

  const SeatNums = seatNum.map((num) => (
    <span key={num.id}> {num.seat_name}</span>
  ));

  const returnimg1 = (check) => {
    return (
      <Seat2
        width={67}
        height={67}
        onClick={() => {
          Appendlis(check);
          // setSelected(selected + 1);
          {
            list[check] ? setCount(count + 1) : setCount(count - 1);
          }
        }}
        style={{
          marginleft: 10,
          marginbottom: 10,
          backgroundColor: list[check] ? '#064A87a1' : null,
          borderRadius: 20,
        }}
      />
    );
  };

  const show = () => {
    return (
      <>
        <ListDiv>
          <SelectDiv2>
            <span
              style={{
                color: '#B3D5F2',
              }}
            >
              선택좌석
            </span>
            <div
              style={{
                color: 'white',
              }}
            >
              {count}명 좌석 선택 / 총 {PersonValue}명 1호차{seatNm}
            </div>
          </SelectDiv2>
          <SelectDiv>
            <Link
              style={{ textDecoration: 'none', color: '#064a87' }}
              to='/PaymentPage1'
            >
              선택 완료
            </Link>
          </SelectDiv>
        </ListDiv>
      </>
    );
  };

  return (
    <All>
      <Body>
        {SelectBox()}
        <Body2>
          <DayBotton>이전칸</DayBotton>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <TrainNumber>해당열차 열차번호 (일반실)</TrainNumber>
            <LeftSeat>잔여 16석 / 전체 72석</LeftSeat>
          </div>
          <DayBotton>다음칸</DayBotton>
        </Body2>
      </Body>

      <SectionBar>
        <SectionBardiv>
          <Circle></Circle>
          <span>선택불가</span>
          <Circlewhite></Circlewhite>
          <span>선택가능</span>
        </SectionBardiv>
        <SectionBardiv>
          <FowardDirection>U</FowardDirection>
          <span
            style={{
              marginRight: 10,
            }}
          >
            순방향
          </span>
          <ReverseDirection>U</ReverseDirection>

          <span>역방향</span>
        </SectionBardiv>
      </SectionBar>

      <MainBody>
        <ImgBody>
          <ImgBody2>
            <SeatWrap
              onClick={() => {
                setSeatNm(SeatNums[0]);
              }}
            >
              {returnimg1(0)}
              {SeatNums[0]}
            </SeatWrap>
            <SeatWrap
              onClick={() => {
                setSeatNm(SeatNums[1]);
              }}
            >
              {returnimg1(1)}
              {SeatNums[1]}
            </SeatWrap>
          </ImgBody2>

          <ImgBody2>
            <SeatWrap
              onClick={() => {
                setSeatNm(SeatNums[4]);
              }}
            >
              {returnimg1(4)}
              {SeatNums[4]}
            </SeatWrap>
            <SeatWrap
              onClick={() => {
                setSeatNm(SeatNums[5]);
              }}
            >
              {returnimg1(5)}
              {SeatNums[5]}
            </SeatWrap>
          </ImgBody2>
          <ImgBody2>
            <SeatWrap
              onClick={() => {
                setSeatNm(SeatNums[8]);
              }}
            >
              {returnimg1(8)}
              {SeatNums[8]}
            </SeatWrap>
            <SeatWrap
              onClick={() => {
                setSeatNm(SeatNums[9]);
              }}
            >
              {returnimg1(9)}
              {SeatNums[9]}
            </SeatWrap>
          </ImgBody2>
          <ImgBody2>
            <SeatWrap
              onClick={() => {
                setSeatNm(SeatNums[12]);
              }}
            >
              {returnimg1(12)}
              {SeatNums[12]}
            </SeatWrap>
            <SeatWrap
              onClick={() => {
                setSeatNm(SeatNums[13]);
              }}
            >
              {returnimg1(13)}
              {SeatNums[13]}
            </SeatWrap>
          </ImgBody2>
        </ImgBody>
        <Arrow width={63} height={347}></Arrow>
        <ImgBody>
          <ImgBody2>
            <SeatWrap
              onClick={() => {
                setSeatNm(SeatNums[2]);
              }}
            >
              {returnimg1(2)}
              {SeatNums[2]}
            </SeatWrap>
            <SeatWrap
              onClick={() => {
                setSeatNm(SeatNums[3]);
              }}
            >
              {returnimg1(3)}
              {SeatNums[3]}
            </SeatWrap>
          </ImgBody2>

          <ImgBody2>
            <SeatWrap
              onClick={() => {
                setSeatNm(SeatNums[6]);
              }}
            >
              {returnimg1(6)}
              {SeatNums[6]}
            </SeatWrap>
            <SeatWrap
              onClick={() => {
                setSeatNm(SeatNums[7]);
              }}
            >
              {returnimg1(7)}
              {SeatNums[7]}
            </SeatWrap>
          </ImgBody2>
          <ImgBody2>
            <SeatWrap
              onClick={() => {
                setSeatNm(SeatNums[10]);
              }}
            >
              {returnimg1(10)}
              {SeatNums[10]}
            </SeatWrap>
            <SeatWrap
              onClick={() => {
                setSeatNm(SeatNums[11]);
              }}
            >
              {returnimg1(11)}
              {SeatNums[11]}
            </SeatWrap>
          </ImgBody2>
          <ImgBody2>
            <SeatWrap
              onClick={() => {
                setSeatNm(SeatNums[14]);
              }}
            >
              {returnimg1(14)}
              {SeatNums[14]}
            </SeatWrap>
            <SeatWrap
              onClick={() => {
                setSeatNm(SeatNums[15]);
              }}
            >
              {returnimg1(15)}
              {SeatNums[15]}
            </SeatWrap>
          </ImgBody2>
        </ImgBody>
        {/* <SeatNums /> */}
      </MainBody>
      {list.includes(true) ? show() : null}
      <Footer onClick={handleClick}>미션을 수행해주세요 !</Footer>
      <Header />
    </All>
  );
}

const All = styled.div`
  height: '100%';
  width: '100%';
  background-color: #f5f5f5;
  margin-top: 64px;
`;

const Body = styled.div`
  height: 118px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 12px;
  margin-right: 12px;
`;

const Body2 = styled.div`
  height: 39px;
  display: flex;
  justify-content: space-between;
`;

const DayBotton = styled.span`
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

const TrainNumber = styled.span`
  font-weight: bold;
  font-size: 15px;
`;

const LeftSeat = styled.span`
  font-weight: bold;
  font-size: 12px;
  color: #686868;
`;

const SectionBar = styled.div`
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SectionBardiv = styled.div`
  display: flex;
  margin: 12px 12px;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  background-color: #d9d9d9;
  border-radius: 100px;
`;

const FowardDirection = styled.span`
  color: black;
  font-weight: bold;
  font-size: 15px;
`;

const ReverseDirection = styled.span`
  color: black;
  font-weight: bold;
  font-size: 15px;
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
`;

const Circlewhite = styled.div`
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 100px;
  border: 0.5px solid gray;
  margin-left: 10px;
`;

const MainBody = styled.div`
  height: 80vh;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
`;

const ImgBody = styled.div`
  height: 284px;
  display: flex;
  flex-direction: column;
`;
const SeatWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImgBody2 = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

const ListDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 130px;
  background-color: gray;
  bottom: 140px;
`;

const SelectDiv = styled.div`
  height: 60px;
  background-color: #c6dfee;
  color: #064a87;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
`;

const SelectDiv2 = styled.div`
  height: 70px;
  background-color: #00000040;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Selectn = styled.select`
  border: 1px solid;
  height: 30px;
`;
export default ChooseSectionFirst;

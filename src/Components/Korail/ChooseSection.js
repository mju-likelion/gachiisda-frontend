import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import arrow from '../Home/images/Arrow.svg';
import seat2 from '../Home/images/Seat2.svg';
// import seat1 from '../Home/images/Seat1.svg';
import Footer from './Layouts/Footer';
import Header from './Layouts/Header';

function ChooseSectionFirst() {
  const [lis, setlis] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [nsns, setnsns] = useState(0);

  const handleClick = () => {
    alert('필요한 인원 수만큼 의자를 선택하세요 ');
  };

  const SelectBox = () => {
    return (
      <Selectn>
        <option key='second' value='second'>
          2호차 (23석)
        </option>
        <option key='third' value='third'>
          3호차 (23석)
        </option>
        <option key='fourth' value='fourth'>
          4호차 (23석)
        </option>
      </Selectn>
    );
  };

  const Appendlis = (num) => {
    let ls = lis;
    ls[num] = !ls[num];

    setlis(ls);
  };

  useEffect(() => {}, [lis]);

  /*   const returnimg2 = () => {
    return <IImg img alt='seat1' src={seat1}></IImg>;
   };*/

  const returnimg1 = (num) => {
    return (
      <img
        img
        alt='seat2'
        src={seat2}
        width={67}
        height={67}
        onClick={() => {
          Appendlis(num);
          setnsns(nsns + 1);
        }}
        style={{
          marginleft: 10,
          marginbottom: 10,
          backgroundColor: lis[num] == true ? '#064A87a1' : null,
          borderRadius: 20,
        }}
      ></img>
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
            <span>▲</span>
            <span
              style={{
                color: 'white',
              }}
            >
              1명 좌석 선택 / 총 2명 1호차 10
            </span>
          </SelectDiv2>
          <SelectDiv>
            <span>
              <Link to='/StationSelect'>선택 완료</Link>
            </span>
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
            <LeftSeat>잔여 23석 / 전체 72석</LeftSeat>
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
            {returnimg1(8)}
            {returnimg1(0)}
          </ImgBody2>

          <ImgBody2>
            {returnimg1(9)}
            {returnimg1(1)}
          </ImgBody2>
          <ImgBody2>
            {returnimg1(10)}
            {returnimg1(2)}
          </ImgBody2>
          <ImgBody2>
            {returnimg1(11)}
            {returnimg1(3)}
          </ImgBody2>
        </ImgBody>
        <IImg img alt='Arrow' src={arrow} width={63} height={347}></IImg>
        <ImgBody>
          <ImgBody2>
            {returnimg1(12)}
            {returnimg1(4)}
          </ImgBody2>

          <ImgBody2>
            {returnimg1(13)}
            {returnimg1(5)}
          </ImgBody2>
          <ImgBody2>
            {returnimg1(14)}
            {returnimg1(6)}
          </ImgBody2>
          <ImgBody2>
            {returnimg1(15)}
            {returnimg1(7)}
          </ImgBody2>
        </ImgBody>
      </MainBody>
      {lis.includes(true) == true ? show() : null}
      <Footer onClick={handleClick}>미션을 수행해주세요 !</Footer>
      <Header />
    </All>
  );
}

export default ChooseSectionFirst;

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
  height: 380px;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
`;

const ImgBody = styled.div`
  height: 284px;
  display: flex;
  flex-direction: column;
  // justify-content: space-evenly;
  // margin-left: 12px;
  // margin-right: 12px;
`;

const ImgBody2 = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

const IImg = styled.img`
  margin-left: 10px;
  margin-bottom: ${(props) => (props.current ? 10 : null)}px;
`;

const ListDiv = styled.div`
  height: 150px;
  background-color: gray;
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
  height: 90px;
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

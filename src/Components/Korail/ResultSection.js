import React from 'react';
import styled from 'styled-components';
import Ktximage from './images/Ktximage.svg';

function ResultSection() {
  return (
    <All>
      <Header>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginLeft: '3px',
            marginBottom: '5px',
          }}
        ></div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginRight: '3px',
            marginBottom: '5px',
          }}
        ></div>
      </Header>
      {<Ktx img alt='Ktximage' width='95' height='95' src={Ktximage}></Ktx>}
      <PractiseText>(해당 연습 항목)</PractiseText>
      <PractiseText>(해당 난이도)</PractiseText>
      <Result>
        <Body1>
          <Body1Text>
            <Total>총 걸린 시간</Total>

            <Number>: 158초</Number>
          </Body1Text>
          <Body1Text>
            <Total>총 누른 수</Total>
            <Number>: 35번</Number>
          </Body1Text>
          <Body1Text>
            <Total>잘못 누른 수</Total>
            <Number>: 23번</Number>
          </Body1Text>
          <Body1Text>
            <Total>바르게 누른 수</Total>
            <Number>: 12번</Number>
          </Body1Text>
        </Body1>
        <Body2>
          <Body2Text>
            <span>내 주문 실력:</span>
            <Nametag>열혈 학구파!</Nametag>
          </Body2Text>
        </Body2>
        <Body3>
          <span>아직은 실수가 많지만 앞으로는 더 잘 하실 거에요~</span>
        </Body3>
      </Result>
      <ReChallenge>다시 도전하기</ReChallenge>
      <ReChallenge>처음 화면으로 돌아가기</ReChallenge>
    </All>
  );
}

styled.button``;

const All = styled.div`
  text-align: center;
  height: '100%';
  width: '100%';
  background-color: #eff3fa;
`;

const Header = styled.div`
  background-color: #b3d5f2;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Ktx = styled.img`
  margin-top: 10px;
`;

const PractiseText = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

const Result = styled.div`
  background-color: #e1e3f6;
  height: 335px;
  margin-left: 20px;
  margin-right: 20px;
`;

const Body1 = styled.div`
  height: 167px;
  width: 278px;
  margin-top: 10px;

  margin-left: 14%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Body2 = styled.div`
  height: 53px;
  width: 278px;
  margin-left: 14%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

const Body3 = styled.div`
  height: 63px;
  width: 278px;

  margin-left: 14%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
`;

const Body1Text = styled.div`
  margin-top: 5px;
  font-size: 23px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
`;

const Number = styled.span`
  font-size: 23px;
  font-weight: 600;
  color: #064a87;
  margin-right: 20px;
`;

const Total = styled.span`
  margin-left: 20px;
`;

const Body2Text = styled.div`
  font-size: 23px;
  font-weight: 500;
`;

const Nametag = styled.span`
  color: #f2b544ff;
`;

const ReChallenge = styled.div`
  background-color: #b3d5f2;
  height: 57px;
  margin: 22px 20px 10px 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
  font-weight: 500;
  color: #064a87ff;
  box-shadow: 0px 5px 5px #a0a0a0;
`;
export default ResultSection;

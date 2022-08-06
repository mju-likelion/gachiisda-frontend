import React from 'react';
import styled from 'styled-components';

function CheckSection() {
  return (
    <All>
      <Header></Header>
      <Body>
        <Line2></Line2>

        <BodyText>
          <span>승차권 정보 확인</span>
        </BodyText>
        <Line></Line>
        <Body1>
          <Body1Text>2022년 8월 2일 (화) 1매</Body1Text>
          <Body1TextBottom>무궁화호 1211 열차</Body1TextBottom>
          <Body1TextBottom>서울(11:23) -{'>'} 부산(17:21)</Body1TextBottom>
          <Body1TextBottom>일반실</Body1TextBottom>
          <Body1TextBottom>1호차 13,14</Body1TextBottom>
        </Body1>
        <Body2>
          <Body2TextBottom>
            비회원은 예약 완료 후, 바로 결제하지 않으면 자동으로 예약이
            취소됩니다.
          </Body2TextBottom>
          <Body2TextBottom>
            승차권을 발권받은 스마트폰에서만 확인할 수 있습니다.
          </Body2TextBottom>
        </Body2>
        <BodyBox>
          <Box1>
            <Box1Text>좌석취소</Box1Text>
          </Box1>
          <Box2>
            <Box1Text>결제하기</Box1Text>
          </Box2>
        </BodyBox>
      </Body>
    </All>
  );
}

export default CheckSection;

const All = styled.div`
  height: '100%';
  width: '100%';
  background-color: #b3b3b3;
`;

const Header = styled.div`
  background-color: #b3d5f2;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Body = styled.div`
  background-color: white;

  height: 389px;
  margin-left: 14px;
  margin-right: 14px;
  margin-top: 152px;
`;

const Body1 = styled.div`
  margin-top: 16px;
  height: 135px;
  background-color: #ededed;
  margin-left: 22px;
  margin-right: 22px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 4px 1.5px #a0a0a0;
`;

const Body2 = styled.div`
  height: 85px;
  margin-left: 22px;
  margin-right: 22px;
  margin-top: 20px;
  color: black;
  font-weight: bold;
`;

const Body1Text = styled.div`
  margin-left: 10px;
  color: #064a87;
  font-size: 16px;
  font-weight: bold;
`;
const Body1TextBottom = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-left: 10px;
  margin-top: 6px;
`;

const Body2TextBottom = styled.div`
  margin-bottom: 10px;
`;
const BodyText = styled.div`
  font-size: 20px;
  color: #064a87;
  font-weight: bold;
  margin-top: 21px;
  margin-left: 22px;
`;

const BodyBox = styled.div`
  background-color: #c6dfee;
  height: 63px;
  display: flex;
  margin-top: 15px;
`;

const Line = styled.div`
  height: 1.5px;
  background-color: black;
  margin-top: 6px;
  margin-left: 22px;
  margin-right: 22px;
`;

const Line2 = styled.div`
  height: 0.1px;
`;

const Box1 = styled.div`
  height: 63px;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
`;

const Box2 = styled.div`
  height: 63px;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box1Text = styled.span`
  font-size: 20px;
  color: #064a87;
  font-weight: bold;
`;

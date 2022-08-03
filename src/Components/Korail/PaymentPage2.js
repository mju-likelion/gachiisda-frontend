import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ReturnImg } from './images/ReturnImg.svg';

function PaymentPage2() {
  return (
    <div>
      <All>
        <PaymentHeader>결제</PaymentHeader>
        <PaySelectDIV>
          <Card>카드결제</Card>
          <Easy>간편결제</Easy>
        </PaySelectDIV>

        <PriceDiscountDIV>
          <PriceDIV>
            <PriceTitle>승차권</PriceTitle>
            <PriceWrap>
              <Price>XX,XXX원</Price>
            </PriceWrap>
          </PriceDIV>
          <DiscountDIV>
            <DiscountTitle>할인 적용 전</DiscountTitle>
            <DiscountWrap>
              <Discount>XX,XXX원 (총 XX,XXX원 할인)</Discount>
            </DiscountWrap>
          </DiscountDIV>
        </PriceDiscountDIV>

        <PointDIV>
          <PointTitle>포인트 사용 </PointTitle>
          <PointContent>미사용</PointContent>
          <PointArrow>▽</PointArrow>
        </PointDIV>
        <CardInfoDIV>
          <ReturnDIV>
            <ReturnInput>다시 입력</ReturnInput>
            <ReturnImgWrap>
              <ReturnImg />
            </ReturnImgWrap>
          </ReturnDIV>
          <Wrap>
            <UsuallyDIV>
              <Usually>자주쓰는 카드</Usually>
              <CardNumTitle>카드번호</CardNumTitle>
              <DdayTitle>유효기간</DdayTitle>
              <PasswordTitle>비밀번호</PasswordTitle>
            </UsuallyDIV>

            <InputWrap>
              <UsuInput>
                <input
                  type='text'
                  placeholder='등록된 카드가 없습니다.'
                ></input>
              </UsuInput>

              <CardNumDIV>
                <CardNum>
                  <input type='text' size='4' placeholder='5365'></input>
                </CardNum>
                <CardNum>
                  <input type='text' size='4'></input>
                </CardNum>
                <CardNum>
                  <input type='text' size='4'></input>
                </CardNum>
                <CardNum>
                  <input type='text' size='4' placeholder='5365'></input>
                </CardNum>
              </CardNumDIV>
              <DdayDIV>
                <DdayInput>
                  <input type='text' size='2'></input>
                </DdayInput>
                <DdayFix>월</DdayFix>
                <DdayInput>
                  <input type='text' size='4'></input>
                </DdayInput>
                <DdayFix>년</DdayFix>
              </DdayDIV>

              <PasswordDIV>
                <PasswordInput>
                  <input type='text' size='2'></input>
                </PasswordInput>
                <PasswordFix>**</PasswordFix>
              </PasswordDIV>
            </InputWrap>
          </Wrap>
        </CardInfoDIV>
      </All>
    </div>
  );
}
const All = styled.div`
  text-align: center;
  background-color: #ededed;
  width: 100%;
  height: 100%;
`;
const PaySelectDIV = styled.div`
  text-align: center;
  display: flex;
  background-color: #ffffff;
`;
const Card = styled.div`
  text-align: center;
  font-size: 20px;
  color: #70139c;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 45px;
  border-bottom: 2px solid #70139c;
`;
const Easy = styled.div`
  text-align: center;
  font-size: 20px;
  color: #686868;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
`;
// const All = styled.div`
// text-align: center;
// `;
const PaymentHeader = styled.div`
  height: 64px;
  background-color: #b285c8;
  color: #ffffff;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PriceDIV = styled.div`
  width: 220px;
  height: 26px;
  margin-top: 10px;
`;
const DiscountDIV = styled.div`
  width: 375px;
  height: 23px;
  margin-bottom: 10px;
`;

const PriceTitle = styled.div`
  font-size: 18px;
  float: left;
`;
const Price = styled.div`
  color: #70139c;
  font-weight: bold;
  font-size: 18px;
  float: right;
`;
const DiscountTitle = styled.div`
  font-size: 16px;
  float: left;
`;
const Discount = styled.div`
  float: right;
`;

const PointDIV = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #686868;
`;
const PointTitle = styled.div`
  color: #70139c;
  font-size: 15px;
`;
const PointArrow = styled.div`
  font-size: 15px;
  color: #70139c;
`;
const PointContent = styled.div`
  font-size: 18px;
`;
const PriceDiscountDIV = styled.div``;
const PriceWrap = styled.div``;
const DiscountWrap = styled.div``;
const CardInfoDIV = styled.div``;
const ReturnDIV = styled.div`
  border-bottom: 1px dotted #000000;
  height: 50px;
  width: 100%;
`;
const ReturnImgWrap = styled.div`
  float: right;
  padding-top: 15px;
  padding-right: 15px;
`;
const ReturnInput = styled.div`
  font-size: 20px;
  float: right;
  padding-top: 15px;
  padding-right: 20px;
`;

const UsuallyDIV = styled.div`
  width: 50%;
  height: 350px;
  align-items: center;
`;
const Usually = styled.div``;
const UsuInput = styled.div``;
const CardNumDIV = styled.div``;
const CardNumTitle = styled.div``;
const CardNum = styled.div``;
const DdayDIV = styled.div``;
const DdayTitle = styled.div``;
const DdayInput = styled.div``;
const DdayFix = styled.div``;
const PasswordDIV = styled.div``;
const PasswordTitle = styled.div``;
const PasswordInput = styled.div``;
const PasswordFix = styled.div``;
const Wrap = styled.div`
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;
`;

const InputWrap = styled.div`
  width: 50%;
  height: 350px;
  align-items: center;
`;

export default PaymentPage2;

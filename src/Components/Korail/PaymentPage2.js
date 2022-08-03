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
          <CheckCardDIV>
            <CheckCard>신용(체크) 카드 결제</CheckCard>
            <PointArrow>▽</PointArrow>
          </CheckCardDIV>

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
              <PasswordTitle>인증번호</PasswordTitle>
              <PasswordTitle>할부기간</PasswordTitle>
              <AgreeCheck>
                <input type='checkbox'></input>
              </AgreeCheck>
            </UsuallyDIV>

            <InputWrap>
              <UsuInput>
                <select placeholder='등록된 카드가 없습니다.'>
                  <option value='직접입력'>+ 직접입력</option>
                </select>
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

              <PasswordDIV>
                <PasswordInput>
                  <input type='radio' value='개인'></input>개인
                  <input type='radio' value='법인'></input>법인
                </PasswordInput>
              </PasswordDIV>
              <PasswordDIV>
                <PasswordInput>
                  <select>
                    <option value='일시불'>일시불</option>
                    <option value='2개월'>2개월</option>
                    <option value='3개월'>3개월</option>
                  </select>
                </PasswordInput>
              </PasswordDIV>
              <AgreeDIV>
                <Agree>개인정보 수집 및 이용 동의</Agree>
              </AgreeDIV>
            </InputWrap>
          </Wrap>
        </CardInfoDIV>
      </All>
    </div>
  );
}
const All = styled.div`
  text-align: center;
  background-color: #f4f4f4;
  width: 100%;
  height: 100%;
  margin-top: 64px;
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
  padding-left: 10px;
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
  padding-left: 10px;
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
  padding-top: 10px;
  padding-bottom: 7px;
`;
const PointArrow = styled.div`
  font-size: 15px;
  color: #70139c;
  padding-bottom: 10px;
`;
const PointContent = styled.div`
  font-size: 18px;
  padding-bottom: 7px;
`;
const PriceDiscountDIV = styled.div`
  border-bottom: 1px solid #000000;
`;
const PriceWrap = styled.div``;
const DiscountWrap = styled.div``;
const CardInfoDIV = styled.div``;
const ReturnDIV = styled.div`
  border-bottom: 1.5px dotted gray;
  height: 50px;
  width: 100%;
  background-color: #ededed;
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
  width: 30%;
  height: 350px;
  padding-top: 10px;
  padding-left: 10px;
`;
const Usually = styled.div`
  display: flex;
  padding-bottom: 10px;
`;
const UsuInput = styled.div`
  display: flex;
  padding-bottom: 10px;
`;
const CardNumDIV = styled.div`
  display: flex;
`;
const CardNumTitle = styled.div`
  display: flex;
  padding-bottom: 10px;
`;
const CardNum = styled.div`
  padding-bottom: 10px;
  padding-right: 2px;
`;
const DdayDIV = styled.div`
  display: flex;
`;
const DdayTitle = styled.div`
  display: flex;
  padding-bottom: 10px;
`;
const DdayInput = styled.div`
  padding-bottom: 10px;
  padding-right: 3px;
`;
const DdayFix = styled.div`
  padding-right: 5px;
`;
const PasswordDIV = styled.div`
  display: flex;
`;
const PasswordTitle = styled.div`
  display: flex;
  padding-bottom: 10px;
`;
const AgreeCheck = styled.div`
  display: flex;
  padding-top: 10px;
  width: 20%;
`;

const PasswordInput = styled.div`
  padding-bottom: 10px;
  padding-right: 5px;
`;
const PasswordFix = styled.div``;
const Wrap = styled.div`
  display: flex;
  /*flex-direction: center;
  justify-content: center;
  align-items: center; */
  background-color: #ededed;
`;

const InputWrap = styled.div`
  width: 50%;
  height: 350px;
  padding-top: 10px;
`;
const CheckCardDIV = styled.div`
  padding-top: 10px;
  border-bottom: 1px solid #000000;
`;

const CheckCard = styled.div``;
const AgreeDIV = styled.div``;
const Agree = styled.div`
  color: darkgrey;
  text-decoration: underline;
  font-size: 13px;
  padding-top: 5px;
  padding-right: 30px;
`;

export default PaymentPage2;

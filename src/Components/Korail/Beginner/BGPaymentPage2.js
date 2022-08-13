import React from 'react';
import styled from 'styled-components';
import Footer from '../Layouts/Footer';
import { ReactComponent as ReturnImg } from '../images/ReturnImg.svg';
import PaymentFooter from '../Layouts/PaymentFooter1';

function BGPaymentPage2() {
  return (
    <All>
      <PaymentHeader>결제</PaymentHeader>
      <PaySelectDiv>
        <Card>카드결제</Card>
        <Easy>간편결제</Easy>
      </PaySelectDiv>

      <PriceDiscountDiv>
        <PriceDiv>
          <PriceTitle>승차권</PriceTitle>
          <div>
            <Price>XX,XXX원</Price>
          </div>
        </PriceDiv>
        <DiscountDiv>
          <DiscountTitle>할인 적용 전</DiscountTitle>
          <div>
            <Discount>XX,XXX원 (총 XX,XXX원 할인)</Discount>
          </div>
        </DiscountDiv>
      </PriceDiscountDiv>

      <PointDiv>
        <PointTitle>포인트 사용 </PointTitle>
        <PointContent>미사용</PointContent>
        <PointArrow>▽</PointArrow>
      </PointDiv>
      <div>
        <CheckCardDiv>
          <div>신용(체크) 카드 결제</div>
          <PointArrow>▽</PointArrow>
        </CheckCardDiv>

        <ReturnDiv>
          <ReturnInput>다시 입력</ReturnInput>
          <ReturnImgWrap>
            <ReturnImg />
          </ReturnImgWrap>
        </ReturnDiv>
        <Wrap>
          <UsuallyDiv>
            <Usually>자주쓰는 카드</Usually>
            <CardNumTitle>카드번호</CardNumTitle>
            <DdayTitle>유효기간</DdayTitle>
            <PasswordTitle>비밀번호</PasswordTitle>
            <PasswordTitle>인증번호</PasswordTitle>
            <PasswordTitle>할부기간</PasswordTitle>
            <AgreeCheck>
              <input type='checkbox'></input>
            </AgreeCheck>
          </UsuallyDiv>

          <InputWrap>
            <UsuInput>
              <select placeholder='등록된 카드가 없습니다.'>
                <option value='직접입력'>+ 직접입력</option>
              </select>
            </UsuInput>

            <CardNumDiv>
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
            </CardNumDiv>

            <DdayDiv>
              <DdayInput>
                <input type='text' size='2'></input>
              </DdayInput>
              <DdayFix>월</DdayFix>
              <DdayInput>
                <input type='text' size='4'></input>
              </DdayInput>
              <DdayFix>년</DdayFix>
            </DdayDiv>

            <PasswordDiv>
              <PasswordInput>
                <input type='text' size='2'></input>
              </PasswordInput>
              <div>**</div>
            </PasswordDiv>

            <PasswordDiv>
              <PasswordInput>
                <input type='radio' value='개인'></input>개인
                <input type='radio' value='법인'></input>법인
              </PasswordInput>
            </PasswordDiv>

            <PasswordDiv>
              <PasswordInput>
                <select>
                  <option value='일시불'>일시불</option>
                  <option value='2개월'>2개월</option>
                  <option value='3개월'>3개월</option>
                </select>
              </PasswordInput>
            </PasswordDiv>

            <div>
              <Agree>개인정보 수집 및 이용 동의</Agree>
            </div>
          </InputWrap>
        </Wrap>
      </div>
      <PaymentFooter />
      <Footer>
        해당 영역은 결제 창입니다. 카드 결제를 선택하신 뒤, 손가락을 위로 밀어
        카드 정보 입력란을 찾습니다. 그 후 결제 카드 정보를 각 칸에 맞게
        입력하시면 됩니다. 여기서는 연습을 위해, 작성했다고 가정하고 넘어갑니다.
        따라서 별도의 조작 없이 다음 버튼만을 눌러주세요
      </Footer>
    </All>
  );
}

const All = styled.div`
  text-align: center;
  background-color: #f4f4f4;
  width: 100%;
  height: 100%;
  margin-top: 64px;
  padding-bottom: 252px;
`;

const PaySelectDiv = styled.div`
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
  border: 5px solid #3f9cf1;
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

const PaymentHeader = styled.div`
  height: 64px;
  background-color: #b285c8;
  color: #ffffff;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PriceDiv = styled.div`
  width: 220px;
  height: 26px;
  margin-top: 10px;
`;

const DiscountDiv = styled.div`
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

const PointDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #686868;
`;

const PointTitle = styled.div`
  color: #70139c;
  font-size: 15px;
  padding: 10px 0 7px 0;
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

const PriceDiscountDiv = styled.div`
  border-bottom: 1px solid #000000;
`;

const ReturnDiv = styled.div`
  border-bottom: 1.5px dotted gray;
  height: 50px;
  width: 100%;
  background-color: #ededed;
`;

const ReturnImgWrap = styled.div`
  float: right;
  padding: 15px 15px 0 0;
`;

const ReturnInput = styled.div`
  font-size: 20px;
  float: right;
  padding: 15px 20px 0 0;
`;

const UsuallyDiv = styled.div`
  width: 30%;
  height: 350px;
  padding: 10px 0 0 10px;
`;

const Usually = styled.div`
  display: flex;
  padding-bottom: 10px;
`;

const UsuInput = styled.div`
  display: flex;
  padding-bottom: 10px;
`;

const CardNumDiv = styled.div`
  display: flex;
`;

const CardNumTitle = styled.div`
  display: flex;
  padding-bottom: 10px;
`;

const CardNum = styled.div`
  padding: 0 2px 10px 0;
`;

const DdayDiv = styled.div`
  display: flex;
`;

const DdayTitle = styled.div`
  display: flex;
  padding-bottom: 10px;
`;

const DdayInput = styled.div`
  padding: 0 3px 10px 0;
`;

const DdayFix = styled.div`
  padding-right: 5px;
`;

const PasswordDiv = styled.div`
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
  padding: 0 5px 10px 0;
`;

const Wrap = styled.div`
  display: flex;
  background-color: #ededed;
  border: 5px solid #3f9cf1;
`;

const InputWrap = styled.div`
  width: 50%;
  height: 350px;
  padding-top: 10px;
`;

const CheckCardDiv = styled.div`
  padding-top: 10px;
  border-bottom: 1px solid #000000;
`;

const Agree = styled.div`
  color: darkgrey;
  text-decoration: underline;
  font-size: 13px;
  padding: 5px 30px 0 0;
`;

export default BGPaymentPage2;

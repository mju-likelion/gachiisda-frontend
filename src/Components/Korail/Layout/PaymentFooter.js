import React from 'react';
import styled from 'styled-components';

function PaymentFooter() {
  return (
    <div>
      <FooterDIV>
        <CostDIV>
          <Number>총 1개</Number>
          <Cost>XX,XXX원</Cost>
        </CostDIV>
        <BtnDIV>
          <Cancel>예약취소</Cancel>
          <Next>다음</Next>
        </BtnDIV>
      </FooterDIV>
    </div>
  );
}
const Number = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: #b3d5f2;
  padding-left: 10px;
`;
const Cost = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: #ffffff;
  padding-left: 260px;
`;
const CostDIV = styled.div`
  background-color: #000000;
  opacity: 70%;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
`;
const Cancel = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #064a87;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Next = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #064a87;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid #3f9cf1;
`;
const BtnDIV = styled.div`
  background-color: #c6dfee;
  display: flex;
  height: 42px;
`;
const FooterDIV = styled.div`
  position: absolute;
  width: 100%;
  bottom: 140px;
`;

export default PaymentFooter;

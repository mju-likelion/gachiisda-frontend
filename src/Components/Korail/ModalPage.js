import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ModalPage = () => {
  return (
    <ModalWrap>
      <SelectModal>
        <TimeWrap>
          <TimeMent>일반석</TimeMent>
          <CloseBtn>x</CloseBtn>
        </TimeWrap>
        <DetailBtnWrap>
          <BtnMent>열차시각</BtnMent>
          <BtnMent>운임요금</BtnMent>
          <SeatBtnMent>
            <Link
              style={{ textDecoration: 'none', color: '#fff' }}
              to='/ChooseSectionFirst'
            >
              {' '}
              좌석선택
            </Link>
          </SeatBtnMent>
        </DetailBtnWrap>
      </SelectModal>
      <TicketingBtn>
        <Link
          style={{ textDecoration: 'none', color: '#064A87' }}
          to='/PaymentPage1'
        >
          예매
        </Link>
      </TicketingBtn>
    </ModalWrap>
  );
};
const ModalWrap = styled.div`
  bottom: 190px;
  position: fixed;
  width: 100%;
`;

const SelectModal = styled.div`
  background: rgba(0, 0, 0, 0.7);
  z-index: 100;
`;

const TimeMent = styled.div`
  padding: 10px;
  align-items: flex-start;
  font-weight: 700;
  font-size: 12px;
  color: #ffffff;
`;

const CloseBtn = styled.button`
  border-style: none;
  font-weight: 700;
  font-size: 15px;
  color: #ffffff;
  background: transparent;
  margin-left: 75%;
`;

const TimeWrap = styled.div`
  display: flex;
`;

const DetailBtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SeatBtnMent = styled.button`
  width: 33%;
  height: 42px;
  background: transparent;
  font-weight: 700;
  font-size: 15px;
  color: #ffffff;
  border: none;
`;

const BtnMent = styled.button`
  width: 33%;
  height: 42px;
  background: transparent;
  font-weight: 700;
  font-size: 15px;
  color: #ffffff;
  border: none;
  border-right: 1px solid #ffffff;
`;

const TicketingBtn = styled.button`
  background: #c6dfee;
  width: 100%;
  height: 40px;
  font-weight: 700;
  font-size: 25px;
  color: #064a87;
  border: none;
`;

export default ModalPage;

import React from 'react';
import Switch from './images/MainSwitchBtn.svg';
import Train from './images/MainTrain.svg';
import Ticket from './images/MainTicket.svg';
import "./Main.css";

function Main() {
  return (
    <div>
      <div className="Main_Way_DIV">
        <div className="Main_OneWay">편도</div>
        <div className="Main_Around">왕복</div>
      </div>
      <div>

        <div className="Main_Go_Start_ment">출발</div>
        <button type="submit" className="Main_Switch_button"><img alt="switch_button" src={Switch} /></button>
        <div className="Main_Go_Arrived_ment">도착</div>

        <div className="Main_Go_DIV">
          <div className="Main_Go_Start">
            서울
          </div>
          <div className="Main_Go_arrow">-&gt;</div>
          <div className="Main_Go_Arrived">
            부산
          </div>
        </div>
        <button type="submit" className="Main_KTX_Select">KTX역 선택 지도</button>
      </div>

      <div className="Main_Go_DIV">
        <div className="Main_Go_Info">출발일</div>
        <div>2022년 n월 nn일 (요일) 시 : 분</div>
        <div className="Main_arrow">▽</div>
      </div>

      <div className="Main_Go_DIV">
        <div className="Main_Go_Info">승객 연령 및 좌석수</div>
        <div>어른 1명</div>
        <div className="Main_arrow">▽</div>

      </div>
      <div className="Main_Go_DIV">
        <div className="Main_Go_Info">상세 옵션</div>
        <div>인접역 표출, SR 연계 표출</div>
        <div className="Main_arrow">▽</div>

      </div>
      <div />
      <div className="Main_Train_Inquire">열차 조회하기</div>
      <button type="submit" className="Main_Train_btn">
        <img alt="Main_Train" src={Train} />
        <div>승차권예매</div>
      </button>
      <div className="Main_NoneAct_btn">할인 ꞏ 정기권</div>
      <div className="Main_NoneAct_btn">관광상품</div>
      <button type="submit" className="Main_Ticket_btn">
        <img alt="Main_Ticket" src={Ticket} />
        <div>승차권확인</div>
      </button>

    </div>
  );
}

export default Main;

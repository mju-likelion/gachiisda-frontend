/* eslint-disable linebreak-style */
import React from 'react';
import './Footer.css';

const Item = ({ text }) => text;

function Footer() {
  return (
    <div>
      <div className="mission-footer">
        초급단계일 경우 :  해당 영역에 안내 문구 표시
        <Item text={<br />} />
        고급단계일 경우 : 해당 영역에 미션 문구 표시
        셋 째
      </div>
      <div className="main-footer">도움이 필요하면 이 칸을 눌러 주세요 </div>
    </div>

  );
}

export default Footer;

//import { Axios } from 'axios';
//import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import React from 'react';
import styled from 'styled-components';
import BookImg from '../../Korail/images/BookImg';
import SearchEnter from '../../Korail/images/SearchEnter';
//import Axios from '../../axios';
import { inputLoanValue } from '../../../atoms/LoanWords';
import { useRecoilState } from 'recoil';
import Header from '../../Korail/Layouts/Header';

function DictMain() {
  const [inputLoan, setInputLoan] = useRecoilState(inputLoanValue);

  const onChangeWord = (e) => {
    setInputLoan(e.target.value);
  };

  const onClickWord = () => {
    setInputLoan(inputLoan);
  };

  return (
    <All>
      <Header />
      <IconWrap>
        <BookImg />
      </IconWrap>
      <DictMent> 쉬운 우리말 사전 </DictMent>
      <DetailMent>
        온라인 예매 및 주문에서 자주 쓰이는 말을 <br /> 쉬운 우리말로
        표현합니다.
      </DetailMent>
      <SearchBar>
        <SearchInput
          placeholder='검색할 외래어를 입력해주세요.'
          type='text'
          value={inputLoan}
          onChange={onChangeWord}
        />
        <SearchIcon>
          <Link to='/DictionaryExplan' onClick={onClickWord}>
            <SearchEnter />
          </Link>
        </SearchIcon>
      </SearchBar>

      <RecommendTitle>단어 추천</RecommendTitle>
      <Recommend>
        <RecommendList>세트</RecommendList>
        <RecommendList>코레일톡</RecommendList>
        <RecommendList>쿠폰</RecommendList>
        <RecommendList>포인트</RecommendList>
        <RecommendList>큐알코드</RecommendList>
        <RecommendList>SR 연계</RecommendList>
      </Recommend>
    </All>
  );
}

const All = styled.div`
  background-color: #eff3fa;
  /* padding: 60px 0px 100% 0px; */
  height: 100vh;
`;
const Recommend = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  /* flex-direction: column; */
`;
const RecommendTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin: 50px 0 10px 30px;
  color: #2e3c7e;
`;
const RecommendList = styled.div`
  padding: 10px;
  background-color: #ffe77a;
  border-radius: 20px;
  margin: 10px;
  width: 20%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  color: #607eaa;
`;

const IconWrap = styled.div`
  padding: 45% 0 0 30px;
  /* margin: 116px 286px 12px 22px; */
`;

const DictMent = styled.div`
  font-weight: 700;
  font-size: 37px;
  margin: 0px 65px 6px 30px;
  display: flex;
  color: #141a46;
`;

const DetailMent = styled.div`
  font-weight: 400;
  font-size: 20px;
  margin: 0px 90px 36px 35px;
  color: #2e3c7e;
  width: auto;
`;

const SearchBar = styled.div`
  background: #b3d5f2;
  border-radius: 20px;
  width: 318px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 28px;
`;

const SearchInput = styled.input`
  background: transparent;
  border: none;
  width: 70%;
  color: #7a7a7a;
  font-weight: 400;
  font-size: 16px;
`;

const SearchIcon = styled.button`
  border: none;
  background: transparent;
`;

export default DictMain;

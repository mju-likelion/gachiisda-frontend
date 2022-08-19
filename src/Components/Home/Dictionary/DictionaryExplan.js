import React, { useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import styled from 'styled-components';
// import { ReactComponent as SearchIcon } from './images/SearchIcon.svg';
import {
  inputLoanValue,
  loanMeaningValue,
  exampleLoanValue,
  exampleKoreanValue,
} from '../../../atoms/LoanWords';
import Axios from '../../../axios';
import Header from '../../Korail/Layouts/Header';

function DictionaryExplan() {
  const setLoanWord = useRecoilValue(inputLoanValue);
  const [meaning, setMeaning] = useRecoilState(loanMeaningValue);
  const [exampleLoan, setExampleLoan] = useRecoilState(exampleLoanValue);
  const [exampleKorean, setExampleKorean] = useRecoilState(exampleKoreanValue);

  const getLoanWords = async () => {
    const res = await Axios.get('/api/dictionary/words', {
      params: { keyword: setLoanWord },
    });
    // console.log(res.data);
    setMeaning(res.data.data.meaning);
    setExampleLoan(res.data.data.ex_loan);
    setExampleKorean(res.data.data.ex_korean);
  };

  useEffect(() => {
    getLoanWords();
  }, []);

  return (
    <All>
      <Header />
      {/* <InputWrap>
        <InputDiv>
          <Input placeholder='검색할 외래어를 입력해주세요.' />
          <SearchBtn>
            <SearchIcon />
          </SearchBtn>
        </InputDiv>
      </InputWrap> */}

      <ExplanDiv>
        <Fix>쉬운 우리말</Fix>
        <Foreign>{setLoanWord}</Foreign>
        <KoreanWrap>
          <FixEqual></FixEqual>
          <Korean>: {meaning}</Korean>
        </KoreanWrap>
      </ExplanDiv>

      <ExplanExampleDiv>
        <ExplanWrap>
          <ExampleFix>바꾸어 쓴 예문</ExampleFix>
          <ExampleDiv>
            <ExampleForeign>{exampleLoan}</ExampleForeign>
            <Arrow>▽</Arrow>
            <ExampleKorean>{exampleKorean}</ExampleKorean>
          </ExampleDiv>
        </ExplanWrap>
      </ExplanExampleDiv>
    </All>
  );
}

const All = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #eff3fa;
`;

// const InputDiv = styled.div`
//   background-color: #b3d5f2;
//   color: #7a7a7a;
//   border-radius: 20px;
//   margin-top: 20px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 5px;
//   width: 80%;
// `;

// const Input = styled.input`
//   border: none;
//   background: transparent;
//   width: 80%;
// `;

// const InputWrap = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const SearchBtn = styled.button`
//   border: none;
//   background: transparent;
//   padding-left: 30px;
// `;

const ExplanDiv = styled.div`
  padding-bottom: 50px;
  padding-left: 30px;
`;

const Fix = styled.div`
  background-color: #ffe77a;
  font-size: 16px;
  width: 85px;
  height: 23px;
  display: flex;
  margin-top: 50px;
  margin-bottom: 10px;
`;

const Foreign = styled.div`
  font-size: 25px;
  color: #195190;
`;

const Korean = styled.div`
  font-size: 25px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 1.4;
  color: #00539c;
`;

const ExampleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 0 0 10px;
  font-size: 20px;
`;

const ExplanWrap = styled.div`
  background-color: #e1e9f6;
  padding: 20px 20px 40px 20px;
  width: 80%;
`;

const ExplanExampleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ExampleFix = styled.div`
  background-color: #ffe77a;
  width: 140px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const ExampleForeign = styled.div`
  color: #2e3c7e;
`;

const Arrow = styled.div`
  color: #b3d5f2;
  font-weight: bold;
`;

const ExampleKorean = styled.div`
  color: #2e3c7e;
`;
const FixEqual = styled.div`
  font-size: 50px;
  font-weight: bold;
`;

const KoreanWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px 0 0;
`;

export default DictionaryExplan;

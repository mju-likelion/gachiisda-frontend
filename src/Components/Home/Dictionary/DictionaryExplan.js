import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from './images/SearchIcon.svg';

function DictionaryExplan() {
  return (
    <All>
      <InputWrap>
        <InputDiv>
          <Input placeholder='검색할 외래어를 입력해주세요.' />
          <SearchBtn>
            <SearchIcon />
          </SearchBtn>
        </InputDiv>
      </InputWrap>

      <ExplanDiv>
        <Fix>쉬운 우리말</Fix>
        <Foreign>오픈 스페이스</Foreign>
        <KoreanWrap>
          <FixEqual>:</FixEqual>
          <Korean>열린 쉼터</Korean>
        </KoreanWrap>
      </ExplanDiv>

      <ExplanExampleDiv>
        <ExplanWrap>
          <ExampleFix>바꾸어 쓴 예문</ExampleFix>
          <ExampleDiv>
            <ExampleForeign>
              코로나19 장기화로 단지 내 오픈 스페이스에 관한 관심이 커졌다.
            </ExampleForeign>
            <Arrow>▽</Arrow>
            <ExampleKorean>
              코로나19 장기화로 단지 내 열린 쉼터에 관한 관심이 커졌다.
            </ExampleKorean>
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
  height: 100%;
  background-color: #eff3fa;
  margin-top: 64px;
  padding-bottom: 250px;
`;

const InputDiv = styled.div`
  background-color: #b3d5f2;
  color: #7a7a7a;
  border-radius: 20px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 80%;
`;

const Input = styled.input`
  border: none;
  background: transparent;
  width: 80%;
`;

const InputWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchBtn = styled.button`
  border: none;
  background: transparent;
  padding-left: 30px;
`;

const ExplanDiv = styled.div`
  padding-bottom: 50px;
  padding-left: 30px;
`;

const Fix = styled.div`
  background-color: #f2b544;
  font-size: 16px;
  width: 85px;
  height: 23px;
  display: flex;
  margin-top: 50px;
  margin-bottom: 10px;
`;

const Foreign = styled.div`
  font-size: 25px;
`;

const Korean = styled.div`
  font-size: 50px;
  font-weight: bold;
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
  background-color: #f2b544;
  width: 140px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const ExampleForeign = styled.div`
  color: #686868;
  font-weight: bold;
`;

const Arrow = styled.div`
  color: #b3d5f2;
  font-weight: bold;
`;

const ExampleKorean = styled.div`
  color: #686868;
  font-weight: bold;
`;
const FixEqual = styled.div`
  font-size: 50px;
  font-weight: bold;
`;

const KoreanWrap = styled.div`
  display: flex;
`;

export default DictionaryExplan;

import React from 'react';
import styled from 'styled-components';
import BookImg from '../../Korail/images/BookImg';
import SearchEnter from '../../Korail/images/SearchEnter';

function DictMain() {
  return (
    <All>
      <IconWrap>
        <BookImg />
      </IconWrap>{' '}
      <DictMent> 쉬운 우리말 사전 </DictMent>{' '}
      <DetailMent>
        외국어 용어의 <br />
        쉬운 우리말 표현 사전{' '}
      </DetailMent>{' '}
      <SearchBar>
        <SearchInput placeholder='검색할 외래어를 입력해주세요.' />
        <SearchIcon>
          <SearchEnter />
        </SearchIcon>{' '}
      </SearchBar>{' '}
    </All>
  );
}

const All = styled.div`
  background-color: #eff3fa;
  padding: 60px 0px 100% 0px;
`;

const IconWrap = styled.div`
  margin: 116px 286px 12px 22px;
`;

const DictMent = styled.div`
  font-weight: 700;
  font-size: 37px;
  margin: 0px 65px 6px 30px;
  display: flex;
`;

const DetailMent = styled.div`
  font-weight: 400;
  font-size: 22px;
  margin: 0px 120px 36px 35px;
`;

const SearchBar = styled.div`
  background: #b3e5f2;
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

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function DifficultySelection() {
  return (
    <LevelAll>
      <LevelMent>
        <h1>난이도를 선택해주세요</h1>
      </LevelMent>

      <LevelBeginner>
        <LevelBeginnerBtn>
          <Link style={{ textDecoration: 'none', color: 'yellow' }} to='/List'>
            초급
          </Link>
        </LevelBeginnerBtn>

        <LevelBeginnerMent>안내에 따라 사용법을 배웁니다</LevelBeginnerMent>
      </LevelBeginner>

      <LevelAdvancer>
        <LevelAdvancerBtn>
          <Link style={{ textDecoration: 'none', color: 'yellow' }} to='/List'>
            고급
          </Link>
        </LevelAdvancerBtn>
        <LevelAdvancerMent>
          도움 없이 혼자서 사용법을 익힙니다
        </LevelAdvancerMent>
      </LevelAdvancer>
    </LevelAll>
  );
}

const LevelMent = styled.div`
  padding-top: 80px;
  margin-bottom: 100px;
`;

const LevelBeginner = styled.div`
  padding-top: 20px;
`;

const LevelBeginnerBtn = styled.button`
  width: 240px;
  height: 60px;
  background-color: #b3d5f2;
  border: none;
  color: #064a87;
  font-size: 30px;
  font-weight: bold;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 3px 5px #686868;
  cursor: pointer;
`;

const LevelBeginnerMent = styled.div`
  color: #686868;
  font-size: 20px;
  margin-bottom: 50px;
`;

const LevelAdvancer = styled.div`
  padding-top: 50px;
`;

const LevelAdvancerBtn = styled.button`
  width: 240px;
  height: 60px;
  background-color: #b3d5f2;
  border: none;
  color: #064a87;
  font-size: 30px;
  font-weight: bold;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 3px 5px #686868;
  cursor: pointer;
`;

const LevelAdvancerMent = styled.div`
  color: #686868;
  font-size: 20px;
  margin-bottom: 50px;
`;

const LevelAll = styled.div`
  text-align: center;
  background-color: #eff3fa;
  padding-bottom: 220px;
`;

export default DifficultySelection;

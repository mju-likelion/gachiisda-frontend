import React from 'react';
import styled from 'styled-components';
// import Header from './Layouts/Header';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import Footer from './Layouts/Footer';
import { Link } from 'react-router-dom';

const MainFooter = () => {
  return (
    <All>
      <MainTrainInquire>
        <Link
          style={{ textDecoration: 'none', color: 'black' }}
          to='/BGStationSelect'
        >
          열차 조회하기
        </Link>
      </MainTrainInquire>
    </All>
  );
};

const All = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainTrainInquire = styled.div`
  background-color: #c6dfee;
  color: #064a87;
  font-size: 25px;
  font-weight: bold;
  margin-top: 20px;
  position: fixed;
  bottom: 140px;
  width: 98%;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid #3f9cf1;
`;

export default MainFooter;

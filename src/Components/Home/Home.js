import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <>
            <div className='Home-title'>
                <h1>가치:잇다</h1>
            </div>
            <div >
                <button className='Home-kiosk-button'>키오스크 연습</button>
            </div>
            <div >
            <button className='Home-dictionary-button'>외래어 검색</button> 
            </div>
        </>
    );
};

export default Home;
import React from 'react';
import Home from './Components/Home/Home';
// import Header from './Components/Korail/Layout/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaymentPage1 from './Components/Korail/PaymentPage1';
import PaymentPage2 from './Components/Korail/PaymentPage2';
import Main from './Components/Korail/Main';
import SelectLevel from './Components/Korail/SelectLevel';
import DictionaryExplan from './Components/Korail/DictionaryExplan';
import BGMain from './Components/Korail/Beginner/BGMain';
import BGPaymentPage1 from './Components/Korail/Beginner/BGPaymentPage1';
import BGPaymentPage2 from './Components/Korail/Beginner/BGPaymentPage2';
import BGTicketConfirm from './Components/Korail/Beginner/BGTicketConfirm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/SelectLevel' element={<SelectLevel />} />
        <Route path='/Main' element={<Main />} />
        <Route path='/PaymentPage1' element={<PaymentPage1 />} />
        <Route path='/PaymentPage2' element={<PaymentPage2 />} />
        <Route path='/DictionaryExplan' element={<DictionaryExplan />} />

        <Route path='BGMain' element={<BGMain />} />
        <Route path='BGPaymentPage1' element={<BGPaymentPage1 />} />
        <Route path='BGPaymentPage2' element={<BGPaymentPage2 />} />
        <Route path='BGTicketConfirm' element={<BGTicketConfirm />} />
      </Routes>
    </Router>
  );
}

export default App;

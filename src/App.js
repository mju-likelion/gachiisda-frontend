import React from 'react';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//고급
import PaymentPage1 from './Components/Korail/PaymentPage1';
import PaymentPage2 from './Components/Korail/PaymentPage2';
import Main from './Components/Korail/Main';
import SelectLevel from './Components/Korail/SelectLevel';
import CheckSection from './Components/Korail/CheckSection';
import ChooseSectionFirst from './Components/Korail/ChooseSection';
import Completion from './Components/Korail/Completion';
import List from './Components/Korail/List';
import ResultSection from './Components/Korail/ResultSection';
import TicketConfirm from './Components/Korail/TicketConfirm';
import StationSelect from './Components/Korail/StationSelect';
//초급
import BGMain from './Components/Korail/Beginner/BGMain';
import BGPaymentPage1 from './Components/Korail/Beginner/BGPaymentPage1';
import BGPaymentPage2 from './Components/Korail/Beginner/BGPaymentPage2';
import BGTicketConfirm from './Components/Korail/Beginner/BGTicketConfirm';
import BGChooseSectionFirst from './Components/Korail/Beginner/BGChooseSection';
import BGPeopleSection from './Components/Korail/Beginner/BGPeopleSection';
import BGResultSection from './Components/Korail/Beginner/BGResultSection';
import BGStartSection from './Components/Korail/Beginner/BGStartSection';
import BGStationSelect from './Components/Korail/Beginner/BGStationSelect';
import BGList from './Components/Korail/Beginner/BGList';
//사전
import DictMain from './Components/Home/Dictionary/DictMain';
import DictionaryExplan from './Components/Home/Dictionary/DictionaryExplan';

function App() {
  return (
    <Router>
      <Routes>
        {/* 홈화면 */}
        <Route path='/' element={<Home />} />
        <Route path='/SelectLevel' element={<SelectLevel />} />
        <Route path='/Main' element={<Main />} />
        {/* 고급 */}
        <Route path='/CheckSection' element={<CheckSection />} />
        <Route path='/ChooseSectionFirst' element={<ChooseSectionFirst />} />
        <Route path='/Completion' element={<Completion />} />
        <Route path='/List' element={<List />} />
        <Route path='/ResultSection' element={<ResultSection />} />
        <Route path='/PaymentPage1' element={<PaymentPage1 />} />
        <Route path='/PaymentPage2' element={<PaymentPage2 />} />
        <Route path='/TicketConfirm' element={<TicketConfirm />} />
        <Route path='/StationSelect' element={<StationSelect />} />

        {/* 초급 */}
        <Route path='/BGMain' element={<BGMain />} />
        <Route path='/BGList' element={<BGList />} />
        <Route path='/BGPaymentPage1' element={<BGPaymentPage1 />} />
        <Route path='/BGPaymentPage2' element={<BGPaymentPage2 />} />
        <Route path='/BGTicketConfirm' element={<BGTicketConfirm />} />
        <Route
          path='/BGChooseSectionFirst'
          element={<BGChooseSectionFirst />}
        />
        <Route path='/BGPeopleSection' element={<BGPeopleSection />} />
        <Route path='/BGResultSection' element={<BGResultSection />} />
        <Route path='/BGStartSection' element={<BGStartSection />} />
        <Route path='/BGStationSelect' element={<BGStationSelect />} />

        {/* 사전 */}
        <Route path='/DictMain' element={<DictMain />} />
        <Route path='/DictionaryExplan' element={<DictionaryExplan />} />
      </Routes>
    </Router>
  );
}

export default App;

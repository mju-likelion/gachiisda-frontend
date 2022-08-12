import React from 'react';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//고급
import PaymentPage1 from './Components/Korail/PaymentPage1';
import PaymentPage2 from './Components/Korail/PaymentPage2';
import Main from './Components/Korail/Main';
import SelectLevel from './Components/Korail/SelectLevel';
import StationClick from './Components/Korail/StationClick';
import CheckSection from './Components/Korail/CheckSection';
import ChooseSectionFirst from './Components/Korail/ChooseSection';
import Completion from './Components/Korail/Completion';
import List from './Components/Korail/List';
import PeopleSection from './Components/Korail/PeopleSection';
import ResultSection from './Components/Korail/ResultSection';
import StartSection from './Components/Korail/StartSection';
import StationSelect from './Components/Korail/StationSelect';
import TicketConfirm from './Components/Korail/TicketConfirm';

//초급
import BGMain from './Components/Korail/Beginner/BGMain';
import BGPaymentPage1 from './Components/Korail/Beginner/BGPaymentPage1';
import BGPaymentPage2 from './Components/Korail/Beginner/BGPaymentPage2';
import BGTicketConfirm from './Components/Korail/Beginner/BGTicketConfirm';
import BGChooseSectionFirst from './Components/Korail/Beginner/BeginnerChooseSection';
import BGPeopleSection from './Components/Korail/Beginner/BeginnerPeopleSection';
import BGResultSection from './Components/Korail/Beginner/BeginnerResultSection';
import BGStartSection from './Components/Korail/Beginner/BeginnerStartSection';

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
        <Route path='/StationClick' element={<StationClick />} />
        <Route path='/ChooseSectionFirst' element={<ChooseSectionFirst />} />
        <Route path='/Completion' element={<Completion />} />
        <Route path='/List' element={<List />} />
        <Route path='/PeopleSection' element={<PeopleSection />} />
        <Route path='/ResultSection' element={<ResultSection />} />
        <Route path='/StartSection' element={<StartSection />} />
        <Route path='/StationSelect' element={<StationSelect />} />
        <Route path='/PaymentPage1' element={<PaymentPage1 />} />
        <Route path='/PaymentPage2' element={<PaymentPage2 />} />
        <Route path='/TicketConfirm' element={<TicketConfirm />} />

        {/* 초급 */}
        <Route path='/BGMain' element={<BGMain />} />
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

        {/* 사전 */}
        <Route path='/DictMain' element={<DictMain />} />
        <Route path='/DictionaryExplan' element={<DictionaryExplan />} />
      </Routes>
    </Router>
  );
}

export default App;

// import React from 'react';
// import AxiosPrac from './Components/Korail/AxiosPrac';

// function App() {
//   return <AxiosPrac></AxiosPrac>;
// }
// export default App;

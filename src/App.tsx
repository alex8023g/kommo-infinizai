import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      {/* <Header2 /> */}
      {/* <Layout> */}
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='account/:account' element={<AccountPage />} />
          <Route path='atm' element={<AtmPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='currency' element={<CurrencyPage />} />
          <Route path='balance/:account' element={<BalancePage />} /> */}
      </Routes>
      {/* </Layout> */}
    </BrowserRouter>
  );
}

export default App;

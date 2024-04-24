import React from 'react';

import { Route, Routes } from 'react-router-dom';

import './App.css';

import HomePage from './component/pages/homepage/homepage.component';
import ShopPage from './component/pages/shop/shop.component.jsx';
import Header from './component/header/header.component.jsx';

function App() {
  return (
    <div>
      <Header />
        <Routes>
           <Route exact path='/' Component={HomePage} />
           <Route path='/shop' Component={ShopPage} />
        </Routes>
    </div>
  );
}

export default App;

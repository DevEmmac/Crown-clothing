import React from 'react';

import { Route, Routes } from 'react-router-dom';

import './App.css';

import HomePage from './component/pages/homepage/homepage.component';
import ShopPage from './component/pages/shop/shop.component.jsx';

function App() {
  return (
    <Routes>
        <Route exact path='/' Component={HomePage} />
        <Route path='/shop' Component={ShopPage} />
    </Routes>
  );
}

export default App;

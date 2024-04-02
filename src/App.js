import React from 'react';

import { Route, Routes } from 'react-router-dom';

import './App.css';

import HomePage from './component/pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

const ShowsPage = () => (
  <div>
    <h2>Show Room</h2>
  </div>
);

const sneakers = () => (
  <div>
    <h2>sneakers</h2>
  </div>
);

const women = () => (
  <div>
    <h2>Woman wears</h2>
  </div>
);

function App() {
  return (
    <Routes>
        <Route path='/' Component={HomePage}/>
        <Route path='/shop/hats' Component={HatsPage}/> 
        <Route path='/shop/jackets' Component={ShowsPage}/>
        <Route path='/shop/sneakers' Component={sneakers}/>  
        <Route path='/shop/womens' Component={women}/>
    </Routes>
            
  );
}

export default App;

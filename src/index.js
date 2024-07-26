import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
 
import store from './redux/store';

import './index.css';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={ <App />}></Route>
      </Routes>  
    </BrowserRouter>
  </Provider>
);
 
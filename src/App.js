import React from 'react';

import { Route, Routes } from 'react-router-dom';

import './App.css';

import HomePage from './component/pages/homepage/homepage.component';
import ShopPage from './component/pages/shop/shop.component';
import Header from './component/header/header.component';
import SignInAndSignUpPage from './component/pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();  

    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
     auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user});

      console.log(user);
     })
  }


  render() {
    return (
      <div>
        <Header />
          <Routes>
            <Route exact path='/' Component={HomePage} />
            <Route path='/shop' Component={ShopPage} />
            <Route path='/signin' Component={SignInAndSignUpPage} />
          </Routes>
      </div>
    );

  }
}
  
export default App;

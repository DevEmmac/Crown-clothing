import React from 'react';

import { Route, Routes } from 'react-router-dom';

import './App.css';

import HomePage from './component/pages/homepage/homepage.component';
import ShopPage from './component/pages/shop/shop.component';
import Header from './component/header/header.component';
import SignInAndSignUpPage from './component/pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();  

    this.state = {
      currentUser: null
    };
  }

  // Google authentication
  unsubscribeFromAuth  = null;

  componentDidMount() {
     this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data() 
            }
          });
          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth});
     });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
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

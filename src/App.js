import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './component/pages/homepage/homepage.component';
import ShopPage from './component/pages/shop/shop.component';
import Header from './component/header/header.component';
import SignInAndSignUpPage from './component/pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     currentUser: null
  //   };
  // } 

  // Google authentication
  unsubscribeFromAuth  = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
     this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data() 
            });
        });
      }

      setCurrentUser(userAuth);
     });
  }
 
  componentWillUnmount() {
    this.unsubscribeFromAuth();
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

const mapDispatchToProps = dispatch => ({
   setCurrentUser: user => dispatch(setCurrentUser(user))   
});
  
export default connect(null, mapDispatchToProps)(App);
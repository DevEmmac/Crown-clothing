import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './component/pages/homepage/homepage.component';
import ShopPage from './component/pages/shop/shop.component';
import Header from './component/header/header.component';
import SignInAndSignUpPage from './component/pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
// import { current } from '@reduxjs/toolkit' ;

class App extends React.Component {
  unsubscribeFromAuth  = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
     this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
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
              {/* <Route exact path='/signin' render={() => this.props.currentUser ? (<Navigate to='/'/>) : (<SignInAndSignUpPage />)}/> */}
              <Route path='/signin' element={this.props.currentUser ? <Navigate to='/'/> : <SignInAndSignUpPage/>} />
            </Routes>
      </div>
    )
  }
}

 
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
   setCurrentUser: user => dispatch(setCurrentUser(user))   
});
  
export default connect(mapStateToProps,mapDispatchToProps)(App);
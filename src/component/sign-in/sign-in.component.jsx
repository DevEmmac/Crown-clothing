import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom/custom-button.component";

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.style.css';

 class SignIn extends React.Component {
    constructor(props) {  
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
             <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name="email" 
                    type="email" 
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    label='Email'
                    required />

                    <FormInput
                    name="password" 
                    type="password" 
                    value={this.state.password}
                    handleChange={this.handleChange}
                    label='Password'
                    required 
                    />

                    <div className="buttons">
                        <CustomButton type="submit"> Sign In </CustomButton>

                          <div className="google-sign-in"> 
                             <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
                                Sign In with Google
                             </CustomButton>
                           </div>
                    </div>                
                </form>
             </div>
        );
    }
 }

 export default SignIn;

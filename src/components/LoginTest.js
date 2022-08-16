import React, { useState } from 'react';
import history from '../history';

// redux hooks:
import { useSelector, useDispatch } from 'react-redux';
// action:
import { signinUser } from '../actions/signInTest'

function SigninForm(props) {
    const signedinUser = useSelector((state) => {
        return state.user
    })
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const user = {
            email: email,
            password: password
        }

        dispatch(signinUser(user))
        
        setEmail('')
        setPassword('')
        
        history.push("/new")
    }

    return (
        <div className="signin-form">
          <h1>Sign In</h1>
            <form className='form' onSubmit={handleSubmit}>
                <div className="field">
                    <label>Email</label>
                    <input type="email" onChange={handleEmailChange} value={email} />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="password" onChange={handlePasswordChange} value={password} />
                </div>
                <button className="form-button" type="submit" >Log In</button>
            </form>
        </div>
    );
}

export default SigninForm;
import React, { useState } from 'react';
//import history from '../../history';
// redux hooks:
import { useDispatch } from 'react-redux';
// action:
import { actionsTest } from '../actions/actionsTest';

function SignupTest(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()

        const user = {
            name: name,
            email: email,
            password: password
        }

        dispatch(actionsTest(user))
                
        setName('')
        setEmail('')
        setPassword('')
    }

    return (
        <div className="signup-form">
          <h1>Sign Up</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" onChange={handleNameChange} value={name} />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="email" onChange={handleEmailChange} value={email} />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="password" onChange={handlePasswordChange} value={password} />
                </div>
                <button className="form-button" type="submit" >Submit</button>
            </form>
        </div>
    );
}

export default SignupTest;
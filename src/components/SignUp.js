import { connect, useDispatch } from "react-redux";
import { signup } from "../actions/userActions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const userInfo = {
        name: name,
        email: email,
        password: password,
    }

    console.log(userInfo)
    console.log(navigate)

    dispatch(signup(userInfo))
            
    setName('')
    setEmail('')
    setPassword('')

    navigate('/itineraries')
  } 

  return (
    <div className="container">
      <form className="signup-form" onSubmit={handleSubmit}>
      <h1>Sign Up</h1><br/>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleNameChange}
          /><br/>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={email} 
          onChange={handleEmailChange}
        /><br/>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        /><br/>
        <input type='submit' />
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signup: () => dispatch(signup()),
    //deleteItinerary: () => dispatch(deleteItinerary()),

  };
};

export default connect(null, mapDispatchToProps)(SignUp)
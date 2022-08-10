import { Component } from "react"

class RegisterUser extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  }

  handleOnChange(event) {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form>
        <h1>Sign Up</h1><br/>
        <label>Name: </label>
        <input 
          name='name'
          value={this.state.name}
          onChange={(event) => this.handleOnChange(event)}
        /><br/>
        <label>Email: </label>
        <input
          name='email'
          value={this.state.email} 
          onChange={(event) => this.handleOnChange(event)}
        /><br/>
        <label>Password: </label>
        <input
          name='password'
          type='password'
          value={this.state.password}
          onChange={(event) => this.handleOnChange(event)}
        /><br/>
        <input type='submit' />
      </form>
    )
  }
}

export default RegisterUser;
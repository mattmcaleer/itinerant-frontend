export function login() {
  return (dispatch) => {
    dispatch({ type: "LOGIN" });
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user:{
          name: user.name,
          email: user.email,
          password: user.password
        }
      })
    })
      .then(response => response.json())
      .then(user => this.setState({ user }))
  };
}
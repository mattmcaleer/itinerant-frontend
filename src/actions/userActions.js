export function signup(user) {
  console.log(user)
  return (dispatch) => {

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify({
        user
      })
  })
      .then((response) => response.json())
      .then((respJSON) => dispatch({ type: "SIGN_IN", payload: respJSON }));
  }
}
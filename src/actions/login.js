export function login() {
  return (dispatch) => {
    dispatch({ type: "LOGIN" });
    fetch('http://localhost:3000/login')
  };
}
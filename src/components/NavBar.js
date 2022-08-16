import { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <ul className="navbar">
        <li className="navLink"><a href="/new">Add a Trip</a></li>
        <li className="navLink"><a href="/login">Sign In</a></li>
        <li className="navLink"><a href="/register">Sign Up</a></li>
      </ul>
    )
  }
}

export default NavBar;
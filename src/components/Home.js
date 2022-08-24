import React, { Component } from "react";

class Home extends Component {

  render() {
    return (
      <div className="container">
        <div className="home">
          <h1>Itinerant </h1>
          <button>Sign Up</button>
          <p>Or <a href="">Log In</a></p>
        </div>
      </div>
    )
  }
}

export default Home;
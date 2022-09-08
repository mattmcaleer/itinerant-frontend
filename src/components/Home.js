import React, { Component } from "react";

class Home extends Component {
  

  render() {
    console.log(this.props)
    return (
      <div className="container">
        <div className="home">
          <h1>Itinerant</h1>
          {/* <a href="/register"><button>Sign Up</button></a> */}
          <a href="/signup"><button>Sign Up</button></a>
          <p>Or <a href="/signin">Log In</a></p>
        </div>
      </div>
    )
  }
}

export default Home;
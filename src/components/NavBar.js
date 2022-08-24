import { Component } from "react";

class NavBar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-custom">
          <div className="container-fluid">
            <div className="navbar-brand">Itinerant</div>
            <ul className="nav navbar-nav">
              <li><a className="navlink" href="/new">Add Itinerary</a></li>
              <li><a className="navlink" href="/itineraries">All Itineraries</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a className="navlink" href="#">Sign Out</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar;
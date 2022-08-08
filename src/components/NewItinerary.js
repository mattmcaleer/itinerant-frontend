import React, { Component } from "react";

class NewItinerary extends Component {

  state = {
    name: '',
    start_date: ''
  }

  handleOnChange(event) {
    this.setState({
      name: event.target.value,
      //start_date: event.target.value
    })
  }

  handleOnSubmit(event) {
    event.preventDefault();
    //this.props.addItinerary(this.state);
    this.setState({
      name: '',
    })
  }

  render() {
    return (
      <div>
        <form className="new-itinerary-form">
          <input
            type="text"
            placeholder="Trip Name"
            value={this.state.name}
            onChange={(event) => this.handleOnChange(event)} /><br/>
          <input
            type="text"
            placeholder="Start Date"
            value={this.state.start_date}
            onChange={(event) => this.handleOnChange(event)} /><br/>
          <input
            type="text"
            placeholder="End Date" /><br/>
          <input type='submit' />
        </form>,
        <h1>{this.state.name}</h1>
        <h1>{this.state.start_date}</h1>
      </div>
    )
  }
}

export default NewItinerary;
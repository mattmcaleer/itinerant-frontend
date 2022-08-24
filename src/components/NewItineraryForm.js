import React, { Component } from "react";
import { connect } from "react-redux";

class NewItineraryForm extends Component {

  state = {
    name: '',
    start_date: '',
    end_date: ''
  }

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addItinerary(this.state)

    this.setState({
      name: "",
      start_date: "",
      end_date: ""
    })
  }

  render() {
    return (
      <div className="container">
        <form className="new-itinerary-form" onSubmit={(event) => this.handleOnSubmit(event)}>
        <h1>Add Itinerary</h1><br/>
          <input
            type="text"
            placeholder="Trip Name"
            name="name"
            value={this.state.name}
            onChange={(event) => this.handleOnChange(event)} /><br/>
          <input
            type="text"
            placeholder="Start Date"
            name="start_date"
            value={this.state.start_date}
            onChange={(event) => this.handleOnChange(event)} /><br/>
          <input
            type="text"
            placeholder="End Date" 
            name="end_date"
            value={this.state.end_date}
            onChange={(event) => this.handleOnChange(event)} /><br/>
          <input type='submit' />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItinerary: (formData) => dispatch({ type: "ADD_ITINERARY", payload: formData })
  }
}

export default connect(null, mapDispatchToProps)(NewItineraryForm)
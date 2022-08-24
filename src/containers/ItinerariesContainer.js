import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchItineraries } from "../actions/itineraryActions";
import ItinerariesList from "../components/ItinerariesList";

class ItinerariesContainer extends Component {   
  componentDidMount() {
    this.props.fetchItineraries();
  }

  render() {
    console.log(this.props.itineraryPics)
    return (
      <div>
        <h1>Itineraries</h1>
        <ItinerariesList itineraryPics={this.props.itineraryPics} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itineraryPics: state.itinerariesReducer.itineraries,
    loading: state.itinerariesReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItineraries: () => dispatch(fetchItineraries()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItinerariesContainer)
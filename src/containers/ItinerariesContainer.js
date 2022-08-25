import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchItineraries } from "../actions/itineraryActions"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayItinerary from "../components/DisplayItinerary";
import ItinerariesList from "../components/ItinerariesList";

class ItinerariesContainer extends Component {   
  componentDidMount() {
    this.props.fetchItineraries();
  }

  render() {
    console.log(this.props.itineraryPics)
    return (
      <div>
        <Routes>
          <Route path="" element={ <ItinerariesList itineraryPics={this.props.itineraryPics}/> }/>
          <Route path=':id' element={ <DisplayItinerary itineraryPics={this.props.itineraryPics }/> }/>
        </Routes>
        
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
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchItineraries, deleteItinerary } from "../actions/itineraryActions"
import { Routes, Route } from "react-router-dom";
import DisplayItinerary from "../components/DisplayItinerary";
import ItinerariesList from "../components/ItinerariesList";
import NewItineraryForm from "../components/NewItineraryForm";
import EditItineraryForm from "../components/EditItineraryForm";
import AddPlaceForm from "../components/AddPlaceForm";
import placesReducer from "../reducers/placesReducer";
import { fetchPlaces } from "../actions/placeActions";

class ItinerariesContainer extends Component {   
  componentDidMount() {
    this.props.fetchItineraries();
    //this.props.fetchPlaces();
  }

  render() {
    
    return (
      <div>
        <Routes>
          <Route path='' element={ <ItinerariesList itinerariesProps={this.props.itinerariesProps}/> }/>
          <Route path=':id' element={ <DisplayItinerary deleteItinerary={this.props.deleteItinerary} itinerariesProps={this.props.itinerariesProps }/> }/>
          <Route path='new' element={ <NewItineraryForm itinerariesProps={this.props.itinerariesProps}/> }/>
          <Route path='/:id/edit' element={ <EditItineraryForm itinerariesProps={this.props.itinerariesProps}/> } />
          <Route path='/:id/edit/addplace' element={ <AddPlaceForm itinerariesProps={this.props.itinerariesProps} placesProps={this.props.placesProps}/> } />
        </Routes> 
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    itinerariesProps: state.itinerariesReducer.itineraries,
    loading: state.itinerariesReducer.loading,
    placesProps: state.placesReducer.places
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItineraries: () => dispatch(fetchItineraries()),
    deleteItinerary: () => dispatch(deleteItinerary()),
    //fetchPlaces: () => dispatch(fetchPlaces())

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItinerariesContainer)
import React, { Component } from "react";
import Itinerary from "./Itinerary";

class Itineraries extends Component {

  render() {
    const { itineraries, deleteItinerary } = this.props;
    const ItineraryList = itineraries.map(itinerary => {
      return (
        <Itinerary
            key={itinerary.id}
            itinerary={itinerary}
            deleteItinerary={deleteItinerary}
        />
      )
    });

    return(
      <ul>
        {ItineraryList}
      </ul>
    );
  }
};

export default Itineraries;
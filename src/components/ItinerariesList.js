import React, { Component } from "react"
import ItineraryListItem from "./ItineraryListItem";

class ItinerariesList extends Component {

  listOfItineraries = () => {
    return (
      this.props.itineraryPics.map(itin =>
        <ItineraryListItem key={itin.id} name={itin.name} id={itin.id} start_date={itin.start_date} end_date={itin.end_date} />
      )
    )
  }
  
  render() {
    console.log(this.props.itineraryPics)
    return (
      <div>
        <h1>Itineraries</h1><br />
        <div className="itinerary-container">
          {this.listOfItineraries()}
        </div>
      </div>

    )
  }
}

export default ItinerariesList;
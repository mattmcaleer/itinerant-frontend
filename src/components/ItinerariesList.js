import React, { Component } from "react"

class ItinerariesList extends Component {

  listOfItineraries = () => {
    return (
      this.props.itineraryPics.map(c =>
        
        <div key={c.id} className='individual-itinerary'>
          <ol>
            <h2>{c.name}</h2>
            <h3>{c.start_date} - {c.end_date}</h3>
          </ol>
        </div>
      )
    )
  }
  
  render() {
    return (
      <div className="itinerary-container">
        {this.listOfItineraries()}
      </div>
    )
  }
}

export default ItinerariesList;
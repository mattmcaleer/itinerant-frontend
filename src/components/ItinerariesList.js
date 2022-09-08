import React, { Component } from "react"
import ItineraryListItem from "./ItineraryListItem";

class ItinerariesList extends Component {

  constructor(props){
    super(props)
    this.state = {
      list: false
    }
  }
  listOfItineraries = () => {
    let itinList = this.props.itinerariesProps
    //let sortedList = [...itinList].sort((a, b) => a.name - b.name)
    return (
      itinList.map(itin =>
        <ItineraryListItem key={itin.id} name={itin.name} id={itin.id} start_date={itin.start_date} end_date={itin.end_date} />
      )
    )
  }
  
  render() {
    console.log(this.props.itinerariesProps)
    return (
      <div>
        <h1>Upcoming Itineraries</h1><br />
       
        <div className="itinerary-container">
          {this.listOfItineraries()}
        </div>
      </div>

    )
  }
}

export default ItinerariesList;
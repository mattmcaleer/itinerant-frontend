import { Component } from "react";
import NewItineraryForm from "../components/NewItineraryForm";
import { connect } from "react-redux"
import Itineraries from "../components/Itineraries";

class ItinerariesContainer extends Component {

  render() {
    return (
      <div>
        <NewItineraryForm addItinerary={this.props.addItinerary} />
        <Itineraries itineraries={this.props.itineraries} />
      </div>
    )
  }
}

const mapStateToProps = ({ itineraries }) => ({ itineraries })

const mapDispatchToProps = (dispatch) => ({
  addItinerary: itinerary => dispatch({ type: "ADD_ITINERARY", itinerary})
})

export default connect(mapStateToProps, mapDispatchToProps)(ItinerariesContainer)
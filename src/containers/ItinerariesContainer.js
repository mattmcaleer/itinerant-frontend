import { Component } from "react";
import NewItineraryForm from "../components/NewItineraryForm";
import { connect } from "react-redux"
import Itineraries from "../components/Itineraries";

class ItinerariesContainer extends Component {

  render() {
    return (
      <div>
        <NewItineraryForm addItinerary={this.props.addItinerary} />
        <Itineraries
          itineraries={this.props.itineraries}
          deleteItinerary={this.props.deleteItinerary} />
      </div>
    )
  }
}

const mapStateToProps = ( state ) => ({ itineraries: state.itineraries.itineraries })

const mapDispatchToProps = (dispatch) => ({
  addItinerary: text => dispatch({ type: "ADD_ITINERARY", text}),
  deleteItinerary: id => dispatch({ type: "DELETE_ITINERARY", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(ItinerariesContainer)
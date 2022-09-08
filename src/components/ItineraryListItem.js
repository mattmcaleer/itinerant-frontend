import { connect } from "react-redux";

function ItineraryListItem(props) {

    return (
      <div key={props.id} className='individual-itinerary'>
        <a href={`//localhost:3000/itineraries/${props.id}`}>
          <h2>{props.name}</h2>
          <h3>{props.start_date} - {props.end_date}</h3>
        </a>
      </div>
    )

}

export default connect()(ItineraryListItem);
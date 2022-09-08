import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteItinerary } from "../actions/itineraryActions";
import { useState } from "react";
import Modal from "./Modal";
import dateFormat from "dateformat";

function DisplayItinerary(props) {
  const params = useParams();
  const dispatch = useDispatch();
  const [displayModal, setDisplayModal] = useState(false);
  console.log(props)

  const filteredList = () => {
    return (
      props.itinerariesProps.filter(itin => itin.id == params.id)
    )
  }

  const handleDelete = (e) => {
    dispatch(deleteItinerary(params.id));
    setDisplayModal(true)

    const modal = document.querySelector(".modal")
    modal.style.display = "block";
  } 

  const thisItinerary = () => {
    return (
      filteredList().map(itin =>
        <div key={itin.id}>
          <h1>{itin.name}</h1>
          <em><h2>{dateFormat(itin.start_date, "dddd, mmmm dS, yyyy")} - {dateFormat(itin.end_date, "dddd, mmmm dS, yyyy")}</h2></em>
          <span><a href={`${itin.id}/edit`}><button>Edit</button></a></span>
          <span><a href={`${itin.id}/edit/addplace`}><button>Add Place</button></a></span>
          <button onClick={handleDelete}>Delete</button>
          {itin.places.map((p, i) =>
            <div key={p.id}  className='itinerary-details'>
              <em><b><p key={p.departing_airport}>{p.departing_airport}: Flight {p.flight_number}</p></b>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-airplane" viewBox="0 0 16 16">
                <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Zm.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1c-.213 0-.458.158-.678.599Z"/>
              </svg>
              <p>Departing From {p.departure_details} at {p.departure_time != null ? p.departure_time.slice(11, p.departure_time.length - 8) : ""} on {dateFormat(itin.departure_date, "dddd, mmmm dS, yyyy")}</p>
              </em>
              <p>{p.flight_duration} Hours</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
              </svg>
              <em><p>Arriving In</p></em>
              <h2><p>{p.name}</p></h2>
              <p>{p.arrival_airport}</p>
              <em><p> at {p.arrival_time != null ? p.arrival_time.slice(11, p.arrival_time.length - 8) : ""} on {dateFormat(itin.arrival_date, "dddd, mmmm dS, yyyy")}</p></em>
              {/* <p>{p.arrival_details}</p> */}
            </div>
          )}
        </div>
      )
    )
  }

  return ( 
    <div>
      {!displayModal ? 
        <div className='display-itinerary-container'>
          {thisItinerary()}
        </div>
          :
        <Modal />
      }
    </div>
  )
}

export default DisplayItinerary;


import React from "react";
import { connect } from "react-redux";
import {  useDispatch  } from "react-redux";
import { createItinerary } from "../actions/itineraryActions";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createPlace } from "../actions/placeActions";

function AddPlaceForm(props) {

  const params = useParams()
  const [name, setName] = useState('');
  const [flight_number, setFlight_number] = useState('');
  const [departure_date, setDeparture_date] = useState('');
  const navigate = useNavigate();
  const itineraryId = params.id
  console.log(params.id)

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleFlightNumberChange = (e) => {
    setFlight_number(e.target.value)
  }

  const handleDepartureDateChange = (e) => {
    setDeparture_date(e.target.value)
  }

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()

    const place = {
        name: name.toUpperCase(),
        flight_number: flight_number,
        departure_date: departure_date,
        itinerary_id: itineraryId
    }

    dispatch(createPlace(place))
            
    setName('')

    navigate('/itineraries')

  } 

  return (
      <div className="container">
        <form className="new-place-form" onSubmit={handleSubmit}>
        <h1>Add Place</h1><br/>
          <input
            type="text"
            placeholder="Flight Number"
            name="flight_number"
            value={flight_number}
            onChange={handleFlightNumberChange} /><br/>
          <input
            type="text"
            placeholder="Departure Date"
            name="departure_date"
            value={departure_date}
            onChange={handleDepartureDateChange} /><br/>
          <input type='submit' />
        </form>
      </div>
  )
}

export default connect()(AddPlaceForm)
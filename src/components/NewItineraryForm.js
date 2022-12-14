import React from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { createItinerary } from "../actions/itineraryActions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewItineraryForm() {

  const [name, setName] = useState('');
  const [start_date, setStart_date] = useState('');
  const [end_date, setEnd_date] = useState('');
  const [places, setPlaces] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleStartDateChange = (e) => {
    setStart_date(e.target.value)
  }

  const handleEndDateChange = (e) => {
    setEnd_date(e.target.value)
  }

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()

    const itinerary = {
        name: name.toUpperCase(),
        start_date: start_date,
        end_date: end_date,
        places: places
    }

    console.log(itinerary)
    console.log(navigate)

    dispatch(createItinerary(itinerary))
            
    setName('')
    setStart_date('')
    setEnd_date('')

    navigate('/itineraries')

  } 

  return (
      <div className="container">
        <form className="new-itinerary-form" onSubmit={handleSubmit}>
        <h1>Add Itinerary</h1><br/>
          <input
            type="text"
            placeholder="Trip Name"
            name="name"
            value={name}
            onChange={handleNameChange} /><br/>
          <input
            type="text"
            placeholder="Start Date"
            name="start_date"
            value={start_date}
            onChange={handleStartDateChange} /><br/>
          <input
            type="text"
            placeholder="End Date"
            name="end_date"
            value={end_date}
            onChange={handleEndDateChange} /><br/>
          <input type='submit' />
        </form>
      </div>
  )
}

export default connect()(NewItineraryForm)
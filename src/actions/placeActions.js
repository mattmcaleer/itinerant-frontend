export function createPlace({ name, itinerary_id, flight_number, departure_date }) {
  return (dispatch) => {
    dispatch({ type: "LOADING_PLACES" });

    fetch(`http://localhost:5000/itineraries/${itinerary_id}/places`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify({
        name,
        itinerary_id,
        flight_number,
        departure_date
      })
  })
      .then((response) => response.json())
      .then((respJSON) => dispatch({ type: "ADD_PLACES", payload: respJSON }));
  }
}

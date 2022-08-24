export function fetchItineraries() {
  return (dispatch) => {
    dispatch({ type: "LOADING_ITINERARIES" });
    fetch("http://localhost:5000/itineraries")
      .then((response) => response.json())
      .then((respJSON) => dispatch({ type: "ADD_ITINERARIES", payload: respJSON }));
  };
}

export function createItinerary({ name, start_date, end_date }) {
  return (dispatch) => {
    dispatch({ type: "LOADING_ITINERARIES" });

    fetch("http://localhost:5000/itineraries", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify({
        name,
        start_date,
        end_date
      })
  })
      .then((response) => response.json())
      .then((respJSON) => dispatch({ type: "ADD_ITINERARIES", payload: respJSON }));
  }
}


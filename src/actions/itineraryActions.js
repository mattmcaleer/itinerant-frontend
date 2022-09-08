export function fetchItineraries() {
  return (dispatch) => {
    dispatch({ type: "LOADING_ITINERARIES" });
    fetch("http://localhost:5000/itineraries")
      .then((response) => response.json())
      .then((respJSON) => dispatch({ type: "ADD_ITINERARIES", payload: respJSON }));
  };
}

export function createItinerary({ name, start_date, end_date, places }) {
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
        end_date,
        places
      })
  })
      .then((response) => response.json())
      .then((respJSON) => dispatch({ type: "ADD_ITINERARIES", payload: respJSON }));
  }
}

export const deleteItinerary = (id) => {
  return () => {
    fetch(`http://localhost:5000/itineraries/${id}`, {
      method: 'DELETE'
    })
  }
};

export function updateItinerary({ id, name, start_date, end_date, places }) {
  return (dispatch) => {
    dispatch({ type: "LOADING_ITINERARIES" });

    fetch(`http://localhost:5000/itineraries/${id}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify({
        id,
        name,
        start_date,
        end_date,
        places
      })
  })
      .then((response) => response.json())
      .then((respJSON) => dispatch({ type: "UPDATE_ITINERARIES", payload: respJSON }));
  }
}


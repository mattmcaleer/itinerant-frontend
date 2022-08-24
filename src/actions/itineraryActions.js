export function fetchItineraries() {
  return (dispatch) => {
    dispatch({ type: "LOADING_ITINERARIES" });
    fetch("http://localhost:5000/itineraries")
      .then((response) => response.json())
      .then((respJSON) => dispatch({ type: "ADD_ITINERARIES", payload: respJSON }));
  };
}

export function createItinerary() {
  return (dispatch) => {
    dispatch({  });
      fetch()
      .then((response) => response.json())
      .then(() => dispatch({ }));
  }
}


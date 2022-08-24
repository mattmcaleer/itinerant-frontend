const itinerariesReducer = (state = { itineraries: [], loading: false }, action) => {
  switch (action.type) {
    case "LOADING_ITINERARIES":
      return {
        ...state,
        itineraries: [...state.itineraries],
        loading: true,
      };
    case "ADD_ITINERARIES":
      return {
        ...state,
        itineraries: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default itinerariesReducer;
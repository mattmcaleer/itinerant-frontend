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

      case "UPDATE_ITINERARY":
        
        return state.itineraries.map((itinerary) => {
          if (itinerary.id === action.payload.id) {
            console.log(action)
            return {
              ...itinerary,
              ...action.payload,
            };
          } else {
            return itinerary;
          }
        });

    case "DELETE_ITINERARY":
      return {
        ...state,
        itineraries: state.itineraries.filter(({id}) => id !== action.payload.id)
    };

    default:
      return state;
  }
};

export default itinerariesReducer;
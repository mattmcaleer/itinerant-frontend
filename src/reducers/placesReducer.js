const placesReducer = (state = { places: [], loading: false }, action) => {
  switch (action.type) {
    case "LOADING_PLACES":
      return {
        ...state,
        places: [...state.places],
        loading: true,
      };

    case "ADD_PLACES":
      return {
        ...state,
        places: action.payload,
        loading: false,
      };

      case "UPDATE_PLACE":
        
        return state.places.map((place) => {
          if (place.id === action.payload.id) {
            console.log(action)
            return {
              ...place,
              ...action.payload,
            };
          } else {
            return place;
          }
        });

    case "DELETE_PLACE":
      return {
        ...state,
        places: state.places.filter(({id}) => id !== action.payload.id)
    };

    default:
      return state;
  }
};

export default placesReducer;
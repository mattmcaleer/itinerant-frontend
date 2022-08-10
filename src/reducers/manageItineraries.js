export default function manageItineraries(state = {
  itineraries: [],
}, action) {
  switch (action.type) {
    case 'ADD_ITINERARY':
      return {...state, itineraries: [...state.itineraries, action.itinerary]}
    default:
      return state;
  }
};
import cuid from 'cuid';
export const cuidFn = cuid;

export default function itinerariesReducer(state = {
  itineraries: [],
}, action) {
  switch (action.type) {

    case 'ADD_ITINERARY':

      const itinerary = { text: action.text, id: cuid() };
      return {...state, itineraries: [...state.itineraries, itinerary]}

    case 'DELETE_ITINERARY':

      const itineraries = state.itineraries.filter(itinerary => itinerary.id !== action.id);
      return { ...state, itineraries}

    default:
      return state;
  }
};
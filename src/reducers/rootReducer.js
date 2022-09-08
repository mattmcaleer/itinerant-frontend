import { combineReducers } from "redux";
import itinerariesReducer from "./itinerariesReducer";
import placesReducer from "./placesReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  itinerariesReducer,
  placesReducer,
  usersReducer
});

export default rootReducer;
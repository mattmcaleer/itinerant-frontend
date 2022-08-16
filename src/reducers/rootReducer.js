import { combineReducers } from "redux";
import userReducer from "./userReducer";
import itinerariesReducer from "./itinerariesReducer";

const rootReducer = combineReducers({
  itineraries: itinerariesReducer,
  userReducer: userReducer
});

export default rootReducer;
import { combineReducers } from "redux";
import userReducer from "./userReducer";
import itinerariesReducer from "./itinerariesReducer";

const rootReducer = combineReducers({
  userReducer,
  itinerariesReducer
});

export default rootReducer;
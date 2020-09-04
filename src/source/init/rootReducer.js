// Core
import { combineReducer } from "redux";

// Reducers
import { weatherReducer as weather } from "../bus/weather/reducer";

// Root Reducer
export const rootReducer = combineReducer({
  weather,
});

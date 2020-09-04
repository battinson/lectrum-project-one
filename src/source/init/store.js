// Core
import { createStore, applyMiddleware } from "redux";
// Root Reducer
import { rootReducer } from "./rootReducer";
// Middleware
import { composeEnchancers, middleware } from "./middleware";
// Store
export const store = createStore(
  rootReducer,
  composeEnchancers(applyMiddleware(...middleware))
);

// Core
import React from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

// History
import { history } from "../navigation/history";

// Store
import { store } from "../init/store";

// Pages
import { Weather } from "../bus/weather";

// Routes
export const Routes = () => (
  <Provider store={store}>
    <Router history={history}>
      <Weather />
    </Router>
  </Provider>
);

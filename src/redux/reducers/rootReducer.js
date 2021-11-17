import { combineReducers } from "redux";

import getCountriesReducer from "./getCountriesReducer";

const rootReducer = combineReducers({
  getCountries: getCountriesReducer,
});

export default rootReducer;

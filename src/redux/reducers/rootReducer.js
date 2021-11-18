import { combineReducers } from "redux";

import getCountriesReducer from "./getCountriesReducer";
import getCountryDetailReducer from "./getCountryDetailReducer";

const rootReducer = combineReducers({
  getCountries: getCountriesReducer,
  getCountryDetail: getCountryDetailReducer,
});

export default rootReducer;

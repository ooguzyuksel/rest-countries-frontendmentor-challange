import * as types from "../actionTypes/actionTypes";

const initialState = {
  countries: [],
  loading: false,
  error: null,
};

const getCountriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_COUNTRIES_PENDING:
      return {
        ...state,
        loading: true,
      };

    case types.GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        loading: false,
        countries: action.payload,
      };
    case types.GET_COUNTRIES_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getCountriesReducer;

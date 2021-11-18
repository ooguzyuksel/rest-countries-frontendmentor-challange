import * as types from "../actionTypes/actionTypes";

const initialState = {
  countryDetail: {},
  loading: false,
  error: false,
};

const getCountryDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_COUNTRY_DETAIL_PENDING:
      return {
        ...state,
        loading: true,
      };
    case types.GET_COUNTRY_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        countryDetail: action.payload,
      };
    case types.GET_COUNTRY_DETAIL_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default getCountryDetailReducer;

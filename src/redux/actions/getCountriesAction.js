import axios from "axios";
import * as types from "../actionTypes/actionTypes";

const getCountriesPending = () => ({
  type: types.GET_COUNTRIES_PENDING,
});

const getCountriesSuccess = (data) => ({
  type: types.GET_COUNTRIES_SUCCESS,
  payload: data,
});

const getCountriesFail = (err) => ({
  type: types.GET_COUNTRIES_SUCCESS,
  payload: err,
});

export const getCountries = () => async (dispatch) => {
  dispatch(getCountriesPending());
  return axios
    .get("https://restcountries.com/v2/all")
    .then((data) => dispatch(getCountriesSuccess(data.data)))
    .catch((err) => dispatch(getCountriesFail(err)));
};

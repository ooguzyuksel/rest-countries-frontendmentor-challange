import axios from "axios";
import * as types from "../actionTypes/actionTypes";

const getCountryDetailPending = () => ({
  type: types.GET_COUNTRY_DETAIL_PENDING,
});

const getCountryDetailSuccess = (data) => ({
  type: types.GET_COUNTRY_DETAIL_SUCCESS,
  payload: data,
});

const getCountryDetailFail = (error) => ({
  type: types.GET_COUNTRY_DETAIL_FAIL,
  payload: error,
});

export const getCountryDetail = (country) => async (dispatch) => {
  dispatch(getCountryDetailPending());
  return axios
    .get(
      `https://restcountries.com/v3.1/alpha/${country}`
    )
    .then((data) => dispatch(getCountryDetailSuccess(data.data[0])))
    .catch((err) => dispatch(getCountryDetailFail(err)));
};

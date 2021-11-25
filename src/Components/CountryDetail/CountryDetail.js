/* eslint-disable react-hooks/exhaustive-deps */
import "./countrydetail.scss";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountryDetail } from "../../redux/actions/getCountryDetailAction";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";

function CountryDetail() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [modalController, setModalController] = useState(false);
  const countryDetail = useSelector(
    (state) => state?.getCountryDetail?.countryDetail
  );
  const currency =
    countryDetail?.currencies && Object.entries(countryDetail?.currencies);
  const languages =
    countryDetail?.languages && Object.entries(countryDetail?.languages);
  const lat = countryDetail?.latlng && countryDetail?.latlng[0];
  const long = countryDetail?.latlng && countryDetail?.latlng[1];

  useEffect(() => {
    dispatch(getCountryDetail(localStorage.getItem("selectedCountry")));
  }, []);

  // Functions
  const borderCountryClickHandler = (borderCountry) => {
    localStorage.setItem("selectedCountry", borderCountry);
    dispatch(getCountryDetail(localStorage.getItem("selectedCountry")));
  };

  const goBackHandler = () => {
    navigate(-1);
  };

  return (
    <div className="country-detail-wrapper">
      <div className="country-detail-container">
        <div className="back-button">
          <button onClick={goBackHandler}>
            <i className="fas fa-long-arrow-alt-left"></i>
            <span>Back</span>
          </button>

          <button>
            <i className="fas fa-map-marked-alt"></i>
            <span onClick={() => setModalController(true)}>Go To Map</span>
          </button>
        </div>

        <div className="country-info-wrapper">
          {/* Flag */}
          <div className="country-info-image">
            <img
              className="country-flag"
              src={countryDetail?.flags?.png}
              alt={countryDetail?.name?.common}
            />
          </div>

          {/* Info */}
          <div className="country-info-container">
            <div>
              {/* Country Name Div */}
              <h2>
                <b>{countryDetail?.name?.common}</b>
              </h2>
            </div>
            <div className="middle-info-container">
              {/* Left Info Div */}
              <div className="left-country-info-div">
                <span>
                  <b>Native Name: </b>
                  {countryDetail?.altSpellings &&
                    countryDetail?.altSpellings[
                      countryDetail?.altSpellings?.length - 1
                    ]}
                </span>
                <span>
                  <b>Population: </b>
                  {countryDetail?.population?.toLocaleString()}
                </span>
                <span>
                  <b>Region: </b>
                  {countryDetail?.region}
                </span>
                <span>
                  <b>Sub Region: </b>
                  {countryDetail?.subregion}
                </span>
                <span>
                  <b>Capital: </b>
                  {countryDetail?.capital}
                </span>
              </div>

              {/* Right Info Div */}
              <div className="right-country-info-div">
                <span>
                  <b>Top Level Domain: </b>
                  {countryDetail?.tld?.[0]}
                </span>
                <span>
                  <b>Currencies: </b>
                  {currency?.map((i) => i[0])}
                </span>
                <span>
                  <b>Languages: </b>
                  {languages?.map((language, index) => (
                    <span key={index}>{language[1]} , </span>
                  ))}
                </span>
              </div>
            </div>
            <div className="border-div">
              <span>
                <b>Border Countries:</b>
              </span>
              <div className="border-countries">
                {countryDetail?.borders &&
                  countryDetail?.borders?.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => borderCountryClickHandler(item)}
                    >
                      {item}
                    </button>
                  ))}
                {!countryDetail?.borders && (
                  <span>This country has no borders to another country.</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Controlling Section */}
      {modalController && (
        <Modal setModalController={setModalController} lat={lat} long={long} />
      )}
    </div>
  );
}

export default CountryDetail;

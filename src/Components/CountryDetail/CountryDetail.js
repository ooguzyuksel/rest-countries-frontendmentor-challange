/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./countrydetail.scss";

function CountryDetail() {
  const selectedCountryFromDB = localStorage.getItem("selectedCountry");
  const [countryDetail, setCountryDetail] = useState("");
  const currency =
    countryDetail?.currencies && Object.entries(countryDetail?.currencies);
  const languages =
    countryDetail?.languages && Object.entries(countryDetail?.languages);
  const borders =
    countryDetail?.borders && countryDetail?.borders?.map((item) => item);

  useEffect(() => {
    getCountryDetail(selectedCountryFromDB);
  }, []);

  const getCountryDetail = async (countryCode) =>
    await axios
      .get(`https://restcountries.com/v3.1/alpha/${countryCode}`)
      .then((response) => setCountryDetail(response.data[0]))
      .catch((err) => console.log(err));

  console.log(borders);

  return (
    <div className="country-detail-wrapper">
      <div className="country-detail-container">
        <div className="back-button">
          <button>Back</button>
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
                    <button key={index}>{item}</button>
                  ))}
                {!countryDetail?.borders && (
                  <span>This country has no borders to another country.</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;

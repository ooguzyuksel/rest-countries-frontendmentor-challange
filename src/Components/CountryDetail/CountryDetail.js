/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./countrydetail.scss";

function CountryDetail() {
  const selectedCountryFromDB = localStorage.getItem("selectedCountry");
  const [countryDetail, setCountryDetail] = useState("");

  useEffect(() => {
    getCountryDetail();
  }, [selectedCountryFromDB]);

  const getCountryDetail = async () =>
    await axios
      .get(`https://restcountries.com/v3.1/alpha/${selectedCountryFromDB}`)
      .then((response) => setCountryDetail(response.data[0]))
      .catch((err) => console.log(err));

  console.log("Detay Sayfası: ", countryDetail);
  return (
    <div className="country-detail-wrapper">
      <div className="country-detail-container">
        <div className="back-button">
          <button>Back</button>
        </div>

        <div className="country-info-wrapper">
          {/* Flag */}
          <div>
            <img
              src={countryDetail?.flags?.png}
              alt={countryDetail?.name?.common}
            />
          </div>

          {/* Info */}
          <div>
            <div>
              <span>
                <b>{countryDetail?.name?.common}</b>
              </span>
            </div>
            <div>
              <div>left Info</div>
              <div>Right Info</div>
            </div>
            <div>
              <span>Border Countries:</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;

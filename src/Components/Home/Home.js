import React, { useEffect, useState } from "react";
import "./home.scss";
import axios from "axios";

function Home() {
  const [countries, setCountries] = useState();
  const [error, setError] = useState();

  const getCountries = async () =>
    await axios
      .get("https://restcountries.com/v2/all")
      .then((response) => setCountries(response.data))
      .catch((err) => setError(err));

  useEffect(() => {
    getCountries();
  }, []);

  error && console.log("ERROR from API:", error);
  !error && console.log("DATA from API:", countries);

  return (
    <div className="homepage-wrapper">
      {/* Top Input Side */}
      <div className="homepage-wrapper-form-area">
        <div className="form-input-area">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search for coutry..." />
        </div>

        <div>
          <select name="countries" id="countries" className="countries">
            {/* <option value="Filter by Region" selected disabled>
              Filter by Region
            </option> */}
            {countries?.map((country) => {
              let uniqueRegions = country.region;

              return <option value={country.region}>{country.region}</option>;
            })}
          </select>
        </div>
      </div>
      {/* Bottom Country Flag Side */}
      <div className="homepage-wrapper-card-area">
        {countries?.map((country) => (
          <div className="homepage-card-item" key={country.name}>
            <img src={country.flag} alt="test" className="country-flag" />
            <div className="card-info">
              <b>{country.name}</b>
              <small>
                <b>Pupolation: </b> {country.population.toLocaleString()}
              </small>
              <small>
                <b>Region: </b>
                {country.region}
              </small>
              <small>
                <b>Capital: </b>
                {country.capital}
              </small>
            </div>
          </div>
        ))}
      </div>
      {/* TEST */}
    </div>
  );
}

export default Home;

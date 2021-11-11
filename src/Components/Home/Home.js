import React, { useEffect, useState } from "react";
import "./home.scss";
import axios from "axios";

function Home() {
  const [countries, setCountries] = useState();
  const [error, setError] = useState();
  const [searchCountry, setSearchCountry] = useState("");

  const getCountries = async () =>
    await axios
      .get("https://restcountries.com/v2/all")
      .then((response) => setCountries(response.data))
      .catch((err) => setError(err));

  useEffect(() => {
    getCountries();
  }, []);

  // Copy Unique Region Names List for Dropdown List
  const uniqueRegions = [
    ...new Set(countries?.map((country) => country.region)),
  ];

  // Functions
  const onChangeHandler = (e) => {
    setSearchCountry(e.target.value);
  };

  error && console.log("ERROR from API:", error);

  console.log(searchCountry);
  return (
    <div className="homepage-wrapper">
      {/* Top Input Side */}
      <div className="homepage-wrapper-form-area">
        <div className="form-input-area">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Search for coutry..."
            onChange={onChangeHandler}
          />
        </div>

        <div>
          <select name="countries" id="countries" className="countries">
            {/* <option value="Filter by Region" selected disabled>
              Filter by Region
            </option> */}
            {uniqueRegions?.map((region) => {
              return (
                <option key={region} value={region}>
                  {region}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      {/* Bottom Country Flag Side */}
      <div className="homepage-wrapper-card-area">
        {countries
          // eslint-disable-next-line array-callback-return
          ?.filter((filteredData) => {
            if (searchCountry === "") {
              return filteredData;
            } else if (
              filteredData.name
                .toLowerCase()
                .includes(searchCountry.toLowerCase())
            ) {
              return filteredData;
            }
          })
          .map((country) => (
            <div
              className="homepage-card-item"
              key={`${country.name}${country.area}`}
            >
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

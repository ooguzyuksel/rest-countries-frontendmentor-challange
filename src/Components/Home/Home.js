/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./home.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions/getCountriesAction";

function Home() {
  const [searchCountry, setSearchCountry] = useState("");
  const [loadedItem, setLoadedItem] = useState(50);
  const countries = useSelector((state) => state.getCountries.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  // Copy Unique Region Names List for Dropdown List
  const uniqueRegions = [
    ...new Set(countries?.map((country) => country.region)),
  ];

  // Functions
  const onChangeHandler = (e) => {
    setSearchCountry(e.target.value);
  };

  const countryDetailHandler = (countryName) => {
    localStorage.setItem("selectedCountry", countryName);
  };

  const loadMoreHandler = (incrementNumber) => {
    setLoadedItem(loadedItem + incrementNumber);
  };

  return (
    <>
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
            <select
              name="countries"
              id="countries"
              className="countries"
              onChange={onChangeHandler}
              defaultValue={"Filter by Region"}
            >
              <option value="Filter by Region" disabled>
                Filter by Region
              </option>
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
              } else if (
                filteredData.region
                  .toLowerCase()
                  .includes(searchCountry.toLowerCase())
              ) {
                return filteredData;
              }
            })
            .map((country) => (
              <Link
                className="homepage-card-item"
                key={`${country.name}${country.area}`}
                onClick={() => countryDetailHandler(country.alpha3Code)}
                to="/countrydetail/"
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
              </Link>
            ))}
        </div>
        {/* LOAD MORE SECTION */}
        {loadedItem < 250 && (
          <div className="load-more-wrapper">
            <button onClick={() => loadMoreHandler(50)}>LOAD MORE</button>
            <button onClick={() => loadMoreHandler(250)}>
              LOAD ALL COUNTRIES
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;

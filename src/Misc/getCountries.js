import axios from "axios";

const url = "https://restcountries.com/v2/all";

export const getCountries = async () =>
  await axios
    .get(url)
    .then((response) => response.data)
    .catch((err) => console.log("Error:", err));

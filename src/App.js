import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import CountryDetail from "./Components/CountryDetail/CountryDetail";

function App() {
  return (
    <>
      <Navbar />

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/countrydetail/" element={<CountryDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

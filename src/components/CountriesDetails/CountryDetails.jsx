
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LineChart from "../LineChart";
import { useNavigate } from "react-router-dom";
function CountryDetails() {
  const { countriesId } = useParams();
  const [country, setCountry] = useState(null);
  const navigate =useNavigate('/');

  useEffect(() => {
    async function fetchCountryById() {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${countriesId}`
      );
      const data = await response.json();
      setCountry(data[0]); 
    }

    fetchCountryById();
  }, [countriesId]);

  if (!country) {
    return <div>Yuklanmoqda...</div>;
  }

  return (
    <div>
      
      <div className="grid grid-cols-2">
        <div className="container mx-auto p-4 col-span-1 ">
          <h2 className="text-2xl font-bold mb-4">{country.name.common}</h2>
          <img
            className="pl-32"
            src={country.flags.png}
            alt={`${country.name.common} bayrog'i`}
          />
          <p>Aholisi: {country.population.toLocaleString()}</p>
          <p>
            Poytaxti: {country.capital ? country.capital[0] : "Poytaxt yo'q"}
          </p>
        </div>
        <div className="col-span-1">
          <LineChart />
        </div>
      </div>
      <button className="border p-4 rounded-md bg-blue-700 mt-6" onClick={() => navigate("/")}>homega qaytish</button>
    </div>
  );
}

export default CountryDetails;

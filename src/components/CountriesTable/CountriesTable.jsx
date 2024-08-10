


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "flowbite-react";
import { IoEyeOutline } from "react-icons/io5";
import Countries from "../carousel";
import { DrawerComponent } from "../DrawerComponent";

function CountriesTable() {
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedCountries, setSelectedCountries] = useState(() => {
    const savedCountries = localStorage.getItem("selectedCountries");
    return savedCountries ? JSON.parse(savedCountries) : [];
  });

  const countriesPerPage = 10;

  const onPageChange = (page) => setCurrentPage(page);

  useEffect(() => {
    async function fetchCountries() {
      const response = await fetch(`https://restcountries.com/v3.1/all`);
      const data = await response.json();
      setCountries(data);
    }
    fetchCountries();
  }, []);

  const handleDrawerToggle = (country) => {
    const isSelected = selectedCountries.some(
      (selectedCountry) => selectedCountry.cca3 === country.cca3
    );

    if (isSelected) {
      const updatedCountries = selectedCountries.filter(
        (selectedCountry) => selectedCountry.cca3 !== country.cca3
      );
      setSelectedCountries(updatedCountries);
      if (updatedCountries.length === 0) {
        setIsDrawerOpen(false);
      }
    } else {
      setSelectedCountries([...selectedCountries, country]);
      setIsDrawerOpen(true);
    }
    localStorage.setItem(
      "selectedCountries",
      JSON.stringify([...selectedCountries, country])
    );
  };

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  return (
    <div className="container mx-auto p-4">
      <Countries />
      <h1 className="text-2xl font-bold mb-4">Davlatlar ro'yhati</h1>
      <table className="table-auto w-full border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Davlat Nomi</th>
            <th className="border border-gray-300 px-4 py-2">Bayroq</th>
            <th className="border border-gray-300 px-4 py-2">Aholisi</th>
            <th className="border border-gray-300 px-4 py-2">Poytaxti</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentCountries.map((country) => (
            <tr key={country.cca3}>
              <td className="border border-gray-300 px-4 py-2">
                <Link to={`/country/${country.cca3}`}>
                  {country.name.common}
                </Link>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <img
                  src={country.flags.png}
                  alt={`${country.name.common} bayrog'i`}
                  className="w-10 h-auto"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {country.population.toLocaleString()}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {country.capital[0]}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  onClick={() => handleDrawerToggle(country)}
                  className={
                    selectedCountries.some(
                      (selectedCountry) => selectedCountry.cca3 === country.cca3
                    )
                      ? "text-green-500"
                      : ""
                  }
                >
                  <IoEyeOutline />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(countries.length / countriesPerPage)}
          onPageChange={onPageChange}
          showIcons
        />
      </div>
      {isDrawerOpen && (
        <DrawerComponent
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          selectedCountries={selectedCountries}
        />
      )}
    </div>
  );
}

export default CountriesTable;


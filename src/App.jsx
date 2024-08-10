import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CountryDetails from './components/CountriesDetails/CountryDetails'
import CountriesTable from './components/CountriesTable/CountriesTable'
import { DrawerComponent } from './components/DrawerComponent'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
function App() {

 const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div>
      <Router>
        <header className="flex justify-between bg-[#0891b2] py-5 px-2">
          <NavLink to="/">
            <h1 className="font-bold text-2xl">Logo</h1>
          </NavLink>
          <button className="boreder p-2 bg-blue-400 rounded-md">
            tanlanganlar
          </button>{" "}
          {isDrawerOpen && (
            <DrawerComponent
              isOpen={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
              selectedCountries={selectedCountries}
            />
          )}
        </header>

        <Routes>
          <Route path="/" element={<CountriesTable />} />

          <Route path="/country/:countriesId" element={<CountryDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App


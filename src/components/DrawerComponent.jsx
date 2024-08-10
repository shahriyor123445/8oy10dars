

import { Drawer } from "flowbite-react";
import React from "react";


export function DrawerComponent({ isOpen, onClose, selectedCountries }) {
  return (
    
      <Drawer open={isOpen} onClose={onClose} position="right">
        <Drawer.Header title="Selected Countries" />
        <Drawer.Items>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {selectedCountries.map((country) => (
              <div key={country.cca3} className="text-center">
                <img
                  src={country.flags.png}
                  alt={`${country.name.common} bayrog'i`}
                  className="w-32 h-auto mx-auto"
                />
                <p className="mt-2">{country.name.common}</p>
              </div>
            ))}
          </div>
        </Drawer.Items>
      </Drawer>
    
  );
}


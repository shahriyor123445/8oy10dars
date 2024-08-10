import React from "react";
import { Carousel } from "flowbite-react";

function Countries() {
  return (
    <div>
      <h1>Davlatlar ro'yhati</h1>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <div className="flex w-[960px] gap-4">
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              alt="Slayd 1"
              className="w-[240px]"
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
              alt="Slayd 2"
              className="w-[240px]"
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
              alt="Slayd 3"
              className="w-[240px]"
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
              alt="Slayd 4"
              className="w-[240px]"
            />
          </div>
          <div >
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
              alt="Slayd 4"
              className="w-full"
            />
          </div>
          
        </Carousel>
      </div>
    </div>
  );
}

export default Countries;

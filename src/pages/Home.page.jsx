import React from "react";

// Components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import Premiere from "../components/Premiere/Premiere.component";

// Configs
import TempPoster from "../config/TempPosters.config";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-grey-800 my-3">
            The Best of Entertainent
          </h1>
          <EntertainmentCardSlider />
        </div>

        <div className="bg-bms-800 py-12 ">
          <div className="container mx-auto px-4 flex flex-col gap-3">
            <div className="hidden md:flex">
              <img
                src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                alt="Premiere"
                className="w-full h-full"
              />
            </div>
            <PosterSlider
              images={TempPoster}
              title="Premieres"
              subtitle="Brand new releases every Friday"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

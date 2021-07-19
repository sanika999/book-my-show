import React from "react";

// Components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import Premiere from "../components/Premiere/Premiere.component";



const HomePage = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-grey-800 my-3">The Best of Entertainent</h1>
        <EntertainmentCardSlider />
        <Premiere />
      </div>
    </>
  );
};

export default HomePage;

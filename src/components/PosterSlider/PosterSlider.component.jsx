import React from "react";
import Slider from "react-slick";

// Components
import Poster from "../Poster/poster.component";

// Configs
import PosterCarousalSettings from "../../config/PosterCarousal.config";

const PosterSlider = (props) => {
  return (
    <>
      <div className="flex flex-col items-start">
        <h3 className="text-white text-2xl font-bold">{props.title}</h3>
        <p className="text-white text-sm">{props.subtitle}</p>
      </div>
      <Slider {...PosterCarousalSettings}>
        {props.images.map((image) => (
          <Poster {...image} isDark />
        ))}
      </Slider>
    </>
  );
};

export default PosterSlider;

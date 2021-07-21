import React from "react";
import Slider from "react-slick";

// Components
import Poster from "../Poster/poster.component";

// Configs
import PosterCarousalSettings from "../../config/PosterCarousal.config";

const PosterSlider = (props) => {
  return (
    <>
      <div className="flex flex-col items-start my-2">
        <h3
          className={` text-2xl font-bold ${
            props.isDark ? "test-white" : "text-gray-800"
          }`}
        >
          {props.title}
        </h3>
        <p
          className={` text-sm ${
            props.isDark ? "test-white" : "text-gray-800"
          }`}
        >
          {props.subtitle}
        </p>
      </div>
      <Slider {...PosterCarousalSettings}>
        {props.images.map((image) => (
          <Poster {...image} isDark={props.isDark} />
        ))}
      </Slider>
    </>
  );
};

export default PosterSlider;

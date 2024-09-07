import React from "react";
import "../css/banner.css";
const Banner = () => {
  return (
    <div>
      <div className="banner-container">
        <div className="banner-content">
          <h1 className="banner-name">
            Inkspire<span className="hub">Hub</span>
          </h1>
          <p className="banner-tagline">Where every Blog paints a picture!</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
import PropTypes from "prop-types";
import React from "react";
import "./SpacecraftCard.css";

const imageStyle = {
  width: "500px",
};

export default function SpacecraftCard({ imgSrc, name, inUse, description }) {
  return (
    <div className="cardSpace">
      <img style={imageStyle} src={imgSrc} alt="ImageSpaceCraft" />
      <div className="info-container">
        <div className="info-header">
          <h3>{name}</h3>
          <h4>{inUse}</h4>
        </div>
        <div className="info-body">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

SpacecraftCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  inUse: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

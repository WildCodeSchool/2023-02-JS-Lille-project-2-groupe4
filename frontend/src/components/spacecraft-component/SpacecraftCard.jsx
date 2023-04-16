import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./SpacecraftCard.css";

const imageStyle = {
  width: "500px",
};

export default function SpacecraftCard({ imgSrc, name, inUse, description }) {
  const url = `https://ll.thespacedevs.com/2.2.0/spacecraft/`;

  const [spaceIndex, setSpaceIndex] = useState(0);
  const [spaceData, setSpaceData] = useState({});
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: "Token 87af67c54abc7fe84a7e97b181686474262f3da5",
        },
      })
      .then((response) => {
        setSpaceData(response.data);
      });
  }, []);

  const nextSpacecraft = () => {
    setSpaceIndex(
      spaceIndex === spaceData.results.length - 1
        ? 0
        : (nextIndex) => nextIndex + 1
    );
  };

  const prevSpacecraft = () => {
    setSpaceIndex(
      spaceIndex === 0
        ? spaceData.results.length - 1
        : (preIndex) => preIndex - 1
    );
  };
  return (
    <div className="cardSpace">
      <img style={imageStyle} src={imgSrc} alt="ImageSpaceCraft" />
      <div className="info-container">
        <div className="info-header">
          <h3>{name}</h3>
          <h4>{inUse ? "active" : "in-active"}</h4>
        </div>
        <div className="info-body">
          <p>{description}</p>
        </div>
        <div>
          <button type="button" onClick={prevSpacecraft}>
            {" "}
            Preview
          </button>
          <button type="button" onClick={nextSpacecraft}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

SpacecraftCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  inUse: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
};

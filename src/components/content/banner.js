import React from "react";

function Banner(props) {
  return (
    <div className="banner">
      <div className="banner__name">{props.name}</div>
      <div className="banner__view">{props.dimension}</div>
    </div>
  );
}

export default Banner;

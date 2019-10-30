import React from "react";

function Banner(props) {
  return (
    <div
      className="banner"
      style={
        props.display === 1 ? { backgroundColor: "rgba(0, 0, 0, .2)" } : null
      }
    >
      <div className="banner__name">{props.name}</div>
      <div className="banner__view">{props.size}</div>
    </div>
  );
}

export default Banner;

import React from "react";
import Device from "../../content/Device";
import iphoneDetailsLandscape from "../../../util/landscape/iphone";

function IphoneLandscape(props) {
  return (
    <div className="phones">
      <div className="phones__container">
        <Device details={iphoneDetailsLandscape} url={props.url} />
      </div>
    </div>
  );
}

export default IphoneLandscape;

import React from "react";
import Device from "../../content/Device";
import androidDetailsLandscape from "../../../util/landscape/android";

function AndroidLandscape(props) {
  return (
    <div className="phones">
      <div className="phones__container">
        <Device details={androidDetailsLandscape} url={props.url} />
      </div>
    </div>
  );
}

export default AndroidLandscape;

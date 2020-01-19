import React from "react";
import Device from "../../content/Device";
import windowsDetailsLandscape from "../../../util/landscape/windows";

function WindowsLandscape(props) {
  return (
    <div className="phones">
      <div className="phones__container">
        <Device details={windowsDetailsLandscape} url={props.url} />
      </div>
    </div>
  );
}

export default WindowsLandscape;

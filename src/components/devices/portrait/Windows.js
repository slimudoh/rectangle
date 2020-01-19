import React from "react";
import Device from "../../content/Device";
import windowsDetailsPortrait from "../../../util/portrait/windows";

function WindowsPortrait(props) {
  return (
    <div className="phones">
      <div className="phones__container">
        <Device details={windowsDetailsPortrait} url={props.url} />
      </div>
    </div>
  );
}

export default WindowsPortrait;

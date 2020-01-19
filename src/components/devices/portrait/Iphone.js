import React from "react";
import Device from "../../content/Device";
import iphoneDetailsPortrait from "../../../util/portrait/iphone";

function IphonePortrait(props) {
  return (
    <div className="phones">
      <div className="phones__container">
        <Device details={iphoneDetailsPortrait} url={props.url} />
      </div>
    </div>
  );
}

export default IphonePortrait;

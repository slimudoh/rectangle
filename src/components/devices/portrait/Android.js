import React from "react";
import Device from "../../content/Device";
import androidDetailsPortrait from "../../../util/portrait/android";

function AndroidPortrait(props) {
  return (
    <div className="phones">
      <div className="phones__container">
        <Device details={androidDetailsPortrait} url={props.url} />
      </div>
    </div>
  );
}

export default AndroidPortrait;

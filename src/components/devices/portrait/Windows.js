import React from "react";
import Device from "../../content/Device";
import windowsDetailsPortrait from "../../../util/portrait/windows";

function WindowsPortrait(props) {
  return (
    <div className="phones">
      <div className="phones__container">
        {windowsDetailsPortrait.map((item, index) => (
          <Device
            dimensions={item.dimensions}
            name={item.name}
            size={item.size}
            key={index}
            url={props.url}
          />
        ))}
      </div>
    </div>
  );
}

export default WindowsPortrait;

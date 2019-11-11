import React from "react";
import Device from "../../content/Device";
import windowsDetailsLandscape from "../../../util/landscape/windows";

function WindowsLandscape(props) {
  return (
    <div className="phones">
      <div className="phones__container">
        {windowsDetailsLandscape.map((item, index) => (
          <Device
            dimensions={item.dimensions}
            name={item.name}
            size={item.size}
            key={index}
            index={index}
            url={props.url}
          />
        ))}
      </div>
    </div>
  );
}

export default WindowsLandscape;

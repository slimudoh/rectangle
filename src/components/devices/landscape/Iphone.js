import React from "react";
import Device from "../../content/Device";
import iphoneDetailsLandscape from "../../../util/landscape/iphone";

function IphoneLandscape(props) {
  return (
    <div className="phones">
      <div className="phones__container">
        {iphoneDetailsLandscape.map((item, index) => (
          <Device
            dimensions={item.dimensions}
            orientation={item.orientation}
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

export default IphoneLandscape;

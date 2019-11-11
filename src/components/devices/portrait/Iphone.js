import React from "react";
import Device from "../../content/Device";
import iphoneDetailsPortrait from "../../../util/portrait/iphone";

function IphonePortrait(props) {
  return (
    <div className="phones">
      <div className="phones__container">
        {iphoneDetailsPortrait.map((item, index) => (
          <Device
            dimensions={item.dimensions}
            orientation={item.orientation}
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

export default IphonePortrait;

import React from "react";
import Device from "../../content/Device";
import androidDetailsPortrait from "../../../util/portrait/android";

function AndroidPortrait(props) {
  return (
    <div className="phones">
      <div className="phones__container">
        {androidDetailsPortrait.map((item, index) => (
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

export default AndroidPortrait;

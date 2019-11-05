import React from "react";
import Device from "../content/Device";
import androidDetails from "../../util/android";

function Android() {
  return (
    <div className="phones">
      <div className="phones__container">
        {androidDetails.map((item, index) => (
          <Device
            dimensions={item.dimensions}
            name={item.name}
            size={item.size}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Android;

import React, { useState } from "react";
import Device from "../content/Device";
import iphoneDetails from "../../util/iphone";

function Android() {
  return (
    <div className="phones">
      <div className="phones__container">
        {iphoneDetails.map((item, index) => (
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

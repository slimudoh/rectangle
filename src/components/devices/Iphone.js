import React, { useState } from "react";
import Device from "../content/Device";
import iphoneDetails from "../../util/iphone";

function Iphone() {
  return (
    <div className="phones">
      <div className="phones__container">
        {iphoneDetails.map((item, index) => (
          <Device
            dimensions={item.dimensions}
            colors={item.colors}
            name={item.name}
            size={item.size}
            views={item.views}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Iphone;

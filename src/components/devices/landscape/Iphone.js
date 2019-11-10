import React from "react";
import Device from "../../content/Device";
import iphoneDetails from "../../../util/portrait/iphone";

function Iphone(props) {
  return (
    <div className="phones">
      <div className="phones__container">
        {iphoneDetails.map((item, index) => (
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

export default Iphone;

import React from "react";

function Device(props) {
  return (
    <div className="device">
      <div className="device__phone">
        <div>
          <img
            src={require("../../assets/devices/iphone/iphone5s.png")}
            alt={props.alt}
          />
        </div>
      </div>
      <div className="device__details">
        <div>hhh</div>
      </div>
    </div>
  );
}

export default Device;

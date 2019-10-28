import React, { useState, useRef } from "react";

function Device(props) {
  const [deviceColor, setDeviceColor] = useState("#000");
  const phoneRef = useRef(null);
  const screenRef = useRef(null);

  const newColor = event => {
    setDeviceColor(event.target.value);
  };

  return (
    <div className="device">
      <div className="device__phone">
        <div
          className="device__phone--device"
          ref={phoneRef}
          style={{
            width: props.dimensions.deviceWidth,
            height: props.dimensions.deviceHeight,
            backgroundColor: deviceColor
          }}
        >
          <div
            className="device__phone--screen"
            ref={screenRef}
            style={{
              width: props.dimensions.screenWidth,
              height: props.dimensions.screenHeight
            }}
          >
            <iframe
              title="myDevice"
              src="https://hr360-dev.rovedana.com"
              style={{
                width: props.dimensions.screenWidth,
                height: props.dimensions.screenHeight
              }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Device;

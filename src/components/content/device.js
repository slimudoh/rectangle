import React, { useState } from "react";

function Device(props) {
  const [deviceColor, setDeviceColor] = useState("#000");

  return (
    <div className="device">
      <div className="device__phone">
        <div
          className="device__phone--device"
          style={{
            width: props.dimensions.deviceWidth,
            height: props.dimensions.deviceHeight,
            backgroundColor: deviceColor
          }}
        >
          <div
            className="device__phone--screen"
            style={{
              width: props.dimensions.screenWidth,
              height: props.dimensions.screenHeight
            }}
          >
            <iframe
              src="https://hr360-dev.rovedana.com"
              style={{
                width: props.dimensions.screenWidth,
                height: props.dimensions.screenHeight
              }}
            ></iframe>
          </div>
        </div>
        <div className="device__phone--dropdown">
          <div className="device__phone--dropdown-view">
            <select>
              {props.views.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="device__phone--dropdown-colors">
            <select>
              {props.colors.map((item, index) => (
                <option key={index} value={item.color}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="device__details">
        <div>hhh</div>
      </div>
    </div>
  );
}

export default Device;

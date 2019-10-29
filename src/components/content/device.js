import React from "react";

function Device(props) {
  return (
    <div className="device">
      <div className="device__phone">
        <div
          className="device__phone--device"
          style={{
            width: props.dimensions.deviceWidth,
            height: props.dimensions.deviceHeight
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
              title="myDevice"
              src="http://localhost:8080/overview"
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

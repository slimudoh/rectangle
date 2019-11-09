import React, { useRef } from "react";

function Device(props) {
  const iframeElement = useRef(null);

  const frameOnLoad = () => {
    // console.log(iframeElement.current);
    // console.log("hello");
  };

  // console.log(props.url);

  return (
    <div
      className="device"
      style={{
        width: props.dimensions.screenWidth,
        height: props.dimensions.screenHeight
      }}
    >
      <div className="device__info">
        <div className="device__info--name">{props.name}</div>
        <div className="device__info--dimension">{props.size}</div>
      </div>
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
              onLoad={frameOnLoad}
              title="myDevice"
              src={props.url}
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

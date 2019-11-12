import React, { useRef, useEffect } from "react";

function Device(props) {
  const loaderElement = useRef(null);

  useEffect(() => {
    loaderElement.current.style.display = "none";

    if (props.url) {
      loaderElement.current.style.display = "block";
    }
  });

  const frameOnLoad = () => {
    loaderElement.current.style.display = "none";
  };

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
        <div className="device__info--orientation">{props.orientation}</div>
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
            <div className="device__loader" ref={loaderElement}>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Device;

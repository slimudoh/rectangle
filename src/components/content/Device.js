import React, { useRef, useEffect } from "react";

function Device(props) {
  const loaderElement = useRef(null);

  useEffect(() => {
    loaderElement.current.style.display = "none";

    if (props.url) {
      loaderElement.current.style.display = "block";
    }
  });

  const frameOnLoad = event => {
    loaderElement.current.style.display = "none";
    const isLoaded = event.target.contentWindow.window.length;

    if (isLoaded === 0) {
      loaderElement.current.style.display = "none";
      return;
    }
  };

  return (
    <div
      className="device"
      style={{
        width: props.dimensions.screenWidth
      }}
    >
      <div className="device__info">
        <div className="device__info--name">{props.name}</div>
        <div className="device__info--orientation">{props.orientation}</div>
        <div className="device__info--dimension">{props.size}</div>
      </div>
      <div className="device__phone">
        <div className="device__phone--device">
          <div
            className="device__phone--screen"
            style={{
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
              <p>Fetching content for this frame</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Device;

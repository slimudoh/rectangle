import React, { useEffect, useState } from "react";

function Device(props) {
  const [http, setHttp] = useState(false);
  const [https, setHttps] = useState(false);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    closeLoader();

    if (props.url) {
      if (
        !props.url.trim().includes("https://") ||
        !props.url.trim().includes("http://")
      ) {
        let url = `https://${props.url.trim()}`;
        openLoader();

        setUrl(url);
      } else {
        setUrl(props.url.trim());
        openLoader();
      }
    }
  }, [props.url]);

  const closeLoader = () => {
    const loader = document.querySelectorAll(".device__loader");
    for (let index = 0; index < loader.length; index++) {
      loader[index].style.display = "none";
    }
  };

  const openLoader = () => {
    const loader = document.querySelectorAll(".device__loader");
    for (let index = 0; index < loader.length; index++) {
      loader[index].style.display = "block";
    }
  };

  const frameOnLoad = event => {
    closeLoader();
    const isLoaded = event.target.contentWindow.window.length;

    if (isLoaded === 0) {
      if (props.url.includes("http://") && http !== true) {
        let url = props.url.replace("http://", "https://");
        setUrl(url);
        setHttp(true);
      } else if (props.url.includes("https://") && https !== true) {
        let url = props.url.replace("http://", "https://");
        setUrl(url);
        setHttps(true);
      }
    }
  };

  return props.details.map((item, index) => (
    <div
      className="device"
      key={index}
      style={{
        width: item.dimensions.screenWidth
      }}
    >
      <div className="device__info">
        <div className="device__info--name">{item.name}</div>
        <div className="device__info--orientation">{item.orientation}</div>
        <div className="device__info--dimension">{item.size}</div>
      </div>
      <div className="device__phone">
        <div className="device__phone--device">
          <div
            className="device__phone--screen"
            style={{
              height: item.dimensions.screenHeight
            }}
          >
            <iframe
              onLoad={frameOnLoad}
              title="myDevice"
              src={url}
              style={{
                width: item.dimensions.screenWidth,
                height: item.dimensions.screenHeight
              }}
            ></iframe>

            <div className="device__loader">
              <div></div>
              <p>Fetching content for this frame</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
}

export default Device;

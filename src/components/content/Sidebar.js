import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Sidebar() {
  const [iphone, setIphone] = useState(true);
  const [android, setAndroid] = useState(false);
  const [windows, setWindows] = useState(false);
  const [portrait, setPortrait] = useState(true);
  const [landscape, setLandscape] = useState(false);

  const showIphone = () => {
    setIphone(true);
    setAndroid(false);
    setWindows(false);
  };

  const showAndroid = () => {
    setIphone(false);
    setAndroid(true);
    setWindows(false);
  };

  const showWindows = () => {
    setIphone(false);
    setAndroid(false);
    setWindows(true);
  };

  const showPortrait = () => {
    setPortrait(true);
    setLandscape(false);
  };

  const showLandscape = () => {
    setPortrait(false);
    setLandscape(true);
  };

  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div
          style={{
            backgroundColor: iphone === true ? "rgba(255, 255, 255, .3)" : null
          }}
        >
          <FontAwesomeIcon icon={["fab", "apple"]} />
        </div>
        <div
          style={{
            backgroundColor: android === true ? "rgba(255, 255, 255, .3)" : null
          }}
        >
          <FontAwesomeIcon icon={["fab", "android"]} />
        </div>
        <div
          style={{
            backgroundColor: windows === true ? "rgba(255, 255, 255, .3)" : null
          }}
        >
          <FontAwesomeIcon icon={["fab", "windows"]} />
        </div>
      </div>
      <div className="sidebar__rule"></div>
      <div className="sidebar__container">
        <div
          style={{
            backgroundColor:
              portrait === true ? "rgba(255, 255, 255, .3)" : null
          }}
        >
          <div className="sidebar__container--portrait"></div>
        </div>
        <div
          style={{
            backgroundColor:
              landscape === true ? "rgba(255, 255, 255, .3)" : null
          }}
        >
          <div className="sidebar__container--landscape"></div>
        </div>
      </div>
      <div className="sidebar__rule"></div>
      <div className="sidebar__container">
        <div>
          <FontAwesomeIcon icon="info-circle" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

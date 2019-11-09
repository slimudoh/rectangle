import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Sidebar() {
  const [iphone, setIphone] = useState(true);
  const [android, setAndroid] = useState(false);
  const [windows, setWindows] = useState(false);
  const [portrait, setPortrait] = useState(true);
  const [landscape, setLandscape] = useState(false);
  const [modal, setModal] = useState(false);

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

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
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
        <div onClick={openModal}>
          <FontAwesomeIcon icon="info-circle" />
        </div>
      </div>
      {modal ? (
        <div className="sidebar__about">
          <div className="sidebar__about--cover">
            <div className="sidebar__about--modal">
              <p>
                <span onClick={closeModal}>
                  <FontAwesomeIcon icon="times" />
                </span>
              </p>
              <span>ABOUT RECTANGLE</span>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean fringilla metus eu lectus dictum consequat. Integer vel
                  elit a odio convallis elementum a quis dui. Nunc sed magna
                  nunc. Mauris in enim maximus justo aliquet vulputate. Morbi
                  cursus diam a erat malesuada viverra. In ultricies
                  pellentesque dolor et tristique.
                </p>
                <span>
                  <a
                    href="https://twitter.com/slimudoh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @slimudoh
                  </a>{" "}
                  &copy;2019 Rectangle
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Sidebar;

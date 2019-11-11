import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Sidebar(props) {
  const [iphone, setIphone] = useState(true);
  const [android, setAndroid] = useState(false);
  const [windows, setWindows] = useState(false);
  const [portrait, setPortrait] = useState(true);
  const [landscape, setLandscape] = useState(false);
  const [modal, setModal] = useState(false);

  const passOrientation = val => {
    if (val === "iphone") {
      setIphone(true);
      setAndroid(false);
      setWindows(false);
    } else if (val === "android") {
      setIphone(false);
      setAndroid(true);
      setWindows(false);
    } else if (val === "windows") {
      setIphone(false);
      setAndroid(false);
      setWindows(true);
    } else if (val === "portrait") {
      setPortrait(true);
      setLandscape(false);
    } else if (val === "landscape") {
      setPortrait(false);
      setLandscape(true);
    }

    props.getOrientation(val);
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
          title="Iphone"
          style={{
            backgroundColor: iphone ? "rgba(255, 255, 255, .3)" : null
          }}
          onClick={() => passOrientation("iphone")}
        >
          <FontAwesomeIcon icon={["fab", "apple"]} />
        </div>
        <div
          title="Android"
          style={{
            backgroundColor: android ? "rgba(255, 255, 255, .3)" : null
          }}
          onClick={() => passOrientation("android")}
        >
          <FontAwesomeIcon icon={["fab", "android"]} />
        </div>
        <div
          title="Windows"
          style={{
            backgroundColor: windows ? "rgba(255, 255, 255, .3)" : null
          }}
          onClick={() => passOrientation("windows")}
        >
          <FontAwesomeIcon icon={["fab", "windows"]} />
        </div>
      </div>
      <div className="sidebar__rule"></div>
      <div className="sidebar__container">
        <div
          title="Portrait View"
          style={{
            backgroundColor: portrait ? "rgba(255, 255, 255, .3)" : null
          }}
          onClick={() => passOrientation("portrait")}
        >
          <div className="sidebar__container--portrait"></div>
        </div>
        <div
          title="Landscape view"
          style={{
            backgroundColor: landscape ? "rgba(255, 255, 255, .3)" : null
          }}
          onClick={() => passOrientation("landscape")}
        >
          <div className="sidebar__container--landscape"></div>
        </div>
      </div>
      <div className="sidebar__rule"></div>
      <div className="sidebar__container">
        <div title="About Rectangle" onClick={openModal}>
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
                <span>&copy;2019 Rectangle</span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Sidebar;

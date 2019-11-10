import React, { useState } from "react";
import Iphoneportrait from "../devices/portrait/Iphone";
import Androidportrait from "../devices/portrait/Android";
import Windowsportrait from "../devices/portrait/Windows";
import Iphonelandscape from "../devices/landscape/Iphone";
import Androidlandscape from "../devices/landscape/Android";
import Windowslandscape from "../devices/landscape/Windows";

function Container(props) {
  const [iphonePortrait, setIphonePortrait] = useState(true);
  const [androidPortrait, setAndroidPortrait] = useState(false);
  const [windowsPortrait, setWindowsPortrait] = useState(false);
  const [iphoneLandscape, setIphoneLandscape] = useState(true);
  const [androidLandscape, setAndroidLandscape] = useState(false);
  const [windowsLandscape, setWindowsLandscape] = useState(false);

  const showIphonePortrait = () => {
    setIphonePortrait(true);
    setAndroidPortrait(false);
    setWindowsPortrait(false);
    setIphoneLandscape(false);
    setAndroidLandscape(false);
    setWindowsLandscape(false);
  };

  const showAndroidPortrait = () => {
    setIphonePortrait(false);
    setAndroidPortrait(true);
    setWindowsPortrait(false);
    setIphoneLandscape(false);
    setAndroidLandscape(false);
    setWindowsLandscape(false);
  };

  const showWindowsPortrait = () => {
    setIphonePortrait(false);
    setAndroidPortrait(false);
    setWindowsPortrait(true);
    setIphoneLandscape(false);
    setAndroidLandscape(false);
    setWindowsLandscape(false);
  };

  const showIphoneLandscape = () => {
    setIphonePortrait(false);
    setAndroidPortrait(false);
    setWindowsPortrait(false);
    setIphoneLandscape(true);
    setAndroidLandscape(false);
    setWindowsLandscape(false);
  };

  const showAndroidLandscape = () => {
    setIphonePortrait(false);
    setAndroidPortrait(false);
    setWindowsPortrait(false);
    setIphoneLandscape(false);
    setAndroidLandscape(true);
    setWindowsLandscape(false);
  };

  const showWindowsLandscape = () => {
    setIphonePortrait(false);
    setAndroidPortrait(false);
    setWindowsPortrait(false);
    setIphoneLandscape(false);
    setAndroidLandscape(false);
    setWindowsLandscape(true);
  };

  return (
    <>
      <div className="container__phone">
        Sorry to disappoint you. You can only view this application on a screen
        of width not less than 1200px.
        <br />
        We are very sorry for the inconvinences.
      </div>
      <div className="container">
        <div className="container__content">
          {iphonePortrait ? <Iphoneportrait url={props.url} /> : null}
          {androidPortrait ? <Androidportrait url={props.url} /> : null}
          {windowsPortrait ? <Windowsportrait url={props.url} /> : null}
          {iphoneLandscape ? <Iphonelandscape url={props.url} /> : null}
          {androidLandscape ? <Androidlandscape url={props.url} /> : null}
          {windowsLandscape ? <Windowslandscape url={props.url} /> : null}
        </div>
      </div>
    </>
  );
}

export default Container;

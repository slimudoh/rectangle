import React, { useState } from "react";
import Iphoneportrait from "../devices/portrait/Iphone";
import Androidportrait from "../devices/portrait/Android";
import Windowsportrait from "../devices/portrait/Windows";
import Iphonelandscape from "../devices/landscape/Iphone";
import Androidlandscape from "../devices/landscape/Android";
import Windowslandscape from "../devices/landscape/Windows";

function Container() {
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
    <div className="container">
      <div className="container__content">
        {iphonePortrait ? <Iphoneportrait /> : null}
        {androidPortrait ? <Androidportrait /> : null}
        {windowsPortrait ? <Windowsportrait /> : null}
        {iphoneLandscape ? <Iphonelandscape /> : null}
        {androidLandscape ? <Androidlandscape /> : null}
        {windowsLandscape ? <Windowslandscape /> : null}
      </div>
    </div>
  );
}

export default Container;

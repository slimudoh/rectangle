import React, { useEffect, useState } from "react";
import IphonePortrait from "../devices/portrait/Iphone";
import AndroidPortrait from "../devices/portrait/Android";
import WindowsPortrait from "../devices/portrait/Windows";
import IphoneLandscape from "../devices/landscape/Iphone";
import AndroidLandscape from "../devices/landscape/Android";
import WindowsLandscape from "../devices/landscape/Windows";

function Container(props) {
  const [iphone, setIphone] = useState(true);
  const [android, setAndroid] = useState(false);
  const [windows, setWindows] = useState(false);
  const [portrait, setPortrait] = useState(true);
  const [landscape, setLandscape] = useState(false);

  useEffect(() => {
    if (props.orientation === "iphone") {
      setIphone(true);
      setAndroid(false);
      setWindows(false);
    } else if (props.orientation === "android") {
      setIphone(false);
      setAndroid(true);
      setWindows(false);
    } else if (props.orientation === "windows") {
      setIphone(false);
      setAndroid(false);
      setWindows(true);
    } else if (props.orientation === "portrait") {
      setPortrait(true);
      setLandscape(false);
    } else if (props.orientation === "landscape") {
      setPortrait(false);
      setLandscape(true);
    }
  }, [props.orientation]);

  return (
    <>
      <div className="container__phone">
        Sorry to disappoint you. You can only view this application on a screen
        of width not less than 1200px and not a tablet or handheld device. If
        you are on the mobile view of your devtool, then you have to exit to be
        able to use this application properly.
        <br />
        <br />
        We are very sorry for the inconvinences.
      </div>
      <div className="container">
        <div className="container__content">
          {iphone && portrait ? <IphonePortrait url={props.url} /> : null}
          {android && portrait ? <AndroidPortrait url={props.url} /> : null}
          {windows && portrait ? <WindowsPortrait url={props.url} /> : null}
          {iphone && landscape ? <IphoneLandscape url={props.url} /> : null}
          {android && landscape ? <AndroidLandscape url={props.url} /> : null}
          {windows && landscape ? <WindowsLandscape url={props.url} /> : null}
        </div>
      </div>
    </>
  );
}

export default Container;

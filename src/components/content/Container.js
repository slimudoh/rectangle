import React, { useEffect, useState } from "react";
import Iphoneportrait from "../devices/portrait/Iphone";
import Androidportrait from "../devices/portrait/Android";
import Windowsportrait from "../devices/portrait/Windows";
import Iphonelandscape from "../devices/landscape/Iphone";
import Androidlandscape from "../devices/landscape/Android";
import Windowslandscape from "../devices/landscape/Windows";

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
    } else if (props.orientation === "portrait") {
      setPortrait(false);
      setLandscape(true);
    }
  });

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
          {iphone && portrait ? <Iphoneportrait url={props.url} /> : null}
          {android && portrait ? <Androidportrait url={props.url} /> : null}
          {windows && portrait ? <Windowsportrait url={props.url} /> : null}
          {iphone && landscape ? <Iphonelandscape url={props.url} /> : null}
          {android && landscape ? <Androidlandscape url={props.url} /> : null}
          {windows && landscape ? <Windowslandscape url={props.url} /> : null}
        </div>
      </div>
    </>
  );
}

export default Container;

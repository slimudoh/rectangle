import React, { useState } from "react";
import Iphone from "../devices/Iphone";
import Android from "../devices/Android";
import Windows from "../devices/Windows";

function Header() {
  const [iphone, setIphone] = useState(true);
  const [android, setAndroid] = useState(false);
  const [windows, setWindows] = useState(false);

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

  return (
    <div className="container">
      <div className="container__content">
        {iphone ? <Iphone /> : null}
        {android ? <Android /> : null}
        {windows ? <Windows /> : null}3{" "}
      </div>
    </div>
  );
}

export default Header;

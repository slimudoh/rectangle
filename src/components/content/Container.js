import React from "react";
import Iphone from "../devices/Iphone";
import Android from "../devices/Android";
import Windows from "../devices/Windows";

function Header() {
  return (
    <div className="container">
      <div className="container__content">
        <Iphone />
        <Android />
        <Windows />
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import Logo from "../../assets/images/logo.png";

function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__container--logo">
          <img src={Logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Header;

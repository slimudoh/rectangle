import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">RECTANGLE</div>
      <div className="header__search">
        <form>
          <input type="text" placeholder="Enter url and hit enter" />
        </form>
      </div>
    </div>
  );
}

export default Header;

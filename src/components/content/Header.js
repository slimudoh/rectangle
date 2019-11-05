import React, { useRef } from "react";

function Header() {
  const iframeUrl = useRef("null");

  const sendUrl = () => {
    const inputValue = iframeUrl.current.value;
  };

  return (
    <div className="header">
      <div className="header__logo">RECTANGLE</div>
      <div className="header__search">
        <form>
          <input
            type="text"
            placeholder="Enter url and hit enter"
            onChange={sendUrl}
            ref={iframeUrl}
          />
        </form>
      </div>
    </div>
  );
}

export default Header;

import React, { useRef } from "react";

function Header(props) {
  const iframeUrl = useRef(null);

  const getUrl = e => {
    e.preventDefault();
    const inputValue = iframeUrl.current.value;
    props.getFormUrl("https://hr360.rovedana.com/");
  };

  return (
    <div className="header">
      <div className="header__logo">RECTANGLE</div>
      <div className="header__search">
        <form onSubmit={getUrl}>
          <input
            type="text"
            placeholder="Enter url and hit enter"
            ref={iframeUrl}
          />
        </form>
      </div>
    </div>
  );
}

export default Header;

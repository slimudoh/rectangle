import React, { useRef } from "react";

function Header(props) {
  const iframeUrl = useRef(null);

  const getUrl = e => {
    e.preventDefault();
    let inputValue = iframeUrl.current;
    let url = inputValue.value.trim();

    props.getFormUrl(url);
  };

  return (
    <div className="header">
      <div className="header__logo">RECT-ANGLE</div>
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

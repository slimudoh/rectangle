import React, { useState, useRef } from "react";

function Header(props) {
  const [err, setErr] = useState(false);
  const iframeUrl = useRef(null);

  const getUrl = e => {
    e.preventDefault();
    const inputValue = iframeUrl.current.value;
    const securedHttp = "https://";
    const insecuredHttp = "http://";
    if (
      inputValue.trim().includes(securedHttp) ||
      inputValue.trim().includes(insecuredHttp)
    ) {
      props.getFormUrl(inputValue);
      return;
    }

    setErr(true);
  };

  const closeErr = () => {
    setErr(false);
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
      {err ? (
        <div className="header__error">
          <div className="header__error--cover">
            <div className="header__error--modal">
              <span>Alert</span>
              <p>
                Url link must begin with http or https. It must have the full
                path to access the application.
              </p>
              <div onClick={closeErr}>OK</div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Header;

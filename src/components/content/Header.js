import React, { useRef } from "react";

function Header(props) {
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

    alert("Link must have http or https");
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

import React, { useState, useRef } from "react";

function Header(props) {
  const [modal, setModal] = useState(false);
  const [confrimText, setConfirmText] = useState("");
  const iframeUrl = useRef(null);

  const getUrl = e => {
    e.preventDefault();
    let inputValue = iframeUrl.current;
    let url = inputValue.value.trim();

    if (!inputValue.value.includes("http")) {
      url = "https://" + url;
    }

    setConfirmText(url);
    setModal(true);
  };

  const proceed = () => {
    let inputValue = iframeUrl.current;
    props.getFormUrl(confrimText);
    setModal(false);
    inputValue.value = "";
  };

  const close = () => {
    setModal(false);
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
      {modal ? (
        <div className="header__error">
          <div className="header__error--cover">
            <div className="header__error--modal">
              <h3>Alert</h3>
              <p>
                You are about to access the link <span>{confrimText}</span>{" "}
                across multiple frames which might take a while to load. click
                on proceed or cancel the operation.
              </p>

              <span>
                Please note that displaying websites that sends an
                "X-Frame-Options: SAMEORIGIN" response header will not work.
                This option prevents the containers from displaying the website.
                This tool is for testing purposes and for only applications you
                know about.
              </span>
              <div>
                <div onClick={proceed}>Procees</div>
                <div onClick={close}>Cancel</div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Header;

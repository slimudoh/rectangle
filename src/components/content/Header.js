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
      url = "http://" + url;
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
              <span>Alert</span>
              <p>
                You are about to access the link <span>{confrimText}</span>{" "}
                across multiple frames. click on proceed or cancel the
                operation.
              </p>
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

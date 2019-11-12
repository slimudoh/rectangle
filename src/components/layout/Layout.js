import React, { useState } from "react";
import Header from "./../content/Header";
import Sidebar from "./../content/Sidebar";
import Container from "./../content/Container";

function Layout() {
  const [url, setUrl] = useState(null);
  const [orientation, setOrientation] = useState(null);

  const formUrl = val => {
    setUrl(val);
  };

  const deviceOrientation = val => {
    setOrientation(val);
  };

  return (
    <div>
      <Header getFormUrl={formUrl} />
      <Container url={url} orientation={orientation} />
      <Sidebar getOrientation={deviceOrientation} />
    </div>
  );
}

export default Layout;

import React, { useState } from "react";
import Header from "./../content/Header";
import Sidebar from "./../content/Sidebar";
import Container from "./../content/Container";

function Layout() {
  const [url, setUrl] = useState(null);
  const formUrl = val => {
    setUrl(val);
  };

  return (
    <div>
      <Header getFormUrl={formUrl} />
      <Container url={url} />
      <Sidebar />
    </div>
  );
}

export default Layout;
